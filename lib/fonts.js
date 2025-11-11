// Next.js 16 font optimization using next/font/google
// Optimized for SSR with automatic font subsetting and preloading
import { Inter, Space_Grotesk } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  preload: true,
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
});
