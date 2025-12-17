'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { useLanguage, useTranslations } from '@/src/context';
import { type Locale } from '@/src/constants/translations';
import flagCz from '@/src/assets/flag-cz.svg';
import flagGb from '@/src/assets/flag-gb.svg';
import style from './LanguageSwitcher.module.scss';

const FLAGS: Record<Locale, { src: string; alt: string }> = {
  cs: { src: flagCz.src, alt: 'Čeština' },
  en: { src: flagGb.src, alt: 'English' },
};

export const LanguageSwitcher = () => {
  const { locale } = useLanguage();
  const t = useTranslations();
  const pathname = usePathname();

  const getLocalizedPath = (targetLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(/^\/(cs|en)/, '') || '/';

    return `/${targetLocale}${pathWithoutLocale}`;
  };

  const alternateLocale: Locale = locale === 'cs' ? 'en' : 'cs';
  const alternateFlag = FLAGS[alternateLocale];

  return (
    <nav
      className={style.languageSwitcher}
      aria-label={t.LANGUAGE_SWITCH_LABEL}
    >
      <Link
        href={getLocalizedPath(alternateLocale)}
        className={style.flagButton}
        aria-label={
          alternateLocale === 'cs' ? t.LANGUAGE_CZECH : t.LANGUAGE_ENGLISH
        }
        title={alternateLocale === 'cs' ? t.LANGUAGE_CZECH : t.LANGUAGE_ENGLISH}
      >
        <Image
          src={alternateFlag.src}
          alt={alternateFlag.alt}
          width={24}
          height={16}
          className={style.flagIcon}
        />
        <span className={style.languageLabel}>
          {alternateLocale === 'cs' ? t.LANGUAGE_CZECH : t.LANGUAGE_ENGLISH}
        </span>
      </Link>
    </nav>
  );
};
