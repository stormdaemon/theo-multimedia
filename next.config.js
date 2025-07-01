// Next.js configuration enabling static HTML export
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate static HTML for each page at build time
  output: 'export',
  // Optional: add a trailing slash so relative asset links work on static hosts
  trailingSlash: true,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Transpile packages that have module resolution issues
  transpilePackages: ['react-apple-emojis'],
  // Configure webpack to handle module resolution
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;
