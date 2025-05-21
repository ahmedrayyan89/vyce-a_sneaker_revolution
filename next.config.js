/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,  // Disables ESLint during builds
  },
  typescript: {
    ignoreBuildErrors: true,    // Disables TypeScript errors during builds
  },
};

module.exports = nextConfig;