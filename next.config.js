/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  i18n: {
    locales: ['en', 'fr', 'it'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
