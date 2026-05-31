# Divyanshi Saini — Portfolio

A modern, full-stack personal portfolio for **Divyanshi Saini** — a backend-focused
Python / FastAPI / Django developer — built with **React + Vite + Tailwind**
on the frontend and **FastAPI + SQLAlchemy + SQLite** on the backend.

The design uses a soft rose / red palette built specifically for a serious,
professional developer brand.

---

## Tech stack

**Frontend**

- React 18 (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- Framer Motion
- Lucide React (icons)

**Backend**

- FastAPI
- Pydantic v2
- SQLAlchemy 2
- SQLite (via SQLAlchemy)
- Uvicorn
- CORS middleware

---

## Features

- Rose / red premium UI with gradients, soft shadows, and animated transitions
- Sticky transparent navbar that becomes solid on scroll
- Animated page transitions via Framer Motion
- Hero with stats, decorative blobs, and CTAs (View Projects, Download Resume, Contact Me)
- Skills grouped by category, each with hoverable badges
- Project cards with modal detail (problem, role, features, GitHub, live demo)
- Vertical experience timeline
- Resume preview page with download/view buttons
- Contact form with validation, loading state, and success/error toasts
- SQLite storage of contact messages
- Fallback data so the frontend keeps working if the backend isn't running

---

## Folder structure

```
myportfolio/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── routes/
│   │   │   ├── health.py
│   │   │   ├── profile.py
│   │   │   ├── skills.py
│   │   │   ├── projects.py
│   │   │   ├── experience.py
│   │   │   ├── education.py
│   │   │   └── contact.py
│   │   └── data/
│   │       └── portfolio_data.py
│   ├── requirements.txt
│   ├── .env.example
│   └── README.md
├── frontend/
│   ├── src/
│   │   ├── api/axios.js
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/fallbackData.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   │   ├── resume.pdf
│   │   └── favicon.svg
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── .env.example
│   └── README.md
└── README.md
```

---

## Setup

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
```

Backend at `http://localhost:8000`. Interactive docs at `http://localhost:8000/docs`.

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Frontend at `http://localhost:5173`.

---

## Environment variables

**Backend (`backend/.env`)**

```
DATABASE_URL=sqlite:///./portfolio.db
FRONTEND_URL=http://localhost:5173
```

**Frontend (`frontend/.env`)**

```
VITE_API_BASE_URL=http://localhost:8000/api
```

---

## API routes

| Method | Path                          | Description                          |
| ------ | ----------------------------- | ------------------------------------ |
| GET    | `/api/health`                 | Health check                         |
| GET    | `/api/profile`                | Profile data (hero / footer / about) |
| GET    | `/api/skills`                 | Grouped technical skills             |
| GET    | `/api/projects`               | All projects                         |
| GET    | `/api/projects/{id}`          | Project detail                       |
| GET    | `/api/experience`             | Experience / internships             |
| GET    | `/api/education`              | Education history                    |
| GET    | `/api/certifications`         | Certifications + coursework          |
| POST   | `/api/contact`                | Submit contact form                  |
| GET    | `/api/contact-messages`       | List submitted messages (dev only)   |

CORS is enabled for `http://localhost:5173` and `http://localhost:3000`.

---

## Frontend routes

| Path           | Page         |
| -------------- | ------------ |
| `/`            | Home / hero  |
| `/about`       | About + education + certifications |
| `/skills`      | Grouped skills |
| `/projects`    | Project grid + modal details |
| `/experience`  | Experience timeline |
| `/resume`      | Resume preview + download |
| `/contact`     | Contact form + direct contact info |
| `*`            | 404           |

---

## Color palette

| Token                  | Hex          |
| ---------------------- | ------------ |
| Rose Primary           | `#E11D48`    |
| Rose Dark              | `#BE123C`    |
| Soft Pink              | `#FFE4E6`    |
| Light Rose             | `#FFF1F2`    |
| Deep Red Accent        | `#991B1B`    |
| Main Background        | `#FFF7F8`    |
| Section Background     | `#FFF1F2`    |
| Card Background        | `#FFFFFF`    |
| Main Text              | `#1F2937`    |
| Secondary Text         | `#4B5563`    |
| Muted Text             | `#6B7280`    |
| Border                 | `#FBCFE8`    |

---

## Customization

- **Resume content** — edit `backend/app/data/portfolio_data.py` and the matching `frontend/src/data/fallbackData.js` to keep both in sync.
- **Resume PDF** — replace `frontend/public/resume.pdf` with your updated file.
- **Profile image** — drop a `profile-placeholder.png` in `frontend/public/` and swap the initial-avatar in `Home.jsx` for an `<img>` tag.
- **Theme** — tweak `frontend/tailwind.config.js` (colors + gradients) and `frontend/src/index.css`.

---

## Screenshots

> _(Placeholder — add screenshots of the Home, Projects, and Contact pages here once running.)_

---

## Deployment

See **[DEPLOY.md](./DEPLOY.md)** for a full step-by-step guide covering:

- Pushing the repo to GitHub
- Deploying the backend to **Railway** (with auto-provisioned PostgreSQL)
- Deploying the frontend to **Vercel** (with SPA routing configured)
- Wiring up a custom domain from Hostinger / Porkbun / Namecheap / Cloudflare
- Common gotchas and an after-deploy checklist

Quick links:
- `backend/Procfile`, `backend/railway.json`, `backend/nixpacks.toml` — Railway is already configured
- `frontend/vercel.json` — Vercel is already configured with the right SPA rewrites
