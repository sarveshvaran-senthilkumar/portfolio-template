/**
 * Single source of truth for all portfolio content.
 * Presentation components read from here — edit copy in this file only.
 */

export const LINKS = {
  github: "https://github.com/sarveshvaran-senthilkumar",
  githubLabel: "github.com/sarveshvaran-senthilkumar",
  linkedin: "https://www.linkedin.com/in/sarveshvaran-senthilkumar",
  linkedinLabel: "linkedin.com/in/sarveshvaran-senthilkumar",
  email: "sarveshsenthil2005@gmail.com",
  phone: "+91 87789 93228",
  phoneHref: "tel:+918778993228",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];

export const HERO = {
  kicker: "Hi there, I'm",
  firstName: "Sarveshvaran",
  lastName: "Senthilkumar",
  roles: [
    "Artificial Intelligence",
    "LLM & RAG",
    "Computer Vision",
    "Machine Learning & Deep Learning",
    "Backend & Streaming System Builder",
  ],
  paragraphs: [
    "I build production-grade AI systems that transform ideas into scalable, real-world applications.",
    "My expertise spans LLMs, AI agents, computer vision, deep learning, and cloud-native AI infrastructure. From designing agentic RAG architectures to deploying intelligent automation and medical AI solutions, I focus on building systems that are reliable, efficient, and ready for production.",
    "I'm currently developing context-aware LLM agents and process-isolated AI workflows, with a strong emphasis on scalability, reliability, and practical deployment.",
  ],
  motto: "Always learning. Always building.",
  codeCard: {
    fileName: "ai_engineer.py",
    build: [
      "Deep Learning",
      "Prompt Engineering",
      "LLM Agents",
      "RAG Pipelines",
      "Computer Vision",
      "Streaming Systems",
    ],
  },
};

export const STATS = [
  { value: 1, prefix: "~", suffix: "", label: "Year of IT Experience", href: "#experience" },
  { value: 2, prefix: "", suffix: "", label: "IEEE Conferences", href: "#research" },
  { value: 3, prefix: "", suffix: "+", label: "Major Projects", href: "#projects" },
];

export const ABOUT = {
  title: ["Enterprise AI, engineered for ", "production"],
  intro:
    "From concept to deployment, I turn complex business problems into intelligent systems, combining modern AI engineering with the infrastructure discipline needed to run dependably at enterprise scale.",
  cards: [
    {
      title: "Generative AI & Agentic Systems",
      body: "I design and deploy LLM-powered agents, agentic RAG architectures, and orchestrated AI workflows, turning complex manual business processes into systems that run end to end on their own.",
    },
    {
      title: "Computer Vision & Deep Learning",
      body: "I've built production-grade vision and deep learning systems that deliver inference in real time, powering intelligent automation and AI assisted decision-making in healthcare and enterprise settings.",
    },
    {
      title: "Cloud & AI Infrastructure",
      body: "I engineer high-throughput streaming and distributed services with Kafka, PySpark, Redis, and FastAPI engineered for low latency and fault tolerance on AWS and Azure.",
    },
  ],
};

export const SKILLS = {
  title: ["The stack I ", "build with"],
  groups: [
    { name: "Programming Languages", items: "Python, Java, SQL" },
    {
      name: "AI Concepts",
      items:
        "Machine Learning, Deep Learning, LLM Applications, RAG Pipelines, Computer Vision, Explainable AI, Multimodal AI",
    },
    {
      name: "Backend & AI Engineering",
      items:
        "FastAPI, Flask, REST APIs, Kafka, PySpark, Redis, Vector Databases, LangChain, Real-Time Streaming Systems",
    },
    { name: "Databases", items: "MongoDB, PostgreSQL, MySQL" },
    { name: "Cloud & Tools", items: "Git, GitHub, Docker, Linux, AWS Basics" },
    {
      name: "Core Concepts",
      items: "DSA, DBMS, Operating Systems, OOP, Distributed Systems, System Design Fundamentals",
    },
  ],
};

