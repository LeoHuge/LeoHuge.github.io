// 个人主页的全部内容都在这个文件里。
// 把姓名、单位、邮箱、履历、论文和链接换成你自己的即可。
// 照片：把图片放到 public/，然后把 portrait 改成 "/你的照片.jpg"。

export const profile = {
  monogram: "WX",
  name: { zh: "许文虎", en: "Huxley Xu" },
  role: { zh: "博士研究生 · 人口学", en: "PhD Student · Demography" },
  org: { zh: "北京大学人口研究所", en: "Institute of Population Research, Peking University" },
  field: { zh: "童年逆境与老龄健康 · 互助养老与时间利用 · 分级诊疗与经济负担 · 人口政策与农村经济", en: "Childhood adversity and later-life health · Mutual aid and time use · Hierarchical medical care and economic burden · Population policy and the rural economy" },
  city: "BEIJING, CN",
  email: "2401111475@stu.pku.edu.cn",
  scholar: "",
  orcid: "",
  github: "https://github.com/LeoHuge",
  site: "https://leohuge.github.io/",
  portrait: "/portrait.jpg",
  portraitMark: { zh: "许文虎", en: "Huxley Xu" },
  vertical: "CHILDHOOD · MUTUAL AID · TIERED CARE · RURAL ECONOMY",
  concern: { zh: "博士研究生 · 人口学", en: "PhD student · Demography" },
  headline: {
    zh: ["老龄健康", "与社会政策"],
    en: ["Later-life health", "and social policy"],
  },
  lede: {
    zh: "研究领域为老龄健康、卫生经济、互助养老与农村人口。",
    en: "Research fields: later-life health, health economics, mutual-aid eldercare, and rural population studies.",
  },
  glance: {
    zh: ["童年逆境与老龄健康", "互助养老与时间利用", "分级诊疗与经济负担", "人口政策与农村经济"],
    en: ["Childhood adversity and later-life health", "Mutual aid and time use", "Hierarchical medical care and economic burden", "Population policy and the rural economy"],
  },
  skills: [
    {
      label: { zh: "数据库", en: "Surveys" },
      text: {
        zh: "熟悉 CHARLS、CFPS；了解 CLHLS、CHFS、GBD。",
        en: "Familiar with CHARLS and CFPS; acquainted with CLHLS, CHFS, and GBD.",
      },
    },
    {
      label: { zh: "研究方法", en: "Methods" },
      text: {
        zh: "调查微数据分析，结合问卷、访谈、平板面访与录音编码。",
        en: "Survey microdata analysis, with questionnaires, interviews, tablet-based interviews, and audio coding.",
      },
    },
    {
      label: { zh: "分析软件", en: "Software" },
      text: {
        zh: "Stata、SPSS。",
        en: "Stata and SPSS.",
      },
    },
  ],
  footerNote: { zh: "北京大学人口研究所", en: "Institute of Population Research, Peking University" },
};

export const ui = {
  nav: [
    { to: "/", zh: "主页", en: "Home" },
    { to: "/research", zh: "研究", en: "Research" },
    { to: "/tools", zh: "工具", en: "Tools" },
    { to: "/teaching", zh: "教学", en: "Teaching" },
    { to: "/blog", zh: "博客", en: "Blog" },
  ],
  contact: { zh: "联系我", en: "Contact" },
  skip: { zh: "跳转到正文", en: "Skip to content" },
  website: "ACADEMIC WEBSITE",
  researchCta: { zh: "研究工作", en: "Research" },
  scholar: "Google Scholar",
  glanceLabel: { zh: "研究方向", en: "Research" },
  newsTitle: { zh: "近期动态", en: "Updates" },
  newsKicker: "PAPERS · TEACHING · FIELDWORK",
  pathTitle: { zh: "学历与任职", en: "Education and posts" },
  pathKicker: { zh: "履历", en: "Appointments" },
  grantsTitle: { zh: "主持课题", en: "Projects led" },
  grantsKicker: { zh: "第一负责人", en: "As PI" },
  grantClosed: { zh: "已结题", en: "Closed" },
  serviceTitle: { zh: "学会与审稿", en: "Society and reviewing" },
  serviceKicker: { zh: "目前", en: "Current" },
  current: { zh: "在读", en: "Now" },
  connect: { zh: "联系", en: "Contact" },
  connectTitle: {
    zh: ["欢迎来信。", "研究、论文或教学均可。"],
    en: ["Please write.", "Research, papers, or teaching are welcome."],
  },
  connectLede: {
    zh: "来信请使用以下邮箱。",
    en: "Please use the address below.",
  },
  qrNote: { zh: "微信扫一扫打开主页", en: "Scan to open the homepage" },
  readPapers: { zh: "发表成果", en: "Publications" },
  allYears: { zh: "全部", en: "All" },
  back: { zh: "返回", en: "Back" },
  notFound: { zh: "页面不存在。", en: "Page not found." },
  pages: {
    home: { zh: "主页", en: "Home" },
    research: { zh: "研究", en: "Research" },
    tools: { zh: "工具", en: "Tools" },
    teaching: { zh: "教学", en: "Teaching" },
    blog: { zh: "博客", en: "Blog" },
  },
};

