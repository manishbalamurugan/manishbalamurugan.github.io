/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      unoptimized: true,
    },
  },
  pageExtensions: ['js', 'jsx'],
  basePath: '/manishbalamurugan.github.io',
  assetPrefix: '/manishbalamurugan.github.io/',
}

export default nextConfig
