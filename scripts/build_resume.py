#!/usr/bin/env python3
"""Build the public one-page resume used by the portfolio."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "frontend" / "public" / "resume.pdf"

NAVY = colors.HexColor("#19345B")
INK = colors.HexColor("#202735")
MUTED = colors.HexColor("#586273")
LIGHT = colors.HexColor("#DDE5F0")


def styles():
    base = dict(fontName="Helvetica", textColor=INK, leading=11.0, fontSize=9.0)
    return {
        "name": ParagraphStyle(
            "Name",
            fontName="Helvetica-Bold",
            fontSize=21,
            leading=23,
            alignment=TA_CENTER,
            textColor=NAVY,
            spaceAfter=2,
        ),
        "contact": ParagraphStyle(
            "Contact",
            fontName="Helvetica",
            fontSize=8.7,
            leading=10.5,
            alignment=TA_CENTER,
            textColor=MUTED,
        ),
        "section": ParagraphStyle(
            "Section",
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=12.5,
            textColor=NAVY,
            spaceBefore=6,
            spaceAfter=2,
        ),
        "body": ParagraphStyle("Body", **base),
        "role": ParagraphStyle(
            "Role",
            fontName="Helvetica-Bold",
            fontSize=9.2,
            leading=10.8,
            textColor=INK,
        ),
        "date": ParagraphStyle(
            "Date",
            fontName="Helvetica-Oblique",
            fontSize=8.15,
            leading=10,
            textColor=MUTED,
            alignment=TA_RIGHT,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            **base,
            leftIndent=10,
            firstLineIndent=-7,
            bulletIndent=0,
            spaceBefore=0.8,
        ),
        "skill": ParagraphStyle(
            "Skill",
            fontName="Helvetica",
            textColor=INK,
            fontSize=8.9,
            leading=10.4,
        ),
        "small": ParagraphStyle(
            "Small",
            fontName="Helvetica",
            fontSize=8.6,
            leading=10.2,
            textColor=INK,
        ),
    }


def section(title, st):
    return [
        Paragraph(title.upper(), st["section"]),
        HRFlowable(width="100%", thickness=0.8, color=NAVY, spaceBefore=0, spaceAfter=3),
    ]


def heading(role, organization, dates, st):
    left = Paragraph(f"{role} <font color='#19345B'>at {organization}</font>", st["role"])
    right = Paragraph(dates, st["date"])
    table = Table([[left, right]], colWidths=[5.25 * inch, 1.9 * inch])
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return table


def bullet(text, st):
    return Paragraph(f"<font color='#19345B'>&bull;</font>&nbsp;&nbsp;{text}", st["bullet"])


def add_experience(story, st, role, org, dates, bullets):
    content = [heading(role, org, dates, st)]
    content.extend(bullet(item, st) for item in bullets)
    content.append(Spacer(1, 2))
    story.append(KeepTogether(content))


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    st = styles()

    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        leftMargin=0.55 * inch,
        rightMargin=0.55 * inch,
        topMargin=0.38 * inch,
        bottomMargin=0.35 * inch,
        title="Divyanshi Saini - Full-Stack Software Developer",
        author="Divyanshi Saini",
        subject="Professional resume",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="resume")
    doc.addPageTemplates([PageTemplate(id="one-page", frames=[frame])])

    story = [
        Paragraph("Divyanshi Saini", st["name"]),
        Paragraph(
            "Delhi NCR, India&nbsp;&nbsp;|&nbsp;&nbsp;"
            "<a href='mailto:divyanshisaini22@gmail.com' color='#19345B'>divyanshisaini22@gmail.com</a>&nbsp;&nbsp;|&nbsp;&nbsp;"
            "<a href='https://divyanshisaini.online' color='#19345B'>divyanshisaini.online</a>&nbsp;&nbsp;|&nbsp;&nbsp;"
            "<a href='https://www.linkedin.com/in/divyanshi-saini-577108259/' color='#19345B'>LinkedIn</a>&nbsp;&nbsp;|&nbsp;&nbsp;"
            "<a href='https://github.com/divyanshi2203' color='#19345B'>GitHub</a>",
            st["contact"],
        ),
        Spacer(1, 2),
    ]

    story.extend(section("Professional Summary", st))
    story.append(
        Paragraph(
            "Full-stack software developer and Computer Science (AI/ML) graduate with experience "
            "building client-facing web applications, supporting API quality, and shipping Python "
            "systems. Comfortable working across user interfaces, backend services, data, testing, "
            "and deployment. Recent work includes API testing and design support at SaaS Banana, "
            "containerized Python tasks for a freelance AI engagement, and complete web projects "
            "delivered independently. Known for clear communication, ownership, and turning "
            "requirements into reliable software.",
            st["body"],
        )
    )

    story.extend(section("Core Skills", st))
    skills = [
        ("Languages", "Python, JavaScript, SQL, Java (basic)"),
        ("Web Development", "Django, Django REST Framework, Flask, FastAPI, React, HTML5, CSS3, responsive UI"),
        ("Data and APIs", "PostgreSQL, MySQL, SQLite, SQLAlchemy, Django ORM, REST APIs, JWT, OpenAPI, Postman"),
        ("Testing and Delivery", "API testing, Pytest, end-to-end testing, Docker, Docker Compose, Git, GitHub, Railway, Vercel"),
        ("Additional", "Celery, Redis, Gunicorn, PyTorch, scikit-learn, Pandas, NumPy"),
    ]
    for label, values in skills:
        story.append(Paragraph(f"<b>{label}:</b> {values}", st["skill"]))

    story.extend(section("Experience", st))
    add_experience(
        story,
        st,
        "Python Intern (API Testing &amp; Design)",
        "SaaS Banana",
        "August 2026 - Present | Remote",
        [
            "Test internal APIs across expected, invalid, and edge-case requests, including authentication and response behavior.",
            "Support API design reviews and documentation, and use Python scripts to automate repeatable endpoint checks.",
        ],
    )
    add_experience(
        story,
        st,
        "Full-Stack / Freelance Developer",
        "Self-Employed",
        "2025 - Present | Remote",
        [
            "Completed a July 2026 engagement sourced through Handshake AI, building containerized Python tasks and end-to-end tests that verified execution inside Docker.",
            "Delivered CuraLink, an AI-powered research website with a JavaScript interface and API-driven search and content workflows.",
            "Built and deployed complete web applications with FastAPI or Flask, JavaScript, PostgreSQL or SQLite, Docker, Railway, and Vercel while managing client communication and delivery.",
        ],
    )
    add_experience(
        story,
        st,
        "Backend Developer Intern",
        "ANV Tech Solutions",
        "July 2025 - August 2025 | Remote",
        [
            "Built REST APIs with Django and FastAPI for internal workflows, including validation, authentication, and clear error handling.",
            "Improved key endpoint response times by refining PostgreSQL queries and adding appropriate indexes.",
        ],
    )

    story.extend(section("Selected Projects", st))
    project_one = [
        heading("LungCare+", "Full-Stack Healthcare Platform", "FastAPI | PyTorch | JavaScript", st),
        bullet(
            "Built a web platform that accepts CT scan uploads and returns CNN-based lung cancer predictions with confidence information.",
            st,
        ),
        bullet(
            "Connected the JavaScript interface, FastAPI services, PyTorch inference pipeline, and PostgreSQL data layer, then deployed the application on Railway.",
            st,
        ),
    ]
    story.append(KeepTogether(project_one))
    story.append(Spacer(1, 2))
    project_two = [
        heading("Paragraph Indexer API", "Backend Search Service", "Django | PostgreSQL | Docker", st),
        bullet(
            "Created an authenticated API for paragraph ingestion and ranked word-frequency search, with background processing through Celery and Redis.",
            st,
        ),
        bullet(
            "Designed efficient database queries, safe re-indexing, containerized services, and clear OpenAPI documentation for local or production use.",
            st,
        ),
    ]
    story.append(KeepTogether(project_two))

    story.extend(section("Education", st))
    story.append(
        heading(
            "B.Tech, Computer Science (AI/ML)",
            "Moradabad Institute of Technology",
            "August 2022 - June 2026 | 73%",
            st,
        )
    )

    story.extend(section("Certifications and Recognition", st))
    story.append(
        Paragraph(
            "HackerRank Basic Python | Java Full Stack, Ducat (2024) | First Prize, Smart Work Competition",
            st["small"],
        )
    )

    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build()
