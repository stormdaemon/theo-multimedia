// Next.js configuration enabling static HTML export
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate static HTML for each page at build time
  output: 'export',
  // Optional: add a trailing slash so relative asset links work on static hosts
  trailingSlash: true,
};

module.exports = nextConfig;
