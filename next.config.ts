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
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/akademie',
        destination: '/courses',
        permanent: true,
      },
      {
        source: '/kontakt',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
