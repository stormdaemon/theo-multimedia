// Next.js configuration for SSR deployment on Netlify
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization with Netlify Image CDN
  images: {
    // Netlify will handle image optimization automatically
    unoptimized: false,
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
