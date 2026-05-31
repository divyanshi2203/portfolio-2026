# Portfolio Backend — FastAPI

REST API powering the Divyanshi Saini portfolio site.

## Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
```

Backend runs at `http://localhost:8000`. Interactive docs at `http://localhost:8000/docs`.

## Environment

```
DATABASE_URL=sqlite:///./portfolio.db
FRONTEND_URL=http://localhost:5173
```

## API routes

| Method | Path                          | Description                              |
| ------ | ----------------------------- | ---------------------------------------- |
| GET    | `/api/health`                 | Health check                             |
| GET    | `/api/profile`                | Profile / hero data                      |
| GET    | `/api/skills`                 | Grouped technical skills                 |
| GET    | `/api/projects`               | All projects                             |
| GET    | `/api/projects/{id}`          | Project detail                           |
| GET    | `/api/experience`             | Experience / internships                 |
| GET    | `/api/education`              | Education history                        |
| GET    | `/api/certifications`         | Certifications + coursework              |
| POST   | `/api/contact`                | Submit contact form                      |
| GET    | `/api/contact-messages`       | List submitted messages (dev only)       |
