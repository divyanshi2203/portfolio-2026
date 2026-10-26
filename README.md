# Divyanshi Saini, Portfolio

A personal portfolio for **Divyanshi Saini**, a Python backend and software
developer. Built with **React + Vite + Tailwind CSS** and animated with
**Framer Motion**.

The site serves all content from a single frontend data file, so it is fast,
fully static, and has no runtime API dependency.

> Content rule: this project never uses the long dash character. Use commas,
> periods, colons, parentheses, or the normal hyphen "-" instead.

---

## Positioning

Python Backend and Software Developer. Backend work (Django, Flask, FastAPI,
PostgreSQL, Docker) leads; frontend and full-stack delivery support it.

---

## Tech stack

**Frontend (live site)**

- React 18 (Vite)
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React (icons)

**Backend (kept in the repo, not used by the live site)**

The `backend/` folder holds a FastAPI + SQLAlchemy service from an earlier
version. It is retained as a reference project but is no longer deployed or
called by the frontend. All portfolio content now lives in the frontend.

---

## Content: one source of truth

All portfolio content lives in:

```
frontend/src/data/portfolioData.js
```

Profile, experience, projects, skills, education, and SEO defaults are defined
there. Edit that one file to update the site. There is no duplicate copy and no
API to keep in sync.

---

## Structure

```
portfolio-2026/
|- frontend/
|  |- src/
|  |  |- data/portfolioData.js     one source of truth
|  |  |- components/
|  |  |  |- layout/  (Navbar, Footer, PageContainer)
|  |  |  |- home/    (Hero, CredibilityStrip, CapabilityGrid, CTAs, ...)
|  |  |  |- projects/(ProjectCard, ProjectCaseStudy, ArchitectureDiagram)
|  |  |  |- experience/(ExperienceTimeline)
|  |  |  |- shared/  (Button, SectionHeading, TechTag, Seo, ExternalLink)
|  |  |- pages/      (Home, Work, ProjectDetail, Experience, About, Resume, Contact, NotFound)
|  |  |- App.jsx, main.jsx, index.css
|  |- public/        (profile.jpeg, resume.pdf, resume-preview.webp, projects/, robots.txt, sitemap.xml)
|  |- index.html, tailwind.config.js, vite.config.js
|- backend/          (legacy FastAPI service, not used by the live site)
|- scripts/build_resume.py
```

---

## Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend at `http://localhost:5173`.

Production build:

```bash
npm run build
```

---

## Routes

| Path                        | Page                                   |
| --------------------------- | -------------------------------------- |
| `/`                         | Home                                   |
| `/work`                     | Selected work (project grid)           |
| `/projects/:slug`           | Project case study                     |
| `/experience`               | Experience timeline                    |
| `/about`                    | About, education, capabilities         |
| `/resume`                   | Resume preview and download            |
| `/contact`                  | Direct contact (email, LinkedIn)       |
| `*`                         | 404                                    |

---

## Deployment

Deployed on Vercel. `frontend/vercel.json` is configured with the SPA rewrite so
client-side routes resolve correctly.
