import { useEffect, useState } from 'react';
import '@fontsource/inter/latin.css';
import '@fontsource/space-grotesk/latin.css';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { EmojiProvider } from 'react-apple-emojis';

// ... (le reste des imports et de la logique emojiData)
let emojiData;
try {
  emojiData = require('react-apple-emojis/src/data.json');
} catch (error) {
  emojiData = {};
}

function MyApp({ Component, pageProps, router }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ne rend le contenu dépendant du thème que côté client
  const renderContent = () => (
    <EmojiProvider data={emojiData}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} suppressHydrationWarning>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Head>
        <Layout>
          <AnimatePresence mode="wait" onExitComplete={() => typeof window !== 'undefined' && window.scrollTo(0, 0)}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </EmojiProvider>
  );

  // Pendant le SSR et l'hydratation initiale, on peut rendre un loader ou null
  // pour éviter les erreurs. Ici, on ne rend rien pour la simplicité.
  return mounted ? renderContent() : null;
}

export default MyApp;