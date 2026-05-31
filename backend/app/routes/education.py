from typing import List
from fastapi import APIRouter
from ..schemas import EducationItem
from ..data.portfolio_data import EDUCATION, CERTIFICATIONS, COURSEWORK

router = APIRouter(tags=["education"])


@router.get("/education", response_model=List[EducationItem])
def get_education():
    return EDUCATION


@router.get("/certifications")
def get_certifications():
    return {"certifications": CERTIFICATIONS, "coursework": COURSEWORK}
