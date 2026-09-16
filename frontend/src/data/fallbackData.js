// Fallback content (sourced from the resume) — shown if the backend isn't
// reachable. Keep in sync with backend/app/data/portfolio_data.py.

export const PROFILE = {
  name: 'Divyanshi Saini',
  title: 'Full-Stack Software Developer | Python, JavaScript, APIs',
  summary:
    'Computer Science (AI/ML) graduate with experience building and supporting reliable web applications from interface to API. I work primarily with Python and JavaScript, using Django, FastAPI, Flask, PostgreSQL, and Docker. My recent work includes API testing and design support, containerized Python task workflows, and complete client projects delivered from idea to deployment.',
  email: 'divyanshisaini22@gmail.com',
  phone: null,
  location: 'Delhi NCR, India',
  github: 'https://github.com/divyanshi2203',
  linkedin: 'https://www.linkedin.com/in/divyanshi-saini-577108259/',
  resume_url: '/resume.pdf',
}

export const SKILLS = {
  programming: ['Python', 'JavaScript', 'SQL', 'Java (basic)'],
  backend: ['Django', 'Django REST Framework', 'Flask', 'FastAPI'],
  frontend: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Responsive UI', 'Tailwind CSS', 'Django Templating'],
  databases: ['PostgreSQL', 'MySQL', 'SQLite', 'SQLAlchemy', 'Django ORM'],
  apis_auth: [
    'REST APIs',
    'JWT (SimpleJWT)',
    'OpenAPI / Swagger',
    'Postman',
    'API Design',
    'API Testing',
  ],
  async_infra: ['Celery', 'Redis', 'Gunicorn', 'Docker', 'Docker Compose'],
  devops: ['Git', 'GitHub', 'Railway', 'Vercel', 'Linux (basic)', 'CI/CD basics'],
  ml_data: [
    'PyTorch',
    'scikit-learn',
    'Pandas',
    'NumPy',
    'Model-API Integration',
  ],
  tools: [
    'VS Code',
    'Pytest',
    'End-to-End Testing',
    'Virtual Environments',
    'Environment-based Configs',
  ],
}