export const newsColumns = [
  {
    title: { zh: "论文成果", en: "Papers" },
    items: [
      {
        date: "2026",
        title: { zh: "分级诊疗的“负担悖论”及其破解", en: "The “Burden Paradox” of Hierarchical Diagnosis and Treatment and How to Address It" },
        text: { zh: "许文虎、由佳民、朱俊谕、陈功，《辽宁大学学报（哲学社会科学版）》，CSSCI、AMI，第一作者。", en: "Xu, You, Zhu, and Chen. Journal of Liaoning University. CSSCI, AMI. First author." },
        href: "/research",
      },
      {
        date: "2026",
        title: { zh: "日本“极限村落”治理实践与启示", en: "Japan’s “Marginal Villages”: Governance Practices and Implications" },
        text: { zh: "许文虎、陈功，《世界农业》，CSSCI、AMI，第一作者。", en: "Xu and Chen. World Agriculture. CSSCI, AMI. First author." },
        href: "/research",
      },
      {
        date: "2026",
        title: { zh: "从覆盖到诊疗：基本医疗保险如何塑造基层就医体验", en: "From coverage to care: how basic medical insurance shapes patients’ experiences of primary care in China" },
        text: { zh: "Chufeng Xu、Wenhu Xu、Jiamin You、Gong Chen、Shuhan Miao，Frontiers in Epidemiology，2026，6: 1785586。共同第一作者、通讯作者。", en: "Xu, Xu, You, Chen, and Miao. Frontiers in Epidemiology, 2026, 6:1785586. Co-first and corresponding author." },
        href: "/research",
      },
      {
        date: "2025",
        title: { zh: "中国中老年人全因死亡的社会人口学与健康相关风险因素", en: "A Cohort of Sociodemographic and Health-Related Risk Factors for All-Cause Mortality in Middle-Aged and Older Adults in China" },
        text: { zh: "Wenhu Xu、Hang Zhu、Yutian Chen、Qianyi Zhang、Zhinan Liu、Gong Chen，Healthcare，2025，13(17): 2104，第一作者。", en: "Xu, Zhu, Chen, Zhang, Liu, and Chen. Healthcare, 2025, 13(17), 2104. First author." },
        href: "/research",
      },
      {
        date: "2025.01",
        title: { zh: "以渐进式延迟退休释放人才红利", en: "Releasing the Talent Dividend through Gradual Delayed Retirement" },
        text: { zh: "陈功、许文虎、陈昱天，《中国人口报》，2025年1月23日，第二作者。", en: "Chen, Xu, and Chen. China Population News, 23 January 2025. Second author." },
        href: "https://jkb.com.cn/rkb/lilun/2025/0123/500568.html",
      },
      {
        date: "2025.08",
        title: { zh: "人工智能驱动“时间储蓄”创新", en: "AI-Driven Innovation in “Time Savings”" },
        text: { zh: "陈功、许文虎、陈昱天，《中国人口报》，2025年8月13日，第二作者。", en: "Chen, Xu, and Chen. China Population News, 13 August 2025. Second author." },
        href: "https://jkb.com.cn/rkb/lilun/2025/0813/504991.html",
      },
    ],
  },
  {
    title: { zh: "教学参与", en: "Teaching" },
    items: [
      {
        date: "2026.10",
        title: { zh: "AI for Community：基于社工研究生实践课程的数智化社区治理模式探索", en: "AI for Community: Exploring a Digital-Intelligent Community Governance Model Based on a Social Work Graduate Practice Course" },
        text: { zh: "陈功、李玥、许文虎、陈昱天。中国专业学位案例中心2024年度主题案例，已结项。", en: "Chen, Li, Xu, and Chen. 2024 theme case of the China Professional Degree Case Center. Closed." },
        href: "/teaching",
      },
      {
        date: "2025.11",
        title: { zh: "AI for Community 2.0：人物画像驱动的社会工作精准化劳动教育转型", en: "AI for Community 2.0: Persona-Driven Transformation of Precision Labor Education in Social Work" },
        text: { zh: "陈功、许文虎、张宇庭、蒋清华。北京大学第八届创新教学论文，一等奖。", en: "Chen, Xu, Zhang, and Jiang. Eighth PKU innovative teaching paper. First prize." },
        href: "/teaching",
      },
      {
        date: "2024.12",
        title: { zh: "AI for Community：基于社工研究生实践课程的数智化社区治理模式探索", en: "AI for Community: Exploring a Digital-Intelligent Community Governance Model Based on a Social Work Graduate Practice Course" },
        text: { zh: "陈功、许文虎、陈昱天、李玥。北京大学第七届创新教学论文，一等奖。", en: "Chen, Xu, Chen, and Li. Seventh PKU innovative teaching paper. First prize." },
        href: "/teaching",
      },
      {
        date: "2024.12",
        title: { zh: "基于人本视角的社工实践教学方案：交互式系统在多元社会治理中的应用", en: "A Human-Centered Scheme for Social Work Practice Teaching: Interactive Systems in Plural Social Governance" },
        text: { zh: "刘尚君、陈功、许文虎、缪姝涵。北京大学第七届创新教学论文，二等奖。", en: "Liu, Chen, Xu, and Miao. Seventh PKU innovative teaching paper. Second prize." },
        href: "/teaching",
      },
    ],
  },
  {
    title: { zh: "调研实践", en: "Fieldwork" },
    items: [
      {
        date: "2026.07",
        title: { zh: "武汉时间银行（第四次）", en: "Wuhan time bank, fourth round" },
        text: {
          zh: "7月13日至16日再去武汉，补服务接受者这一侧。百步亭、塔子湖街道、金桥社区社会工作服务站、劳动街道惠中社区。",
          en: "Returned to Wuhan from 13 to 16 July to add people who receive services. Baibuting, Tazihu subdistrict, the Jinqiao community social-work station, and Huizhong community on Laodong subdistrict.",
        },
        href: "",
      },
      {
        date: "2026.06",
        title: { zh: "长沙时间银行（第三次）", en: "Changsha time bank, third round" },
        text: {
          zh: "6月15日至7月13日再去长沙，把样本做大。华月湖、云溪湾、仰天湖、碧沙湖、滨汇，以及新绿、坤元两家社工机构。",
          en: "Returned to Changsha from 15 June to 13 July and enlarged the sample. Huayuehu, Yunxiwan, Yangtianhu, Bishahu, Binhui, and the Xinlü and Kunyuan social-work agencies.",
        },
        href: "",
      },
      {
        date: "2026.01",
        title: { zh: "武汉时间银行（第二次）", en: "Wuhan time bank, second round" },
        text: {
          zh: "1月12日至19日，人口所与武汉理工大学在春和、百步亭做访谈和问卷。我负责行前培训，讲问卷、访谈和录音编码，并把长沙第一次碰到的情况带进去。",
          en: "From 12 to 19 January, with Wuhan University of Technology, at Chunhe and Baibuting. I ran the briefing on questionnaires, interviews, and recording codes, and brought in what the first Changsha round had shown.",
        },
        href: "",
      },
      {
        date: "2026.01",
        title: { zh: "长沙时间银行（第一次）", en: "Changsha time bank, first round" },
        text: {
          zh: "1月12日至19日。兑换一年里没几次，人还在继续做志愿。",
          en: "12 to 19 January. Redemption is rare, and people still keep volunteering.",
        },
        href: "",
      },
      {
        date: "2025.01",
        title: { zh: "广州心智障碍者就业调研", en: "Employment fieldwork in Guangzhou" },
        text: {
          zh: "带队做广州市心智障碍残疾群体就业专项调研，行前训练沟通、问卷调适和平板面访。范围在越秀区的康园工疗站、就业服务中心和特教学校。",
          en: "Led the Guangzhou survey on employment of people with intellectual disabilities, and trained the team on interviews, questionnaire adjustments, and tablet-based visits. The sites were Kangyuan stations, employment services, and special schools in Yuexiu.",
        },
        href: "http://tw.hnwu.edu.cn/2025_02/14_13/content-73194.html",
      },
      {
        date: "2025.07",
        title: { zh: "解码八闽暑期实践", en: "Fujian summer fieldwork" },
        text: {
          zh: "北京大学解码八闽暑期社会实践队领队。",
          en: "Led Peking University’s summer fieldwork team in Fujian.",
        },
        href: "",
      },
      {
        date: "2024.07",
        title: { zh: "山东新质生产力专项调研", en: "Shandong fieldwork on new productive forces" },
        text: {
          zh: "北京大学新质生产力探知山东专项调研团领队。",
          en: "Led Peking University’s Shandong fieldwork team on new productive forces.",
        },
        href: "",
      },
      {
        date: "2024",
        title: { zh: "山东六市养老金融与时间银行", en: "Pension finance and time banks across Shandong" },
        text: {
          zh: "带队用六天走了德州、济宁、曲阜、潍坊、东营、日照，看养老金融，也看了日照玉兰社区的时间银行。调研报告在励志计划汇报中被评为优秀。",
          en: "Led a six-day trip through Dezhou, Jining, Qufu, Weifang, Dongying, and Rizhao, on pension finance and the time bank in Rizhao’s Yulan community. The report was rated excellent in the Lizhi Plan review.",
        },
        href: "https://www.infzm.com/contents/282768",
      },
      {
        date: "2023.08",
        title: { zh: "福鼎养老服务与时间银行", en: "Eldercare and time banks in Fuding" },
        text: {
          zh: "人口所暑期实践团赴福鼎，走访互助养老时间银行和社区居家养老。陈功老师指导。我负责摄影。",
          en: "An IPR summer team went to Fuding for mutual-aid time banks and community eldercare, advised by Professor Chen Gong. I took the photographs.",
        },
        href: "https://news.pku.edu.cn/xwzh/43cb786fc0304d86a2dec9fbb8ff8dd0.htm",
      },
      {
        date: "2022.08",
        title: { zh: "福鼎乡村振兴基层调研", en: "Rural revitalization fieldwork in Fuding" },
        text: {
          zh: "人口所福鼎基层调研实践团领队，看当地养老、茶和石材产业，并参与撰写了报道。",
          en: "Led IPR’s Fuding fieldwork on eldercare, tea, and the stone industry, and co-wrote the report.",
        },
        href: "https://news.bjd.com.cn/2022/08/16/10134878.shtml",
      },
    ],
  },
  {
    title: { zh: "会务组织", en: "Organizing" },
    items: [
      {
        date: "2026.06",
        title: { zh: "第九届京港澳台人口老龄化夏令营", en: "Ninth Beijing–Hong Kong–Macao–Taiwan aging camp" },
        text: {
          zh: "6月28日至7月9日，燕园和雄安两地。主题是智慧赋能老龄社会治理与人口高质量发展。33位专家讲座，61名营员线下，还新开了“AI for Community”工作坊。中青网发了报道。",
          en: "28 June to 9 July, in Yan Yuan and Xiong’an, on intelligent tools for governing an aging society and high-quality population development. 33 expert lectures, 61 campers on site, and a new AI for Community workshop. Youth.cn carried the write-up.",
        },
        href: "https://txs.youth.cn/xw/202607/t20260718_16771063.htm",
      },
      {
        date: "2026.07",
        title: { zh: "第十一届老龄健康博士生论坛", en: "Eleventh doctoral forum on health in later life" },
        text: {
          zh: "7月7日在雄安新区开幕，这是论坛第一次放到雄安。主题是 AI 赋能数字化养老与银发经济。",
          en: "Opened in Xiong’an on 7 July, the first time the forum left the campus. The theme was AI, digital eldercare, and the silver economy.",
        },
        href: "https://pkunews.pku.edu.cn/info/7921/2748661.htm",
      },
      {
        date: "2026.04",
        title: { zh: "第二届 AI+社会治理青年学术论坛", en: "Second youth forum on AI and social governance" },
        text: {
          zh: "4月24日至25日。主题是智治未来。四个分论坛分别谈法理伦理、治理模式、应用场景和社会结构。",
          en: "24–25 April. The theme was intelligent governance. Four sessions: ethics and law, models of governance, applications, and social structure.",
        },
        href: "https://ipr.pku.edu.cn/xwzx/a3a903903032471985e663bfa28de1a0.htm",
      },
      {
        date: "2025.06",
        title: { zh: "第八届京港澳台人口老龄化夏令营", en: "Eighth Beijing–Hong Kong–Macao–Taiwan aging camp" },
        text: {
          zh: "6月30日至7月12日。主题是以积极老龄化促进人口长期均衡发展。25位专家，85名营员线下。中青网发了报道。",
          en: "30 June to 12 July, on active aging and balanced population development. 25 experts and 85 campers on site. Youth.cn carried the write-up.",
        },
        href: "https://txs.youth.cn/xw/202507/t20250722_16131089.htm",
      },
      {
        date: "2025.07",
        title: { zh: "第十届老龄健康博士生论坛", en: "Tenth doctoral forum on health in later life" },
        text: {
          zh: "7月2日至3日。主题是激发银发经济潜能。投稿近百篇，24位同学汇报，线上观看超过5000人。",
          en: "2–3 July, on the silver economy. Nearly 100 submissions, 24 student papers, and more than 5,000 people watching online.",
        },
        href: "https://ipr.pku.edu.cn/xwzx/50131ipr390462.htm",
      },
      {
        date: "2025.04",
        title: { zh: "首届 AI+社会治理青年学术论坛", en: "First youth forum on AI and social governance" },
        text: {
          zh: "4月19日在新燕园。投稿100余篇，23位青年学者汇报。吕世明致开幕辞。",
          en: "19 April at New Yan Yuan. More than 100 submissions, 23 young scholars presenting. Lü Shiming gave the opening address.",
        },
        href: "https://news.pku.edu.cn/xwzh/86a461c221794892a602b843213b4c77.htm",
      },
      {
        date: "2024.07",
        title: { zh: "第七届京港澳台人口老龄化夏令营", en: "Seventh Beijing–Hong Kong–Macao–Taiwan aging camp" },
        text: {
          zh: "7月1日至13日。77名营员线下，近30位专家。中青网那篇是我和几位同学写的。",
          en: "1–13 July. 77 campers on site, and nearly 30 experts. The Youth.cn piece was written by me and several classmates.",
        },
        href: "https://edu.youth.cn/wzlb/202407/t20240717_15385741.htm",
      },
      {
        date: "2024.07",
        title: { zh: "第九届老龄健康博士生论坛", en: "Ninth doctoral forum on health in later life" },
        text: {
          zh: "7月3日至4日。主题是长寿时代背景下的老龄健康事业发展。26位同学汇报。",
          en: "3–4 July, on health in later life in a longevity society. 26 student papers.",
        },
        href: "http://news.pku.edu.cn/info/7921/2812981.htm",
      },
      {
        date: "2023.07",
        title: { zh: "第六届京港澳台人口老龄化夏令营", en: "Sixth Beijing–Hong Kong–Macao–Taiwan aging camp" },
        text: {
          zh: "7月1日至14日，时隔三年回到燕园。24所高校、77人线下。闭营时我代表组委会致谢。",
          en: "1–14 July, back on campus after three years. 77 campers on site, from 24 universities. At the closing I thanked everyone for the organizing committee.",
        },
        href: "https://peking.bjd.com.cn/content/s64b76b31e4b0285efd6caed6.html",
      },
      {
        date: "2023.07",
        title: { zh: "第八届老龄健康博士生论坛", en: "Eighth doctoral forum on health in later life" },
        text: {
          zh: "7月3日至4日。四个分论坛谈面向现代化、健康韧性、信息化和可持续发展。19位同学汇报。照片是我拍的。",
          en: "3–4 July. Four sessions: modernization, health resilience, information, and sustainability. 19 student papers. I took the photographs.",
        },
        href: "http://news.pku.edu.cn/info/7921/2847301.htm",
      },
      {
        date: "2022.07",
        title: { zh: "第五届京港澳台人口老龄化夏令营", en: "Fifth Beijing–Hong Kong–Macao–Taiwan aging camp" },
        text: {
          zh: "7月1日至9日，全程在线上。39所高校的营员一起上课、讨论、汇报。从这一届起，我开始参与组织。",
          en: "1–9 July, entirely online. Campers from 39 universities sat in on lectures, discussion, and the final reports. This is the camp where I started helping to organize.",
        },
        href: "https://ipr.pku.edu.cn/xwzx/50131ipr365289.htm",
      },
      {
        date: "2022.07",
        title: { zh: "第七届老龄健康博士生论坛", en: "Seventh doctoral forum on health in later life" },
        text: {
          zh: "和第五届夏令营同一周，也在线上。主论坛8人汇报，四个分论坛再谈研究方法、老年保障、社会政策和社会参与。从这一届起，我开始参与组织。",
          en: "The same week as the fifth camp, also online. Eight papers in the main session, and four parallel sessions on methods, old-age security, social policy, and social participation. This is the forum where I started helping to organize.",
        },
        href: "https://ipr.pku.edu.cn/xwzx/50131ipr365289.htm",
      },
    ],
  },
];

