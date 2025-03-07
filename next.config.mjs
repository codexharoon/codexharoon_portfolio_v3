/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // eslint:{
  //   ignoreDuringBuilds: true,
  // },
  // output: 'export',
  // distDir: 'build',
  images: {
    remotePatterns : [
      {
        hostname: 'picsum.photos',

      },
      {
        hostname: 'i.pravatar.cc',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
