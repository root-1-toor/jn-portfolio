// ── NAVIGATION ──────────────────────────────────────────────
export const NAV = ["work", "stack", "about", "writing"];

// ── PROJECTS ────────────────────────────────────────────────
export const PROJECTS = [
  {
  id: "say-so",
  tag: "Full Stack · Voice",
  tagColor: "green",
  title: "Say So — Voice Reviews",
  year: "2026",
  desc: "Built a voice-first review platform from scratch — records the reviewer's actual audio via MediaRecorder, runs live browser-based transcription in parallel via the Web Speech API, and posts both to a public wall with instant playback. No accounts, no API keys.",
  stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Web Speech API", "MediaRecorder API", "Vercel"],
  metrics: ["Real audio + live transcript", "Zero API keys", "60s max clip", "Deployed in <60s"],
  link: "https://say-so-seven.vercel.app/",
  curriculum: null,
},
  {
    id: "thrift",
    tag: "security",
    tagColor: "red",
    title: "Thrift Investment",
    year: "2026",
    desc: "Identified active SEO poisoning attack on a live 60-year-old finance company — 23 hidden casino spam links injected via compromised PHP server, positioned thousands of pixels off-screen to fool crawlers. Rebuilt entire site from scratch in pure HTML/CSS. Zero JavaScript. 100/100/100 Lighthouse.",
    stack: ["HTML5", "CSS3", "GitHub Pages", "JSON-LD", "Security Forensics"],
    metrics: ["100/100/100 Lighthouse", "31s → 1.2s load", "Zero JS", "Active attack neutralized"],
    link: "https://root-1-toor.github.io/thrift-investment/",
    curriculum: null,
  },
  {
    id: "amex",
    tag: "MERN · Scale",
    tagColor: "green",
    title: "American Express — US Consumer Card Shop",
    year: "2021–2023",
    desc: "Contributed to MERN stack for the US Consumer Card Shop. Built the 'check-for-offers' endpoint boosting user engagement by 15% for 100,000+ daily users. Led Angular → React migration, cutting cross-browser issues. Led Agile sprints with Jenkins and Jest cutting deployment time 20% via CI/CD pipelines.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Jenkins", "Jest", "Angular"],
    metrics: ["+15% engagement", "100K+ daily users", "-20% deploy time", "Angular → React"],
    link: null,
    curriculum: null,
  },
  {
    id: "edx-fullstack",
    tag: "Education · Full Stack",
    tagColor: "purple",
    title: "edX Full Stack Web Dev — UPenn · GWU · Rutgers",
    year: "2020–2025",
    desc: "Instructed intensive full stack bootcamps across 12 nationwide cohorts. Curriculum covered the complete MERN stack from HTML/CSS/JS fundamentals through React, Node, Express, and MongoDB — including responsive design, REST APIs, authentication, deployment, CI/CD concepts, and Agile methodologies. 250+ hours of live instruction with personalized 1-on-1 guidance.",
    stack: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB", "REST APIs", "Git", "Agile"],
    metrics: ["350+ students", "12 cohorts", "250+ hours live", "+25% completion rate"],
    link: null,
    curriculum: [
      "Web fundamentals — HTML5, CSS3, Box Model, responsive design",
      "JavaScript ES6+ — DOM manipulation, async/await, fetch API",
      "React — components, hooks, state management, Redux",
      "Node.js + Express — REST APIs, middleware, authentication",
      "MongoDB + Mongoose — schema design, CRUD, aggregation",
      "Full deployment — GitHub, Heroku, CI/CD pipelines",
      "Testing — unit testing, Jest, test coverage",
      "Agile methodologies — sprints, standups, project management",
    ],
  },
  {
    id: "edx-data",
    tag: "Education · Data Analytics",
    tagColor: "gold",
    title: "edX Data Analytics — UPenn · GWU · Rutgers",
    year: "2020–2025",
    desc: "Designed and taught curricula for 7 data analytics cohorts across top universities. Covered the full data pipeline from Excel and SQL through Python, Pandas, and machine learning with scikit-learn. Students built real-world projects analyzing finance, healthcare, and custom datasets using big data tools and interactive visualizations.",
    stack: ["Python", "Pandas", "Matplotlib", "scikit-learn", "SQL", "Tableau", "D3.js", "R", "Excel", "VBA"],
    metrics: ["7 data cohorts", "Big data tools", "ML pipelines", "Industry projects"],
    link: null,
    curriculum: [
      "Excel advanced — pivot tables, VBA scripting, forecasting, statistical modeling",
      "Python — Pandas, NumPy, data cleaning, transformation pipelines",
      "Visualization — Matplotlib, Seaborn, D3.js, Tableau dashboards",
      "SQL — queries, joins, aggregation, database design",
      "APIs — data extraction, JSON handling, automation",
      "Machine learning — scikit-learn, regression, classification, clustering",
      "R — statistical analysis, ggplot2, data modeling",
      "Big data — real-world datasets in finance, healthcare, custom tracks",
    ],
  },
  {
    id: "pihole",
    tag: "Cybersecurity · Linux",
    tagColor: "cyan",
    title: "Pi-hole Network Fortress",
    year: "2025",
    desc: "Hardened network with Debian Linux on Raspberry Pi. Eliminated unnecessary processes (Avahi Daemon, rtkit-daemon), configured Pi-hole with curated adlists achieving a 660K+ domain blocklist. Verified near-zero trackers on EFF CoverYourTracks, blocked phishing via nslookup, secured DNS with DNSSEC.",
    stack: ["Raspberry Pi", "Debian Linux", "Pi-hole", "DNSSEC", "Bash", "lsof", "nslookup"],
    metrics: ["660K+ domains blocked", "Near-zero trackers", "DNSSEC secured", "Full network coverage"],
    link: null,
    curriculum: null,
  },
  {
    id: "verizon",
    tag: "Security · Forensics",
    tagColor: "red",
    title: "Verizon System Vulnerability Report",
    year: "2025",
    desc: "Identified unauthorized access and backend sync vulnerabilities in Verizon's customer-facing systems using Firefox DevTools. Exposed an unauthorized device added by a known bad actor, uncovered inconsistent device visibility across the My Verizon app and account overview, and discovered PII exposure in client-side HTML.",
    stack: ["Firefox DevTools", "Network Analysis", "Security Forensics", "HTML Auditing"],
    metrics: ["Unauthorized device exposed", "PII leak identified", "Sync vuln documented", "Backend exploit mapped"],
    link: null,
    curriculum: null,
  },
];

