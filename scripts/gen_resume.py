# -*- coding: utf-8 -*-
import os

from fpdf import FPDF

# Sensitive contacts come from env, never hardcoded. Empty → omitted from the PDF.
#   CONTACT_EMAIL=... CONTACT_PHONE=... python scripts/gen_resume.py
_EMAIL = os.getenv("CONTACT_EMAIL", "").strip()
_PHONE = os.getenv("CONTACT_PHONE", "").strip()
_LOC = os.getenv("CONTACT_LOCATION", "").strip()
_AVAIL = os.getenv("CONTACT_AVAILABILITY", "").strip()

RED = (200, 22, 40)
DARK = (28, 28, 33)
GRAY = (110, 110, 120)
ARIAL = r"C:\Windows\Fonts\arial.ttf"
ARIALB = r"C:\Windows\Fonts\arialbd.ttf"
ARIALI = r"C:\Windows\Fonts\ariali.ttf"


def build(c, out):
    pdf = FPDF(format="A4", unit="mm")
    pdf.set_auto_page_break(True, margin=15)
    pdf.add_page()
    pdf.add_font("A", "", ARIAL)
    pdf.add_font("A", "B", ARIALB)
    pdf.add_font("A", "I", ARIALI)
    W = pdf.w - pdf.l_margin - pdf.r_margin

    pdf.set_text_color(*DARK)
    pdf.set_font("A", "B", 21)
    pdf.cell(0, 9, c["name"], new_x="LMARGIN", new_y="NEXT")
    pdf.set_text_color(*RED)
    pdf.set_font("A", "B", 12)
    pdf.cell(0, 7, c["role"], new_x="LMARGIN", new_y="NEXT")
    pdf.set_text_color(*GRAY)
    pdf.set_font("A", "", 9)
    pdf.cell(0, 6, "   |   ".join(c["contact"]), new_x="LMARGIN", new_y="NEXT")
    pdf.ln(2)
    pdf.set_draw_color(*RED)
    pdf.set_line_width(0.5)
    pdf.line(pdf.l_margin, pdf.get_y(), pdf.w - pdf.r_margin, pdf.get_y())
    pdf.ln(4)

    def h(title):
        pdf.set_text_color(*RED)
        pdf.set_font("A", "B", 10.5)
        pdf.cell(0, 6, title.upper(), new_x="LMARGIN", new_y="NEXT")
        pdf.ln(0.5)

    def para(text):
        pdf.set_text_color(*DARK)
        pdf.set_font("A", "", 10)
        pdf.multi_cell(W, 5, text)
        pdf.ln(2.5)

    def bullets(items):
        pdf.set_font("A", "", 10)
        for it in items:
            y = pdf.get_y()
            pdf.set_text_color(*RED)
            pdf.set_xy(pdf.l_margin, y)
            pdf.cell(4, 5, chr(0x2022))
            pdf.set_text_color(*DARK)
            pdf.set_xy(pdf.l_margin + 4.5, y)
            pdf.multi_cell(W - 4.5, 5, it)
        pdf.ln(1.5)

    h(c["summaryTitle"])
    para(c["summary"])

    h(c["expTitle"])
    for job in c["experience"]:
        y = pdf.get_y()
        pdf.set_text_color(*DARK)
        pdf.set_font("A", "B", 10.5)
        pdf.cell(W * 0.72, 5.5, job["role"])
        pdf.set_text_color(*RED)
        pdf.set_font("A", "", 9)
        pdf.set_xy(pdf.l_margin + W * 0.72, y)
        pdf.cell(W * 0.28, 5.5, job["period"], align="R", new_x="LMARGIN", new_y="NEXT")
        pdf.set_text_color(*GRAY)
        pdf.set_font("A", "I", 9)
        pdf.cell(0, 5, job["org"], new_x="LMARGIN", new_y="NEXT")
        pdf.ln(0.5)
        bullets(job["points"])

    h(c["skillsTitle"])
    for g in c["skills"]:
        y = pdf.get_y()
        pdf.set_text_color(*DARK)
        pdf.set_font("A", "B", 9.5)
        pdf.set_xy(pdf.l_margin, y)
        pdf.cell(32, 5, g["label"])
        pdf.set_font("A", "", 9.5)
        pdf.set_text_color(70, 70, 78)
        pdf.set_xy(pdf.l_margin + 32, y)
        pdf.multi_cell(W - 32, 5, " . ".join(g["items"]))
    pdf.ln(2.5)

    h(c["eduTitle"])
    para(c["edu"])
    h(c["langTitle"])
    para(c["langs"])

    pdf.output(out)
    print("wrote", out)


