'use client';

import { createContext, useContext, useMemo } from 'react';

import { ChildrenFC } from '../utils/types';
import {
  TRANSLATIONS_CS,
  TRANSLATIONS_EN,
  type Locale,
} from '../constants/translations';

type Translations = typeof TRANSLATIONS_CS;

type LanguageContextType = {
  locale: Locale;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

type LanguageProviderProps = {
  locale: Locale;
};

export const LanguageProvider: ChildrenFC<LanguageProviderProps> = ({
  locale,
  children,
}) => {
  const translations: Translations = useMemo(
    () =>
      locale === 'en' ? (TRANSLATIONS_EN as Translations) : TRANSLATIONS_CS,
    [locale],
  );

  const value: LanguageContextType = useMemo(
    () => ({
      locale,
      t: translations,
    }),
    [locale, translations],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};

export const useTranslations = (): Translations => {
  const { t } = useLanguage();

  return t;
};

export type { Locale, Translations };
