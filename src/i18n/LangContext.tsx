import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LANGS, T, type Dict, type Lang } from './index';

type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const Ctx = createContext<LangCtx | null>(null);

function detectInitial(): Lang {
  const url = new URLSearchParams(window.location.search).get('lang');
  if (url && (LANGS as readonly string[]).includes(url)) return url as Lang;
  const saved = localStorage.getItem('lang');
  if (saved && (LANGS as readonly string[]).includes(saved)) return saved as Lang;
  const nav = navigator.language?.toLowerCase().startsWith('ru') ? 'ru' : 'en';
  return nav as Lang;
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitial);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  const value = useMemo<LangCtx>(() => ({ lang, setLang, t: T[lang] }), [lang]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang(): LangCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