// ── STACK ────────────────────────────────────────────────────
export const STACK = {
  Languages:    ["JavaScript", "Python", "HTML5", "CSS3", "SQL", "Bash", "PowerShell", "R"],
  Frameworks:   ["React/Redux", "Node.js", "Express.js", "scikit-learn", "D3.js"],
  Cybersecurity:["Network Forensics", "Malware Analysis", "DNSSEC", "Pi-hole", "2FA", "Rkhunter"],
  Databases:    ["MongoDB", "MySQL", "SQLite", "Redis", "PostgreSQL"],
  Tools:        ["Git", "Jenkins", "Jest", "Tableau", "HTOP", "DPKG"],
  Methods:      ["Agile", "Scrum", "Unit Testing", "CI/CD", "Secure Coding"],
};

// ── ABOUT ────────────────────────────────────────────────────
export const ABOUT_CARDS = [
  { label: "Current focus", val: "Security + Performance" },
  { label: "Location",      val: "New York / NJ" },
  { label: "Background",    val: "MERN · Security · Education" },
  { label: "Available for", val: "Contract · Full-time" },
];

// ── BLOG ─────────────────────────────────────────────────────
export const BLOG = [
  {
    tag: "Security",
    tagColor: "red",
    title: "How I Found 23 Hidden Casino Links on a Live Finance Site",
    date: "May 2026",
    desc: "A walkthrough of identifying, documenting, and neutralizing an active SEO poisoning attack on a 60-year-old business website — from Lighthouse audit to DNS cutover.",
  },
  {
    tag: "Philosophy",
    tagColor: "green",
    title: "Zero JS. 100/100. Why Plain HTML Still Wins.",
    date: "May 2026",
    desc: "After rebuilding a site to perfect Lighthouse scores with zero JavaScript, some thoughts on what modern web dev gets wrong about complexity.",
  },
  {
    tag: "Cybersecurity",
    tagColor: "cyan",
    title: "Building a 660K Domain Blocklist on a Raspberry Pi",
    date: "Apr 2025",
    desc: "Full walkthrough of setting up Pi-hole on Debian Linux, configuring adlists, enabling DNSSEC, and achieving near-zero tracker readings.",
  },
  {
    tag: "Education",
    tagColor: "purple",
    title: "Teaching 350 Students What Nobody Taught Me",
    date: "2025",
    desc: "Reflections on 5 years of bootcamp instruction across UPenn, GWU, and Rutgers — what works, what doesn't, and what the industry consistently misses.",
  },
];

// ── HERO STATS ───────────────────────────────────────────────
export const STATS = [
  { label: "years experience",    val: 10,      suffix: "+", static: false, start: 0    },
  { label: "students mentored",   val: 350,     suffix: "+", static: false, start: 0    },
  { label: "daily users impacted",val: "100K+", suffix: "",  static: true               },
  { label: "domains blocked",     val: "660K+", suffix: "",  static: true               },
];