export const EXPERIENCE = {
  title: ["The journey ", "so far"],
  work: [
    {
      meta: "Feb 2026 — Present · Chennai, India",
      role: "AI Engineer",
      org: "Mavens-i Softech",
      bullets: [
        "I architect agentic AI systems, LLM-powered agents and RAG pipelines <strong>with process isolation</strong>, built on LangChain and LangGraph and deployed on AWS and Azure AI Foundry.",
        "I design <strong>orchestrated AI workflows</strong> that automate complex enterprise processes, balancing model quality with the cost, latency, and reliability demands of production.",
        "I own features end to end: scoping requirements with product and engineering teams, driving them through agile sprints, and supporting them live in production.",
      ],
    },
    {
      meta: "Nov 2025 — Feb 2026 · Chennai, India",
      role: "AI Intern",
      org: "Mannit Innovations",
      bullets: [
        "I specialized in <strong>real-time computer vision</strong>, building <strong>deep learning</strong> models that process live visual data and shipping them as working systems.",
        "I engineered the serving layer behind those models: inference pipelines and REST APIs optimized for low latency and dependable performance.",
        "I got hands-on with the entire machine learning lifecycle, from model development and evaluation to deployment and monitoring, laying the foundation I build on today.",
      ],
    },
  ],
  education: {
    meta: "2022 — 2026 · Chennai, India",
    degree: "B.Tech — Computer and Communication Engineering",
    org: "Amrita Vishwa Vidyapeetham",
    bullets: [
      "I completed my <strong>B.Tech</strong>, building a strong foundation through coursework in Machine Learning, Deep Learning, Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, Internet of Things, and Embedded Computing.",
      "I completed a <strong>Minor Degree in Data Science and Analytics</strong>, with coursework in Machine Learning, Python for Data Science, Big Data Analytics, Database Management Systems, and Data Visualization.",
      "Beyond academics, I actively volunteered in student clubs and coordinated campus events, strengthening my leadership, teamwork, and organizational skills.",
    ],
  },
  achievements: [
    {
      meta: "Dec 2023",
      title: "Runner-Up — 24-Hour Coding Hackathon",
      stack: "Redis · Flask · Real-Time",
      body: "Built a scalable event ticket booking platform with Redis caching and real-time booking workflows under a 24-hour deadline.",
    },
    {
      meta: "Dec 2022 · SRM Institute of Science and Technology",
      title: "Third Runner-Up — Ideathon",
      stack: "RTOS · IoT · Embedded",
      body: "Developed an RTOS-based smart home automation system focused on task scheduling and device control.",
    },
  ],
};

export const PROJECTS = {
  title: ["Things I've ", "built"],
  intro:
    "A selection of systems I've built and designed. Click any project to open its GitHub repository.",
  items: [
    {
      meta: "2026",
      title: "Resume Screening and Candidate Intelligence Platform Embedded with AI-Assistance",
      repo: "https://github.com/sarveshvaran-senthilkumar/AI-Resume-Screener",
      stack: "Python · Flask · Sentence-Transformers · FAISS · scikit-learn",
      lead: "An intelligent resume-screening platform that ranks applicants against a job description using <strong>hybrid AI scoring</strong>, with skill-gap analysis and a built-in RAG assistant for HR teams.",
      points: [
        "Built a <strong>hybrid scoring engine</strong> fusing TF-IDF keyword matching with all-MiniLM-L6-v2 semantic embeddings, calibrated to a single <strong>0–100 relevance score</strong>.",
        "Added a <strong>RAG assistant</strong> that answers natural-language questions about the applicant pool, grounded in resume data via <strong>FAISS</strong> vector retrieval.",
        "Automated <strong>skill-gap analysis</strong>, surfacing matched vs. missing skills per candidate with clear explanations.",
        "Engineered <strong>role-based dashboards</strong> with background ranking and <strong>cached embeddings</strong>, eliminating redundant recomputation on repeat runs.",
      ],
    },
    {
      meta: "2026",
      title: "AI-Powered Real-Time Cricket Auction Simulator and Player Intelligence Platform",
      repo: "https://github.com/sarveshvaran-senthilkumar/auction-simulator",
      stack: "FastAPI · WebSockets · React · Vite · PWA",
      lead: "A phone-first, installable PWA that recreates the IPL mega-auction — manage a <strong>₹120 Cr</strong> franchise and bid live against <strong>9 AI-controlled teams</strong> over real-time WebSockets.",
      points: [
        "Built <strong>real-time bidding</strong> against <strong>9 AI franchises</strong> with configurable thinking delays (<strong>700–2600 ms</strong>) and live purse/squad comparison.",
        "Implemented a <strong>2025-rules retention phase</strong> with <strong>RTM (Right to Match)</strong> cards.",
        "Designed an <strong>impact-score model</strong> blending career stats, contextual value, and price curves, derived from <strong>1,243 Cricsheet matches</strong>.",
        "Shipped as an <strong>installable PWA</strong> with 3 auction modes spanning <strong>30 minutes to 2+ hours</strong>.",
      ],
    },
    {
      meta: "2026",
      title: "Collaborative Expense Tracking Platform with Shared Management and Debt Settlement",
      repo: "https://github.com/sarveshvaran-senthilkumar/E-Split",
      stack: "FastAPI · SQLAlchemy · React · Tailwind · WebSockets",
      lead: "A shared-expense tracker for hostel, PG, and flat roommates — split bills, settle up over UPI, and get budget nudges when spending drifts.",
      points: [
        "Implemented <strong>4 flexible split modes</strong> — equal, exact, percentage, and share-based.",
        "Computed net balances with <strong>optimal settlement paths</strong>, minimizing the number of transactions needed to settle a group.",
        "Built a <strong>two-step payer-confirms-payee</strong> settlement flow with <strong>real-time WebSocket</strong> updates per group.",
        "Hardened money handling with <strong>integer minor units</strong> (zero float errors) and <strong>15-minute JWT access tokens</strong> with rotating refresh tokens.",
      ],
    },
  ],
};

