# Architecture

A small, deliberately dependency-light static site. No UI kit, no state library, no i18n
library — just React + react-router + a couple of typed patterns. It compiles to static
files that GitHub Pages serves at the domain root.

## Stack

| Concern | Choice |
|---|---|
| Build | Vite 6 |
| UI | React 18 + TypeScript (strict) |
| Routing | react-router-dom 6 (`BrowserRouter`) |
| i18n | hand-rolled typed dictionaries + React context |
| Styling | one `styles.css`, CSS variables (black & red theme) |
| Hosting | GitHub Pages via GitHub Actions |

## Folder layout

```
src/
├── main.tsx            # createRoot → BrowserRouter → LangProvider → App
├── App.tsx             # ScrollToTop + Header + <Routes> + Footer
├── components/
│   ├── Header.tsx      # brand, nav (NavLink), language switch, mobile drawer
│   └── Footer.tsx
├── pages/
│   ├── Home.tsx        # hero (+ portrait), About, M.A.R.I.A. flagship + metrics
│   ├── Projects.tsx    # project cards from i18n
│   └── Resume.tsx      # contact, summary, experience, skills, education
├── i18n/
│   ├── index.ts        # LANGS, Lang, T[lang][zone], Dict type
│   ├── LangContext.tsx # LangProvider + useLang()  (lang, setLang, t)
│   ├── nav.ts home.ts projects.ts resume.ts footer.ts   # { en, ru } per zone
└── styles.css
```

## i18n

Mirrors the `Personal_Auditor` pattern. Each zone file exports `{ en: {...}, ru: {...} }`
with identical shape per language. `index.ts` merges the zones into a single
`T: Record<Lang, Dict>`, and `Dict` is derived from the `en` shape so TypeScript catches a
missing key in either language.

`LangContext` owns the active language:

- initial pick: `?lang=` query → `localStorage` → browser language → `en`;
- `setLang` updates state and persists to `localStorage` + `<html lang>`;
- any component reads `const { t, lang, setLang } = useLang()`.

There is no prop-drilling of `t` — the context makes it available across all routes.

## Routing & GitHub Pages

`BrowserRouter` gives clean paths (`/projects`, `/resume`). GitHub Pages has no server-side
rewrites, so a deep link or refresh would 404. The standard SPA trick handles it:

- `public/404.html` — Pages serves this on unknown paths; it encodes the path into a query
  and redirects to `/`.
- a small inline script in `index.html` decodes that query back into `history` before React
  mounts, so react-router resolves the intended route.

`base` is `/` because this is a **user site** served at the domain root.

## Theme

All colors and the fluid type/spacing scale live as CSS variables in `styles.css`
(`--bg`, `--red`, `--text`, `clamp()` scales). Changing the palette is a one-place edit.
The black & red scheme matches the M.A.R.I.A. character theme.

## Resume PDFs

`scripts/gen_resume.py` (fpdf2) renders `public/resume_en.pdf` and `public/resume_ru.pdf`
from inline `EN` / `RU` dictionaries, using a Unicode TTF (Arial) so Cyrillic renders. The
`Resume` page links `/resume_${lang}.pdf` for the active language. Keep the script's content
in sync with `src/i18n/resume.ts`.

## Build & deploy pipeline

`npm run build` = `tsc` (type-check, no emit) → `vite build` → `dist/`.
`.github/workflows/deploy.yml` runs on push to `main`: checkout → setup-node → `npm ci` →
`npm run build` → upload `dist/` as a Pages artifact → deploy. Pages source is set to
"GitHub Actions" once in repo settings.
