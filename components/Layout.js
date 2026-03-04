import dynamic from 'next/dynamic';
import Navbar from './Navbar';
import Footer from './Footer';

const ScrollToTopButton = dynamic(() => import('./ScrollToTopButton'), { ssr: false });

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
