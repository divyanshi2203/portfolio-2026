from fastapi import APIRouter
from ..schemas import ProfileResponse
from ..data.portfolio_data import PROFILE

router = APIRouter(tags=["profile"])


@router.get("/profile", response_model=ProfileResponse)
def get_profile():
    return PROFILE
