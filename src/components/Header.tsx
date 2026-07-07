import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLang } from '../i18n/LangContext';
import { LANGS } from '../i18n';

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/projects', label: t.nav.projects, end: false },
    { to: '/resume', label: t.nav.resume, end: false },
  ];

  const langSwitch = (mobile = false) => (
    <div className={`lang-switch${mobile ? ' lang-switch--mobile' : ''}`}>
      {LANGS.map((l) => (
        <button
          key={l}
          className={lang === l ? 'is-active' : ''}
          onClick={() => setLang(l)}
          aria-label={`Switch language to ${l.toUpperCase()}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__inner container">
          <NavLink to="/" className="header__brand" onClick={() => setMenuOpen(false)}>
            {t.nav.brand}<span className="header__brand-dot">.</span>
          </NavLink>

          <nav className="nav nav--desktop">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
            {langSwitch()}
          </nav>

          <button
            className={`burger${menuOpen ? ' is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div
        className={`mobile-nav${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
        onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false); }}
      >
        <div className="mobile-nav__inner">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `mobile-nav__link${isActive ? ' is-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          {langSwitch(true)}
        </div>
      </div>
    </>
  );
}
