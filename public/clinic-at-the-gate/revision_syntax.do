/*==============================================================================
  Additional file 3
  The clinic at the gate — revision syntax
  BMC Health Services Research

  PART A  Archived specification. A Stata 18 rebuild of the four CHARLS waves
          returned 11,726 people and 46,904 person-years. The linear probability
          coefficient rounded to the archived 0.034, and the outpatient-user
          coefficient on primary care rounded to -1.421. The full-sample Tobit
          coefficients did not match, so Tables 4 and 7 keep the archived cells.
          Do not paste a fresh Tobit run over those tables.

  PART B  Checks that were estimated on that rebuild and are reported in
          Table 8 of the revised manuscript. The joint outpatient-minus-inpatient
          bootstrap was run and is not reported: its replicate mean was about
          -0.232 against an observed difference of about -0.147.
          Clear xtset before the cluster bootstrap, or Stata stops on
          repeated time values. Part C estimates the random-effects Tobit.
          Multiple imputation, inverse-probability weighting and a 2016
          event study were not run.

  Expected data: $out/panel_balanced_D2.dta
  Expected variables:
    ID year resident_ins X_narrow primary_hosp
    outpatient inpatient
    ln_cost_outpatient ln_cost_inpatient ln_cost_total
    cost_outpatient cost_inpatient
    flag_imp_cost_op flag_imp_cost_ip
    age female edu hukou health chronic_n
    sample_B ins_employee ins_no
==============================================================================*/

version 16
clear all
set more off

* ---- edit this path. It must contain processed/rebuild/panel_balanced_D2.dta ----
global root "EDIT_THIS_PATH"
global out  "$root/processed/rebuild"
global res  "$root/results_revision"
capture mkdir "$res"

use "$out/panel_balanced_D2.dta", clear
capture drop id_num
encode ID, gen(id_num)
xtset id_num year
capture drop year_2013 year_2015 year_2018
gen year_2013 = year == 2013
gen year_2015 = year == 2015
gen year_2018 = year == 2018
global CTRL "age female edu hukou year_2013 year_2015 year_2018"

*==============================================================================
* PART A — archived specification (do not add new numbers to the paper
*           until this run has been reconciled with Tables 4–7)
*==============================================================================

* A1. Primary-care linear probability and Probit AME, full sample
reg primary_hosp resident_ins $CTRL, vce(cluster id_num)
probit primary_hosp resident_ins $CTRL, vce(cluster id_num)
margins, dydx(resident_ins)

* A2. Full-sample Tobit, outpatient (latent scale; not an indirect effect)
tobit ln_cost_outpatient resident_ins $CTRL, ll(0) vce(cluster id_num)
tobit ln_cost_outpatient resident_ins primary_hosp $CTRL, ll(0) vce(cluster id_num)

* A3. User-sample OLS product, outpatient, percentile cluster bootstrap
preserve
keep if outpatient == 1
reg ln_cost_outpatient resident_ins $CTRL, vce(cluster id_num)
reg primary_hosp resident_ins $CTRL, vce(cluster id_num)
reg ln_cost_outpatient resident_ins primary_hosp $CTRL, vce(cluster id_num)
capture program drop boot_ind_op
program define boot_ind_op, rclass
    reg primary_hosp resident_ins $CTRL
    scalar a = _b[resident_ins]
    reg ln_cost_outpatient resident_ins primary_hosp $CTRL
    scalar b = _b[primary_hosp]
    return scalar ind = a * b
end
* Archived tables keep the 300-replication interval. The 1,000-replication
* percentile interval is the one reported beside it in the text and in Table 8.
* xtset must be cleared first.
xtset, clear
bootstrap r(ind), reps(1000) seed(20261020) cluster(id_num) nodots ///
    saving("$res/boot_op.dta", replace): boot_ind_op
estat bootstrap, percentile
restore

*==============================================================================
* PART B — estimated on the rebuild and reported in Table 8
*          Keep xtset for the fixed-effects block. Clear it only before
*          the cluster bootstrap.
*==============================================================================

* B1. Imputation share by wave (requires the flags created in 05_merge_balanced.do)
preserve
keep if outpatient == 1
tab year flag_imp_cost_op, row
restore
preserve
keep if inpatient == 1
tab year flag_imp_cost_ip, row
restore

* B2. Complete-case user-sample OLS (drop imputed user amounts)
preserve
keep if outpatient == 1 & flag_imp_cost_op == 0
reg ln_cost_outpatient resident_ins $CTRL, vce(cluster id_num)
reg primary_hosp resident_ins $CTRL, vce(cluster id_num)
reg ln_cost_outpatient resident_ins primary_hosp $CTRL, vce(cluster id_num)
restore

* B3. Individual fixed effects for the linear equations (xtreg, fe).
*     Time-invariant sex drops out. Education and hukou may be nearly fixed.
xtreg primary_hosp resident_ins age year_2013 year_2015 year_2018, fe vce(cluster id_num)
preserve
keep if outpatient == 1
xtreg ln_cost_outpatient resident_ins primary_hosp age year_2013 year_2015 year_2018, fe vce(cluster id_num)
xtreg primary_hosp resident_ins age year_2013 year_2015 year_2018, fe vce(cluster id_num)
restore

