export type Lang = 'en' | 'fr';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'fr') return 'fr';
  return 'en';
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Remove any existing locale prefix
  const cleanPath = path.replace(/^\/(en|fr)/, '');
  // Return /${lang} for home, /${lang}/subpath for others (no trailing slash)
  return cleanPath && cleanPath !== '/' ? `/${lang}${cleanPath}` : `/${lang}`;
}
