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
      stack: "Python · Flask · Sentence-Transformers · FAISS · Ollama · SQLite",
      lead: "An <strong>end-to-end</strong> resume-screening platform that helps recruiters rank applicants, identify skill gaps, and interact with candidate profiles through a <strong>retrieval-augmented generation (RAG)</strong> system.",
      points: [
        "Built a <strong>document-processing pipeline</strong> that extracts information from <strong>PDF and DOCX</strong> resumes, cleans and normalizes the text, and generates <strong>weighted candidate profiles</strong> from skills and experience.",
        "Engineered a <strong>hybrid scoring engine</strong> that combines <strong>TF-IDF similarity</strong> with <strong>semantic embeddings</strong> to produce candidate rankings and <strong>explainable match scores</strong>.",
        "Implemented a backend <strong>orchestration layer</strong> that ranks applicants, runs background tasks, stores embeddings, and manages the retrieval pipeline.",
        "Integrated a <strong>FAISS-based vector search engine</strong> with a locally hosted LLM through <strong>Ollama</strong>, letting recruiters ask natural-language questions that stay grounded in the uploaded resumes.",
        "Added <strong>role-based access control</strong>, secure authentication, resume-upload validation, persistent <strong>SQLite</strong> storage, logging, and background processing.",
        "Delivered a complete <strong>web interface</strong> for recruiters and applicants that runs <strong>fully locally</strong>, with no reliance on external cloud APIs.",
      ],
    },
    {
      meta: "2026",
      title: "AI-Powered Real-Time Cricket Auction Simulator and Player Intelligence Platform",
      repo: "https://github.com/sarveshvaran-senthilkumar/auction-simulator",
      stack: "FastAPI · WebSockets · asyncio · React · PWA",
      lead: "A <strong>real-time</strong> IPL auction simulator where you compete against <strong>AI-controlled franchises</strong> that follow the same retention, purse, squad-composition, and <strong>Right-to-Match (RTM)</strong> rules used in the IPL.",
      points: [
        "Processed <strong>ball-by-ball data from 1,200+ matches</strong> to create player profiles and performance metrics.",
        "Built a <strong>valuation engine</strong> that estimates a player's market value from performance, <strong>role scarcity</strong>, team requirements, and budget constraints.",
        "Implemented the <strong>auction engine</strong> with <strong>FastAPI, WebSockets, and asyncio</strong>, letting multiple users and AI teams participate in the same auction simultaneously.",
        "Fixed several <strong>concurrency issues</strong> along the way, including infinite bidding loops and player requeue problems.",
        "Enforced authentic IPL mechanics — <strong>retention, purse limits, squad composition, and RTM cards</strong>.",
        "Added <strong>JWT authentication, Google OAuth</strong>, dark-mode support, responsive mobile layouts, and deployment on <strong>Render and Vercel</strong>.",
      ],
    },
    {
      meta: "2026",
      title: "Collaborative Expense Tracking Platform with Shared Management and Debt Settlement",
      repo: "https://github.com/sarveshvaran-senthilkumar/E-Split",
      stack: "FastAPI · SQLAlchemy · PostgreSQL · React · WebSockets · Docker",
      lead: "A <strong>full-stack</strong> expense-sharing platform that helps groups, roommates, and households track expenses, split bills, settle balances, and monitor spending patterns <strong>in real time</strong>.",
      points: [
        "Designed a <strong>double-entry ledger system</strong> and implemented multiple splitting methods — <strong>equal, exact, percentage, and share-based</strong>.",
        "Built a <strong>debt-reduction algorithm</strong> that minimizes the number of transactions required to settle outstanding balances within a group.",
        "Developed a <strong>layered backend</strong> with <strong>FastAPI, SQLAlchemy, PostgreSQL, and WebSockets</strong> for data consistency, real-time updates, and safe concurrent operations.",
        "Implemented <strong>JWT authentication, refresh-token rotation, role-based access control, and rate limiting</strong> to harden security.",
        "Added <strong>budgeting insights</strong> and <strong>one-click UPI payment links</strong> for frictionless settlement.",
        "Shipped with responsive mobile layouts, <strong>Docker-based deployment</strong>, and a fully containerized development environment.",
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
