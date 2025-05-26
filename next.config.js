/** @type {import('next').NextConfig} */

// Use NEXT_PUBLIC_BASE_PATH env var for both dev and production
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    loader: "akamai",
    path: "",
  },
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
};

module.exports = nextConfig;