* B4. Mundlak / correlated random effects: add individual means of
*     time-varying covariates. Requires the unbalanced or balanced panel.
bysort id_num: egen age_bar = mean(age)
bysort id_num: egen ins_bar = mean(resident_ins)
reg primary_hosp resident_ins age ins_bar age_bar $CTRL, vce(cluster id_num)

* B5. Variance-inflation factors on the main linear probability model
reg primary_hosp resident_ins $CTRL
estat vif

* B6. Fit statistics
reg primary_hosp resident_ins $CTRL, vce(cluster id_num)
tobit ln_cost_outpatient resident_ins $CTRL, ll(0) vce(cluster id_num)
probit primary_hosp resident_ins $CTRL, vce(cluster id_num)

* B7. Skewness, raw versus ln(expenditure+1), outpatient users
preserve
keep if outpatient == 1
summarize cost_outpatient ln_cost_outpatient, detail
restore

* B8. Winsorised sensitivity (1st/99th percentile within outpatient users)
*     NOT the main specification. The paper retains extremes.
preserve
keep if outpatient == 1
summarize cost_outpatient, detail
local lo = r(p1)
local hi = r(p99)
gen cost_w = cost_outpatient
replace cost_w = `lo' if cost_w < `lo'
replace cost_w = `hi' if cost_w > `hi' & !missing(cost_w)
gen ln_w = ln(cost_w + 1)
reg ln_w resident_ins primary_hosp $CTRL, vce(cluster id_num)
restore

* B9. Joint bootstrap of the outpatient-minus-inpatient product.
*     This block was run. Do not report the percentile interval: the replicate
*     mean did not match the observed difference. Clear xtset first.
xtset, clear
capture program drop boot_diff
program define boot_diff, rclass
    reg primary_hosp resident_ins $CTRL if outpatient == 1
    scalar a_op = _b[resident_ins]
    reg ln_cost_outpatient resident_ins primary_hosp $CTRL if outpatient == 1
    scalar b_op = _b[primary_hosp]
    reg primary_hosp resident_ins $CTRL if inpatient == 1
    scalar a_ip = _b[resident_ins]
    reg ln_cost_inpatient resident_ins primary_hosp $CTRL if inpatient == 1
    scalar b_ip = _b[primary_hosp]
    return scalar ind_op = a_op * b_op
    return scalar ind_ip = a_ip * b_ip
    return scalar diff = (a_op * b_op) - (a_ip * b_ip)
end
bootstrap r(diff), reps(1000) seed(20261020) cluster(id_num): boot_diff
estat bootstrap, percentile

* B10. Attrition comparison requires the pre-balance file (all person-years
*      before "keep if nwave==4"), which is not the D2 analysis file.
*      On that pre-balance file, a sketch is:
*      * gen balanced = (nwave==4)
*      * table balanced, contents(mean age mean female mean resident_ins mean health)
*      Do not run this sketch on panel_balanced_D2.dta: everyone in that file
*      is already balanced, so the contrast is undefined.

di as result "Part B is the syntax behind Table 8."
di as result "Do not replace Tables 4 and 7 with a Tobit run from this file."
di as result "Do not report the joint product-difference bootstrap."

*==============================================================================
* PART C  Random-effects Tobit on the rebuild. Not a replacement for Tables 4–7.
*         xtset is required here. The standard errors are from the
*         random-effects model, not clustered by person.
*         Person means give the correlated random-effects (Mundlak) form.
*         The coefficient on the time-varying covariate is the within-person
*         coefficient. Clear xtset again before any later cluster bootstrap.
*==============================================================================
xtset id_num year
xttobit ln_cost_outpatient resident_ins $CTRL, ll(0) nolog
xttobit ln_cost_outpatient resident_ins primary_hosp $CTRL, ll(0) nolog
xttobit ln_cost_inpatient resident_ins $CTRL, ll(0) nolog
xttobit ln_cost_inpatient resident_ins primary_hosp $CTRL, ll(0) nolog
xttobit ln_cost_total resident_ins $CTRL, ll(0) nolog
xttobit ln_cost_total resident_ins primary_hosp $CTRL, ll(0) nolog

capture drop ins_bar ph_bar
bysort id_num: egen ins_bar = mean(resident_ins)
bysort id_num: egen ph_bar = mean(primary_hosp)
xttobit ln_cost_outpatient resident_ins ins_bar $CTRL, ll(0) nolog
xttobit ln_cost_outpatient resident_ins primary_hosp ins_bar ph_bar $CTRL, ll(0) nolog
xttobit ln_cost_inpatient resident_ins ins_bar $CTRL, ll(0) nolog
xttobit ln_cost_inpatient resident_ins primary_hosp ins_bar ph_bar $CTRL, ll(0) nolog
xttobit ln_cost_total resident_ins ins_bar $CTRL, ll(0) nolog
xttobit ln_cost_total resident_ins primary_hosp ins_bar ph_bar $CTRL, ll(0) nolog
xtset, clear
