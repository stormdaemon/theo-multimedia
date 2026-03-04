import '../styles/globals.css';
import Layout from '../components/Layout';
import { ThemeProvider } from 'next-themes';
import { dmSans, outfit } from '../lib/fonts';

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${dmSans.variable} ${outfit.variable}`}>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
