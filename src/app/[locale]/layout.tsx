import '../../styles/globalStyles.scss';

import localFont from 'next/font/local';
import Link from 'next/link';
import type { Metadata } from 'next';

import { NavLinks } from '../components/NavLinks';
import { Header } from '../components/Header';
import { ChildrenFC } from '../../utils/types';
import { Footer } from '../components/Footer/Footer';
import { HashScrollHandler } from '@/src/components/HashScrollHandler';
import { LanguageProvider } from '@/src/context';
import {
  getTranslations,
  getLocaleFromParams,
} from '@/src/utils/getTranslations';
import { LOCALES, DEFAULT_LOCALE } from '@/src/constants/translations';
import style from '../layout.module.scss';
import { getLocaleAwareLink } from '@/src/utils/getNavLinks';

const inter = localFont({
  src: [
    {
      path: '../../fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../fonts/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

// eslint-disable-next-line react-refresh/only-export-components
export const generateStaticParams = () => LOCALES.map((locale) => ({ locale }));

// eslint-disable-next-line react-refresh/only-export-components
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const locale = await getLocaleFromParams(params);
  const baseUrl = 'https://reactgirls.com';

  return {
    alternates: {
      canonical: locale === DEFAULT_LOCALE ? baseUrl : `${baseUrl}/${locale}`,
      languages: {
        cs: baseUrl,
        en: `${baseUrl}/en`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      locale: locale === 'cs' ? 'cs_CZ' : 'en_US',
      alternateLocale: locale === 'cs' ? 'en_US' : 'cs_CZ',
    },
  };
};

type LocaleLayoutProps = {
  params: Promise<{ locale: string }>;
};

const LocaleLayout: ChildrenFC<LocaleLayoutProps> = async ({
  children,
  params,
}) => {
  const locale = await getLocaleFromParams(params);
  const t = getTranslations(locale);

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <link rel="alternate" hrefLang="cs" href="https://reactgirls.com" />
        <link rel="alternate" hrefLang="en" href="https://reactgirls.com/en" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://reactgirls.com"
        />
      </head>
      <body className={style.body}>
        <LanguageProvider locale={locale}>
          <header className={style.header}>
            <Link
              href={getLocaleAwareLink('/', locale)}
              className={style.logo}
              aria-label={t.ARIA_REACTGIRLS_HOME}
            >
              <span className="visually-hidden">ReactGirls</span>
            </Link>

            <Header logoClassName={style.logo} locale={locale} />

            <nav
              aria-label={t.ARIA_MAIN_NAVIGATION}
              className={style.headerNav}
            >
              <NavLinks
                t={t}
                listClassName={style.headerNavLinks}
                locale={locale}
              />
            </nav>
          </header>
          <main className={style.content}>
            <HashScrollHandler />
            {children}
          </main>

          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
