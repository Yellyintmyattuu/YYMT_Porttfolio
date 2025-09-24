export interface Certification {
  id: string;
  title: string;
  organization: string;
  validationUrl: string;
  category: string;
  certificateId?: string;
  description?: string;
  year?: string;
}

export const certifications: Certification[] = [
  // Cybersecurity & Ethical Hacking
  {
    id: "google-cyber-1",
    title: "Google Cybersecurity Professional Certificate",
    organization: "Google (Coursera)",
    validationUrl: "https://coursera.org/verify/professional-cert/004DK1DNJJQQ",
    category: "Cybersecurity & Ethical Hacking",
    certificateId: "004DK1DNJJQQ",
    year: "2024"
  },
  {
    id: "ethical-hacking-1",
    title: "Ethical Hacking Essentials",
    organization: "EC-Council (Coursera)",
    validationUrl: "https://coursera.org/share/7314fe74384fe59b08a9824fe572a9ea",
    category: "Cybersecurity & Ethical Hacking",
    year: "2024"
  },
  {
    id: "ms-cyber-1",
    title: "Microsoft Cybersecurity Analyst Professional Certificate",
    organization: "Microsoft (Coursera)",
    validationUrl: "https://coursera.org/share/bdc9700ca2bfa6051cd7f1e215dafeb6",
    category: "Cybersecurity & Ethical Hacking",
    year: "2024"
  },
  {
    id: "palo-alto-cyber",
    title: "Palo Alto Networks Cybersecurity Professional Certificate",
    organization: "Palo Alto (Coursera)",
    validationUrl: "https://coursera.org/share/50867806baaad903ea92a48aed92759a",
    category: "Cybersecurity & Ethical Hacking",
    year: "2024"
  },
  {
    id: "cisco-junior-analyst",
    title: "Junior Cybersecurity Analyst",
    organization: "Cisco",
    validationUrl: "https://www.credly.com/badges/680ec9a0-ab53-4ed3-b896-4ae3f1a42957/public_url?fbclid=IwY2xjawM-_vNleHRuA2FlbQIxMABicmlkETBHc3JicjJkcXVPVWVES2hDAR58XEQMz4kz3zHsGIjC9rsQRB2T8P-45EiVqrJzclYWdUikX4Q6UFbsXuFF8Q_aem_MRSDrvXYcZkxa9XoNPkniQ",
    category: "Cybersecurity & Ethical Hacking",
    year: "2024"
  },
  {
    id: "cisco-ceh",
    title: "Certified Ethical Hacker",
    organization: "Cisco",
    validationUrl: "https://www.credly.com/badges/56eb17db-2c6a-4bf0-969b-dd5fcb3e3482/public_url?fbclid=IwY2xjawM-_xJleHRuA2FlbQIxMABicmlkETBHc3JicjJkcXVPVWVES2hDAR74sm3rDoLO6_UIh3BrOHeLMt6kGW91bye1fXtsnfd6-VUcqjWHKm7KzmEnBQ_aem_2Z_cxxokbNaBXSnh_THUug",
    category: "Cybersecurity & Ethical Hacking",
    year: "2024"
  },
  {
    id: "fortinet-cac",
    title: "Certified Associate in Cybersecurity",
    organization: "Fortinet",
    validationUrl: "https://training.fortinet.com/pluginfile.php/1/tool_certificate/issues/1758601545/7309185747YM.pdf",
    category: "Cybersecurity & Ethical Hacking",
    certificateId: "7309185747YM",
    year: "2024"
  },
  {
    id: "apisec-penetration",
    title: "API Penetration Testing",
    organization: "APISEC University",
    validationUrl: "https://www.credly.com/badges/5eb54342-def2-4e45-8dd3-40f7ac6cb53d",
    category: "Cybersecurity & Ethical Hacking",
    year: "2024"
  },
  {
    id: "secops-cnsp",
    title: "Certified Network Security Practitioner (CNSP)",
    organization: "The SecOps Group",
    validationUrl: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXRm8DhZ+i+iYrs1xPlgFqjkLyhF3rZBokmoiPftBWB9Jn6zCnQnkLUvPSKu20TXPt2sODFFvHaoqpjZdpZYBwNk=",
    category: "Cybersecurity & Ethical Hacking",
    year: "2024"
  },
  {
    id: "skillfront-iso",
    title: "ISO/IEC 27001:2022 Information Security Associate",
    organization: "SKILLFRONT",
    validationUrl: "https://www.skillfront.com/certifications/SkillFront-SFE016bf8566ca97-64907612743108.pdf?fbclid=IwY2xjawM_BXNleHRuA2FlbQIxMABicmlkETBHc3JicjJkcXVPVWVES2hDAR4LJCvd0pqvRk6CkvGHcq3NiA641y70NEVJZjH8PfjTRy4byezD6cWFVXnRgQ_aem_iD6iF2y8rw2WvKI5-5H9Tg",
    category: "Cybersecurity & Ethical Hacking",
    certificateId: "SFE016bf8566ca97-64907612743108",
    year: "2024"
  },
  {
    id: "hackfix-cpps",
    title: "Certified Phishing Prevention Specialist (CPPS)",
    organization: "Hack & Fix Academy",
    validationUrl: "https://academy.hackandfix.com/certificate-page/?user=73&course=53700",
    category: "Cybersecurity & Ethical Hacking",
    year: "2024"
  },
  {
    id: "hackfix-cgrc",
    title: "Certified Governance Risk & Compliance Analyst",
    organization: "Hack & Fix Academy",
    validationUrl: "https://academy.hackandfix.com/certificate-page/?user=73&course=54160",
    category: "Cybersecurity & Ethical Hacking",
    year: "2024"
  },
  {
    id: "cyberland-cehpt",
    title: "Certified Ethical Hacking & Penetration Tester (CEHPT)",
    organization: "CyberLand",
    validationUrl: "https://cyberlandsec.com/verificacion-de-certificados/?certificate_id=ae8dd459",
    category: "Cybersecurity & Ethical Hacking",
    certificateId: "ae8dd459",
    year: "2024"
  },
  {
    id: "ibsec-soc",
    title: "SOC Analyst Professional",
    organization: "IBSEC",
    validationUrl: "https://certs.ibsec.com.br?cert_hash=486889a405d8f26e",
    category: "Cybersecurity & Ethical Hacking",
    certificateId: "486889a405d8f26e",
    year: "2024"
  },
  {
    id: "ibsec-pentester",
    title: "Pentester",
    organization: "IBSEC",
    validationUrl: "https://certs.ibsec.com.br?cert_hash=5e46a1861d5bedc7",
    category: "Cybersecurity & Ethical Hacking",
    certificateId: "5e46a1861d5bedc7",
    year: "2024"
  },
  {
    id: "ibsec-cloud-security",
    title: "Cloud Security",
    organization: "IBSEC",
    validationUrl: "https://certs.ibsec.com.br?cert_hash=5b57a8e0b496c4b0",
    category: "Cybersecurity & Ethical Hacking",
    certificateId: "5b57a8e0b496c4b0",
    year: "2024"
  },
  {
    id: "opswat-icip",
    title: "Introduction to Critical Infrastructure Protection (ICIP)",
    organization: "OPSWAT",
    validationUrl: "https://learn.opswatacademy.com/certificate/9aG5M0wCUQ",
    category: "Cybersecurity & Ethical Hacking",
    certificateId: "9aG5M0wCUQ",
    year: "2024"
  },
  {
    id: "arcx-cti",
    title: "Cyber Threat Intelligence 101",
    organization: "arcX",
    validationUrl: "https://arcx.io/verify-certificate?id=94c286efcccf235595e5508094c7d7d1c7e49b5a&k=d34e6b3b9d944d0fb084443d310945de",
    category: "Cybersecurity & Ethical Hacking",
    certificateId: "94c286efcccf235595e5508094c7d7d1c7e49b5a",
    year: "2024"
  },

  // Digital Marketing & SEO
  {
    id: "semrush-seo",
    title: "International SEO Certification / SEO Techniques",
    organization: "Semrush Academy",
    validationUrl: "https://static.semrush.com/academy/certificates/6449e5b59f/yell-yint-myat-thu_30.pdf?fbclid=IwY2xjawM-7z5leHRuA2FlbQIxMABicmlkETFjQndvd1Zhc1RuVXh1Z2xzAR6_xJAZdtjP4KOQQaChXCtQXY9lfvt3SpYgQmXsyhW-yfoFTlCt6C_h0FwcXA_aem_QSa0leMi_L_lz7aVCZ0cKA",
    category: "Digital Marketing & SEO",
    year: "2024"
  },
  {
    id: "semrush-advertising",
    title: "Digital Marketing / Advertising 101",
    organization: "Semrush Academy",
    validationUrl: "https://static.semrush.com/academy/certificates/495f6eb146/yell-yint-myat-thu_22.pdf?fbclid=IwY2xjawM-719leHRuA2FlbQIxMABicmlkETFjQndvd1Zhc1RuVXh1Z2xzAR5MrVZRxF5bJPJTkMrPJ78aFIykJOl3oup3EEW5j_kxDBLXwWYGSEuhHybTvg_aem_q3QwQuU3ORh0sODrOYgcDA",
    category: "Digital Marketing & SEO",
    year: "2024"
  },
  {
    id: "hubspot-inbound",
    title: "Inbound Marketing Certified",
    organization: "HubSpot",
    validationUrl: "https://app-eu1.hubspot.com/academy/achievements/kfrxtf5w/en/1/yell-yint-na/inbound-marketing?fbclid=IwY2xjawM-8BNleHRuA2FlbQIxMABicmlkETFjQndvd1Zhc1RuVXh1Z2xzAR5Yeu7a_Dc_izWog1Q-YdtDa1d9JhxnwXmRoEu1WWOw48q8NmV4Y_7crm6Jog_aem_1kPcfO-lHcMN9_tdUS4Aig",
    category: "Digital Marketing & SEO",
    year: "2024"
  },
  {
    id: "google-digital-marketing",
    title: "Google Digital Marketing & E-Commerce Professional Certificate",
    organization: "Google (Coursera)",
    validationUrl: "https://coursera.org/share/22ea38689e8e435527da24242f0b320d",
    category: "Digital Marketing & SEO",
    year: "2024"
  },
  {
    id: "meta-marketing-analytics",
    title: "Meta Marketing Analytics Professional Certificate",
    organization: "Meta (Coursera)",
    validationUrl: "https://coursera.org/share/9c12308f50260212c0e63795f0a6fd99",
    category: "Digital Marketing & SEO",
    year: "2024"
  },

  // Cloud Computing & Infrastructure
  {
    id: "aws-cloud-consultant",
    title: "AWS Cloud Technology Consultant Professional Certificate",
    organization: "AWS (Coursera)",
    validationUrl: "https://coursera.org/share/70e319c704af470feafbecda408cf01e",
    category: "Cloud Computing & Infrastructure",
    year: "2024"
  },
  {
    id: "aws-solutions-architect",
    title: "AWS Cloud Solutions Architect Professional Certificate",
    organization: "AWS (Coursera)",
    validationUrl: "https://coursera.org/share/6381108039c1816b5a18b361a6a0e09d",
    category: "Cloud Computing & Infrastructure",
    year: "2024"
  },
  {
    id: "google-cloud-leader",
    title: "Google Cloud Digital Leader Training",
    organization: "Google (Coursera)",
    validationUrl: "https://coursera.org/share/f7130949ba63b52897480f82e1089db9",
    category: "Cloud Computing & Infrastructure",
    year: "2024"
  },
  {
    id: "aviatrix-ace",
    title: "Multicloud Network Associate (ACE)",
    organization: "Aviatrix",
    validationUrl: "https://www.credly.com/badges/2666d773-6173-40d2-a359-1991874a2546",
    category: "Cloud Computing & Infrastructure",
    year: "2024"
  },
  {
    id: "oracle-generative-ai",
    title: "Oracle Cloud Infrastructure 2025 Generative AI Professional (1Z0-1127-25)",
    organization: "Oracle",
    validationUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C1544A6AC0174B3B95E41582F843A607E91E1450A31B334300B4575B8FBD297D",
    category: "Cloud Computing & Infrastructure",
    certificateId: "1Z0-1127-25",
    year: "2025"
  },
  {
    id: "oracle-multicloud-architect",
    title: "Oracle Cloud Infrastructure 2025 Multicloud Architect Professional (1Z0-1151-25)",
    organization: "Oracle",
    validationUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=9BBB059888F3F3CC9DEE30DA47D0223A964492407081520D4EB5A09E809DD246",
    category: "Cloud Computing & Infrastructure",
    certificateId: "1Z0-1151-25",
    year: "2025"
  },

  // Data Science & Analytics
  {
    id: "ms-data-scientist",
    title: "Microsoft Azure Data Scientist Associate (DP-100)",
    organization: "Microsoft (Coursera)",
    validationUrl: "https://coursera.org/share/4fb6f58ab6b8a333585af85b65114981",
    category: "Data Science & Analytics",
    certificateId: "DP-100",
    year: "2024"
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Professional Certificate",
    organization: "Google (Coursera)",
    validationUrl: "https://coursera.org/share/5bcd92addc6ca117913946cf422ceb4b",
    category: "Data Science & Analytics",
    year: "2024"
  },
  {
    id: "google-advanced-analytics",
    title: "Google Advanced Data Analytics Professional Certificate",
    organization: "Google (Coursera)",
    validationUrl: "https://coursera.org/share/4d2a548b2cf820d65626539d77fa1821",
    category: "Data Science & Analytics",
    year: "2024"
  },
  {
    id: "oracle-data-science",
    title: "Oracle Cloud Infrastructure 2025 Data Science Professional (1Z0-1110-25)",
    organization: "Oracle",
    validationUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=20165E26613521B040E5BF43DBE89ABE78B8C2FA77CAF5FF266E89E13F647734",
    category: "Data Science & Analytics",
    certificateId: "1Z0-1110-25",
    year: "2025"
  },

  // AI & Machine Learning
  {
    id: "upenn-ai-business",
    title: "AI For Business",
    organization: "University of Pennsylvania (Coursera)",
    validationUrl: "https://coursera.org/share/5ac074c5429ee246c3ef75127335a1cf",
    category: "AI & Machine Learning",
    year: "2024"
  },
  {
    id: "ms-azure-openai",
    title: "Develop Generative AI solutions with Azure OpenAI Service",
    organization: "Microsoft",
    validationUrl: "https://learn.microsoft.com/en-gb/users/yellyintmyatthu-8139/achievements/vdtzg5am?fbclid=IwY2xjawM_AcxleHRuA2FlbQIxMABicmlkETBHc3JicjJkcXVPVWVES2hDAR5LvzH-v9anUVliY8KUyn0qAS1QYHPfuk-u-K2GRuMDNwOAQd2YtATUecKFCg_aem_VjCmDGXMnHJ9_2-RAbhslA",
    category: "AI & Machine Learning",
    year: "2024"
  },
  {
    id: "ibm-ai-developer",
    title: "IBM AI Developer Professional Certificate",
    organization: "IBM (Coursera)",
    validationUrl: "https://coursera.org/share/d1d03dcbcccdc058312ee895826c5b76",
    category: "AI & Machine Learning",
    year: "2024"
  },
  {
    id: "accenture-ai",
    title: "Digital Skills: Artificial Intelligence",
    organization: "Accenture",
    validationUrl: "https://www.futurelearn.com/certificates/efuxgsn",
    category: "AI & Machine Learning",
    year: "2024"
  },
  {
    id: "google-gemini-educator",
    title: "Gemini Certified Educator",
    organization: "Google",
    validationUrl: "https://edu.google.accredible.com/e4d3dce1-b4a5-420a-991d-34bdf79e276c?fbclid=IwY2xjawM_EnBleHRuA2FlbQIxMABicmlkETBHc3JicjJkcXVPVWVES2hDAR5PERiV-_LfMZYdl30A-PCpMOec6d1a_BjEDTfeuIZta1Tjtonunx8cluetqg_aem_Qxbe0V_YzNoJZuDlBGE3CQ#acc.oG8tYwi6",
    category: "AI & Machine Learning",
    year: "2024"
  },
  {
    id: "ms-copilot-leaders",
    title: "Microsoft 365 Copilot for Leaders",
    organization: "Microsoft (Coursera)",
    validationUrl: "https://www.coursera.org/account/accomplishments/specialization/7JFO1V93584C?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n&fbclid=IwY2xjawM-9G9leHRuA2FlbQIxMABicmlkETFFM1E4RU8xSWtIWmZrdzZ5AR7C_3yru-psIds7JRAsgVvpP2B4tQqJQvBQJycXWsY0gwLxR2g14Slh6bAXIA_aem_Is85riG5ujh7xIhhzHWRog",
    category: "AI & Machine Learning",
    certificateId: "7JFO1V93584C",
    year: "2024"
  },

  // Project Management & Business
  {
    id: "google-project-mgmt",
    title: "Google Project Management Professional Certificate",
    organization: "Google (Coursera)",
    validationUrl: "https://www.coursera.org/account/accomplishments/professional-cert/RS4VPGTR0QHH?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof&fbclid=IwY2xjawM-9U1leHRuA2FlbQIxMABicmlkETFFM1E4RU8xSWtIWmZrdzZ5AR5uIZdCtJnoh2xFx6bQwHFd_YxwfIe5tlsxGXXDP6eF50lfpJELNCVI6qOQvA_aem_jQGLUo3x60TgpaFPNuMzKw",
    category: "Project Management & Business",
    certificateId: "RS4VPGTR0QHH",
    year: "2024"
  },
  {
    id: "academy-europe-mba",
    title: "Master of Business Administration",
    organization: "Academy Europe Open University",
    validationUrl: "https://academyeurope.eu/certificates/ad5ef292f57bf21724d0bd0e653da31a/?fbclid=IwY2xjawM_Bk1leHRuA2FlbQIxMABicmlkETBHc3JicjJkcXVPVWVES2hDAR7BO64_7ETJbJnXKy6z2OoCgfPSw9Nszs9yJ72tWmtXL26km2jdt3U5igc3Ng_aem_ZWu0_wuqKh_wmOztHWD_mQ",
    category: "Project Management & Business",
    certificateId: "ad5ef292f57bf21724d0bd0e653da31a",
    year: "2024"
  },
  {
    id: "sfux-capital-markets",
    title: "Understanding Capital Markets",
    organization: "SFUx",
    validationUrl: "https://sfux.strategyfirst.edu.mm/certificate/check/U0ZVMjVBMDAzOFgf3",
    category: "Project Management & Business",
    certificateId: "U0ZVMjVBMDAzOFgf3",
    year: "2024"
  },
  {
    id: "lund-business-law",
    title: "European Business Law",
    organization: "LUND University (Coursera)",
    validationUrl: "https://coursera.org/share/2e49ec53f6aca9b3d37b86e556c4a5e1",
    category: "Project Management & Business",
    year: "2024"
  },
  {
    id: "queen-mary-cloud-law",
    title: "Cloud Computing Law",
    organization: "Queen Mary University (Coursera)",
    validationUrl: "https://coursera.org/share/ddaae60a6754aeb3abdbe7865efd34ec",
    category: "Project Management & Business",
    year: "2024"
  },
  {
    id: "ai-law",
    title: "AI & Law",
    organization: "Coursera",
    validationUrl: "https://coursera.org/share/766501ae40f569581184fa057b6840eb",
    category: "Project Management & Business",
    year: "2024"
  },

  // Software Development & IT Support
  {
    id: "google-it-support",
    title: "Google IT Support Professional Certificate",
    organization: "Google (Coursera)",
    validationUrl: "https://coursera.org/share/2d6e750f404545d74fb6eb6bf54810da",
    category: "Software Development & IT Support",
    year: "2024"
  },
  {
    id: "ibm-it-support",
    title: "IBM IT Support Professional Certificate",
    organization: "IBM (Coursera)",
    validationUrl: "https://coursera.org/share/33724fd4aadebe75ddffb74e1aab2f5a",
    category: "Software Development & IT Support",
    year: "2024"
  },
  {
    id: "cpanel-cpp",
    title: "cPanel Professional Certification (CPP)",
    organization: "cPanel University",
    validationUrl: "http://university.cpanel.net",
    category: "Software Development & IT Support",
    certificateId: "c704-0798-5ab6-d9c9",
    year: "2024"
  },
  {
    id: "tcm-soft-skills",
    title: "Soft Skills for Job Market",
    organization: "TCM Security",
    validationUrl: "https://academy.tcm-sec.com/courses/2474808/certificate",
    category: "Software Development & IT Support",
    year: "2024"
  },
  {
    id: "open-english-career",
    title: "English for Career Development MOOC",
    organization: "Online Professional English Network",
    validationUrl: "https://badgr.com/public/assertions/icVRrfXoSsqI-mmFvHQHaw",
    category: "Software Development & IT Support",
    year: "2024"
  },
  {
    id: "oneroadmap-devops",
    title: "DevOps Engineer",
    organization: "OneRoadmap",
    validationUrl: "https://oneroadmap.io/skills/devops/certificate/CERT-8E35BB27?fbclid=IwY2xjawM_EjxleHRuA2FlbQIxMABicmlkETBHc3JicjJkcXVPVWVES2hDAR6JofOHIFRT67ejl4XeNwpdSWJ3kGond4vo_EMoNp2Hq37TDVmyETnqH5H5Vw_aem_33sQLM56AFOUTuIThvhxhg",
    category: "Software Development & IT Support",
    certificateId: "CERT-8E35BB27",
    year: "2024"
  },

  // Network & Systems Administration
  {
    id: "ruijie-rcna-routing",
    title: "Ruijie Certified Network Associate (RCNA): Routing & Switching",
    organization: "Ruijie",
    validationUrl: "#", // No direct URL provided
    category: "Network & Systems Administration",
    certificateId: "074587RCNA-Routing&Switching12001",
    description: "RGID: RGX00262586",
    year: "2024"
  },
  {
    id: "ruijie-rcna-wlan",
    title: "Ruijie Certified Network Associate (RCNA): Wireless Local Area Network",
    organization: "Ruijie",
    validationUrl: "#", // No direct URL provided
    category: "Network & Systems Administration",
    certificateId: "073022RCNA-WLAN10436",
    description: "RGID: RGX00262586",
    year: "2024"
  },
  {
    id: "engenius-ecnp",
    title: "EnGenius Certified Network Professional (ECNP)",
    organization: "EnGenius",
    validationUrl: "https://academy.engenius.ai",
    category: "Network & Systems Administration",
    certificateId: "6788bd6d323ed142940ef13d",
    year: "2024"
  },
  {
    id: "engenius-ecsp",
    title: "EnGenius Certified Security Professional (ECSP)",
    organization: "EnGenius",
    validationUrl: "https://academy.engenius.ai",
    category: "Network & Systems Administration",
    certificateId: "6788992f10000200590b9f9d",
    year: "2024"
  },
  {
    id: "engenius-ecwp",
    title: "EnGenius Certified Wireless Professional (ECWP)",
    organization: "EnGenius",
    validationUrl: "https://academy.engenius.ai",
    category: "Network & Systems Administration",
    certificateId: "678886a14b907cec470d7e45",
    year: "2024"
  },
  {
    id: "aruba-aasx",
    title: "Accredited SD-WAN Expert (AASX)",
    organization: "Aruba",
    validationUrl: "#", // No direct URL provided
    category: "Network & Systems Administration",
    year: "2024"
  },
  {
    id: "aruba-aasp",
    title: "Accredited SD-WAN Professional (AASP)",
    organization: "Aruba",
    validationUrl: "#", // No direct URL provided
    category: "Network & Systems Administration",
    year: "2024"
  },
  {
    id: "ruckus-icx",
    title: "RUCKUS Accredited ICX Implementer",
    organization: "RUCKUS/CommScope",
    validationUrl: "https://certifications.commscope.com/2271566c-c0e2-4f5b-8ac2-da26f91be5e5#acc.r408THiO",
    category: "Network & Systems Administration",
    year: "2024"
  },
  {
    id: "qulays-policy",
    title: "Qulays Certified Specialist: Policy Compliance",
    organization: "Qulays",
    validationUrl: "#", // No direct URL provided
    category: "Network & Systems Administration",
    year: "2024"
  },
  {
    id: "qulays-asset-mgmt",
    title: "Qulays Certified Specialist: Cybersecurity Asset Management",
    organization: "Qulays",
    validationUrl: "#", // No direct URL provided
    category: "Network & Systems Administration",
    year: "2024"
  },

  // Specialized Security & Forensics
  {
    id: "paraben-mobile",
    title: "Mobile Operators (Android + iOS)",
    organization: "Paraben Corporation",
    validationUrl: "https://my-certificates.com/certificates/6705aa6a12b77454ef5e9e73?fbclid=IwY2xjawM-_2VleHRuA2FlbQIxMABicmlkETBHc3JicjJkcXVPVWVES2hDAR4ZEYcJ8D_kon7Xo8szx36q6WmPpstRmUsTtEtq53TuciRhU7yEEvyOtYgvzQ_aem_23ElAzzboQ6_7hF6ENcK0w",
    category: "Specialized Security & Forensics",
    year: "2024"
  },
  {
    id: "paraben-dp2c",
    title: "DP2C Operator",
    organization: "Paraben Corporation",
    validationUrl: "https://my-certificates.com/certificates/6705b16142058eb42f471a8a?fbclid=IwY2xjawM-_2JleHRuA2FlbQIxMABicmlkETBHc3JicjJkcXVPVWVES2hDAR4m_TcppubqodPvHv75O2mPxpqUx5GANhVYqXmGPEoXWIK4BH-b4alsQEmWlg_aem_zztJm_ZUOplyvrzJ4nhAyA",
    category: "Specialized Security & Forensics",
    year: "2024"
  },
  {
    id: "paraben-computer-op",
    title: "Computer Operator (Batch OS)",
    organization: "Paraben Corporation",
    validationUrl: "https://my-certificates.com/certificates/6705b0b042058eb42f471a84?fbclid=IwY2xjawM-_91leHRuA2FlbQIxMABicmlkETBHc3JicjJkcXVPVWVES2hDAR53rqbD4y-1HDs8INVoa6Xka8T9xn48ezYz7fp56D-O5yU7UDUZPcvtmgcruQ_aem_tNEcHSodRRK5lJOuiIyjrQ",
    category: "Specialized Security & Forensics",
    year: "2024"
  },
  {
    id: "btlo-foxy",
    title: "BTLO - FOXY",
    organization: "Blue Team Labs Online",
    validationUrl: "https://blueteamlabs.online/achievement/share/85203/116",
    category: "Specialized Security & Forensics",
    year: "2024"
  },
  {
    id: "btlo-countdown",
    title: "BTLO - COUNTDOWN",
    organization: "Blue Team Labs Online",
    validationUrl: "https://blueteamlabs.online/achievement/share/85203/1",
    category: "Specialized Security & Forensics",
    year: "2024"
  },
  {
    id: "csilinux-investigator",
    title: "CSI Linux Certified Investigator",
    organization: "CSI Linux",
    validationUrl: "#", // No direct URL provided
    category: "Specialized Security & Forensics",
    certificateId: "BvQPWHUcJn",
    year: "2024"
  },
  {
    id: "dfir-winfe",
    title: "WinFE – Windows Forensics Environment",
    organization: "DFIR Training",
    validationUrl: "#", // No direct URL provided
    category: "Specialized Security & Forensics",
    year: "2024"
  },

  // Academic & Professional Development
  {
    id: "who-erf",
    title: "Introduction to the Emergency Response Framework (ERF)",
    organization: "World Health Organization (WHO)",
    validationUrl: "#", // QR Code only
    category: "Academic & Professional Development",
    description: "QR Code verification available",
    year: "2024"
  },
  {
    id: "savelife-acls",
    title: "SaveaLife – ACLS Recertification 2025 (Dental)",
    organization: "SaveaLife",
    validationUrl: "#", // No direct URL provided
    category: "Academic & Professional Development",
    year: "2025"
  }
];

export const categories = [
  "Cybersecurity & Ethical Hacking",
  "Digital Marketing & SEO", 
  "Cloud Computing & Infrastructure",
  "Data Science & Analytics",
  "AI & Machine Learning",
  "Project Management & Business",
  "Software Development & IT Support",
  "Network & Systems Administration",
  "Specialized Security & Forensics",
  "Academic & Professional Development"
];

export const getCertificationsByCategory = (category: string): Certification[] => {
  return certifications.filter(cert => cert.category === category);
};

export const getCertificationStats = () => {
  const stats = categories.map(category => ({
    category,
    count: getCertificationsByCategory(category).length
  }));
  
  return {
    totalCertifications: certifications.length,
    categoriesCount: categories.length,
    categoryStats: stats
  };
};