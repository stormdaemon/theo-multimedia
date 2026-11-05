/**
 * Static export: every page is pre-rendered to HTML in `out/` and served by
 * Netlify as plain files. Security headers, caching and redirects live in
 * netlify.toml, because `headers()` and `redirects()` are not applied to an
 * exported site.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,
  productionBrowserSourceMaps: false,
  allowedDevOrigins: ['127.0.0.1'],
  turbopack: {},
};

module.exports = nextConfig;
