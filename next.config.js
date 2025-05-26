const isProd = process.env.NODE_ENV === "production";
const assetPrefix = isProd ? "/aboutme/" : "";

module.exports = {
  reactStrictMode: true,

  // only add this prefix to your _next/ URLs
  assetPrefix,

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    loader: "akamai",
    path: "",
  },

  // expose for your <Avatar src={prefix + "/..."} />
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "" : "",
  },
};