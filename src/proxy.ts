import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { DEFAULT_LOCALE, LOCALES, type Locale } from './constants/translations';

const LOCALE_COOKIE = 'NEXT_LOCALE';

const isStaticPath = (pathname: string) =>
  pathname.startsWith('/_next') ||
  pathname.startsWith('/api') ||
  pathname.includes('.') ||
  pathname.startsWith('/favicon') ||
  pathname === '/sitemap.xml' ||
  pathname === '/robots.txt';

export const proxy = (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  if (isStaticPath(pathname)) {
    return NextResponse.next();
  }

  const segments = pathname.split('/');
  const pathLocale = segments[1] as Locale;
  const hasValidLocale = LOCALES.includes(pathLocale);

  if (hasValidLocale && pathLocale === DEFAULT_LOCALE) {
    const pathWithoutLocale = pathname.replace(`/${DEFAULT_LOCALE}`, '') || '/';

    return NextResponse.redirect(new URL(pathWithoutLocale, request.url));
  }

  if (hasValidLocale) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, pathLocale, {
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
