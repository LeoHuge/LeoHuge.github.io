// 个人主页的全部内容都在这个文件里。
// 把姓名、单位、邮箱、履历、论文和链接换成你自己的即可。
// 照片：把图片放到 public/，然后把 portrait 改成 "/你的照片.jpg"。

export const profile = {
  monogram: "WX",
  name: { zh: "许文虎", en: "Huxley Xu" },
  role: { zh: "博士研究生 · 人口学", en: "PhD Student · Demography" },
  org: { zh: "北京大学人口研究所", en: "Institute of Population Research, Peking University" },
  field: { zh: "童年逆境与老龄健康 · 互助养老与时间利用 · 分级诊疗与经济负担 · 人口政策与农村经济", en: "Childhood adversity and later-life health · Mutual aid and time use · Tiered care and economic burden · Population policy and the rural economy" },
  city: "BEIJING, CN",
  email: "2401111475@stu.pku.edu.cn",
  scholar: "https://scholar.google.com/",
  orcid: "https://orcid.org/",
  github: "https://github.com/",
  portrait: "/portrait.svg",
  portraitMark: { zh: "许文虎", en: "Huxley Xu" },
  vertical: "CHILDHOOD · MUTUAL AID · TIERED CARE · RURAL ECONOMY",
  concern: { zh: "早年身体 · 互助时间 · 诊疗账单 · 乡村生计", en: "The body from childhood · Time in mutual aid · The bill of treatment · A village livelihood" },
  headline: {
    zh: ["健康、照护", "和老龄社会。"],
    en: ["Health, care,", "and an aging society."],
  },
  lede: {
    zh: "人老了，日子还得一天天过。有些事从童年就留在身上，到了老年才慢慢显出来。邻里来看一眼，社区有人值班，也有人把帮忙记成一笔账，这些都要占掉具体的小时。看病被分成几级，账单却常常还在原来的家里。人口政策落到农村，要看人还在不在，地和营生还撑不撑得住。",
    en: "Growing old is still a day that has to be lived. Some of it was left on the body in childhood and only shows later. A neighbor looking in, someone on duty, a favor written down as an entry: each of these takes actual hours. Care is sorted into tiers, and the bill often stays with the same household. A population policy, once it reaches the countryside, has to be read against whether people are still there, and whether the land and the livelihood still hold.",
  },
  glance: {
    zh: ["童年逆境与老龄健康", "互助养老与时间利用", "分级诊疗与经济负担", "人口政策与农村经济"],
    en: ["Childhood adversity and later-life health", "Mutual aid and time use", "Tiered care and economic burden", "Population policy and the rural economy"],
  },
  glanceNote: {
    zh: "特色是落到具体的人身上：童年留下的身体，互助占掉的小时，看病之后的账单，农村还在过的日子。",
    en: "What is distinctive is that it lands on particular people: the body childhood leaves, the hours mutual aid takes, the bill after a medical visit, and the days still being lived in the countryside.",
  },
  footerNote: { zh: "早年身体 · 互助时间 · 诊疗账单 · 乡村生计", en: "The body from childhood · Time in mutual aid · The bill of treatment · A village livelihood" },
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
  researchCta: { zh: "了解我的研究", en: "See the research" },
  scholar: "Google Scholar",
  glanceLabel: "RESEARCH AT A GLANCE",
  newsTitle: { zh: "近期动态", en: "Recent notes" },
  newsKicker: "PAPERS · TEACHING · FIELDWORK",
  pathTitle: { zh: "学术足迹", en: "Academic path" },
  pathKicker: "EDUCATION & APPOINTMENTS",
  serviceTitle: { zh: "学术共同体", en: "Scholarly community" },
  serviceKicker: "SERVICE & MEMBERSHIPS",
  current: { zh: "现任", en: "Now" },
  connect: "MAIL",
  connectTitle: {
    zh: ["还在问这些问题。", "也想听听别人怎么问。"],
    en: ["Still asking these questions.", "And curious how others ask them."],
  },
  connectLede: {
    zh: "研究里的，课上的，还有没想拢的。",
    en: "In the research, in class, and in what has not settled yet.",
  },
  readPapers: { zh: "直接阅读发表论文", en: "Jump to papers" },
  allYears: { zh: "全部", en: "All" },
  back: { zh: "返回", en: "Back" },
  notFound: { zh: "这一页不存在。", en: "This page is not here." },
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
        title: { zh: "分级诊疗的“负担悖论”及其破解", en: "The burden paradox of tiered care" },
        text: { zh: "《辽宁大学学报（哲学社会科学版）》，CSSCI，第一作者。", en: "Journal of Liaoning University. CSSCI. First author." },
        href: "/research",
      },
      {
        date: "2026",
        title: { zh: "日本“极限村落”治理实践与启示", en: "Governing Japan’s marginal villages" },
        text: { zh: "《世界农业》，CSSCI，第一作者。", en: "World Agriculture. CSSCI. First author." },
        href: "/research",
      },
      {
        date: "2025",
        title: { zh: "制度缺位与能力透支", en: "Institutional absence and overstretched families" },
        text: { zh: "《社会政策研究》，CSSCI，学生第一作者。人大复印资料全文转载。", en: "Social Policy Research. CSSCI. First student author. Reprinted in full." },
        href: "/research",
      },
      {
        date: "2025",
        title: { zh: "中老年全因死亡的社会人口与健康风险", en: "Health and social risks of later-life mortality" },
        text: { zh: "Healthcare，SSCI，第一作者。", en: "Healthcare. SSCI. First author." },
        href: "/research",
      },
    ],
  },
  {
    title: { zh: "教学参与", en: "Teaching" },
    items: [
      {
        date: "2025",
        title: { zh: "第八届创新教学论文", en: "Eighth innovative teaching paper" },
        text: { zh: "北京大学创新教学论文，一等奖。", en: "Peking University innovative teaching paper. First prize." },
        href: "/teaching",
      },
      {
        date: "2024",
        title: { zh: "第七届创新教学论文", en: "Seventh innovative teaching paper" },
        text: { zh: "一等奖、二等奖各一篇。", en: "One first prize and one second prize." },
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
    zh: "老龄社会里的照护、健康与政策",
    en: "Care, health, and policy in an aging society",
  },
  angle: { zh: "四个方向", en: "Four directions" },
  aside: {
    zh: "这四条各自能独立做，也会在一个村子里同时出现。我不把它们收成一个概念。",
    en: "Each of the four can stand on its own, and they can also show up together in one village. I do not fold them into one concept.",
  },
  tracksTitle: { zh: "四个研究方向", en: "Four lines of research" },
  tracksNote: { zh: "调查与走访", en: "Surveys and visits" },
  tracks: [
    {
      index: "01",
      stage: { zh: "童年逆境", en: "Childhood" },
      title: { zh: "童年逆境与老龄健康", en: "Childhood adversity and later-life health" },
      text: {
        zh: "早年吃过的苦，不一定在当时看出来。我看它会不会留到中老年的病、睡眠和死亡风险上。",
        en: "Hardship in childhood does not always show at the time. I look at whether it is still there in illness, sleep, and the risk of death in middle and later life.",
      },
    },
    {
      index: "02",
      stage: { zh: "互助与时间", en: "Mutual aid" },
      title: { zh: "互助养老与时间利用", en: "Mutual aid and time use" },
      text: {
        zh: "邻里照看、社区值班、上门帮忙，也包括时间银行。这些都要占掉某一天里的小时，我看小时落在谁身上。",
        en: "Neighbors looking in, community duty, a visit to the door, and also time banks. Each of these takes hours out of a day, and I look at whose day it is.",
      },
    },
    {
      index: "03",
      stage: { zh: "分级诊疗", en: "Tiered care" },
      title: { zh: "分级诊疗与经济负担", en: "Tiered care and economic burden" },
      text: {
        zh: "病人被分到不同层级，钱和时间不一定跟着走。我看分级之后，负担还是不是留在原来的家里。",
        en: "Patients are sorted into tiers, and the money and the time do not always follow. I look at whether, after the sorting, the burden stays with the same household.",
      },
    },
    {
      index: "04",
      stage: { zh: "农村经济", en: "Rural economy" },
      title: { zh: "人口政策与农村经济", en: "Population policy and the rural economy" },
      text: {
        zh: "文件里的人口政策，到了农村要看人还在不在，地和营生还撑不撑得住。",
        en: "A population policy on paper, once it reaches the countryside, has to be read against whether people are still there, and whether the land and the livelihood still hold.",
      },
    },
  ],
  methodsLabel: { zh: "数据与方法", en: "Data and methods" },
  methods: {
    zh: "调查数据主要用 CHARLS 和 CFPS，看健康、时间分配和保障覆盖。社区走访用来核对一件事实际怎么做，包括谁上门、记录写在哪里、老人用不用得上。",
    en: "The survey work uses CHARLS and CFPS, for health, time allocation, and coverage. Community visits check how something is actually done: who comes, where it is written down, and whether the older person can use it.",
  },
  papersTitle: { zh: "发表论文", en: "Papers" },
  papersNote: { zh: "期刊论文，按年份排列。", en: "Journal articles, by year." },
};

export const papers = [
  {
    year: 2026,
    title: {
      zh: "分级诊疗的“负担悖论”及其破解",
      en: "The burden paradox of tiered diagnosis and treatment, and how to address it",
    },
    authors: "许文虎",
    venue: { zh: "辽宁大学学报（哲学社会科学版），CSSCI，第一作者", en: "Journal of Liaoning University. CSSCI. First author." },
    href: "",
  },
  {
    year: 2026,
    title: {
      zh: "日本“极限村落”治理实践与启示",
      en: "Governing Japan’s marginal villages",
    },
    authors: "许文虎",
    venue: { zh: "世界农业，CSSCI，第一作者", en: "World Agriculture. CSSCI. First author." },
    href: "",
  },
  {
    year: 2025,
    title: {
      zh: "制度缺位与能力透支：中国家庭主体功能变迁逻辑及社会责任重构",
      en: "Institutional absence and overstretched capacity in Chinese families",
    },
    authors: "许文虎",
    venue: { zh: "社会政策研究，CSSCI，学生第一作者；人大复印资料全文转载", en: "Social Policy Research. CSSCI. First student author. Reprinted in Renmin University reprints." },
    href: "",
  },
  {
    year: 2025,
    title: {
      zh: "A Cohort of Sociodemographic and Health-Related Risk Factors for All-Cause Mortality in Middle-Aged and Older Adults in China",
      en: "A Cohort of Sociodemographic and Health-Related Risk Factors for All-Cause Mortality in Middle-Aged and Older Adults in China",
    },
    authors: "Huxley Xu",
    venue: { zh: "Healthcare，SSCI，第一作者", en: "Healthcare. SSCI. First author." },
    href: "",
  },
  {
    year: 2024,
    title: {
      zh: "发展我国银发经济面临的挑战和优化路径研究",
      en: "Challenges and paths in China’s silver economy",
    },
    authors: "许文虎",
    venue: { zh: "价格理论与实践，北大核心，第一作者", en: "Price: Theory and Practice. PKU core. First author." },
    href: "",
  },
  {
    year: 2023,
    title: {
      zh: "分级诊疗视角下医疗保险对中老年人医疗负担的影响研究",
      en: "Health insurance and the medical burden of middle-aged and older adults",
    },
    authors: "许文虎",
    venue: { zh: "中国卫生事业管理，北大核心，第一作者", en: "Chinese Health Service Management. PKU core. First author." },
    href: "",
  },
  {
    year: 2023,
    title: {
      zh: "Unraveling the Nexus: Exploring the Relationship Between Exercise Habits and Sleep Quality in Older Adults",
      en: "Unraveling the Nexus: Exploring the Relationship Between Exercise Habits and Sleep Quality in Older Adults",
    },
    authors: "Huxley Xu",
    venue: { zh: "Healthcare，SSCI，第一作者", en: "Healthcare. SSCI. First author." },
    href: "",
  },
];

export const toolsPage = {
  kicker: { zh: "工具 / 研究资源", en: "Tools / Research resources" },
  title: { zh: "小工具与研究资源", en: "Small tools and research resources" },
  aside: {
    zh: "放你愿意公开的代码、问卷、图表模板或课堂用的小页面。每一项写清它解决什么问题、用什么做的、到哪里试用。",
    en: "A place for code, questionnaires, figure templates, or class pages you are willing to share. Say what each one is for, what it is built with, and where to try it.",
  },
};

export const tools = [
  {
    index: "01",
    category: { zh: "实地记录", en: "Field notes" },
    name: "Fieldnote",
    version: { zh: "示例 · 可替换", en: "Sample · replace" },
    stack: "Spreadsheet · Markdown",
    summary: {
      zh: "一份把访谈日期、地点、原话和自己的推测分开的记录表。回去整理时，不把印象补写成事实。",
      en: "A sheet that keeps the date, place, quoted speech, and your own guesses apart, so later writing does not turn impressions into facts.",
    },
    links: [
      { label: "GitHub", href: "https://github.com/" },
    ],
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
    version: { zh: "示例 · 可替换", en: "Sample · replace" },
    stack: "Static page",
    summary: {
      zh: "一份按周排列的阅读清单，每篇注明为什么读、读的时候看哪一段。",
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
  title: { zh: "教学论文", en: "Teaching papers" },
  aside: {
    zh: "下面列的是教学论文，不是正在开的课。",
    en: "These are papers on teaching, not courses currently offered.",
  },
};

export const courses = [
  {
    term: { zh: "2025", en: "2025" },
    level: { zh: "教学论文", en: "Teaching paper" },
    title: { zh: "北京大学第八届创新教学论文", en: "Eighth PKU innovative teaching paper award" },
    text: {
      zh: "获一等奖。",
      en: "First prize.",
    },
  },
  {
    term: { zh: "2024", en: "2024" },
    level: { zh: "教学论文", en: "Teaching paper" },
    title: { zh: "北京大学第七届创新教学论文", en: "Seventh PKU innovative teaching paper award" },
    text: {
      zh: "一等奖、二等奖各一篇。",
      en: "One first prize and one second prize.",
    },
  },
];

export const blogPage = {
  kicker: { zh: "博客", en: "Blog" },
  title: { zh: "笔记与短文", en: "Notes and short essays" },
  aside: {
    zh: "放读书笔记、方法备忘和田野里暂时写不进论文的话。不定期更新。",
    en: "Reading notes, method memos, and field observations that do not belong in a paper yet.",
  },
};

export const posts = [
  {
    slug: "before-the-visit",
    date: "2026.03.18",
    tag: { zh: "调研", en: "Fieldwork" },
    title: { zh: "进社区之前", en: "Before the visit" },
    excerpt: {
      zh: "约访、进门和记录，比提纲上的概念更决定这次能不能谈下去。",
      en: "The appointment, the doorway, and the notes decide more than the concepts on the interview guide.",
    },
    body: [
      {
        zh: "这是一篇示例短文，用来占住博客的版式。换成你自己的笔记即可。",
        en: "This is a sample essay, here so the blog has a shape. Replace it with your own note.",
      },
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
      zh: "进社区之前，提纲上的词往往还太满。先把白天的时间问清楚，后面的概念才有地方放。",
      en: "Before a community visit, the words on the guide are usually too full. Ask about the daytime first, and the concepts have somewhere to sit.",
    },
    body: [
      {
        zh: "这是一篇示例笔记。",
        en: "This is a sample note.",
      },
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
