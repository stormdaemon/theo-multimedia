// Next.js configuration for SSR deployment on Netlify
/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRITICAL: Do NOT use output: 'export' - it breaks SSR
  // Leaving output undefined enables SSR with getServerSideProps

  // Enable image optimization with Netlify Image CDN
  images: {
    unoptimized: false,
  },

  // Transpile packages that have module resolution issues
  transpilePackages: ['react-apple-emojis'],

  // Next.js 16: Turbopack is now default, acknowledge we're using it
  turbopack: {},

  // Configure webpack for fallback resolution
  // Note: Turbopack is used by default in Next.js 16, this is for compatibility
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;
