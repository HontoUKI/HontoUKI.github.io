import { useLang } from '../i18n/LangContext';

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;

  return (
    <section className="section section--page">
      <div className="container">
        <h1 className="section-title">{p.title}</h1>
        <div className="section-bar" />
        <p className="page__intro">{p.intro}</p>

        <div className="projects">
          {p.items.map((proj) => (
            <article className={`card${proj.featured ? ' card--featured' : ''}`} key={proj.name}>
              <div className="card__head">
                <h2 className="card__name">{proj.name}</h2>
                <span className="card__tag">{proj.tag}</span>
              </div>
              <p className="card__desc">{proj.desc}</p>
              <ul className="card__stack">
                {proj.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>
              <div className="card__links">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
