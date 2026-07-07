/**
 * i18n entry — mirrors the Personal_Auditor pattern: each zone file exports
 * `{ en, ru }`, and this module aggregates them into `T[lang][zone]`.
 * No i18n library — plain typed dictionaries.
 */
import { nav } from './nav';
import { home } from './home';
import { projects } from './projects';
import { resume } from './resume';
import { footer } from './footer';

export const LANGS = ['en', 'ru'] as const;
export type Lang = (typeof LANGS)[number];

const zones = { nav, home, projects, resume, footer };

export type Dict = {
  nav: (typeof nav)['en'];
  home: (typeof home)['en'];
  projects: (typeof projects)['en'];
  resume: (typeof resume)['en'];
  footer: (typeof footer)['en'];
};

export const T: Record<Lang, Dict> = LANGS.reduce((acc, lang) => {
  acc[lang] = Object.fromEntries(
    Object.entries(zones).map(([name, zone]) => [name, (zone as Record<Lang, unknown>)[lang]]),
  ) as Dict;
  return acc;
}, {} as Record<Lang, Dict>);
