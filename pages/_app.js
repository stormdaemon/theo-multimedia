import '@fontsource/inter';
import '@fontsource/space-grotesk';
import '../styles/globals.css';
import Layout from '../components/Layout';
import ClientOnlyAnimatePresence from '../components/ClientOnlyAnimatePresence';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { EmojiProvider } from 'react-apple-emojis';
import { inter, spaceGrotesk } from '../lib/fonts';

// ... (le reste de la logique emojiData)
let emojiData;
try {
  emojiData = require('react-apple-emojis/src/data.json');
} catch (error) {
  emojiData = {};
}

function MyApp({ Component, pageProps, router }) {
  return (
    <main className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <EmojiProvider data={emojiData}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} suppressHydrationWarning>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Layout>
            {/* SSR-safe AnimatePresence: renders children directly on server, adds animations on client */}
            <ClientOnlyAnimatePresence>
              <Component {...pageProps} key={router.asPath} />
            </ClientOnlyAnimatePresence>
          </Layout>
        </ThemeProvider>
      </EmojiProvider>
    </main>
  );
}

export default MyApp;