export const RESEARCH = {
  title: ["Ideas I've taken to ", "print"],
  intro:
    "IEEE-published research applying deep learning, multimodal fusion, and explainable AI to healthcare diagnostics.",
  papers: [
    {
      year: "2026",
      title: "Automatic Diabetic Retinopathy Grading using Hybrid Feature Fusion Approach",
      doi: "https://doi.org/10.1109/I5CPS67958.2026.11452585",
      stack: "Transfer Learning · Image Enhancement · EfficientNet · Feature Fusion",
      points: [
        "I developed a hybrid approach that fuses EfficientNet deep features with handcrafted color and texture features to grade diabetic retinopathy severity from retinal fundus images.",
        "I worked with the APTOS 2019 dataset, tackling severe class imbalance with class weighting and augmentation so the model stays sensitive across every severity level.",
        "My best pipeline, built on Random Forest, outperformed other classifiers by over 2% and showed that deep and handcrafted features complement each other, especially on the minority severe classes, making screening more reliable and clinically feasible.",
      ],
      metrics: [
        { value: "73.41%", label: "Test Accuracy" },
        { value: "0.8411", label: "Cohen's Kappa" },
      ],
    },
    {
      year: "2025",
      title: "Multimodal Deep Learning Framework for Early Parkinson's Diagnosis",
      doi: "https://doi.org/10.1109/ICCCNP63914.2025.11233723",
      stack: "Multimodal Classification · Biomarkers · KNN & SVM · Decision-Level Fusion",
      points: [
        "I built a multimodal framework that combines structural MRI and speech signal analysis to catch Parkinson's Disease early and accurately.",
        "I used AlexNet for deep feature extraction with PCA for dimensionality reduction, then trained and validated tuned SVM and KNN classifiers on both the MRI and speech feature sets.",
        "By fusing the MRI and speech predictions at the decision level I improved diagnostic accuracy, and I packaged the results in a MATLAB tool designed for clinical usability.",
      ],
      metrics: [
        { value: "92%", label: "Accuracy" },
        { value: "90%", label: "Precision" },
        { value: "0.89", label: "F1-Score" },
      ],
    },
  ],
};

export const CONTACT = {
  title: ["Let's ", "connect"],
  intro: "Open to roles, collaborations, and interesting AI problems. Reach me on any of these.",
};

export const CLOSING = {
  quote: [
    "I don't just build models, I build ",
    "outcomes",
    ". Give me a hard problem and the freedom to solve it, and I'll turn it into something that ships, scales, and delivers.",
  ],
  sign: "— Sarveshvaran Senthilkumar",
  cta: "Let's build together",
};
