import '../styles/globals.css';
import { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { geologica } from '../lib/fonts';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.__tmHydrated = true;
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <style jsx global>{`
        :root {
          --font-geologica: ${geologica.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
