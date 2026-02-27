const navTranslations = {
  en: {
    home: 'Home',
    about: 'About Me',
    certifications: 'Certifications',
    projects: 'Projects',
    recoEngines: 'Recommendation Engines',
    optimization: 'Optimization Techniques',
    genai: 'Gen AI Applications',
    contact: 'Contact',
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    certifications: 'Certifications',
    projects: 'Projets',
    recoEngines: 'Moteurs de Recommandation',
    optimization: 'Techniques d\'Optimisation',
    genai: 'Applications Gen AI',
    contact: 'Contact',
  },
};

export function getHeaderData(lang: 'en' | 'fr' = 'en') {
  const t = navTranslations[lang];
  return {
    links: [
      { text: t.home, href: `/${lang}` },
      { text: t.about, href: `/${lang}/about` },
      { text: t.certifications, href: `/${lang}/certifications` },
      {
        text: t.projects,
        links: [
          { text: t.recoEngines, href: `/${lang}/projects/recommendation-engines` },
          { text: t.optimization, href: `/${lang}/projects/optimization-techniques` },
          { text: t.genai, href: `/${lang}/projects/gen-ai-applications` },
        ],
      },
      { text: t.contact, href: `/${lang}/contact` },
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
      { ariaLabel: 'Credly', icon: 'credly', href: 'https://www.credly.com/users/kirantl/badges#credly' },
    ],
    footNote: `
      Made by <a class="text-muted hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 underline" href="https://www.linkedin.com/in/kiran-tl">Kiran Tirumale</a> · All rights reserved.
    `,
  };
}