export const grants = [
  {
    id: "cagg-2025127",
    period: { zh: "2025", en: "2025" },
    role: { zh: "第一负责人", en: "Principal investigator" },
    title: {
      zh: "AI赋能虚拟养老院的适老化重构与治理创新研究",
      en: "Age-friendly Reconstruction and Governance Innovation of Virtual Nursing Homes Empowered by AI",
    },
    org: {
      zh: "中国老年学和老年医学学会",
      en: "China Association of Gerontology and Geriatrics",
    },
    no: "CAGG2025127",
    closed: { zh: "2025年12月25日结题", en: "Closed 25 December 2025" },
    members: {
      zh: "课题成员：许文虎、陈功、张宇庭、徐楚风、胡安静",
      en: "Members: Wenhu Xu, Gong Chen, Yuting Zhang, Chufeng Xu, Anjing Hu",
    },
  },
];

export const path = [
  {
    period: { zh: "2024.09至今", en: "2024.09–present" },
    title: { zh: "人口学博士研究生", en: "PhD student in demography" },
    org: { zh: "北京大学人口研究所", en: "Institute of Population Research, Peking University" },
    current: true,
  },
  {
    period: { zh: "2023.12—2026.09", en: "2023.12–2026.09" },
    title: { zh: "主任助理", en: "Assistant to the director" },
    org: { zh: "北京大学中国老龄事业发展研究中心", en: "China Center for Aging Studies, Peking University" },
  },
  {
    period: { zh: "2021.09—2024.06", en: "2021.09–2024.06" },
    title: { zh: "社会工作硕士", en: "Master's in social work" },
    org: { zh: "北京大学人口研究所", en: "Institute of Population Research, Peking University" },
  },
];

export const service = [
  {
    role: { zh: "学会", en: "Society" },
    title: { zh: "志愿与公益分会办公室主任", en: "Office director, Volunteerism and Public Welfare Branch" },
    text: {
      zh: "中国老年学和老年医学学会，2024年9月起。此前一年任办公室副主任。",
      en: "China Association of Gerontology and Geriatrics, since September 2024. Deputy office director for the year before that.",
    },
  },
  {
    role: { zh: "审稿", en: "Reviewing" },
    title: { zh: "SSCI 期刊匿名审稿", en: "Anonymous review for SSCI journals" },
    text: {
      zh: "也是《中国时间银行发展研究报告》编委，华东理工大学出版社，2022。",
      en: "Also an editorial board member of the China Time Bank Development Report, East China University of Science and Technology Press, 2022.",
    },
  },
];

export const memberships = [
  {
    name: { zh: "中国老年学和老年医学学会", en: "CAGGS" },
    text: { zh: "志愿与公益分会", en: "Volunteerism and public welfare" },
  },
  {
    name: { zh: "SSCI", en: "SSCI" },
    text: { zh: "匿名审稿", en: "Anonymous review" },
  },
];

