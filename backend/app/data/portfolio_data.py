"""Portfolio content extracted from Divyanshi Saini's resume.

All data here is sourced from the actual resume. Update fields below
to keep the portfolio in sync with future resume changes.
"""

PROFILE = {
    "name": "Divyanshi Saini",
    "title": "Backend / Full-Stack Developer (Python • FastAPI • Django)",
    "summary": (
        "Backend-focused Computer Science (AI/ML) student graduating June 2026 "
        "with hands-on experience building production-grade REST APIs using "
        "Python, Django, Django REST Framework, Flask, and FastAPI. Comfortable "
        "with JWT-based authentication, PostgreSQL schema design with composite "
        "indexing, asynchronous task processing using Celery + Redis, and "
        "containerized deployment with Docker Compose. Strong interest in "
        "scalable backend architecture and clean API design."
    ),
    "email": "divyanshisaini22@gmail.com",
    "phone": None,
    "location": "Moradabad, Uttar Pradesh, India",
    "github": "https://github.com/divyanshi2203",
    "linkedin": "https://www.linkedin.com/in/divyanshi-saini-577108259/",
    "resume_url": "/resume.pdf",
}

SKILLS = {
    "programming": ["Python", "JavaScript", "SQL", "Java (basic)"],
    "backend": ["Django", "Django REST Framework", "Flask", "FastAPI"],
    "frontend": ["React", "HTML", "CSS", "Tailwind CSS"],
    "databases": ["PostgreSQL", "MySQL", "SQLite", "SQLAlchemy", "Django ORM"],
    "apis_auth": [
        "REST APIs",
        "JWT (SimpleJWT)",
        "OpenAPI / Swagger",
        "Postman",
        "API Design",
    ],
    "async_infra": ["Celery", "Redis", "Gunicorn", "Docker", "Docker Compose"],
    "devops": ["Git", "GitHub", "Railway", "Vercel", "Linux (basic)", "CI/CD basics"],
    "ml_data": [
        "PyTorch",
        "scikit-learn",
        "Pandas",
        "NumPy",
        "Model-API Integration",
    ],
    "tools": [
        "VS Code",
        "Pytest (basics)",
        "Virtual Environments",
        "Environment-based Configs",
    ],
}

PROJECTS = [
    {
        "id": 1,
        "title": "LungCare+",
        "description": (
            "A healthcare platform with a FastAPI backend serving CNN-based lung "
            "cancer predictions from CT scan uploads, with structured REST "
            "endpoints and a deployed inference pipeline."
        ),
        "tech_stack": ["FastAPI", "PyTorch", "JavaScript", "PostgreSQL", "Railway"],
        "features": [
            "REST endpoints for scan uploads, predictions, and patient data",
            "PyTorch CNN inference pipeline with preprocessing + confidence scoring",
            "Request validation and structured routing",
            "Deployed on Railway with environment-based production configuration",
            "Secure credential handling for production usage",
        ],
        "github_url": "https://github.com/divyanshi2203",
        "live_url": "https://lung-care-plus-one.vercel.app/",
        "image_url": "/projects/lungcare.png",
        "problem": (
            "Manual review of CT scans is slow and inconsistent. LungCare+ "
            "provides an API-first platform where uploads are predicted by a "
            "trained CNN with explainable confidence scores."
        ),
        "role": "Backend & ML integration developer — designed the FastAPI service, inference pipeline, and deployment.",
    },
    {
        "id": 2,
        "title": "CuraLink",
        "description": (
            "An AI-powered research website with API-driven search and content "
            "generation workflows. Delivered as a freelance full-stack project."
        ),
        "tech_stack": ["FastAPI", "Python", "React", "PostgreSQL", "Vercel"],
        "features": [
            "AI-powered research and content generation workflows",
            "API-driven search across multiple data sources",
            "Full-stack delivery from scoping to deployment",
            "Deployed frontend on Vercel with backend integrations",
        ],
        "github_url": "https://github.com/divyanshi2203",
        "live_url": "https://curalink-lyart.vercel.app",
        "image_url": "/projects/curalink.png",
        "problem": (
            "Researchers needed a single tool to search across sources and "
            "synthesize content. CuraLink provides API-backed search and "
            "generation in one workflow."
        ),
        "role": "Freelance full-stack developer — built the backend services and integrated the deployed frontend.",
    },
    {
        "id": 3,
        "title": "Paragraph Indexer API",
        "description": (
            "A Django REST Framework API for bulk paragraph ingestion and "
            "word-frequency search, with custom email-based auth, async "
            "indexing, and a fully containerized stack."
        ),
        "tech_stack": [
            "Django",
            "DRF",
            "PostgreSQL",
            "Celery",
            "Redis",
            "Docker",
            "JWT",
        ],
        "features": [
            "Custom email-based user model with JWT (SimpleJWT access + refresh)",
            "Async indexing pipeline with Celery + Redis (tokenization off the request cycle)",
            "PostgreSQL composite index on (user, word, count) for top-10 ranked search",
            "Idempotent re-indexing via single-transaction rewrites",
            "Dockerized stack: web, worker, beat, Postgres, Redis",
            "OpenAPI / Swagger docs via drf-spectacular, running under Gunicorn",
        ],
        "github_url": "https://github.com/divyanshi2203",
        "live_url": None,
        "image_url": "/projects/paragraph-indexer.png",
        "problem": (
            "Searching word frequencies across large text bodies is expensive "
            "if done at query time. This API tokenizes asynchronously and "
            "serves top-N word lookups from a composite-indexed table."
        ),
        "role": "Sole backend developer — designed the schema, async pipeline, auth, and Docker Compose stack.",
    },
    {
        "id": 4,
        "title": "Django Food Ordering App",
        "description": (
            "A database-driven food ordering application with full CRUD support, "
            "dynamic template rendering, and end-to-end order processing."
        ),
        "tech_stack": ["Python", "Django", "SQLite", "Django ORM"],
        "features": [
            "Full CRUD for menus, orders, and customers",
            "Dynamic template rendering for end-to-end order processing",
            "Relational models with order tracking and admin views",
            "URL routing and Django ORM-based queries",
        ],
        "github_url": "https://github.com/divyanshi2203",
        "live_url": None,
        "image_url": "/projects/food-ordering.png",
        "problem": (
            "Small food businesses need a simple, reliable ordering workflow. "
            "This Django app covers menu management, order placement, and "
            "admin tracking out of the box."
        ),
        "role": "Sole developer — modeled the domain, built views, templates, and admin flows.",
    },
]

