import type { Translations } from './getTranslations';
import {
  COURSES_LINK,
  MENTORING_LINK,
  MEETUPS_LINK,
  CONTACT_LINK,
} from '../constants';
import { DEFAULT_LOCALE, Locale } from '../constants/translations';

export const getLocaleAwareLink = (href: string, locale: Locale) =>
  locale === DEFAULT_LOCALE ? href : href.replace('/', `/${locale}/`);

export const getNavLinks = (t: Translations, locale: Locale) => [
  {
    label: t.COURSES_LINK_TEXT,
    href: getLocaleAwareLink(COURSES_LINK, locale),
  },
  {
    label: t.MENTORING_LINK_TEXT,
    href: getLocaleAwareLink(MENTORING_LINK, locale),
  },
  {
    label: t.MEETUPS_LINK_TEXT,
    href: getLocaleAwareLink(MEETUPS_LINK, locale),
  },
  {
    label: t.CONTACT_LINK_TEXT,
    href: getLocaleAwareLink(CONTACT_LINK, locale),
  },
];
