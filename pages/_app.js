import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { ThemeProvider } from 'next-themes';
import { dmSans, outfit } from '../lib/fonts';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${dmSans.variable} ${outfit.variable}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
