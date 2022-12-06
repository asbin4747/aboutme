/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV !== "production";

const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    loader: "akamai",
    path: "",
  },
  reactStrictMode: true,
  basePath: isProd ? "" : "/aboutme",
  assetPrefix: isProd ? "" : "/aboutme",
};

module.exports = nextConfig;
