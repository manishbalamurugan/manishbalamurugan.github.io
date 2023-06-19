import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
  mdxOptions: {
    rehypePlugins: [rehypePrism],
    remarkPlugins: [remarkGfm],
  },
})

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
}

export default withMDX(nextConfig)
