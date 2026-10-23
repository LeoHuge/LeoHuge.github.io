# The clinic at the gate — analysis syntax

Stata syntax for the revision of “The clinic at the gate” (CHARLS 2011–2018), prepared for BMC Health Services Research.

`revision_syntax.do` is the syntax. It does not contain CHARLS microdata. The microdata are available from the official CHARLS repository after registration: https://charls.pku.edu.cn/. The authors cannot redistribute those data.

Before running the file, set `global root` to the folder that contains `processed/rebuild/panel_balanced_D2.dta`.

Tables 4–7 of the manuscript keep the coefficients from the original submission. A Stata Tobit left-censored at zero, on the rebuilt panel, does not reproduce those Tobit cells. Part C is a random-effects Tobit estimated as a robustness check. It does not replace Tables 4–7.

Do not report the joint bootstrap of the outpatient product minus the inpatient product. The mean of the replicates does not match the observed difference.

This folder is meant to sit at `public/clinic-at-the-gate/` in https://github.com/LeoHuge/LeoHuge.github.io so that the existing homepage is left unchanged.
