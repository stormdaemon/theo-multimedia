import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FiGithub className="w-5 h-5" />,
    href: 'https://github.com',
  },
  {
    name: 'Twitter',
    icon: <FiTwitter className="w-5 h-5" />,
    href: 'https://twitter.com',
  },
  {
    name: 'LinkedIn',
    icon: <FiLinkedin className="w-5 h-5" />,
    href: 'https://linkedin.com',
  },
  {
    name: 'Email',
    icon: <FiMail className="w-5 h-5" />,
    href: 'mailto:contact@theomultimedia.com',
  },
];

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Accueil', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'À propos', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Web Design', href: '/services#web-design' },
      { name: 'Développement', href: '/services#developpement' },
      { name: 'SEO', href: '/services#seo' },
      { name: 'Branding', href: '/services#branding' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { name: 'Mentions légales', href: '/mentions-legales' },
      { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
      { name: 'CGV', href: '/cgv' },
      { name: 'CGU', href: '/cgu' },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-background border-t border-border/10 mt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand and description */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-heading font-bold bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent">
                  Théo Multimédia
                </span>
              </Link>
              <p className="text-foreground/70 leading-relaxed">
                Créateurs d'expériences numériques mémorables. Je transforme vos idées en réalité avec créativité et expertise technique.
              </p>
              
              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted text-foreground/60 hover:text-accent hover:bg-accent/10 transition-colors duration-200"
                    whileHover={{ y: -2 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Footer links */}
            {footerLinks.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-foreground font-semibold text-lg">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={linkIndex}
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <Link 
                        href={link.href} 
                        className="text-foreground/60 hover:text-accent transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-foreground font-semibold text-lg">Newsletter</h3>
              <p className="text-foreground/60">Restez informé de nos dernières actualités et offres spéciales.</p>
              <form className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>S'inscrire</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </form>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="border-t border-border/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm">
              &copy; {currentYear} Théo Multimédia. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-foreground/60 hover:text-accent text-sm transition-colors duration-200">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-foreground/60 hover:text-accent text-sm transition-colors duration-200">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
