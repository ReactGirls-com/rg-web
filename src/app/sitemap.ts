import { MetadataRoute } from 'next';

import { LOCALES, DEFAULT_LOCALE } from '@/src/constants/translations';

const baseUrl = 'https://reactgirls.com';

const routes = ['', 'meetups', 'mentoring', 'courses', 'contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  LOCALES.forEach((locale) => {
    routes.forEach((route) => {
      const path = route === '' ? '' : `/${route}`;
      const url =
        locale === DEFAULT_LOCALE
          ? `${baseUrl}${path}`
          : `${baseUrl}/${locale}${path}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
