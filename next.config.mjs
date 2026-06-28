/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint:{
    ignoreDuringBuilds: true,
  },
  // output: 'export',
  // distDir: 'build',
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
      {
        hostname: 'i.pravatar.cc',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  experimental: {
    optimizePackageImports: ['@heroui/react', 'lucide-react', 'framer-motion'],
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/fonts/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
