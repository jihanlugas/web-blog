/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_NAME: process.env.APP_NAME,
    BASE_URL: process.env.BASE_URL,
  }
}

module.exports = nextConfig
