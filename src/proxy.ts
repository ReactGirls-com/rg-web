import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { DEFAULT_LOCALE, LOCALES, type Locale } from './constants/translations';

const LOCALE_COOKIE = 'NEXT_LOCALE';

const getLocaleFromPath = (pathname: string): Locale | null => {
  const segments = pathname.split('/');
  const potentialLocale = segments[1] as Locale;

  return LOCALES.includes(potentialLocale) ? potentialLocale : null;
};

const getPreferredLocale = (request: NextRequest): Locale => {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value as
    | Locale
    | undefined;

  if (cookieLocale && LOCALES.includes(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get('accept-language');

  if (acceptLanguage) {
    const browserLocales = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim().substring(0, 2).toLowerCase());

    for (const browserLocale of browserLocales) {
      if (LOCALES.includes(browserLocale as Locale)) {
        return browserLocale as Locale;
      }
    }
  }

  return DEFAULT_LOCALE;
};

export const proxy = (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next();
  }

  const pathnameLocale = getLocaleFromPath(pathname);

  if (pathnameLocale) {
    if (pathnameLocale === DEFAULT_LOCALE) {
      const pathWithoutLocale =
        pathname.replace(`/${DEFAULT_LOCALE}`, '') || '/';
      const response = NextResponse.redirect(
        new URL(pathWithoutLocale, request.url),
      );
      response.cookies.set(LOCALE_COOKIE, DEFAULT_LOCALE, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
      });

      return response;
    }

    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, pathnameLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    });

    return response;
  }

  const preferredLocale = getPreferredLocale(request);

  if (preferredLocale !== DEFAULT_LOCALE) {
    const response = NextResponse.redirect(
      new URL(`/${preferredLocale}${pathname}`, request.url),
    );
    response.cookies.set(LOCALE_COOKIE, preferredLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    });

    return response;
  }

  const response = NextResponse.rewrite(
    new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url),
  );
  response.cookies.set(LOCALE_COOKIE, DEFAULT_LOCALE, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
};

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
};