EXPERIENCE = [
    {
        "id": 1,
        "role": "Backend Developer Intern",
        "company": "ANV Tech Solutions",
        "duration": "July 2025 – August 2025 · Remote",
        "description": (
            "Worked on internal application workflows — building and shipping "
            "RESTful APIs with Django and FastAPI, and optimizing PostgreSQL "
            "queries to reduce response times on key endpoints."
        ),
        "technologies": ["Python", "Django", "FastAPI", "PostgreSQL", "REST APIs"],
        "responsibilities": [
            "Built and shipped RESTful APIs using Django and FastAPI for internal application workflows",
            "Handled request validation, authentication, and structured error responses",
            "Designed PostgreSQL schemas and optimized SQL queries",
            "Reduced average response time on key endpoints through indexing and query refactoring",
        ],
    },
    {
        "id": 2,
        "role": "Freelance Backend Developer",
        "company": "Self-Employed",
        "duration": "2025 – Present · Remote",
        "description": (
            "Delivered backend and full-stack projects sourced through LinkedIn, "
            "including CuraLink, an AI-powered research website with API-driven "
            "search and content generation workflows."
        ),
        "technologies": [
            "FastAPI",
            "Flask",
            "PostgreSQL",
            "SQLite",
            "Docker",
            "Railway",
            "Vercel",
        ],
        "responsibilities": [
            "Delivered backend and full-stack projects sourced through LinkedIn",
            "Built end-to-end backend services with FastAPI / Flask",
            "Integrated PostgreSQL / SQLite databases",
            "Deployed using Docker, Railway, and Vercel",
            "Managed client communication, requirement scoping, and project delivery timelines independently",
        ],
    },
]

EDUCATION = [
    {
        "degree": "B.Tech, Computer Science (AI/ML)",
        "institution": "Moradabad Institute of Technology, Moradabad",
        "duration": "August 2022 – June 2026",
        "details": "Current: 73%",
    },
]

CERTIFICATIONS = [
    "HackerRank — Basic Python",
    "Java Full Stack — Ducat (2024)",
    "First Prize — Smart Work Competition",
]

COURSEWORK = [
    "Object-Oriented Programming",
    "Data Structures & Algorithms",
    "DBMS",
    "Operating Systems",
    "Python",
    "Machine Learning",
]
