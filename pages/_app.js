// Import self-hosted fonts via Fontsource (no Google Fonts API calls during build)
import '@fontsource/inter/latin.css';
import '@fontsource/space-grotesk/latin.css';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { EmojiProvider } from 'react-apple-emojis';
// Use dynamic import for better build compatibility
let emojiData;
try {
  emojiData = require('react-apple-emojis/src/data.json');
} catch (error) {
  // Fallback for build environments
  emojiData = {};
}

function MyApp({ Component, pageProps, router }) {
  return (
    <EmojiProvider data={emojiData}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} suppressHydrationWarning>
        <style jsx global>{`
          :root {
            --font-sans: 'Inter', sans-serif;
            --font-heading: 'Space Grotesk', sans-serif;
          }
        `}</style>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </EmojiProvider>
  );
}

export default MyApp;