EN = {
    "name": "Rustam Alimbayev",
    "role": "AI-native Backend & AI-Systems Developer",
    "contact": [c for c in [_EMAIL, _PHONE, "github.com/HontoUKI", _LOC, _AVAIL] if c],
    "summaryTitle": "Summary",
    "summary": "AI-native, self-taught developer, early in my career. Core stack: Python, FastAPI, REST, SQL, Git, pytest. I use AI as leverage to build and drive systems bigger than my formal experience, and I can build web apps and their backends with or without it. My main project, M.A.R.I.A., is a personal laboratory: an author-driven local AI-character runtime with memory, perception and ML message-processing. Looking for a first real team experience in backend / AI integration, where I can contribute and grow.",
    "expTitle": "Experience",
    "experience": [
        {"role": "Backend / AI Integration Developer", "org": "Personal / Open-source, HontoUKI", "period": "Jan 2026 - present",
         "points": [
             "Designing the backend architecture (Python / FastAPI) and internal contracts between modules for M.A.R.I.A., a local AI-character runtime.",
             "Integrated local LLMs via Ollama; built the memory, retrieval and message-processing systems.",
             "Wrote ML modules (scikit-learn / NumPy) for message classification and scoring.",
             "Maintain a large regression suite (pytest) and document ADRs, API contracts and project invariants.",
             "Organized the project as a multi-layer system (Core, ML / World logic, external clients)."]},
        {"role": "Intern / service-engineer assistant", "org": "1C-Rating LLP", "period": "Feb 2025 - May 2025",
         "points": [
             "Trained in 1C:Accounting (Kazakhstan), service support and configuration basics.",
             "Helped engineers with routine maintenance, config release updates and client requests via 1C-Connect."]},
    ],
    "skillsTitle": "Technical skills",
    "skills": [
        {"label": "Languages", "items": ["Python", "JavaScript", "TypeScript", "SQL", "Rust (Tauri)"]},
        {"label": "Backend", "items": ["FastAPI", "REST API", "async SQLAlchemy", "Alembic", "PostgreSQL", "SQLite", "JWT / RBAC"]},
        {"label": "AI / ML", "items": ["Local LLM (Ollama)", "prompt engineering", "NumPy + scikit-learn", "vector memory / retrieval"]},
        {"label": "Frontend", "items": ["React", "Vite", "PixiJS / Live2D"]},
        {"label": "Practices", "items": ["OOP", "DB design", "pytest", "ADRs / docs", "Git / GitHub", "AI-assisted development"]},
    ],
    "eduTitle": "Education",
    "edu": "East Technical-Humanitarian College - Software / Information Systems Technician (diploma, 2025)",
    "langTitle": "Languages",
    "langs": "Russian - native   |   English - B1",
}

RU = {
    "name": "Алимбаев Рустам",
    "role": "AI-native Backend & AI-Systems разработчик",
    "contact": [c for c in [_EMAIL, _PHONE, "github.com/HontoUKI", _LOC, _AVAIL] if c],
    "summaryTitle": "О себе",
    "summary": "AI-native разработчик, самоучка, в начале пути. Основной стек: Python, FastAPI, REST, SQL, Git, pytest. Использую ИИ как рычаг, чтобы строить и вести системы крупнее моего формального опыта, и умею собирать веб-приложения и бэкенды к ним, с ИИ или без. Мой главный проект M.A.R.I.A. — личная лаборатория: авторский рантайм локального AI-персонажа с памятью, восприятием и ML-обработкой сообщений. Ищу первый нормальный командный опыт в backend / AI-интеграции, где можно вносить вклад и расти.",
    "expTitle": "Опыт",
    "experience": [
        {"role": "Backend / AI Integration Developer", "org": "Личные проекты / Open-source, HontoUKI", "period": "Январь 2026 - наст. время",
         "points": [
             "Проектирую backend-архитектуру (Python / FastAPI) и внутренние контракты между модулями для M.A.R.I.A. — рантайма локального AI-персонажа.",
             "Интегрировал локальные LLM через Ollama; собрал системы памяти, retrieval и обработки сообщений.",
             "Написал ML-модули (scikit-learn / NumPy) для классификации и оценки сообщений.",
             "Поддерживаю большую регрессионную сьюту (pytest), документирую ADR, API-контракты и инварианты.",
             "Организовал проект как многоуровневую систему (Core, ML / World-логика, внешние клиенты)."]},
        {"role": "Практикант / помощник сервис-инженера", "org": "ТОО 1С-Рейтинг", "period": "Февраль 2025 - Май 2025",
         "points": [
             "Обучение по 1С:Бухгалтерии для Казахстана, сервисному сопровождению и основам конфигурирования.",
             "Помогал инженерам с регламентными работами, обновлением релизов конфигураций и обращениями клиентов через 1С-Коннект."]},
    ],
    "skillsTitle": "Технические навыки",
    "skills": [
        {"label": "Языки", "items": ["Python", "JavaScript", "TypeScript", "SQL", "Rust (Tauri)"]},
        {"label": "Backend", "items": ["FastAPI", "REST API", "async SQLAlchemy", "Alembic", "PostgreSQL", "SQLite", "JWT / RBAC"]},
        {"label": "AI / ML", "items": ["локальные LLM (Ollama)", "prompt engineering", "NumPy + scikit-learn", "векторная память / retrieval"]},
        {"label": "Frontend", "items": ["React", "Vite", "PixiJS / Live2D"]},
        {"label": "Практики", "items": ["ООП", "проектирование БД", "pytest", "ADR / документация", "Git / GitHub", "AI-assisted development"]},
    ],
    "eduTitle": "Образование",
    "edu": "Восточный техническо-гуманитарный колледж — Программное обеспечение / Техник информационных систем (диплом, 2025)",
    "langTitle": "Языки",
    "langs": "Русский - родной   |   English - B1",
}

import os
_PUB = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public")
build(EN, os.path.join(_PUB, "resume_en.pdf"))
build(RU, os.path.join(_PUB, "resume_ru.pdf"))
