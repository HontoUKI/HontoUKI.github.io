import { useLang } from '../i18n/LangContext';

export default function Resume() {
  const { t, lang } = useLang();
  const r = t.resume;

  return (
    <section className="section section--page">
      <div className="container resume">
        <div className="resume__head">
          <div>
            <h1 className="section-title">{r.name}</h1>
            <p className="resume__role">{r.role}</p>
          </div>
          <div className="resume__actions">
            <a className="btn btn--primary" href={`/resume_${lang}.pdf`} target="_blank" rel="noopener noreferrer">{r.download}</a>
            <a className="btn btn--ghost" href="https://github.com/HontoUKI" target="_blank" rel="noopener noreferrer">{r.github}</a>
          </div>
        </div>
        <div className="section-bar" />

        <div className="resume__contact">
          <a href={`mailto:${r.contact.email}`}>{r.contact.email}</a>
          <span>{r.contact.phone}</span>
          <a href="https://github.com/HontoUKI" target="_blank" rel="noopener noreferrer">{r.contact.github}</a>
          <span>{r.contact.location}</span>
        </div>

        <div className="resume__block">
          <h2 className="resume__h">{r.summaryTitle}</h2>
          <p>{r.summary}</p>
        </div>

        <div className="resume__block">
          <h2 className="resume__h">{r.expTitle}</h2>
          <div className="exp">
            {r.experience.map((job, i) => (
              <div className="exp__item" key={i}>
                <div className="exp__top">
                  <span className="exp__role">{job.role}</span>
                  <span className="exp__period">{job.period}</span>
                </div>
                <span className="exp__org">{job.org}</span>
                <ul className="exp__points">
                  {job.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="resume__block">
          <h2 className="resume__h">{r.skillsTitle}</h2>
          <div className="skills">
            {r.skills.map((g) => (
              <div className="skill-group" key={g.label}>
                <span className="skill-group__label">{g.label}</span>
                <ul className="skill-group__items">
                  {g.items.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="resume__grid">
          <div className="resume__block">
            <h2 className="resume__h">{r.eduTitle}</h2>
            <p>{r.edu}</p>
          </div>
          <div className="resume__block">
            <h2 className="resume__h">{r.langTitle}</h2>
            <p>{r.langs}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
