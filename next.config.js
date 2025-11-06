// Next.js 16 configuration optimized for performance and SSR
/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRITICAL: Ne pas utiliser output: 'export' - cela désactive le SSR.
  // Laisser 'output' non défini active le SSR avec getServerSideProps.

  // Optimisation des images avec les formats modernes
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 an
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },

  // Transpiler les packages qui posent des problèmes de résolution de modules
  transpilePackages: ['react-apple-emojis'],

  // Optimiser les imports de packages (Next.js 16)
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'react-icons',
      '@heroicons/react',
    ],
  },

  // Optimisations du compilateur
  compiler: {
    // Supprimer les console.log en production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Optimisations de production
  reactStrictMode: true,
  poweredByHeader: false,

  // Turbopack est par défaut dans Next.js 16
  turbopack: {},

  // Headers pour la sécurité et le cache (version assouplie pour les crawlers)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Vary',
            value: 'User-Agent',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/public/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
