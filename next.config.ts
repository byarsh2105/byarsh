import type { NextConfig } from 'next';
import { withContentCollections } from '@content-collections/next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  serverExternalPackages: ['@upstash/redis'],
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        '192.168.29.232:3000',
        'stalling-panther-brittle.ngrok-free.dev',
      ],
    },
  },
  allowedDevOrigins: [
    'stalling-panther-brittle.ngrok-free.dev',
    '192.168.29.232',
    '192.168.29.232:3000',
  ],
};

export default withContentCollections(nextConfig);
