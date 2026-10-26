/**
 * portfolioData.js
 *
 * Single source of truth for all portfolio content.
 * The React app imports everything from this file. There is no API
 * dependency for static content, and no duplicate fallback copy.
 *
 * Content rules:
 *  - Never use the long dash character. Use commas, periods, colons,
 *    parentheses, or the normal hyphen "-" instead.
 *  - No phone number anywhere.
 *  - Positioning is "Python Backend and Software Developer".
 */

export const PROFILE = {
  name: "Divyanshi Saini",
  role: "Python Backend and Software Developer",
  location: "Delhi NCR, India",
  email: "divyanshisaini22@gmail.com",
  github: "https://github.com/divyanshi2203",
  linkedin: "https://www.linkedin.com/in/divyanshi-saini-577108259/",
  resumeUrl: "/resume.pdf",
  resumeDownloadName:
    "Divyanshi_Saini_Resume_FullStack_Without_Mobile_Number.pdf",
  availability: "Open to full-time Python backend and software development roles",

  hero: {
    headline:
      "Python backend developer building reliable APIs, tested systems, and production-ready web applications.",
    subcopy:
      "I work with Django, Flask, FastAPI, PostgreSQL, Docker, and JavaScript. My current experience includes backend development, API testing, production bug fixing, feature validation, AI coding benchmarks, and full-stack delivery.",
    primaryCta: { label: "View Selected Work", to: "/work" },
    secondaryCta: { label: "Download Resume", to: "/resume" },
    tertiaryCta: { label: "Contact Me", to: "/contact" },
  },

  // Compact block shown on the hero profile card.
  card: {
    name: "Divyanshi Saini",
    location: "Delhi NCR, India",
    role: "Python Backend Developer",
    status: "Available for full-time roles",
  },
};

/**
 * Credibility strip (replaces the old vanity stat counters).
 * Plan Option A: role-based, no inflated numbers.
 */
export const CREDIBILITY = [
  { label: "Python Developer Intern", note: "Current, SaaSBanana Technologies" },
  { label: "AI Coding Benchmark Contributor", note: "Handshake AI, Outlier AI" },
  { label: "Full Stack Project Delivery", note: "Shipped and deployed" },
  { label: "Open to Full-Time Roles", note: "Backend and software development" },
];

/**
 * Experience, most relevant first.
 * `current: true` marks the active role for the "Current" badge and larger card.
 */
export const EXPERIENCE = [
  {
    id: "saasbanana",
    company: "SaaSBanana Technologies",
    role: "Python Developer Intern",
    duration: "August 2026 - Present | Remote",
    current: true,
    summary:
      "Build and test backend functionality across Flask and Django services, and keep APIs correct, reliable, and well documented.",
    responsibilities: [
      "Build and test backend functionality across Flask and Django services.",
      "Validate REST APIs, data flows, authentication, validation rules, and edge cases.",
      "Reproduce bugs, investigate failures, implement fixes, and verify resolved behavior.",
      "Test endpoints and integrated features with Postman.",
      "Work inside Dockerized development and testing environments.",
      "Create Git branches and submit pull requests.",
      "Test supporting HTML, CSS, and JavaScript changes where required.",
      "Document reproducible defects and retest fixes before merge.",
    ],
    technologies: [
      "Python",
      "Flask",
      "Django",
      "REST APIs",
      "Postman",
      "Docker",
      "Git",
    ],
  },
  {
    id: "handshake",
    company: "Handshake AI",
    role: "AI Coding Benchmark Contributor",
    duration: "August 2026 - October 2026 | Remote",
    current: false,
    summary:
      "Create and evaluate software engineering benchmark tasks that measure how well AI systems write and reason about code.",
    // Two distinct engagements, shown as subsections.
    subRoles: [
      {
        name: "Dynamo",
        points: [
          "Create containerized software engineering benchmark tasks.",
          "Write task specifications and reference solutions.",
          "Build pytest verification logic.",
          "Configure Docker environments.",
          "Use Terminal-Bench and Harbor.",
          "Submit work through GitHub pull requests.",
          "Improve tasks based on automated and reviewer feedback.",
        ],
      },
      {
        name: "Octahedron",
        points: [
          "Compare and evaluate AI-generated responses.",
          "Apply structured scoring rubrics.",
          "Check correctness, relevance, completeness, and instruction adherence.",
          "Write concise, evidence-based evaluation rationales.",
        ],
      },
    ],
    technologies: [
      "Python",
      "pytest",
      "Docker",
      "Terminal-Bench",
      "Harbor",
      "Git",
    ],
  },
  {
    id: "outlier",
    company: "Outlier AI",
    role: "AI Training Contributor",
    duration: "October 2026 | Remote",
    current: false,
    project: "Ether",
    summary:
      "Complete structured AI training and evaluation workflows on project Ether, applying project-specific rubrics and quality standards.",
    responsibilities: [
      "Complete structured AI training and evaluation workflows.",
      "Apply project-specific rubrics and quality standards.",
      "Review model outputs for correctness and consistency.",
      "Record clear evaluation reasoning.",
    ],
    technologies: ["AI Evaluation", "Rubric-based Scoring", "Structured Reasoning"],
  },
  {
    id: "self-employed",
    company: "Self-Employed",
    role: "Full Stack Developer",
    duration: "2025 - Present | Remote",
    current: false,
    summary:
      "Deliver Python-backed web applications end to end, from requirements through testing and deployment.",
    responsibilities: [
      "Deliver Python-backed web applications.",
      "Build JavaScript, HTML, and CSS interfaces.",
      "Work from requirement gathering through testing and deployment.",
      "Deploy applications using Railway and Vercel.",
      "Manage client communication and delivery independently.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Flask",
      "JavaScript",
      "PostgreSQL",
      "Docker",
      "Railway",
      "Vercel",
    ],
  },
  {
    id: "anv",
    company: "ANV Tech Solutions",
    role: "Backend Developer Intern",
    duration: "July 2025 - August 2025 | Remote",
    current: false,
    summary:
      "Built and shipped REST APIs for internal workflows, and improved database performance on key endpoints.",
    responsibilities: [
      "Built Django and FastAPI endpoints.",
      "Implemented validation, authentication, and structured error handling.",
      "Designed PostgreSQL schemas.",
      "Improved queries through indexing and refactoring.",
      "Tested endpoint behavior and failure cases.",
    ],
    technologies: ["Python", "Django", "FastAPI", "PostgreSQL", "REST APIs"],
  },
];

