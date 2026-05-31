from typing import List
from fastapi import APIRouter
from ..schemas import ExperienceItem
from ..data.portfolio_data import EXPERIENCE

router = APIRouter(tags=["experience"])


@router.get("/experience", response_model=List[ExperienceItem])
def get_experience():
    return EXPERIENCE