export const research = {
  kicker: { zh: "研究", en: "Research" },
  title: {
    zh: "老龄健康、照护与社会政策",
    en: "Later-life health, care, and social policy",
  },
  angle: { zh: "四个方向", en: "Four directions" },
  aside: {
    zh: "调查微数据、问卷访谈与统计分析。",
    en: "Survey microdata, field interviews, and statistical analysis.",
  },
  tracksTitle: { zh: "四个研究方向", en: "Four research areas" },
  tracksNote: { zh: "数据与调研", en: "Data and fieldwork" },
  tracks: [
    {
      index: "01",
      stage: { zh: "童年逆境", en: "Childhood" },
      title: { zh: "童年逆境与老龄健康", en: "Childhood adversity and later-life health" },
      text: {
        zh: "研究童年期不利经历与中老年健康结局的关系，包括疾病、睡眠与死亡风险。",
        en: "Examines how childhood adversity is related to later-life health outcomes, including illness, sleep, and mortality risk.",
      },
    },
    {
      index: "02",
      stage: { zh: "互助与时间", en: "Mutual aid" },
      title: { zh: "互助养老与时间利用", en: "Mutual aid and time use" },
      text: {
        zh: "研究互助养老、时间银行和社区照护中的时间利用。",
        en: "Studies time use in mutual-aid eldercare, time banks, and community care.",
      },
    },
    {
      index: "03",
      stage: { zh: "分级诊疗", en: "Hierarchical care" },
      title: { zh: "分级诊疗与经济负担", en: "Hierarchical medical care and economic burden" },
      text: {
        zh: "研究分级诊疗背景下中老年人的就医行为与医疗负担。",
        en: "Studies health-seeking and medical burden among middle-aged and older adults under hierarchical diagnosis and treatment.",
      },
    },
    {
      index: "04",
      stage: { zh: "农村经济", en: "Rural economy" },
      title: { zh: "人口政策与农村经济", en: "Population policy and the rural economy" },
      text: {
        zh: "研究人口政策、农村发展及银发经济等相关问题。",
        en: "Studies population policy, rural development, and related issues such as the silver economy.",
      },
    },
  ],
  grantsTitle: { zh: "主持课题", en: "Projects led" },
  grantsNote: { zh: "第一负责人主持的学会课题。", en: "Society projects led as principal investigator." },
  methodsLabel: { zh: "数据与方法", en: "Data and methods" },
  papersTitle: { zh: "发表成果", en: "Publications" },
  papersNote: { zh: "按索引类型排列。中文按 GB/T 7714，英文按 APA。", en: "Grouped by index. Chinese citations follow GB/T 7714; English citations follow APA." },
  citeLabel: { zh: "引用", en: "Cite" },
  groupLabel: { zh: "类型", en: "Type" },
  yearLabel: { zh: "年份", en: "Year" },
  emptyGroup: { zh: "这一类暂无。", en: "None in this group." },
  publicationGroups: [
    {
      id: "wos",
      zh: "SSCI / SCI / SCIE / ESCI",
      en: "SSCI / SCI / SCIE / ESCI",
      note: {
        zh: "Healthcare、Sustainability 为 SSCI/SCIE，Behavioral Sciences 为 SSCI，Frontiers in Epidemiology 为 ESCI。",
        en: "Healthcare and Sustainability are SSCI/SCIE; Behavioral Sciences is SSCI; Frontiers in Epidemiology is ESCI.",
      },
    },
    {
      id: "cn",
      zh: "中文（CSSCI / 北大核心 / CSCD / AMI）",
      en: "Chinese (CSSCI / PKU Core / CSCD / AMI)",
    },
    {
      id: "ei",
      zh: "EI（源刊 / 会议）",
      en: "EI (journals / conferences)",
    },
    {
      id: "press",
      zh: "报刊（国家级）",
      en: "National newspapers",
    },
  ],
  otherGroup: {
    id: "other",
    zh: "其他会议",
    en: "Other conference papers",
    note: {
      zh: "IJCAI 工作坊论文。",
      en: "An IJCAI workshop paper.",
    },
  },
};

export const paperTagCatalog = {
  ssci: { zh: "SSCI", en: "SSCI", kind: "wos" },
  scie: { zh: "SCIE", en: "SCIE", kind: "wos" },
  esci: { zh: "ESCI", en: "ESCI", kind: "wos" },
  cssci: { zh: "CSSCI", en: "CSSCI", kind: "cn" },
  pku: { zh: "北大核心", en: "PKU Core", kind: "cn" },
  cscd: { zh: "CSCD", en: "CSCD", kind: "cn" },
  ami: { zh: "AMI", en: "AMI", kind: "cn" },
  eiJournal: { zh: "EI 源刊", en: "EI journal", kind: "ei" },
  eiConf: { zh: "EI 会议", en: "EI conference", kind: "ei" },
  press: { zh: "国家级报刊", en: "National press", kind: "press" },
  journal: { zh: "期刊", en: "Journal", kind: "form" },
  conference: { zh: "会议", en: "Conference", kind: "form" },
  newspaper: { zh: "报刊", en: "Newspaper", kind: "form" },
  reprint: { zh: "人大复印", en: "RUC reprint", kind: "note" },
};

