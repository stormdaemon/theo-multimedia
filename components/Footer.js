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
    href: 'mailto:contact@theo-multimedia.com',
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
      { name: 'Sites web', href: '/services#web' },
      { name: 'Design', href: '/services#design' },
      { name: 'SEO', href: '/services#seo' },
      { name: 'Support', href: '/services#support' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { name: 'Mentions légales', href: '/mentions-legales' },
      { name: 'Confidentialité', href: '/politique-confidentialite' },
      { name: 'CGV', href: '/cgv' },
      { name: 'CGU', href: '/cgu' },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-background">
      <div className="container mx-auto px-6 py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-semibold tracking-tight">
                Théo Multimédia
              </span>
            </Link>
            <p className="text-foreground/60 leading-relaxed max-w-md text-[15px]">
              Je crée des expériences numériques qui captivent et convertissent.
              Design, développement et stratégie digitale en un seul endroit.
            </p>

            {/* Social links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted/50 text-foreground/60 hover:text-accent hover:bg-accent/10 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer links sections */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-5">
              <h3 className="text-foreground font-semibold text-sm tracking-wide uppercase">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-foreground/60 hover:text-accent transition-colors duration-300 text-[15px]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/50 text-sm">
            © {currentYear} Théo Multimédia. Tous droits réservés.
          </p>
          <p className="text-foreground/50 text-sm">
            Fait avec passion à Angoulême 🇫🇷
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
