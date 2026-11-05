import Header from './Header';
import Footer from './Footer';
import SparkLayer from './SparkLayer';
import RouteFuse from './RouteFuse';

export default function Layout({ children }) {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <RouteFuse />
      <Header />
      <main id="contenu" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <SparkLayer />
    </>
  );
}
