import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  devIndicators: false,
  sassOptions: {
    additionalData: `
      @use "${path.join(process.cwd(), 'src/styles/breakpoint.scss')}" as *;
      @use "${path.join(process.cwd(), 'src/styles/color.scss')}" as *;
    `,
  },
};

export default nextConfig;
