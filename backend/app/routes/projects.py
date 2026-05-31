from typing import List
from fastapi import APIRouter, HTTPException
from ..schemas import ProjectBase
from ..data.portfolio_data import PROJECTS

router = APIRouter(tags=["projects"])


@router.get("/projects", response_model=List[ProjectBase])
def list_projects():
    return PROJECTS


@router.get("/projects/{project_id}", response_model=ProjectBase)
def get_project(project_id: int):
    for project in PROJECTS:
        if project["id"] == project_id:
            return project
    raise HTTPException(status_code=404, detail="Project not found")
