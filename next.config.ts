import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    qualities: [100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
      },
    ],
  },
};

export default nextConfig;
