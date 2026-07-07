type Link = { label: string; url: string };
type Project = {
  name: string;
  tag: string;
  desc: string;
  stack: string[];
  links: Link[];
  featured?: boolean;
};

const GH = 'https://github.com/HontoUKI';

export const projects = {
  en: {
    title: 'Projects',
    intro: 'Selected work — an author-driven AI runtime, full-stack web, and smaller tools.',
    items: [
      {
        name: 'M.A.R.I.A.',
        tag: 'Local AI character ecosystem',
        desc:
          'A single-user local AI-character runtime: FastAPI core, a self-written ML perception brain, cognitive memory / dossier, an offline reflection loop and permission-gated agency. Multi-repo, ADR-documented, ~44k LOC of authored code with a strong test suite.',
        stack: ['Python', 'FastAPI', 'NumPy', 'scikit-learn', 'Ollama', 'SQLite'],
        links: [{ label: 'Ecosystem hub', url: `${GH}/M.A.R.I.A.` }],
        featured: true,
      },
      {
        name: 'Online Learning Platform',
        tag: 'Full-stack · educational platform',
        desc:
          'Role-based platform (admin / teacher / student) with modules, lessons, tests and grades. Backend: FastAPI + async SQLAlchemy on PostgreSQL, JWT auth with login throttling, RBAC, Excel import. Frontend: React + Vite with protected routes and role dashboards.',
        stack: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'React', 'Vite'],
        links: [
          { label: 'Backend', url: `${GH}/online_platform_api` },
          { label: 'Frontend', url: `${GH}/online_platform` },
        ],
      },
      {
        name: 'Task Manager',
        tag: 'Desktop overlay + typed API',
        desc:
          'An always-on-top transparent desktop task overlay (Tauri v2 + React/TS) backed by a typed FastAPI task API — global shortcuts, tray, SQLAlchemy 2 + Alembic migrations and a pytest suite.',
        stack: ['Python', 'FastAPI', 'SQLAlchemy 2', 'Alembic', 'Tauri', 'React', 'TypeScript', 'Rust'],
        links: [{ label: 'Repository', url: `${GH}/task_manager` }],
      },
      {
        name: 'Freshman Helper',
        tag: 'Telegram bot',
        desc:
          'A Telegram bot for university freshmen: RU/EN navigation, campus info, events and quick surveys. Built on aiogram 3 with a modular structure.',
        stack: ['Python', 'aiogram 3'],
        links: [{ label: 'Repository', url: `${GH}/Telegram_Bot` }],
      },
      {
        name: 'Presence-Shell',
        tag: 'Desktop client',
        desc:
          "M.A.R.I.A.'s embodiment client: a Tauri (Rust) + React desktop shell with Live2D / sprite avatar rendering, an overlay and a bridge to the voice sidecar.",
        stack: ['React', 'TypeScript', 'PixiJS', 'Live2D', 'Tauri', 'Rust'],
        links: [],
      },
      {
        name: 'Sandbox_with_LLM',
        tag: 'LLM experiments',
        desc:
          'A branch-based sandbox for small LLM-powered systems — each branch is an independent prototype with its own goal, README and tests.',
        stack: ['Python', 'LLM'],
        links: [{ label: 'Repository', url: `${GH}/Sandbox_with_LLM` }],
      },
    ] as Project[],
    visit: 'Open',
    noLink: 'private',
  },
  ru: {
    title: 'Проекты',
    intro: 'Избранное — авторский AI-рантайм, full-stack веб и инструменты поменьше.',
    items: [
      {
        name: 'M.A.R.I.A.',
        tag: 'Экосистема локального AI-персонажа',
        desc:
          'Single-user рантайм локального AI-персонажа: ядро на FastAPI, самописный ML-мозг восприятия, когнитивная память / досье, офлайн-цикл рефлексии и агентность с permission-гейтами. Мульти-репо, задокументировано ADR, ~44k строк авторского кода с сильной тест-сьютой.',
        stack: ['Python', 'FastAPI', 'NumPy', 'scikit-learn', 'Ollama', 'SQLite'],
        links: [{ label: 'Хаб экосистемы', url: `${GH}/M.A.R.I.A.` }],
        featured: true,
      },
      {
        name: 'Online Learning Platform',
        tag: 'Full-stack · образовательная платформа',
        desc:
          'Платформа с ролями (admin / teacher / student): модули, уроки, тесты, оценки. Backend: FastAPI + async SQLAlchemy на PostgreSQL, JWT-аутентификация с throttling, RBAC, импорт из Excel. Frontend: React + Vite, защищённые маршруты и кабинеты по ролям.',
        stack: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'React', 'Vite'],
        links: [
          { label: 'Backend', url: `${GH}/online_platform_api` },
          { label: 'Frontend', url: `${GH}/online_platform` },
        ],
      },
      {
        name: 'Task Manager',
        tag: 'Десктоп-оверлей + типизированное API',
        desc:
          'Always-on-top прозрачный десктоп-оверлей задач (Tauri v2 + React/TS) с типизированным FastAPI-бэкендом — глобальные шорткаты, трей, SQLAlchemy 2 + миграции Alembic и сьюта на pytest.',
        stack: ['Python', 'FastAPI', 'SQLAlchemy 2', 'Alembic', 'Tauri', 'React', 'TypeScript', 'Rust'],
        links: [{ label: 'Репозиторий', url: `${GH}/task_manager` }],
      },
      {
        name: 'Freshman Helper',
        tag: 'Telegram-бот',
        desc:
          'Telegram-бот для первокурсников: RU/EN-навигация, кампус-инфо, события и быстрые опросы. На aiogram 3, модульная структура.',
        stack: ['Python', 'aiogram 3'],
        links: [{ label: 'Репозиторий', url: `${GH}/Telegram_Bot` }],
      },
      {
        name: 'Presence-Shell',
        tag: 'Десктоп-клиент',
        desc:
          'Embodiment-клиент M.A.R.I.A.: десктоп-shell на Tauri (Rust) + React с рендером Live2D / спрайт-аватара, overlay и мостом к голосовому сайдкару.',
        stack: ['React', 'TypeScript', 'PixiJS', 'Live2D', 'Tauri', 'Rust'],
        links: [],
      },
      {
        name: 'Sandbox_with_LLM',
        tag: 'LLM-эксперименты',
        desc:
          'Ветка-на-прототип песочница для небольших LLM-систем — каждая ветка это отдельный прототип со своей целью, README и тестами.',
        stack: ['Python', 'LLM'],
        links: [{ label: 'Репозиторий', url: `${GH}/Sandbox_with_LLM` }],
      },
    ] as Project[],
    visit: 'Открыть',
    noLink: 'приватный',
  },
};
