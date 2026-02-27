import { getBlogPermalink } from './utils/permalinks';

const navTranslations = {
  en: {
    home: 'Home',
    about: 'About Me',
    certifications: 'Certifications',
    projects: 'Projects',
    blog: 'Blog',
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    certifications: 'Certifications',
    projects: 'Projets',
    blog: 'Blog',
  },
};

export function getHeaderData(lang: 'en' | 'fr' = 'en') {
  const t = navTranslations[lang];
  return {
    links: [
      { text: t.home, href: `/${lang}/` },
      { text: t.about, href: `/${lang}/about` },
      { text: t.certifications, href: `/${lang}/certifications` },
      { text: t.projects, href: `/${lang}/projects` },
      { text: t.blog, href: `/${lang}${getBlogPermalink()}` },
    ],
    actions: [],
  };
}

export function getFooterData(lang: 'en' | 'fr' = 'en') {
  return {
    links: [],
    secondaryLinks: [],
    socialLinks: [
      { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/kiran-tl' },
    ],
    footNote: `
      Made by <a class="text-blue-600 underline dark:text-muted" href="https://www.linkedin.com/in/kiran-tl">Kiran</a> · All rights reserved.
    `,
  };
}
