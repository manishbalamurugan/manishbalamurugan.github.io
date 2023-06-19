import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   newNextLinkBehavior: true,
  //   scrollRestoration: true,
  // },
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            plugins: ['@babel/plugin-syntax-jsx'],
          },
        },
        '@mdx-js/loader',
      ],
    });
    return config;
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})

export default withMDX(nextConfig)