export const papers = [
  {
    id: "lnu-2026-burden",
    year: 2026,
    group: "cn",
    index: { zh: "CSSCI / AMI", en: "CSSCI / AMI" },
    tags: ["cssci", "ami", "journal"],
    pubLang: "zh",
    type: { zh: "期刊论文", en: "Journal article" },
    title: {
      zh: "分级诊疗的“负担悖论”及其破解——基于农村中老年人基层就医的实证研究",
      en: "The “Burden Paradox” of Hierarchical Diagnosis and Treatment and How to Address It: An Empirical Study Based on Primary-Care Visits among Rural Middle-Aged and Older Adults",
    },
    authors: {
      zh: "许文虎, 由佳民, 朱俊谕, 陈功",
      en: "Wenhu Xu, Jiamin You, Junyu Zhu, Gong Chen",
    },
    venue: {
      zh: "辽宁大学学报（哲学社会科学版），CSSCI、AMI",
      en: "Journal of Liaoning University (Philosophy and Social Sciences), CSSCI, AMI",
    },
    role: { zh: "第一作者；通讯作者陈功", en: "First author; corresponding author Gong Chen" },
    citation: {
      zh: "许文虎, 由佳民, 朱俊谕, 陈功. 分级诊疗的“负担悖论”及其破解——基于农村中老年人基层就医的实证研究[J]. 辽宁大学学报(哲学社会科学版), 2026(3): 1-19.",
      en: "Xu, W., You, J., Zhu, J., & Chen, G. (2026). The “burden paradox” of hierarchical diagnosis and treatment and how to address it: An empirical study based on primary-care visits among rural middle-aged and older adults. Journal of Liaoning University (Philosophy and Social Sciences), (3), 1–19.",
    },
    href: "https://xb.lnu.edu.cn/info/14197/69557.htm",
  },
  {
    id: "wa-2026-genkai",
    year: 2026,
    group: "cn",
    index: { zh: "CSSCI / AMI", en: "CSSCI / AMI" },
    tags: ["cssci", "ami", "journal"],
    pubLang: "zh",
    type: { zh: "期刊论文", en: "Journal article" },
    title: {
      zh: "日本“极限村落”治理实践与启示",
      en: "Japan’s “Marginal Villages” (Genkai Shūraku): Governance Practices and Implications",
    },
    authors: {
      zh: "许文虎, 陈功",
      en: "Wenhu Xu, Gong Chen",
    },
    venue: {
      zh: "世界农业，CSSCI、AMI",
      en: "World Agriculture, CSSCI, AMI",
    },
    role: { zh: "第一作者；通讯作者陈功", en: "First author; corresponding author Gong Chen" },
    citation: {
      zh: "许文虎, 陈功. 日本“极限村落”治理实践与启示[J]. 世界农业, 2026(1): 3-14. DOI: 10.13856/j.cn11-1097/s.2026.01.001.",
      en: "Xu, W., & Chen, G. (2026). Japan’s “marginal villages” (genkai shūraku): Governance practices and implications. World Agriculture, (1), 3–14. https://doi.org/10.13856/j.cn11-1097/s.2026.01.001",
    },
    href: "https://doi.org/10.13856/j.cn11-1097/s.2026.01.001",
  },
  {
    id: "frontiers-2026-coverage",
    year: 2026,
    group: "wos",
    index: { zh: "ESCI", en: "ESCI" },
    tags: ["esci", "journal"],
    pubLang: "en",
    type: { zh: "期刊论文", en: "Journal article" },
    title: {
      zh: "从覆盖到诊疗：基本医疗保险如何塑造中国患者的基层就医体验",
      en: "From coverage to care: how basic medical insurance shapes patients’ experiences of primary care in China",
    },
    authors: {
      zh: "Chufeng Xu, Wenhu Xu, Jiamin You, Gong Chen, Shuhan Miao",
      en: "Chufeng Xu, Wenhu Xu, Jiamin You, Gong Chen, Shuhan Miao",
    },
    venue: {
      zh: "Frontiers in Epidemiology，ESCI",
      en: "Frontiers in Epidemiology, ESCI",
    },
    role: { zh: "共同第一作者、通讯作者", en: "Co-first and corresponding author" },
    citation: {
      zh: "Xu C, Xu W, You J, Chen G, Miao S. From coverage to care: how basic medical insurance shapes patients’ experiences of primary care in China[J]. Frontiers in Epidemiology, 2026, 6: 1785586. DOI: 10.3389/fepid.2026.1785586.",
      en: "Xu, C., Xu, W., You, J., Chen, G., & Miao, S. (2026). From coverage to care: how basic medical insurance shapes patients’ experiences of primary care in China. Frontiers in Epidemiology, 6, 1785586. https://doi.org/10.3389/fepid.2026.1785586",
    },
    href: "https://doi.org/10.3389/fepid.2026.1785586",
  },
  {
    id: "bs-2026-disability",
    year: 2026,
    group: "wos",
    index: { zh: "SSCI", en: "SSCI" },
    tags: ["ssci", "journal"],
    pubLang: "en",
    type: { zh: "期刊论文", en: "Journal article" },
    title: {
      zh: "日常生活中的福祉：非正式社会支持、抑郁风险与中国残疾老年人的生活满意度",
      en: "Understanding Well-Being in Daily Life: Informal Social Support, Depression Risk, and Life Satisfaction Among Chinese Older Adults with Disabilities",
    },
    authors: {
      zh: "Xinzhe Wang, Chenrui Zhang, Wenhu Xu, Shiyu Chen, Gong Chen",
      en: "Xinzhe Wang, Chenrui Zhang, Wenhu Xu, Shiyu Chen, Gong Chen",
    },
    venue: {
      zh: "Behavioral Sciences，SSCI",
      en: "Behavioral Sciences, SSCI",
    },
    role: { zh: "第三作者", en: "Third author" },
    citation: {
      zh: "Wang X, Zhang C, Xu W, Chen S, Chen G. Understanding Well-Being in Daily Life: Informal Social Support, Depression Risk, and Life Satisfaction Among Chinese Older Adults with Disabilities[J]. Behavioral Sciences, 2026, 16(7): 1216. DOI: 10.3390/bs16071216.",
      en: "Wang, X., Zhang, C., Xu, W., Chen, S., & Chen, G. (2026). Understanding well-being in daily life: Informal social support, depression risk, and life satisfaction among Chinese older adults with disabilities. Behavioral Sciences, 16(7), 1216. https://doi.org/10.3390/bs16071216",
    },
    href: "https://doi.org/10.3390/bs16071216",
  },
  {
    id: "spr-2025-family",
    year: 2025,
    group: "cn",
    index: { zh: "CSSCI / AMI", en: "CSSCI / AMI" },
    tags: ["cssci", "ami", "journal", "reprint"],
    pubLang: "zh",
    type: { zh: "期刊论文", en: "Journal article" },
    title: {
      zh: "制度缺位与能力透支：中国家庭主体功能变迁逻辑及社会责任重构",
      en: "Institutional Absence and Overstretched Capacity: The Changing Logic of Chinese Families’ Primary Functions and the Reconstruction of Social Responsibility",
    },
    authors: {
      zh: "陈功, 许文虎, 陈昱天",
      en: "Gong Chen, Wenhu Xu, Yutian Chen",
    },
    venue: {
      zh: "社会政策研究，CSSCI、AMI；人大复印报刊资料全文转载",
      en: "Social Policy Research, CSSCI, AMI; reprinted in full by RUC Information Center for Social Sciences",
    },
    role: { zh: "第二作者（学生第一作者）", en: "Second author (first student author)" },
    citation: {
      zh: "陈功, 许文虎, 陈昱天. 制度缺位与能力透支：中国家庭主体功能变迁逻辑及社会责任重构[J]. 社会政策研究, 2025(3). 人大复印报刊资料全文转载, 2025(9).",
      en: "Chen, G., Xu, W., & Chen, Y. (2025). Institutional absence and overstretched capacity: The changing logic of Chinese families’ primary functions and the reconstruction of social responsibility. Social Policy Research, (3). Reprinted in full in RUC Information Center for Social Sciences, 2025(9).",
    },
    href: "http://sociologyol.ruc.edu.cn/shxyj/fzshx/shzc/7356995c1e6548c4a1595f83ede4070e.htm",
  },
  {
    id: "healthcare-2025-mortality",
    year: 2025,
    group: "wos",
    index: { zh: "SSCI / SCIE", en: "SSCI / SCIE" },
    tags: ["ssci", "scie", "journal"],
    pubLang: "en",
    type: { zh: "期刊论文", en: "Journal article" },
    title: {
      zh: "中国中老年人全因死亡的社会人口学与健康相关风险因素：一项队列研究",
      en: "A Cohort of Sociodemographic and Health-Related Risk Factors for All-Cause Mortality in Middle-Aged and Older Adults in China",
    },
    authors: {
      zh: "Wenhu Xu, Hang Zhu, Yutian Chen, Qianyi Zhang, Zhinan Liu, Gong Chen",
      en: "Wenhu Xu, Hang Zhu, Yutian Chen, Qianyi Zhang, Zhinan Liu, Gong Chen",
    },
    venue: {
      zh: "Healthcare，SSCI / SCIE",
      en: "Healthcare, SSCI / SCIE",
    },
    role: { zh: "第一作者；通讯作者 Gong Chen", en: "First author; corresponding author Gong Chen" },
    citation: {
      zh: "Xu W, Zhu H, Chen Y, Zhang Q, Liu Z, Chen G. A Cohort of Sociodemographic and Health-Related Risk Factors for All-Cause Mortality in Middle-Aged and Older Adults in China[J]. Healthcare, 2025, 13(17): 2104. DOI: 10.3390/healthcare13172104.",
      en: "Xu, W., Zhu, H., Chen, Y., Zhang, Q., Liu, Z., & Chen, G. (2025). A cohort of sociodemographic and health-related risk factors for all-cause mortality in middle-aged and older adults in China. Healthcare, 13(17), 2104. https://doi.org/10.3390/healthcare13172104",
    },
    href: "https://doi.org/10.3390/healthcare13172104",
  },
  {
    id: "su-2025-ofdi",
    year: 2025,
    group: "wos",
    index: { zh: "SSCI / SCIE", en: "SSCI / SCIE" },
    tags: ["ssci", "scie", "journal"],
    pubLang: "en",
    type: { zh: "期刊论文", en: "Journal article" },
    title: {
      zh: "一带一路背景下企业对外直接投资对绿色创新的影响分析",
      en: "Analysis of the Impact of Outward Foreign Direct Investment of Corporations on Green Innovation in the Context of the Belt and Road Initiative",
    },
    authors: {
      zh: "Yutian Chen, Gong Chen, Wenhu Xu",
      en: "Yutian Chen, Gong Chen, Wenhu Xu",
    },
    venue: {
      zh: "Sustainability，SSCI / SCIE",
      en: "Sustainability, SSCI / SCIE",
    },
    role: { zh: "第三作者；通讯作者 Gong Chen", en: "Third author; corresponding author Gong Chen" },
    citation: {
      zh: "Chen Y, Chen G, Xu W. Analysis of the Impact of Outward Foreign Direct Investment of Corporations on Green Innovation in the Context of the Belt and Road Initiative[J]. Sustainability, 2025, 17(9): 3773. DOI: 10.3390/su17093773.",
      en: "Chen, Y., Chen, G., & Xu, W. (2025). Analysis of the impact of outward foreign direct investment of corporations on green innovation in the context of the Belt and Road Initiative. Sustainability, 17(9), 3773. https://doi.org/10.3390/su17093773",
    },
    href: "https://doi.org/10.3390/su17093773",
  },
  {
    id: "bs-2025-friendship",
    year: 2025,
    group: "wos",
    index: { zh: "SSCI", en: "SSCI" },
    tags: ["ssci", "journal"],
    pubLang: "en",
    type: { zh: "期刊论文", en: "Journal article" },
    title: {
      zh: "亲密友谊与主观幸福感的纵向关系：人际信任与领悟社会支持的链式中介",
      en: "The Longitudinal Relationship Between Close Friendship and Subjective Well-Being: The Chain Mediation Model of Interpersonal Trust and Perceived Social Support",
    },
    authors: {
      zh: "Runqing Li, Wenhu Xu, Hongyu Nie, Weida Zhang",
      en: "Runqing Li, Wenhu Xu, Hongyu Nie, Weida Zhang",
    },
    venue: {
      zh: "Behavioral Sciences，SSCI",
      en: "Behavioral Sciences, SSCI",
    },
    role: { zh: "第二作者；通讯作者 Weida Zhang", en: "Second author; corresponding author Weida Zhang" },
    citation: {
      zh: "Li R, Xu W, Nie H, Zhang W. The Longitudinal Relationship Between Close Friendship and Subjective Well-Being: The Chain Mediation Model of Interpersonal Trust and Perceived Social Support[J]. Behavioral Sciences, 2025, 15(4): 480. DOI: 10.3390/bs15040480.",
      en: "Li, R., Xu, W., Nie, H., & Zhang, W. (2025). The longitudinal relationship between close friendship and subjective well-being: The chain mediation model of interpersonal trust and perceived social support. Behavioral Sciences, 15(4), 480. https://doi.org/10.3390/bs15040480",
    },
    href: "https://doi.org/10.3390/bs15040480",
  },
  {
    id: "pmbda-2025-mental",
    year: 2025,
    group: "ei",
    index: { zh: "EI 会议", en: "EI conference" },
    tags: ["eiConf", "conference"],
    pubLang: "en",
    type: { zh: "会议论文", en: "Conference paper" },
    title: {
      zh: "中国中老年人精神疾病的患病率与经济负担：人工智能在医疗负担预测中的作用",
      en: "Prevalence and Economic Burden of Mental Illness Among Middle-Aged and Older Adults in China: The Role of Artificial Intelligence in Predicting Healthcare Burden",
    },
    authors: {
      zh: "Yutian Chen, Wenhu Xu, Zhinan Liu, Hang Zhu, Gong Chen",
      en: "Yutian Chen, Wenhu Xu, Zhinan Liu, Hang Zhu, Gong Chen",
    },
    venue: {
      zh: "PMBDA 2024，EI 会议",
      en: "PMBDA 2024, EI conference",
    },
    role: { zh: "第二作者；通讯作者 Gong Chen", en: "Second author; corresponding author Gong Chen" },
    citation: {
      zh: "Chen Y, Xu W, Liu Z, Zhu H, Chen G. Prevalence and Economic Burden of Mental Illness Among Middle-Aged and Older Adults in China: The Role of Artificial Intelligence in Predicting Healthcare Burden[C]//Proceedings of the 2024 4th International Conference on Public Management and Big Data Analysis (PMBDA 2024). Dordrecht: Atlantis Press, 2025. DOI: 10.2991/978-94-6463-656-7_14.",
      en: "Chen, Y., Xu, W., Liu, Z., Zhu, H., & Chen, G. (2025). Prevalence and economic burden of mental illness among middle-aged and older adults in China: The role of artificial intelligence in predicting healthcare burden. In Proceedings of the 2024 4th International Conference on Public Management and Big Data Analysis (PMBDA 2024). Atlantis Press. https://doi.org/10.2991/978-94-6463-656-7_14",
    },
    href: "https://doi.org/10.2991/978-94-6463-656-7_14",
  },
  {
    id: "isas-2025-fall",
    year: 2025,
    group: "ei",
    index: { zh: "EI 会议", en: "EI conference" },
    tags: ["eiConf", "conference"],
    pubLang: "en",
    type: { zh: "会议论文", en: "Conference paper" },
    title: {
      zh: "基于可穿戴设备与机器学习算法的老年人步态跌倒检测系统",
      en: "A Gait Fall Detection System for the Elderly Based on Wearable Devices and Machine Learning Algorithms",
    },
    authors: {
      zh: "Wenhu Xu, Yutian Chen, Qianyi Zhang, Chengmeng Zhang, Gong Chen, Yang Xiao",
      en: "Wenhu Xu, Yutian Chen, Qianyi Zhang, Chengmeng Zhang, Gong Chen, Yang Xiao",
    },
    venue: {
      zh: "ISAS 2025，IEEE，EI 会议",
      en: "ISAS 2025, IEEE, EI conference",
    },
    role: { zh: "第一作者", en: "First author" },
    citation: {
      zh: "Xu W, Chen Y, Zhang Q, Zhang C, Chen G, Xiao Y. A Gait Fall Detection System for the Elderly Based on Wearable Devices and Machine Learning Algorithms[C]//2025 9th International Symposium on Innovative Approaches in Smart Technologies (ISAS). Gaziantep: IEEE, 2025: 1-5. DOI: 10.1109/ISAS66241.2025.11101923.",
      en: "Xu, W., Chen, Y., Zhang, Q., Zhang, C., Chen, G., & Xiao, Y. (2025). A gait fall detection system for the elderly based on wearable devices and machine learning algorithms. In 2025 9th International Symposium on Innovative Approaches in Smart Technologies (ISAS) (pp. 1–5). IEEE. https://doi.org/10.1109/ISAS66241.2025.11101923",
    },
    href: "https://doi.org/10.1109/ISAS66241.2025.11101923",
  },
  {
    id: "csnt-2025-speech",
    year: 2025,
    group: "ei",
    index: { zh: "EI 会议", en: "EI conference" },
    tags: ["eiConf", "conference"],
    pubLang: "en",
    type: { zh: "会议论文", en: "Conference paper" },
    title: {
      zh: "智能语音识别技术在无障碍人机交互中的应用研究",
      en: "Application and Research of Intelligent Speech Recognition Technology in Barrier-Free Human-Computer Interaction",
    },
    authors: {
      zh: "Wenhu Xu, Zhinan Liu, Shuhan Miao, Hang Zhu, Jianze Fang, Gong Chen, Yang Xiao",
      en: "Wenhu Xu, Zhinan Liu, Shuhan Miao, Hang Zhu, Jianze Fang, Gong Chen, Yang Xiao",
    },
    venue: {
      zh: "CSNT 2025，IEEE，EI 会议",
      en: "CSNT 2025, IEEE, EI conference",
    },
    role: { zh: "第一作者", en: "First author" },
    citation: {
      zh: "Xu W, Liu Z, Miao S, Zhu H, Fang J, Chen G, Xiao Y. Application and Research of Intelligent Speech Recognition Technology in Barrier-Free Human-Computer Interaction[C]//2025 IEEE 14th International Conference on Communication Systems and Network Technologies (CSNT). Bhopal: IEEE, 2025: 1079-1085. DOI: 10.1109/CSNT64827.2025.10968167.",
      en: "Xu, W., Liu, Z., Miao, S., Zhu, H., Fang, J., Chen, G., & Xiao, Y. (2025). Application and research of intelligent speech recognition technology in barrier-free human-computer interaction. In 2025 IEEE 14th International Conference on Communication Systems and Network Technologies (CSNT) (pp. 1079–1085). IEEE. https://doi.org/10.1109/CSNT64827.2025.10968167",
    },
    href: "https://doi.org/10.1109/CSNT64827.2025.10968167",
  },
  {
    id: "ptp-2024-silver",
    year: 2024,
    group: "cn",
    index: { zh: "北大核心 / AMI", en: "PKU Core / AMI" },
    tags: ["pku", "ami", "journal"],
    pubLang: "zh",
    type: { zh: "期刊论文", en: "Journal article" },
    title: {
      zh: "发展我国银发经济面临的挑战和优化路径研究",
      en: "Research on the Challenges Facing the Development of China’s Silver Economy and Paths for Optimization",
    },
    authors: {
      zh: "许文虎, 张乐兮, 张颜, 等",
      en: "Wenhu Xu, Zhang Lexi, Zhang Yan, et al.",
    },
    venue: {
      zh: "价格理论与实践，北大核心、AMI",
      en: "Price: Theory & Practice, PKU Core, AMI",
    },
    role: { zh: "第一作者", en: "First author" },
    citation: {
      zh: "许文虎, 张乐兮, 张颜, 等. 发展我国银发经济面临的挑战和优化路径研究[J]. 价格理论与实践, 2024(11): 44-51.",
      en: "Xu, W., Zhang, L., Zhang, Y., et al. (2024). Research on the challenges facing the development of China’s silver economy and paths for optimization. Price: Theory & Practice, (11), 44–51.",
    },
    href: "",
  },
  {
    id: "chsm-2023-insurance",
    year: 2023,
    group: "cn",
    index: { zh: "北大核心", en: "PKU Core" },
    tags: ["pku", "journal"],
    pubLang: "zh",
    type: { zh: "期刊论文", en: "Journal article" },
    title: {
      zh: "分级诊疗视角下医疗保险对中老年人医疗负担的影响研究",
      en: "Research on the Impact of Medical Insurance on the Medical Burden of Middle-Aged and Older Adults from the Perspective of Hierarchical Diagnosis and Treatment",
    },
    authors: {
      zh: "许文虎, 任浩, 刘晓瑞, 张新辉, 陈功",
      en: "Wenhu Xu, Hao Ren, Xiaorui Liu, Xinhui Zhang, Gong Chen",
    },
    venue: {
      zh: "中国卫生事业管理，北大核心",
      en: "Chinese Health Service Management, PKU core",
    },
    role: { zh: "第一作者", en: "First author" },
    citation: {
      zh: "许文虎, 任浩, 刘晓瑞, 张新辉, 陈功. 分级诊疗视角下医疗保险对中老年人医疗负担的影响研究[J]. 中国卫生事业管理, 2023(4): 282-288.",
      en: "Xu, W., Ren, H., Liu, X., Zhang, X., & Chen, G. (2023). Research on the impact of medical insurance on the medical burden of middle-aged and older adults from the perspective of hierarchical diagnosis and treatment. Chinese Health Service Management, (4), 282–288.",
    },
    href: "",
  },
  {
    id: "healthcare-2023-sleep",
    year: 2023,
    group: "wos",
    index: { zh: "SSCI / SCIE", en: "SSCI / SCIE" },
    tags: ["ssci", "scie", "journal"],
    pubLang: "en",
    type: { zh: "期刊论文", en: "Journal article" },
    title: {
      zh: "厘清关联：老年人运动习惯与睡眠质量的关系探索",
      en: "Unraveling the Nexus: Exploring the Relationship between Exercise Habits and Sleep Quality in Older Adults",
    },
    authors: {
      zh: "Wenhu Xu, Jianze Fang, Long Chen, Dongmin Wang, Chengye Huang, Tiange Huang, Chao Guo",
      en: "Wenhu Xu, Jianze Fang, Long Chen, Dongmin Wang, Chengye Huang, Tiange Huang, Chao Guo",
    },
    venue: {
      zh: "Healthcare，SSCI / SCIE",
      en: "Healthcare, SSCI / SCIE",
    },
    role: { zh: "第一作者；通讯作者 Dongmin Wang", en: "First author; corresponding author Dongmin Wang" },
    citation: {
      zh: "Xu W, Fang J, Chen L, Wang D, Huang C, Huang T, Guo C. Unraveling the Nexus: Exploring the Relationship between Exercise Habits and Sleep Quality in Older Adults[J]. Healthcare, 2023, 11(20): 2759. DOI: 10.3390/healthcare11202759.",
      en: "Xu, W., Fang, J., Chen, L., Wang, D., Huang, C., Huang, T., & Guo, C. (2023). Unraveling the nexus: Exploring the relationship between exercise habits and sleep quality in older adults. Healthcare, 11(20), 2759. https://doi.org/10.3390/healthcare11202759",
    },
    href: "https://doi.org/10.3390/healthcare11202759",
  },
  {
    id: "cpn-2025-retirement",
    year: 2025,
    group: "press",
    index: { zh: "国家级报刊", en: "National newspaper" },
    tags: ["press", "newspaper"],
    pubLang: "zh",
    type: { zh: "报刊", en: "Newspaper article" },
    title: {
      zh: "以渐进式延迟退休释放人才红利",
      en: "Releasing the Talent Dividend through Gradual Delayed Retirement",
    },
    authors: {
      zh: "陈功, 许文虎, 陈昱天",
      en: "Gong Chen, Wenhu Xu, Yutian Chen",
    },
    venue: {
      zh: "中国人口报",
      en: "China Population News",
    },
    role: { zh: "第二作者", en: "Second author" },
    citation: {
      zh: "陈功, 许文虎, 陈昱天. 以渐进式延迟退休释放人才红利[N]. 中国人口报, 2025-01-23.",
      en: "Chen, G., Xu, W., & Chen, Y. (2025, January 23). Releasing the talent dividend through gradual delayed retirement. China Population News.",
    },
    href: "https://jkb.com.cn/rkb/lilun/2025/0123/500568.html",
  },
  {
    id: "cpn-2025-timesaving",
    year: 2025,
    group: "press",
    index: { zh: "国家级报刊", en: "National newspaper" },
    tags: ["press", "newspaper"],
    pubLang: "zh",
    type: { zh: "报刊", en: "Newspaper article" },
    title: {
      zh: "人工智能驱动“时间储蓄”创新",
      en: "AI-Driven Innovation in “Time Savings” for Volunteer Elder Care",
    },
    authors: {
      zh: "陈功, 许文虎, 陈昱天",
      en: "Gong Chen, Wenhu Xu, Yutian Chen",
    },
    venue: {
      zh: "中国人口报",
      en: "China Population News",
    },
    role: { zh: "第二作者", en: "Second author" },
    citation: {
      zh: "陈功, 许文虎, 陈昱天. 人工智能驱动“时间储蓄”创新[N]. 中国人口报, 2025-08-13.",
      en: "Chen, G., Xu, W., & Chen, Y. (2025, August 13). AI-driven innovation in “time savings” for volunteer elder care. China Population News.",
    },
    href: "https://jkb.com.cn/rkb/lilun/2025/0813/504991.html",
  },
  {
    id: "ijcai-2022-aidbei",
    year: 2022,
    group: "other",
    index: { zh: "国际会议工作坊", en: "Workshop paper" },
    tags: ["conference"],
    pubLang: "en",
    type: { zh: "会议论文", en: "Conference paper" },
    title: {
      zh: "面向残疾人的人工智能机遇与挑战：基于不同类型助残人工智能技术案例的分析",
      en: "Opportunities and Challenges of AI for People with Disabilities: Analysis Based on Different Types of Disabled-oriented AI Technology Cases",
    },
    authors: {
      zh: "Chengmeng Zhang, Wenhu Xu",
      en: "Chengmeng Zhang, Wenhu Xu",
    },
    venue: {
      zh: "IJCAI 2022 AIDBEI 工作坊",
      en: "IJCAI 2022 AIDBEI workshop",
    },
    role: { zh: "第二作者", en: "Second author" },
    citation: {
      zh: "Zhang C, Xu W. Opportunities and Challenges of AI for People with Disabilities: Analysis Based on Different Types of Disabled-oriented AI Technology Cases[C]//IJCAI 2022 Workshop on Artificial Intelligence—Diversity, Belonging, Equity, and Inclusion (AIDBEI). Vienna, 2022.",
      en: "Zhang, C., & Xu, W. (2022). Opportunities and challenges of AI for people with disabilities: Analysis based on different types of disabled-oriented AI technology cases. Paper presented at the IJCAI 2022 Workshop on Artificial Intelligence—Diversity, Belonging, Equity, and Inclusion (AIDBEI), Vienna, Austria.",
    },
    href: "https://kdd.cs.ksu.edu/Workshops/IJCAI-2022-AIDBEI/",
  },
];

