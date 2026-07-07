# HontoUKI — portfolio (`hontouki.github.io`)

Personal portfolio of **Rustam Alimbayev** — Backend & AI-Systems Developer, creator of
[M.A.R.I.A.](https://github.com/HontoUKI/M.A.R.I.A.).

Bilingual (EN / RU), multi-page, black & red theme. Built with **Vite + React + TypeScript**,
deployed to **GitHub Pages** via GitHub Actions.

> Architecture & design decisions: see [`ARCHITECTURE.md`](ARCHITECTURE.md).

## Run locally

```bash
npm install
npm run dev        # http://localhost:5175
npm run build      # type-check + production build → dist/
npm run preview    # serve the production build
```

## Structure (short)

```
src/
├── main.tsx            # entry: Router + LangProvider
├── App.tsx             # layout + routes (/ , /projects , /resume)
├── components/         # Header (nav + lang switch), Footer
├── pages/              # Home, Projects, Resume
├── i18n/               # bilingual content (see below) + LangContext
└── styles.css          # black & red theme (CSS variables)
public/
├── maria.png           # hero portrait
├── resume_en.pdf       # generated resume (see scripts/)
├── resume_ru.pdf
└── 404.html            # SPA fallback for GitHub Pages
```

## Content lives in `src/i18n/`

Each zone file exports `{ en, ru }`; `i18n/index.ts` merges them into `T[lang][zone]`.
No i18n library — plain typed dictionaries. To edit copy, change the relevant zone file
(`home.ts`, `projects.ts`, `resume.ts`, `nav.ts`, `footer.ts`).

### Adding a new project / repo

Add one object to **both** `en` and `ru` arrays in [`src/i18n/projects.ts`](src/i18n/projects.ts).
Template:

```ts
{
  name: 'Repo Name',
  tag: 'Short category',            // e.g. 'Full-stack · web app'
  desc: 'One or two sentences: what it is, what it does, the interesting bits.',
  stack: ['Python', 'FastAPI', 'React'],   // shown as chips
  links: [
    { label: 'Repository', url: `${GH}/repo_name` },   // GH = https://github.com/HontoUKI
    // { label: 'Backend', url: `${GH}/other_repo` },   // multiple links allowed
  ],
  // links: [],  featured: true,     // empty links → shows "private"; featured → full-width card
},
```

Keep the EN and RU entries in the **same order** (they render from their own array).

### Regenerating the resume PDF

The two PDFs in `public/` are generated from `scripts/gen_resume.py` (fpdf2). Edit the
`EN` / `RU` dictionaries there and run:

```bash
pip install fpdf2
python scripts/gen_resume.py
```

Keep the PDF content in sync with `src/i18n/resume.ts`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml` — it builds and publishes `dist/`
to GitHub Pages. In the repo: **Settings → Pages → Source: GitHub Actions** (one-time).
Live at `https://hontouki.github.io`.
