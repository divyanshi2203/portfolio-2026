"""FastAPI application entrypoint."""
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from .database import Base, engine
from . import models  # noqa: F401  (ensure models are registered)
from .routes import (
    health,
    profile,
    skills,
    projects,
    experience,
    education,
    contact,
)

load_dotenv()

# Create database tables on startup
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Divyanshi Saini — Portfolio API",
    description="Backend API powering the Divyanshi Saini portfolio site.",
    version="1.0.0",
)

# CORS — comma-separated list of additional origins via ALLOWED_ORIGINS env var.
# Example: ALLOWED_ORIGINS="https://divyanshi.vercel.app,https://divyanshi.dev"
default_origins = [
    "http://localhost:5173",
    "http://localhost:3000",
]
extra_origins = [
    o.strip()
    for o in os.getenv("ALLOWED_ORIGINS", "").split(",")
    if o.strip()
]
frontend_url = os.getenv("FRONTEND_URL")
if frontend_url:
    extra_origins.append(frontend_url)

allowed_origins = list(set(default_origins + extra_origins))

app.add_middleware(
    CORSMiddleware,
    # Allow any *.vercel.app preview deployment in addition to listed origins.
    allow_origins=allowed_origins,
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers — all mounted under /api
API_PREFIX = "/api"
app.include_router(health.router, prefix=API_PREFIX)
app.include_router(profile.router, prefix=API_PREFIX)
app.include_router(skills.router, prefix=API_PREFIX)
app.include_router(projects.router, prefix=API_PREFIX)
app.include_router(experience.router, prefix=API_PREFIX)
app.include_router(education.router, prefix=API_PREFIX)
app.include_router(contact.router, prefix=API_PREFIX)


@app.get("/")
def root():
    return {
        "name": "Divyanshi Saini — Portfolio API",
        "docs": "/docs",
        "health": "/api/health",
    }
