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
};

module.exports = nextConfig;
