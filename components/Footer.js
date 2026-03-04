import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/stormdaemon' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/theo-lafont' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@theo-multimedia.com' },
];

const footerSections = [
  {
    title: 'Navigation',
    links: [
      { name: 'Accueil', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'A propos', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Sites ultra-rapides', href: '/services' },
      { name: 'Design & UX', href: '/services' },
      { name: 'SEO Google & IA', href: '/services' },
      { name: 'E-commerce', href: '/services' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Mentions legales', href: '/mentions-legales' },
      { name: 'Confidentialite', href: '/politique-confidentialite' },
      { name: 'CGV', href: '/cgv' },
      { name: 'CGU', href: '/cgu' },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                <span className="text-accent-foreground text-sm font-bold font-[var(--font-heading)]">TM</span>
              </div>
              <span className="text-lg font-semibold tracking-tight font-[var(--font-heading)]">
                Theo Multimedia
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Agence web a Angouleme. Sites ultra-rapides, eco-responsables
              et optimises pour convertir. Expertise SEO Google et IA.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" />
              <span>Angouleme, France</span>
            </div>
            <div className="flex gap-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Theo Multimedia. Tous droits reserves.
          </p>
          <p className="text-xs text-muted-foreground">
            Concu et developpe a Angouleme, Charente
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
