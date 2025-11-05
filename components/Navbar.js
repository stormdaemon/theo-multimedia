import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'À propos', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    // Handle scroll detection client-side only
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Protect document access for SSR
    if (typeof document !== 'undefined') {
      document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    // Protect document access for SSR
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/70 backdrop-blur-2xl border-b border-border/50 shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <span className="text-xl font-semibold tracking-tight">
                Théo Multimédia
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 rounded-full text-[15px] font-normal transition-all duration-300 ${
                    pathname === item.path
                      ? 'text-accent bg-accent/10'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="ml-2 pl-2 border-l border-border/50">
                <ThemeToggle />
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-foreground hover:bg-muted/50 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={closeMenu}
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl" />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative h-full pt-20 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      onClick={closeMenu}
                      className={`block px-6 py-4 rounded-2xl text-lg font-normal transition-all duration-300 ${
                        pathname === item.path
                          ? 'bg-accent text-accent-foreground'
                          : 'text-foreground/70 hover:bg-muted/50 hover:text-foreground'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
