# Portfolio Frontend — React + Vite + Tailwind

## Setup

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Dev server runs at `http://localhost:5173`.

## Environment

```
VITE_API_BASE_URL=http://localhost:8000/api
```

## Routes

| Path           | Page         |
| -------------- | ------------ |
| `/`            | Home / hero  |
| `/about`       | About        |
| `/skills`      | Skills       |
| `/projects`    | Projects     |
| `/experience`  | Experience   |
| `/resume`      | Resume       |
| `/contact`     | Contact      |
| `*`            | 404          |

## Replacing the resume

Drop your updated PDF at `public/resume.pdf` — the Download button uses
the path directly.
