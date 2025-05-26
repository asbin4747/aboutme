const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/aboutme' : '',
  basePath: isProd ? '/aboutme' : '',
  trailingSlash: true,

  images: {
    deviceSizes: [640,750,828,1080,1200,1920,2048,3840],
    loader: 'akamai',
    path: '',
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/aboutme' : '',
  },
}