export const toolsPage = {
  kicker: { zh: "工具", en: "Tools" },
  title: { zh: "研究工具", en: "Research tools" },
  aside: {
    zh: "调研记录表与课程阅读清单。",
    en: "A fieldwork log and a course reading list.",
  },
};

export const tools = [
  {
    index: "01",
    category: { zh: "实地记录", en: "Field notes" },
    name: "Fieldnote",
    version: { zh: "访谈记录", en: "Interview notes" },
    stack: "Spreadsheet · Markdown",
    summary: {
      zh: "用于记录访谈日期、地点、原话与后续推断，便于当晚整理。",
      en: "Records interview date, place, quoted speech, and later inferences for same-day write-up.",
    },
    links: [],
    features: [
      {
        label: { zh: "分开存放", en: "Kept apart" },
        text: { zh: "原话、场景和推断各占一列。", en: "Quoted speech, setting, and inference each have a column." },
      },
      {
        label: { zh: "当晚核对", en: "Same-day check" },
        text: { zh: "留一列给当天补问和改写。", en: "A column for questions you still need to ask that day." },
      },
      {
        label: { zh: "可以导出", en: "Exportable" },
        text: { zh: "表格可以导出成 Markdown，直接贴进报告。", en: "Export the sheet to Markdown and paste it into a report." },
      },
    ],
  },
  {
    index: "02",
    category: { zh: "课程材料", en: "Teaching" },
    name: "Reading list",
    version: { zh: "按周排列", en: "Week by week" },
    stack: "Static page",
    summary: {
      zh: "按周排的阅读清单。每篇写一句为什么读，以及先看哪一段。",
      en: "A week-by-week reading list. Each item says why it is assigned and which passage to read first.",
    },
    links: [
      { label: { zh: "教学页", en: "Teaching" }, href: "/teaching" },
    ],
    features: [
      {
        label: { zh: "按周", en: "By week" },
        text: { zh: "一周一组，不把整学期的文献堆在一起。", en: "One group per week, instead of one long list." },
      },
      {
        label: { zh: "读法", en: "How to read" },
        text: { zh: "每篇有一句阅读提示。", en: "Each reading has a one-line prompt." },
      },
    ],
  },
];

