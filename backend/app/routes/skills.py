from fastapi import APIRouter
from ..schemas import SkillsResponse
from ..data.portfolio_data import SKILLS

router = APIRouter(tags=["skills"])


@router.get("/skills", response_model=SkillsResponse)
def get_skills():
    return SKILLS
