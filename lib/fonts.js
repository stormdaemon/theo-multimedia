// Using local @fontsource packages instead of next/font/google
// This avoids network requests during build and improves build reliability
// Fonts are imported in _app.js

export const inter = {
  variable: '--font-sans',
  className: 'font-sans'
};

export const spaceGrotesk = {
  variable: '--font-heading',
  className: 'font-heading'
};
