// Next.js configuration for SSR deployment on Netlify
/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRITICAL: Do NOT use output: 'export' - it breaks SSR
  // Leaving output undefined enables SSR with getServerSideProps

  // Enable image optimization with Netlify Image CDN
  images: {
    // Netlify will handle image optimization automatically
    unoptimized: false,
  },

  // Transpile packages that have module resolution issues
  transpilePackages: ['react-apple-emojis'],

  // Disable static page generation optimization
  // Force dynamic rendering for all pages with getServerSideProps
  experimental: {
    // Disable ISR memory cache to ensure fresh SSR
    isrMemoryCacheSize: 0,
  },

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
