/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 85],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },

  experimental: {
    optimizePackageImports: [
      'motion',
      'lucide-react',
    ],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,
  compress: true,
  productionBrowserSourceMaps: false,
  allowedDevOrigins: ['127.0.0.1'],

  turbopack: {},

  async headers() {
    const headers = [
      {
        source: '/:path*',
        headers: [
          { key: 'Vary', value: 'User-Agent' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];

    if (process.env.NODE_ENV === 'production') {
      headers.push({
        source: '/:path*.{jpg,jpeg,png,webp,avif,gif,svg,ico}',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, s-maxage=31536000, immutable' },
        ],
      }, {
        source: '/:path*.{woff,woff2,ttf,otf,eot}',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      });
    }

    return headers;
  },
};

module.exports = nextConfig;