export const teachingPage = {
  kicker: { zh: "教学", en: "Teaching" },
  title: { zh: "教学论文与案例", en: "Teaching papers and cases" },
  aside: {
    zh: "参与撰写的教学论文，以及已结项的主题案例。",
    en: "Teaching papers written with colleagues, and a completed theme case.",
  },
};

export const courses = [
  {
    id: "case-zt-2410001009",
    term: { zh: "2026.10", en: "2026.10" },
    level: { zh: "主题案例", en: "Theme case" },
    title: {
      zh: "AI for Community：基于社工研究生实践课程的数智化社区治理模式探索",
      en: "AI for Community: Exploring a Digital-Intelligent Community Governance Model Based on a Social Work Graduate Practice Course",
    },
    authors: { zh: "陈功、李玥、许文虎、陈昱天", en: "Gong Chen, Yue Li, Wenhu Xu, Yutian Chen" },
    text: {
      zh: "中国专业学位案例中心2024年度主题案例，编号 ZT-2410001009。出自项目《AI for Community：教育与社区养老服务的数字赋能智慧系统》，首席专家陈功。2026年10月13日结项。",
      en: "2024 theme case of the China Professional Degree Case Center, no. ZT-2410001009. From the project “AI for Community: a digital empowerment system for education and community eldercare,” PI Gong Chen. Closed 13 October 2026.",
    },
  },
  {
    id: "pku-teaching-8-first",
    term: { zh: "2025.11", en: "2025.11" },
    level: { zh: "教学论文 · 一等奖", en: "Teaching paper · First prize" },
    title: {
      zh: "AI for Community 2.0：人物画像驱动的社会工作精准化劳动教育转型",
      en: "AI for Community 2.0: Persona-Driven Transformation of Precision Labor Education in Social Work",
    },
    authors: { zh: "陈功、许文虎、张宇庭、蒋清华", en: "Gong Chen, Wenhu Xu, Yuting Zhang, Qinghua Jiang" },
    text: {
      zh: "北京大学第八届创新教学论文评选，一等奖。",
      en: "Eighth Peking University Innovative Teaching Paper Award, first prize.",
    },
  },
  {
    id: "pku-teaching-7-first",
    term: { zh: "2024.12", en: "2024.12" },
    level: { zh: "教学论文 · 一等奖", en: "Teaching paper · First prize" },
    title: {
      zh: "AI for Community：基于社工研究生实践课程的数智化社区治理模式探索",
      en: "AI for Community: Exploring a Digital-Intelligent Community Governance Model Based on a Social Work Graduate Practice Course",
    },
    authors: { zh: "陈功、许文虎、陈昱天、李玥", en: "Gong Chen, Wenhu Xu, Yutian Chen, Yue Li" },
    text: {
      zh: "北京大学第七届创新教学论文评选，一等奖。",
      en: "Seventh Peking University Innovative Teaching Paper Award, first prize.",
    },
  },
  {
    id: "pku-teaching-7-second",
    term: { zh: "2024.12", en: "2024.12" },
    level: { zh: "教学论文 · 二等奖", en: "Teaching paper · Second prize" },
    title: {
      zh: "基于人本视角的社工实践教学方案：交互式系统在多元社会治理中的应用",
      en: "A Human-Centered Scheme for Social Work Practice Teaching: Interactive Systems in Plural Social Governance",
    },
    authors: { zh: "刘尚君、陈功、许文虎、缪姝涵", en: "Shangjun Liu, Gong Chen, Wenhu Xu, Shuhan Miao" },
    text: {
      zh: "北京大学第七届创新教学论文评选，二等奖。",
      en: "Seventh Peking University Innovative Teaching Paper Award, second prize.",
    },
  },
];

