import { useLang } from '../i18n/LangContext';

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <span className="footer__brand">HontoUKI</span>
          <span className="footer__role"> — {t.footer.tagline}</span>
          <span className="footer__aka"> · {t.footer.aka}</span>
        </div>
        <div className="footer__links">
          <a href="https://github.com/HontoUKI" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://github.com/HontoUKI/M.A.R.I.A." target="_blank" rel="noopener noreferrer">M.A.R.I.A.</a>
        </div>
        <div className="footer__meta">
          <span>{t.footer.built}</span>
          <span>© {year} Rustam · {t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
