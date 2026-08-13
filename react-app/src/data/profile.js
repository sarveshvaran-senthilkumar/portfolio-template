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
  { id: "achievements", label: "Achievements" },
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
};

export const ACHIEVEMENTS = {
  title: ["What I've ", "accomplished"],
  intro: "Recognitions and awards from hackathons, ideathons, and technical competitions. Click the hackathon title to view its repository.",
  items: [
    {
      year: "2023",
      meta: "2023",
      title: "Runner-Up — 24-Hour Coding Hackathon",
      repo: "https://github.com/sarveshvaran-senthilkumar/movie-ticket-booking",
      stack: "Python · Flask · Redis · PostgreSQL · Docker",
      lead: "I won Runner-Up at a 24-hour coding hackathon for building CineVerde, a production-grade movie ticket booking platform with OTP authentication and role-based access control.",
      points: [
        "I engineered a concurrency-safe booking system using Redis distributed locks and PostgreSQL SERIALIZABLE transactions, achieving 0 double-bookings under 500 concurrent users competing for a single seat.",
        "I implemented 9 database-level integrity constraints to prevent booking conflicts, pricing inconsistencies, and over-refunds independently of the application layer.",
        "I built a clean, modular architecture with 83 modules, 96 unit tests, and 8 concurrency tests, with automated CI checks and Docker-based deployment."
      ],
    }
  ]
};

export const PROJECTS = {
  title: ["Things I've ", "built"],
  intro:
    "A selection of systems I've built and designed. Click any project to open its GitHub repository.",
  items: [
    {
      meta: "2025-26",
      title: "Resume Screening and Candidate Intelligence Platform Embedded with AI-Assistance",
      repo: "https://github.com/sarveshvaran-senthilkumar/AI-Resume-Screener",
      stack: "Python · Flask · Sentence-Transformers · FAISS · Ollama · SQLite",
      lead: "An end-to-end resume-screening platform that helps recruiters rank applicants, identify skill gaps, and interact with candidate profiles through a retrieval-augmented generation (RAG) system.",
      points: [
        "Built a document-processing pipeline that extracts information from PDF and DOCX resumes, cleans and normalizes the text, and generates weighted candidate profiles from skills and experience.",
        "Engineered a hybrid scoring engine that combines TF-IDF similarity with semantic embeddings to produce candidate rankings and explainable match scores.",
        "Implemented a backend orchestration layer that ranks applicants, runs background tasks, stores embeddings, and manages the retrieval pipeline.",
        "Integrated a FAISS-based vector search engine with a locally hosted LLM through Ollama, letting recruiters ask natural-language questions that stay grounded in the uploaded resumes.",
        "Added role-based access control, secure authentication, resume-upload validation, persistent SQLite storage, logging, and background processing.",
        "Delivered a complete web interface for recruiters and applicants that runs fully locally, with no reliance on external cloud APIs.",
      ],
    },
    {
      meta: "2025",
      title: "AI-Powered Real-Time Cricket Auction Simulator and Player Intelligence Platform",
      repo: "https://github.com/sarveshvaran-senthilkumar/auction-simulator",
      stack: "FastAPI · WebSockets · asyncio · React · PWA",
      lead: "A real-time IPL auction simulator where you compete against AI-controlled franchises that follow the same retention, purse, squad-composition, and Right-to-Match (RTM) rules used in the IPL.",
      points: [
        "Processed ball-by-ball data from 1,200+ matches to create player profiles and performance metrics.",
        "Built a valuation engine that estimates a player's market value from performance, role scarcity, team requirements, and budget constraints.",
        "Implemented the auction engine with FastAPI, WebSockets, and asyncio, letting multiple users and AI teams participate in the same auction simultaneously.",
        "Fixed several concurrency issues along the way, including infinite bidding loops and player requeue problems.",
        "Enforced authentic IPL mechanics — retention, purse limits, squad composition, and RTM cards.",
        "Added JWT authentication, Google OAuth, dark-mode support, responsive mobile layouts, and deployment on Render and Vercel.",
      ],
    },
    {
      meta: "2024-25",
      title: "Collaborative Expense Tracking Platform with Shared Management and Debt Settlement",
      repo: "https://github.com/sarveshvaran-senthilkumar/E-Split",
      stack: "FastAPI · SQLAlchemy · PostgreSQL · React · WebSockets · Docker",
      lead: "A full-stack expense-sharing platform that helps groups, roommates, and households track expenses, split bills, settle balances, and monitor spending patterns in real time.",
      points: [
        "Designed a double-entry ledger system and implemented multiple splitting methods — equal, exact, percentage, and share-based.",
        "Built a debt-reduction algorithm that minimizes the number of transactions required to settle outstanding balances within a group.",
        "Developed a layered backend with FastAPI, SQLAlchemy, PostgreSQL, and WebSockets for data consistency, real-time updates, and safe concurrent operations.",
        "Implemented JWT authentication, refresh-token rotation, role-based access control, and rate limiting to harden security.",
        "Added budgeting insights and one-click UPI payment links for frictionless settlement.",
        "Shipped with responsive mobile layouts, Docker-based deployment, and a fully containerized development environment.",
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
      doi: "https://ieeexplore.ieee.org/document/11452585",
      stack: "Transfer Learning · Image Enhancement · EfficientNet · Feature Fusion",
      points: [
        "I built a hybrid feature-extraction pipeline that combines features from a pretrained EfficientNet model with handcrafted color and texture features to classify the severity of diabetic retinopathy from retinal fundus images.",
        "I worked with the APTOS 2019 retinal fundus image dataset and addressed class imbalance using data augmentation and class-weighting techniques, improving the model's ability to detect underrepresented severity levels.",
        "I trained and compared multiple machine learning classifiers on the extracted features, with Random Forest achieving the best performance — 73.41% test accuracy and a Cohen's Kappa score of 0.8411.",
        "I improved diabetic retinopathy classification by combining deep learning with handcrafted features, producing more reliable predictions across different disease stages and supporting practical clinical screening.",
      ],
      metrics: [
        { value: "73.41%", label: "Test Accuracy" },
        { value: "0.8411", label: "Cohen's Kappa" },
      ],
    },
    {
      year: "2025",
      title: "Multimodal Deep Learning Framework for Early Parkinson's Diagnosis",
      doi: "https://ieeexplore.ieee.org/document/11233723",
      stack: "Multimodal Classification · Biomarkers · KNN & SVM · Decision-Level Fusion",
      points: [
        "I built a multimodal system that combines structural MRI scans and speech signals to improve the early detection of Parkinson's disease by using information from both data sources.",
        "I extracted meaningful features from MRI images using AlexNet and applied Principal Component Analysis (PCA) to reduce feature dimensions, improving both computational efficiency and model performance.",
        "I trained and evaluated Support Vector Machine (SVM) and K-Nearest Neighbors (KNN) classifiers on MRI and speech features to identify the most effective model for Parkinson's disease classification.",
        "I improved overall prediction accuracy by combining MRI- and speech-based model outputs through decision-level fusion, and developed a MATLAB interface to visualize results and make the system easier to use.",
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
