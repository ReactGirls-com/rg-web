import { cookies } from 'next/headers';

import { NNBSP } from '@/src/constants';
import {
  TRANSLATIONS_CS,
  TRANSLATIONS_EN,
  DEFAULT_LOCALE,
  type Locale,
} from '../constants/translations';

const LOCALE_COOKIE = 'NEXT_LOCALE';

export type Translations = typeof TRANSLATIONS_CS;

export const getTranslations = (locale: Locale): Translations =>
  locale === 'en' ? (TRANSLATIONS_EN as Translations) : TRANSLATIONS_CS;

export const getLocaleFromParams = async (
  params: Promise<{ locale: string }>,
): Promise<Locale> => {
  const { locale } = await params;

  return (locale || DEFAULT_LOCALE) as Locale;
};

export const getLocale = async (): Promise<Locale> => {
  const cookieStore = await cookies();
  const locale = cookieStore.get(LOCALE_COOKIE)?.value as Locale | undefined;

  return locale || DEFAULT_LOCALE;
};

export const getTranslationsWithLocale = async () => {
  const locale = await getLocale();

  return { locale, t: getTranslations(locale) };
};

export const getLocalizedPercentSuffix = (locale: Locale) =>
  locale.startsWith(DEFAULT_LOCALE) ? `${NNBSP}%` : '%';
