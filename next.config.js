/** @type {import('next').NextConfig} */

// Determine if we're in production (GitHub Pages export)
const isProd = process.env.NODE_ENV === 'production';
// Use '/aboutme' basePath on prod, none locally
const basePath = isProd ? '/aboutme' : '';

const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    loader: "akamai",
    path: "",
  },
  reactStrictMode: true,
  basePath,
  assetPrefix: isProd ? '/aboutme/' : '',
  // Expose basePath to the client
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