/**
 * Flagship projects. These get primary visual weight.
 * `image` points to a real screenshot; `diagram: true` means the card
 * renders an architecture diagram component instead of a screenshot.
 * `repo` is included ONLY when it is the exact project repository.
 */
export const PROJECTS = [
  {
    id: 1,
    slug: "lungcare",
    title: "LungCare+",
    positioning: "AI-enabled healthcare backend and inference platform.",
    value:
      "An API-first platform that turns CT scan uploads into CNN-backed lung cancer predictions with confidence scoring.",
    techStack: ["FastAPI", "PyTorch", "PostgreSQL", "JavaScript", "Railway"],
    problem:
      "Clinicians and patients need a fast, structured way to go from a CT scan upload to a model prediction, without stitching together separate tools.",
    contribution:
      "Built the REST endpoints for uploads, predictions, and patient data, integrated the PyTorch CNN inference pipeline with preprocessing and confidence scoring, handled request validation and structured routing, and deployed the application on Railway with environment-based configuration.",
    keyDecision:
      "Kept the architecture API-first so the inference pipeline stays decoupled from the interface, which makes the model easy to call, test, and deploy independently.",
    features: [
      "REST endpoints for scan uploads, predictions, and patient data",
      "PyTorch CNN inference pipeline with preprocessing and confidence scoring",
      "Request validation and structured routing",
      "Deployed on Railway with environment-based production configuration",
      "Secure credential handling for production usage",
    ],
    image: "/projects/lungcare.webp",
    imageAlt:
      "LungCare+ login screen showing the AI-guided lung cancer detection platform with accuracy and scan-time highlights.",
    liveUrl: "https://lung-care-plus-one.vercel.app/",
    repoUrl: "https://github.com/divyanshiiisaini22-byte/lung-care-plus",
    diagram: false,
  },
  {
    id: 2,
    slug: "paragraph-indexer",
    title: "Paragraph Indexer API",
    positioning: "Containerized asynchronous indexing and ranked search API.",
    value:
      "A Django REST Framework service that ingests bulk paragraphs and serves ranked word-frequency search, with indexing moved off the request cycle.",
    techStack: ["Django", "DRF", "PostgreSQL", "Celery", "Redis", "Docker", "JWT", "OpenAPI"],
    problem:
      "Word-frequency search becomes expensive when tokenization and counting happen during every request.",
    contribution:
      "Moved indexing to a Celery and Redis pipeline, added idempotent single-transaction re-indexing, optimized PostgreSQL search with a composite index on (user, word, count) for ranked top-N lookups, and containerized the complete service stack.",
    keyDecision:
      "Processed text asynchronously and served lookups from a composite-indexed table, so query time stays fast regardless of how much text has been ingested.",
    features: [
      "Custom email-based user model with JWT (SimpleJWT access and refresh)",
      "Async indexing pipeline with Celery and Redis (tokenization off the request cycle)",
      "PostgreSQL composite index on (user, word, count) for top-10 ranked search",
      "Idempotent re-indexing via single-transaction rewrites",
      "Dockerized stack: web, worker, beat, Postgres, Redis",
      "OpenAPI and Swagger docs via drf-spectacular, running under Gunicorn",
    ],
    image: null,
    imageAlt:
      "Architecture diagram of the Paragraph Indexer API showing the web service, Celery worker, Redis queue, and PostgreSQL database.",
    liveUrl: null,
    repoUrl: "https://github.com/divyanshi2203/paragraph-word-indexer",
    diagram: true,
  },
  {
    id: 3,
    slug: "curalink",
    title: "CuraLink",
    positioning: "AI-assisted medical research and content workflow.",
    value:
      "A focused research interface for searching peer-reviewed sources and clinical trials with context-aware AI assistance and full source attribution.",
    techStack: ["JavaScript", "React", "API Integration", "Responsive UI", "Vercel"],
    problem:
      "Researchers need a single, focused interface to search across sources and refine results, instead of jumping between separate tools.",
    contribution:
      "Delivered the responsive interface, integrated the API-driven search and content workflows, tested the experience, and deployed the frontend on Vercel.",
    keyDecision:
      "Designed every answer to link back to its original publication or trial record, so the tool stays verifiable rather than a black box.",
    features: [
      "Research-backed answers grounded in peer-reviewed publications",
      "Clinical trial discovery with eligibility and location context",
      "Context-aware, multi-turn follow-up questions",
      "Full source attribution on every claim",
      "Deployed on Vercel with a responsive interface",
    ],
    image: "/projects/curalink.webp",
    imageAlt:
      "CuraLink home screen showing the AI medical research assistant with research-backed answers and clinical trial discovery.",
    liveUrl: "https://curalink-lyart.vercel.app",
    repoUrl: "https://github.com/divyanshi2203/curalink",
    diagram: false,
  },
];

