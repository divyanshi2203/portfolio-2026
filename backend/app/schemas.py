"""Pydantic schemas for request and response validation."""
from datetime import datetime
from typing import List, Optional, Dict
from pydantic import BaseModel, EmailStr, Field


# ---------- Profile ----------
class ProfileResponse(BaseModel):
    name: str
    title: str
    summary: str
    email: str
    phone: Optional[str] = None
    location: Optional[str] = None
    github: Optional[str] = None
    linkedin: Optional[str] = None
    resume_url: str


# ---------- Skills ----------
class SkillsResponse(BaseModel):
    programming: List[str]
    backend: List[str]
    frontend: List[str]
    databases: List[str]
    apis_auth: List[str]
    async_infra: List[str]
    devops: List[str]
    ml_data: List[str]
    tools: List[str]


# ---------- Projects ----------
class ProjectBase(BaseModel):
    id: int
    title: str
    description: str
    tech_stack: List[str]
    features: List[str]
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    image_url: Optional[str] = None
    problem: Optional[str] = None
    role: Optional[str] = None


# ---------- Experience ----------
class ExperienceItem(BaseModel):
    id: int
    role: str
    company: str
    duration: str
    description: str
    technologies: List[str]
    responsibilities: List[str]


# ---------- Education ----------
class EducationItem(BaseModel):
    degree: str
    institution: str
    duration: str
    details: str


# ---------- Contact ----------
class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    subject: str = Field(..., min_length=3, max_length=200)
    message: str = Field(..., min_length=10)


class ContactSuccess(BaseModel):
    success: bool
    message: str


class ContactMessageOut(BaseModel):
    id: int
    name: str
    email: str
    subject: str
    message: str
    created_at: datetime

    class Config:
        from_attributes = True


# ---------- Health ----------
class HealthResponse(BaseModel):
    status: str
    message: str