export const blogPage = {
  kicker: { zh: "博客", en: "Blog" },
  title: { zh: "笔记与短文", en: "Notes and short essays" },
  aside: {
    zh: "读书笔记与调研备忘，不定期更新。",
    en: "Reading notes and fieldwork memos, updated from time to time.",
  },
};

export const posts = [
  {
    slug: "before-the-visit",
    date: "2026.03.18",
    tag: { zh: "调研", en: "Fieldwork" },
    title: { zh: "进社区之前", en: "Before the visit" },
    excerpt: {
      zh: "约访、进门和当晚的记录，往往比提纲更决定这次能不能谈下去。",
      en: "The appointment, the doorway, and that evening's notes usually decide more than the guide.",
    },
    body: [
      {
        zh: "去之前把时间、地点和要找的人核对一遍。漏一项，往往不是到了现场才发现，而是约的时候就已经不稳。",
        en: "Check the time, the place, and the person before you leave. A missing piece usually fails at the scheduling, not at the door.",
      },
      {
        zh: "进门以后，问题宜短。谁来过、事情记在哪里、老人知不知道找谁，往往比一套完整的理论用语更容易接上。",
        en: "Once inside, keep the questions short. Who came, where it was written down, and whether the older person knows whom to call will usually open the conversation sooner than a theoretical phrase.",
      },
      {
        zh: "当晚把原话和自己的推测分开。过两天再看，印象会自己补全，补上去的那部分不一定发生过。",
        en: "That evening, separate what was said from what you inferred. Two days later, memory fills gaps, and the filled part may not have happened.",
      },
    ],
  },
  {
    slug: "reading-an-hour",
    date: "2025.11.02",
    tag: { zh: "读书", en: "Reading" },
    title: { zh: "先问白天谁在", en: "Ask first who is there in the daytime" },
    excerpt: {
      zh: "进社区之前，提纲上的词往往还太满。先把白天谁在问清楚。",
      en: "Before a community visit, the words on the guide are usually too full. Ask first who is there in the daytime.",
    },
    body: [
      {
        zh: "去之前我容易先想好一套说法，互助、时间银行、政策试点。到了办公室，对方接不上。后来改成白天谁来、待多久、老人自己能做哪些事。谈话就具体一些。",
        en: "Before I go, I tend to arrive with a set of terms: mutual aid, time banks, policy pilots. In the office, people cannot pick them up. It goes better if I ask who comes during the day, how long they stay, and what the older person can still do.",
      },
      {
        zh: "时间利用的问题和互助养老的问题，不必在同一次谈话里问完。有的社区根本不记账。没有账，不表示没有人来。",
        en: "Questions about time use and questions about mutual aid do not have to be finished in the same conversation. Some neighborhoods keep no ledger. No ledger does not mean nobody came.",
      },
    ],
  },
];
