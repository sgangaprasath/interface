const isProd = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? '/interface' : '',
  assetPrefix: isProd ? '/interface' : '',
}

module.exports = nextConfig