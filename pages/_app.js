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
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <AnimatePresence mode="wait" onExitComplete={() => typeof window !== 'undefined' && window.scrollTo(0, 0)}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </EmojiProvider>
  );
}

export default MyApp;
