import { useState } from 'react';
import { useLang } from '../i18n/LangContext';

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;
  // Archive-style list: each project is a collapsed "folder" row, expanded on click.
  // M.A.R.I.A. (index 0) starts open. Multiple rows can be open independently.
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <section className="section section--page">
      <div className="container">
        <h1 className="section-title">{p.title}</h1>
        <div className="section-bar" />
        <p className="page__intro">{p.intro}</p>

        <div className="archive">
          {p.items.map((proj, i) => {
            const isOpen = open.has(i);
            return (
              <div className={`arc-item${isOpen ? ' is-open' : ''}`} key={proj.name}>
                <button className="arc-row" onClick={() => toggle(i)} aria-expanded={isOpen}>
                  <span className="arc-caret" aria-hidden="true">▸</span>
                  <span className="arc-name">{proj.name}</span>
                  <span className="arc-tag">{proj.tag}</span>
                  <span className="arc-hint" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="arc-body">
                  <div className="arc-body-inner">
                    <p className="arc-desc">{proj.desc}</p>
                    <ul className="card__stack">
                      {proj.stack.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                    <div className="arc-links">
                      {proj.links.length > 0 ? (
                        proj.links.map((l) => (
                          <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="link-arrow">
                            {l.label} <span aria-hidden="true">→</span>
                          </a>
                        ))
                      ) : (
                        <span className="card__private">{p.noLink}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