export const PROJECTS = [
  {
    id: 1,
    title: 'LungCare+',
    description:
      'Healthcare platform with a FastAPI backend serving CNN-based lung cancer predictions from CT scan uploads.',
    tech_stack: ['FastAPI', 'PyTorch', 'JavaScript', 'PostgreSQL', 'Railway'],
    features: [
      'REST endpoints for scan uploads, predictions, and patient data',
      'PyTorch CNN inference pipeline with preprocessing + confidence scoring',
      'Request validation and structured routing',
      'Deployed on Railway with environment-based production configuration',
    ],
    github_url: 'https://github.com/divyanshi2203',
    live_url: 'https://lung-care-plus-one.vercel.app/',
    image_url: '/projects/lungcare.png',
    problem:
      'Manual review of CT scans is slow and inconsistent. LungCare+ provides an API-first platform where uploads are predicted by a trained CNN with explainable confidence scores.',
    role: 'Backend and ML integration developer responsible for the FastAPI service, inference pipeline, and deployment.',
  },
  {
    id: 2,
    title: 'CuraLink',
    description:
      'AI-powered research website with API-driven search and content generation workflows.',
    tech_stack: ['FastAPI', 'Python', 'React', 'PostgreSQL', 'Vercel'],
    features: [
      'AI-powered research and content generation workflows',
      'API-driven search across multiple data sources',
      'Full-stack delivery from scoping to deployment',
    ],
    github_url: 'https://github.com/divyanshi2203',
    live_url: 'https://curalink-lyart.vercel.app',
    image_url: '/projects/curalink.png',
    problem:
      'Researchers needed a single tool to search across sources and synthesize content. CuraLink provides API-backed search and generation in one workflow.',
    role: 'Freelance full-stack developer responsible for backend services and the deployed frontend integration.',
  },
  {
    id: 3,
    title: 'Paragraph Indexer API',
    description:
      'A Django REST Framework API for bulk paragraph ingestion and word-frequency search, with custom email-based auth and async indexing.',
    tech_stack: [
      'Django',
      'DRF',
      'PostgreSQL',
      'Celery',
      'Redis',
      'Docker',
      'JWT',
    ],
    features: [
      'Custom email-based user model with JWT (SimpleJWT)',
      'Async indexing pipeline with Celery + Redis',
      'PostgreSQL composite index on (user, word, count) for top-10 search',
      'Containerized stack: web, worker, beat, Postgres, Redis',
      'OpenAPI / Swagger docs via drf-spectacular',
    ],
    github_url: 'https://github.com/divyanshi2203',
    live_url: null,
    image_url: '/projects/paragraph-indexer.png',
    problem:
      'Searching word frequencies across large text bodies is expensive at query time. This API tokenizes asynchronously and serves top-N lookups from a composite-indexed table.',
    role: 'Sole backend developer responsible for the schema, async pipeline, authentication, and Docker Compose stack.',
  },
  {
    id: 4,
    title: 'Django Food Ordering App',
    description:
      'Database-driven food ordering application with full CRUD support and end-to-end order processing.',
    tech_stack: ['Python', 'Django', 'SQLite', 'Django ORM'],
    features: [
      'Full CRUD for menus, orders, and customers',
      'Dynamic template rendering for end-to-end ordering',
      'Relational models with order tracking and admin views',
    ],
    github_url: 'https://github.com/divyanshi2203',
    live_url: null,
    image_url: '/projects/food-ordering.png',
    problem:
      'Small food businesses need a simple, reliable ordering workflow. This Django app covers menu management, order placement, and admin tracking.',
    role: 'Sole developer responsible for domain modeling, views, templates, and admin workflows.',
  },
]

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Python Intern (API Testing & Design)',
    company: 'SaaS Banana',
    duration: 'August 2026 - Present | Remote',
    description:
      'Support the quality and design of internal APIs by checking how endpoints behave across expected, invalid, and edge-case requests.',
    technologies: ['Python', 'API Testing', 'API Design', 'Authentication'],
    responsibilities: [
      'Test request and response behavior, authentication flows, and edge cases across internal APIs',
      'Support API design reviews and keep endpoint documentation clear and consistent',
      'Use Python scripts to automate repeatable endpoint validation',
    ],
  },
  {
    id: 2,
    role: 'Full-Stack / Freelance Developer',
    company: 'Self-Employed',
    duration: '2025 - Present | Remote',
    description:
      'Deliver complete web applications and reliable Python workflows for clients, from requirements and implementation through testing and deployment.',
    technologies: ['Python', 'JavaScript', 'FastAPI', 'Flask', 'PostgreSQL', 'Docker', 'End-to-End Testing'],
    responsibilities: [
      'Completed a July 2026 engagement sourced through Handshake AI, building and running containerized harbor tasks in Python',
      'Wrote end-to-end tests to validate task execution inside Docker containers',
      'Delivered CuraLink, an AI-powered research website with a JavaScript interface and API-driven workflows',
      'Built and deployed full-stack applications using FastAPI or Flask, JavaScript, PostgreSQL or SQLite, Docker, Railway, and Vercel',
      'Managed client communication, requirements, and delivery timelines independently',
    ],
  },
  {
    id: 3,
    role: 'Backend Developer Intern',
    company: 'ANV Tech Solutions',
    duration: 'July 2025 - August 2025 | Remote',
    description:
      'Built and shipped RESTful APIs for internal application workflows and optimized PostgreSQL queries on key endpoints.',
    technologies: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'REST APIs'],
    responsibilities: [
      'Built RESTful APIs using Django and FastAPI for internal application workflows',
      'Handled request validation, authentication, and structured error responses',
      'Designed PostgreSQL schemas and optimized SQL queries',
      'Reduced response time on key endpoints through indexing and query refactoring',
    ],
  },
]

export const EDUCATION = [
  {
    degree: 'B.Tech, Computer Science (AI/ML)',
    institution: 'Moradabad Institute of Technology, Moradabad',
    duration: 'August 2022 - June 2026',
    details: '73%',
  },
]

export const CERTIFICATIONS = [
  'HackerRank Basic Python',
  'Java Full Stack, Ducat (2024)',
  'First Prize, Smart Work Competition',
]