/**
 * Earlier work, shown smaller and secondary. Not a flagship.
 */
export const EARLIER_WORK = [
  {
    id: "food-ordering",
    title: "Django Food Ordering App",
    description:
      "A database-driven food ordering application with full CRUD for menus, orders, and customers, dynamic template rendering, and admin order tracking.",
    techStack: ["Python", "Django", "SQLite", "Django ORM"],
  },
];

/**
 * Skills as five capability groups (not dozens of individual badges).
 */
export const CAPABILITIES = [
  {
    key: "backend",
    label: "Backend Development",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "Flask",
      "FastAPI",
      "REST APIs",
      "JWT authentication",
    ],
  },
  {
    key: "data-async",
    label: "Data and Async Systems",
    items: ["PostgreSQL", "SQL", "Django ORM", "SQLAlchemy", "Celery", "Redis"],
  },
  {
    key: "testing-eng",
    label: "Testing and Engineering",
    items: [
      "Postman",
      "pytest",
      "API testing",
      "Regression testing",
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "OpenAPI and Swagger",
    ],
  },
  {
    key: "frontend",
    label: "Frontend",
    items: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "React", "Tailwind CSS"],
  },
  {
    key: "ai-eval",
    label: "AI Training and Evaluation",
    items: [
      "Terminal-Bench",
      "Harbor",
      "Benchmark task design",
      "AI response evaluation",
      "Rubric-based scoring",
      "Reference solutions",
      "Verification tests",
      "Structured reasoning",
    ],
  },
];

export const STRENGTHS =
  "Problem solving, debugging, attention to detail, analytical reasoning, and written communication.";

/**
 * About narrative, three focused paragraphs.
 */
export const ABOUT = {
  heading: "Backend-first, product-aware, and comfortable across the stack.",
  paragraphs: [
    "I am a Python backend developer and a Computer Science (AI/ML) graduate, currently working as a Python Developer Intern at SaaSBanana Technologies. My day-to-day is backend work across Flask and Django: building functionality, validating REST APIs, and keeping data flows and authentication correct.",
    "I do more than build isolated projects. I reproduce and fix production bugs, validate features, test endpoints with Postman inside Dockerized environments, and ship changes through Git branches and pull requests. That testing and debugging habit is what makes the software I deliver dependable.",
    "Alongside product work, I contribute to AI coding benchmarks and evaluation for Handshake AI and Outlier AI, designing containerized tasks, writing verification tests, and scoring model outputs against structured rubrics. It has sharpened how precisely I read requirements and reason about correctness.",
  ],
};

export const EDUCATION = [
  {
    degree: "B.Tech, Computer Science (AI/ML)",
    institution: "Moradabad Institute of Technology, Moradabad",
    duration: "August 2022 - June 2026",
    details: "73%",
  },
];

export const CERTIFICATIONS = [
  "HackerRank Basic Python",
  "Java Full Stack, Ducat (2024)",
  "First Prize, Smart Work Competition",
];

/**
 * SEO defaults. Per-page overrides live in the page components / router.
 */
export const SEO = {
  siteName: "Divyanshi Saini",
  domain: "https://divyanshisaini.online",
  title: "Divyanshi Saini | Python Backend and Software Developer",
  description:
    "Portfolio of Divyanshi Saini, a Python backend and software developer experienced with Django, Flask, FastAPI, REST APIs, PostgreSQL, Docker, API testing, and AI coding evaluation.",
  ogImage: "/profile.jpeg",
};
