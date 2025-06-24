import { Inter, Space_Grotesk } from 'next/font/google';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

function MyApp({ Component, pageProps, router }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <style jsx global>{`
        :root {
          --font-sans: ${inter.style.fontFamily};
          --font-heading: ${spaceGrotesk.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="agence web Angoulême, webdesign Angoulême, création site internet Angoulême, agence digitale Angoulême, développement web Angoulême, refonte site internet, site vitrine Angoulême, site e-commerce Angoulême, référencement naturel Angoulême, SEO Angoulême, UX design Angoulême, UI design Angoulême, identité visuelle Angoulême, graphisme Angoulême, communication digitale Angoulême, stratégie digitale Angoulême, webdesigner Angoulême, développeur web Angoulême, site responsive Angoulême, site WordPress Angoulême, site sur-mesure Angoulême, maintenance site internet Angoulême, hébergement web Angoulême, audit SEO Angoulême, optimisation SEO Angoulême, Google My Business Angoulême, réseaux sociaux Angoulême, community management Angoulême, marketing digital Angoulême, création logo Angoulême, charte graphique Angoulême, print Angoulême, flyers Angoulême, carte de visite Angoulême, agence communication Angoulême, landing page Angoulême, newsletter Angoulême, emailing Angoulême, boutique en ligne Angoulême, site mobile Angoulême, web app Angoulême, application web Angoulême, web responsive Angoulême, site rapide Angoulême, site sécurisé Angoulême, SSL Angoulême, Google Analytics Angoulême, Google Ads Angoulême, campagne publicitaire Angoulême, rédaction web Angoulême, contenu optimisé SEO Angoulême, storytelling Angoulême, site professionnel Angoulême, site entreprise Angoulême, site association Angoulême, site événementiel Angoulême, portfolio Angoulême, site créatif Angoulême, site moderne Angoulême, site performant Angoulême, site intuitif Angoulême, expérience utilisateur Angoulême, accessibilité web Angoulême, design mobile first Angoulême, design interactif Angoulême, animation web Angoulême, Framer Motion Angoulême, React Angoulême, Next.js Angoulême, Tailwind CSS Angoulême, JavaScript Angoulême, HTML Angoulême, CSS Angoulême, site rapide au chargement Angoulême, site optimisé Google Angoulême, site internet pas cher Angoulême, site internet professionnel Angoulême, site internet clé en main Angoulême, site internet personnalisé Angoulême, agence webdesign Angoulême, agence web Théo Multimédia, Théo Multimédia Angoulême, créateur site internet Angoulême, freelance web Angoulême, expert web Angoulême, accompagnement digital Angoulême, conseil digital Angoulême, digitalisation entreprise Angoulême, solutions digitales Angoulême, innovation web Angoulême, transformation digitale Angoulême, visibilité internet Angoulême, présence en ligne Angoulême, référencement Google Angoulême, web agency Angoulême, web agency France, web agency Nouvelle-Aquitaine, agence web Nouvelle-Aquitaine" />
      </Head>
      <Layout>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
