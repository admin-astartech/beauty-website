import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      { protocol: 'https', hostname: '**.strapiapp.com' }, // Strapi Cloud domain
      { protocol: 'https', hostname: '**.strapiapp.io' },  // (alt) Strapi Cloud
    ],
  }
};

export default nextConfig;
