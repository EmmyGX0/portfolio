/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.githubassets.com',
        pathname: '/images/modules/site/home-campaign/hero-bg.webp',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'github.githubassets.com',
        pathname: '/images/modules/site/issues/illo/issues-plan.png',
        port: '',
      }
    ]
  }
};

export default nextConfig;
