type SkillGroup = { label: string; items: string[] };
type Job = { role: string; org: string; period: string; points: string[] };

export const resume = {
  en: {
    title: 'Resume',
    name: 'Rustam Alimbayev',
    role: 'Backend & AI-Systems Developer',
    contactTitle: 'Contact',
    contact: {
      github: 'github.com/HontoUKI',
    },
    summaryTitle: 'Summary',
    summary:
      'Backend developer focused on backend and AI / LLM integration. Core stack: Python, FastAPI, REST, SQL, Git, pytest. I develop M.A.R.I.A. — an author-driven local AI-character ecosystem with a backend runtime, memory, perception and ML message-processing. I use AI tools openly as part of the workflow — specs, architecture, review, tests — while owning the final result. Interested in junior positions in backend, AI integration and tooling.',
    skillsTitle: 'Technical skills',
    skills: [
      { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Rust (Tauri)'] },
      { label: 'Backend', items: ['FastAPI', 'REST API', 'async SQLAlchemy', 'Alembic', 'PostgreSQL', 'SQLite', 'JWT / RBAC'] },
      { label: 'AI / ML', items: ['Local LLM (Ollama)', 'prompt engineering', 'NumPy + scikit-learn', 'vector memory / retrieval'] },
      { label: 'Frontend', items: ['React', 'Vite', 'PixiJS / Live2D'] },
      { label: 'Practices', items: ['OOP', 'DB design', 'pytest', 'ADRs / docs', 'Git / GitHub', 'AI-assisted development'] },
    ] as SkillGroup[],
    expTitle: 'Experience',
    experience: [
      {
        role: 'Backend / AI Integration Developer',
        org: 'Personal / Open-source · HontoUKI',
        period: 'Jan 2026 — present',
        points: [
          'Designing the backend architecture (Python / FastAPI) and internal contracts between modules for M.A.R.I.A., a local AI-character runtime.',
          'Integrated local LLMs via Ollama; built the memory, retrieval and message-processing systems.',
          'Wrote ML modules (scikit-learn / NumPy) for message classification and scoring.',
          'Maintain a large regression suite (pytest) and document ADRs, API contracts and project invariants.',
          'Organized the project as a multi-layer system (Core, ML / World logic, external clients).',
        ],
      },
      {
        role: 'Intern / service-engineer assistant',
        org: '1C-Rating LLP',
        period: 'Feb 2025 — May 2025',
        points: [
          'Trained in 1C:Accounting (Kazakhstan), service support and configuration basics.',
          'Helped engineers with routine maintenance, config release updates and client requests via 1C-Connect.',
        ],
      },
    ] as Job[],
    eduTitle: 'Education',
    edu: 'East Technical-Humanitarian College — Software / Information Systems Technician (diploma, 2025)',
    langTitle: 'Languages',
    langs: 'Russian — native · English — B1',
    download: 'Download PDF',
    github: 'GitHub',
  },
  ru: {
    title: 'Резюме',
    name: 'Алимбаев Рустам',
    role: 'Backend & AI-Systems разработчик',
    contactTitle: 'Контакты',
    contact: {
      github: 'github.com/HontoUKI',
    },
    summaryTitle: 'О себе',
    summary:
      'Backend-разработчик с фокусом на backend и AI / LLM-интеграции. Основной стек: Python, FastAPI, REST, SQL, Git, pytest. Разрабатываю M.A.R.I.A. — авторскую локальную AI-character экосистему с backend-рантаймом, памятью, восприятием и ML-обработкой сообщений. Открыто использую ИИ-инструменты как часть процесса — спецификации, архитектура, ревью, тесты — оставляя за собой итоговое решение. Интересуют junior-позиции в backend, AI integration и tooling.',
    skillsTitle: 'Технические навыки',
    skills: [
      { label: 'Языки', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Rust (Tauri)'] },
      { label: 'Backend', items: ['FastAPI', 'REST API', 'async SQLAlchemy', 'Alembic', 'PostgreSQL', 'SQLite', 'JWT / RBAC'] },
      { label: 'AI / ML', items: ['локальные LLM (Ollama)', 'prompt engineering', 'NumPy + scikit-learn', 'векторная память / retrieval'] },
      { label: 'Frontend', items: ['React', 'Vite', 'PixiJS / Live2D'] },
      { label: 'Практики', items: ['ООП', 'проектирование БД', 'pytest', 'ADR / документация', 'Git / GitHub', 'AI-assisted development'] },
    ] as SkillGroup[],
    expTitle: 'Опыт',
    experience: [
      {
        role: 'Backend / AI Integration Developer',
        org: 'Личные проекты / Open-source · HontoUKI',
        period: 'Январь 2026 — наст. время',
        points: [
          'Проектирую backend-архитектуру (Python / FastAPI) и внутренние контракты между модулями для M.A.R.I.A. — рантайма локального AI-персонажа.',
          'Интегрировал локальные LLM через Ollama; собрал системы памяти, retrieval и обработки сообщений.',
          'Написал ML-модули (scikit-learn / NumPy) для классификации и оценки сообщений.',
          'Поддерживаю большую регрессионную сьюту (pytest), документирую ADR, API-контракты и инварианты проекта.',
          'Организовал проект как многоуровневую систему (Core, ML / World-логика, внешние клиенты).',
        ],
      },
      {
        role: 'Практикант / помощник сервис-инженера',
        org: 'ТОО «1С-Рейтинг»',
        period: 'Февраль 2025 — Май 2025',
        points: [
          'Обучение по 1С:Бухгалтерии для Казахстана, сервисному сопровождению и основам конфигурирования.',
          'Помогал инженерам с регламентными работами, обновлением релизов конфигураций и обращениями клиентов через 1С-Коннект.',
        ],
      },
    ] as Job[],
    eduTitle: 'Образование',
    edu: 'Восточный техническо-гуманитарный колледж — Программное обеспечение / Техник информационных систем (диплом, 2025)',
    langTitle: 'Языки',
    langs: 'Русский — родной · English — B1',
    download: 'Скачать PDF',
    github: 'GitHub',
  },
};
