import dynamic from 'next/dynamic';
import Navbar from './Navbar';
import Footer from './Footer';

// Client-only components loaded with ssr: false
const PageTransition = dynamic(() => import('./PageTransition'), { ssr: false });
const ScrollToTopButton = dynamic(() => import('./ScrollToTopButton'), { ssr: false });

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="flex-grow pt-24 md:pt-28">
        {/* Static wrapper for SSR - content renders immediately */}
        <div className="min-h-[calc(100vh-6rem)]">
          {children}
        </div>
        {/* Client-only page transition overlay */}
        <PageTransition>{children}</PageTransition>
      </main>

      {/* Footer renders immediately for SSR */}
      <Footer />

      {/* Scroll to top button - client only */}
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
