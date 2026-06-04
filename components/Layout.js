import dynamic from 'next/dynamic';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopOnRoute from './ScrollToTopOnRoute';

const ScrollToTopButton = dynamic(() => import('./ScrollToTopButton'), { ssr: false });

const Layout = ({ children }) => {
  return (
    <div className="tm-site-shell flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <ScrollToTopOnRoute />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
