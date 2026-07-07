import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext';

export default function Home() {
  const { t } = useLang();
  const h = t.home;

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="hero__eyebrow">{h.hero.role}</p>
            <h1 className="hero__title">
              {h.hero.hi} <span className="accent">👋</span>
            </h1>
            <p className="hero__tagline">{h.hero.tagline}</p>
            <div className="hero__cta">
              <Link to="/projects" className="btn btn--primary">{h.hero.ctaProjects}</Link>
              <Link to="/resume" className="btn btn--ghost">{h.hero.ctaResume}</Link>
            </div>
          </div>
          <div className="hero__portrait" aria-hidden="true">
            <img src="/maria.png" alt="" loading="eager" />
          </div>
        </div>
        <div className="hero__glow" aria-hidden="true" />
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{h.about.title}</h2>
          <div className="section-bar" />
          <div className="about__lines">
            {h.about.lines.map((line, i) => <p key={i}>{line}</p>)}
          </div>
        </div>
      </section>

      <section className="section section--maria">
        <div className="container">
          <span className="chip">{h.maria.badge}</span>
          <h2 className="maria__title">{h.maria.title}</h2>
          <p className="maria__subtitle">{h.maria.subtitle}</p>
          <p className="maria__desc">{h.maria.desc}</p>

          <ul className="maria__bullets">
            {h.maria.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>

          <div className="metrics">
            <h3 className="metrics__title">{h.maria.metricsTitle}</h3>
            <div className="metrics__grid">
              {h.maria.metrics.map(([label, value], i) => (
                <div className="metric" key={i}>
                  <span className="metric__value">{value}</span>
                  <span className="metric__label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="maria__links">
            <a className="btn btn--primary" href="https://github.com/HontoUKI/M.A.R.I.A." target="_blank" rel="noopener noreferrer">{h.maria.linkHub}</a>
            <a className="btn btn--ghost" href="https://github.com/HontoUKI/M.A.R.I.A./tree/main/public/showrun" target="_blank" rel="noopener noreferrer">{h.maria.linkShowrun}</a>
          </div>
        </div>
      </section>
    </>
  );
}
