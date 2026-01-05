import { DEFAULT_LOCALE, type Locale } from '../constants/translations';

const BASE_URL = 'https://reactgirls.com';

export const getCanonicalUrl = (pathname: string, locale: Locale): string => {
  const cleanPath = pathname === '/' ? '' : pathname;

  if (locale === DEFAULT_LOCALE) {
    return `${BASE_URL}${cleanPath}`;
  }

  return `${BASE_URL}/${locale}${cleanPath}`;
};

export const getAlternateUrls = (pathname: string) => {
  const cleanPath = pathname === '/' ? '' : pathname;

  return {
    cs: `${BASE_URL}${cleanPath}`,
    en: `${BASE_URL}/en${cleanPath}`,
    'x-default': `${BASE_URL}${cleanPath}`,
  };
};

export const getPageAlternates = (pathname: string, locale: Locale) => ({
  canonical: getCanonicalUrl(pathname, locale),
  languages: getAlternateUrls(pathname),
});
