import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'À propos', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  if (!mounted) return null;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <img src="https://i.postimg.cc/FR4fgrXM/theo-multimedia-logo.png" alt="Logo Théo Multimédia" className="w-12 h-12 rounded-full object-cover shadow-md border border-accent" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                    pathname === item.path
                      ? 'text-accent'
                      : 'text-foreground/80 hover:text-foreground'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-1 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 transform -translate-x-1/2 group-hover:w-3/4 ${
                      pathname === item.path ? 'w-3/4' : ''
                    }`}
                  />
                </Link>
              ))}
              
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="fixed inset-0 z-40 pt-20 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={closeMenu}
                    className={`px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                      pathname === item.path
                        ? 'bg-accent/10 text-accent'
                        : 'text-foreground/80 hover:bg-muted'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-border">
                  <div className="flex justify-center px-4 py-3">
                    <ThemeToggle />
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
