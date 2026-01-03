import type { MetadataRoute } from 'next';

const baseUrl = 'https://reactgirls.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          cs: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          cs: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          cs: `${baseUrl}/contact`,
          en: `${baseUrl}/en/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          cs: `${baseUrl}/contact`,
          en: `${baseUrl}/en/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          cs: `${baseUrl}/courses`,
          en: `${baseUrl}/en/courses`,
        },
      },
    },
    {
      url: `${baseUrl}/en/courses`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          cs: `${baseUrl}/courses`,
          en: `${baseUrl}/en/courses`,
        },
      },
    },
    {
      url: `${baseUrl}/meetups`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          cs: `${baseUrl}/meetups`,
          en: `${baseUrl}/en/meetups`,
        },
      },
    },
    {
      url: `${baseUrl}/en/meetups`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          cs: `${baseUrl}/meetups`,
          en: `${baseUrl}/en/meetups`,
        },
      },
    },
    {
      url: `${baseUrl}/mentoring`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          cs: `${baseUrl}/mentoring`,
          en: `${baseUrl}/en/mentoring`,
        },
      },
    },
    {
      url: `${baseUrl}/en/mentoring`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          cs: `${baseUrl}/mentoring`,
          en: `${baseUrl}/en/mentoring`,
        },
      },
    },
  ];
}
