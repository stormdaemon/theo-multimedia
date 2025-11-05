import { Inter, Space_Grotesk } from 'next/font/google';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import Head from 'next/head';

// Optimized font loading with subset and display swap
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

function MyApp({ Component, pageProps, router }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch for theme-dependent content
  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
          {/* Preconnect to external domains for faster loading */}
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        </Head>
        <Layout>
          <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
