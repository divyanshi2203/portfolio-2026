from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import ContactMessage
from ..schemas import ContactCreate, ContactSuccess, ContactMessageOut

router = APIRouter(tags=["contact"])


@router.post("/contact", response_model=ContactSuccess)
def create_contact_message(payload: ContactCreate, db: Session = Depends(get_db)):
    try:
        msg = ContactMessage(
            name=payload.name.strip(),
            email=str(payload.email).strip(),
            subject=payload.subject.strip(),
            message=payload.message.strip(),
        )
        db.add(msg)
        db.commit()
        db.refresh(msg)
    except Exception as exc:  # noqa: BLE001
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"Could not save your message. Please try again. ({exc})",
        )

    return {
        "success": True,
        "message": "Thank you for reaching out. I will get back to you soon.",
    }


@router.get("/contact-messages", response_model=List[ContactMessageOut])
def list_contact_messages(db: Session = Depends(get_db)):
    """Dev-only endpoint to review submitted messages."""
    return (
        db.query(ContactMessage)
        .order_by(ContactMessage.created_at.desc())
        .all()
    )
