import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  devIndicators: false,
  sassOptions: {
    additionalData: `
      @use "${path.join(process.cwd(), 'src/styles/breakpoint.scss')}" as *;
      @use "${path.join(process.cwd(), 'src/styles/color.scss')}" as *;
      @use "${path.join(process.cwd(), 'src/styles/constant.scss')}" as *;
    `,
  },
  async redirects() {
    return [
      {
        source: '/onas',
        destination: '/cs/contact',
        permanent: true,
      },
      {
        source: '/akademie',
        destination: '/cs/courses',
        permanent: true,
      },
      {
        source: '/kontakt',
        destination: '/cs/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
