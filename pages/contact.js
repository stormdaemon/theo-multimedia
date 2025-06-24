import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

import Head from 'next/head';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact agence web Angoulême | Devis création site internet, webdesign, SEO | Théo Multimédia</title>
        <meta name="description" content="Contactez Théo Multimédia à Angoulême pour discuter de votre projet de création de site internet, webdesign, SEO, branding, e-commerce, UX/UI, refonte, accompagnement digital. Devis gratuit, réponse rapide, conseils personnalisés pour entreprises, PME, associations et entrepreneurs." />
        <meta name="keywords" content="contact agence web Angoulême, devis création site internet, webdesign, SEO, branding, e-commerce, UX/UI, refonte site, solutions digitales, Théo Multimédia, freelance, Charente, Nouvelle-Aquitaine, projet digital, site vitrine, site professionnel, site sur-mesure, site responsive, site WordPress, site moderne, site performant, site sécurisé, site rapide, site optimisé, accompagnement digital, innovation web, transformation digitale, visibilité internet, présence en ligne, stratégie digitale, communication digitale, applications web, applications mobiles, web app, design interactif, animation web, Google, Google Analytics, Google My Business, Core Web Vitals, accessibilité web, maintenance site, hébergement web, support technique, monitoring, protection des données, SSL, cloud, landing page, boutique en ligne, print, flyers, carte de visite, site événementiel, site créatif, site intuitif, conseil digital, entreprises, PME, associations, entrepreneurs, Angoulême, Charente, Nouvelle-Aquitaine" />
        <meta name="author" content="Théo LAFONT" />
        <meta property="og:title" content="Contact : échangez avec Théo Multimédia | Création web" />
        <meta property="og:description" content="Discutons de votre projet web ou digital ! Réponse rapide, conseils personnalisés et accompagnement humain." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.theomultimedia.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact : échangez avec Théo Multimédia | Création web" />
        <meta name="twitter:description" content="Contactez-moi pour concrétiser votre projet web. Réponse rapide et accompagnement sur-mesure !" />
        <meta name="twitter:image" content="https://www.theomultimedia.com/og-contact.jpg" />
        <meta name="ai-summary" content="Contact direct avec Théo Multimédia : échange, devis, conseils personnalisés pour votre projet web ou digital." />
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Théo Multimédia",
          "author": {
            "@type": "Person",
            "name": "Théo LAFONT"
          },
          "description": "Contact direct avec Théo Multimédia : échange, devis, conseils personnalisés pour votre projet web ou digital.",
          "inLanguage": "fr-FR"
        }
        `}</script>
      </Head>
      <motion.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        variants={containerVariants}
        className="container mx-auto px-4 py-24"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-center text-foreground mb-4">
          Contactez <span className="text-accent"> Théo Multimédia,agence web à Angoulême</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          Besoin d’un site internet, d’un webdesign sur-mesure, d’un accompagnement SEO, d’un branding ou d’une refonte digitale à Angoulême ? Contactez Théo Multimédia : devis gratuit, conseils personnalisés et réponse rapide pour booster votre visibilité, votre performance et votre présence en ligne.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form variants={itemVariants} className="flex flex-col space-y-6 bg-card rounded-2xl p-8 border border-border">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Votre nom</label>
              <input 
                id="name"
                type="text" 
                className="w-full bg-background border border-input rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all" 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Votre email</label>
              <input 
                id="email"
                type="email" 
                className="w-full bg-background border border-input rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all" 
              />
            </div>
            
            <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Sujet</label>
            <input 
              id="subject"
              type="text" 
              className="w-full bg-background border border-input rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all" 
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Votre message</label>
            <textarea 
              id="message"
              placeholder="Décrivez votre projet ou posez-moi vos questions..." 
              rows="5" 
              className="w-full bg-background border border-input rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
            ></textarea>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 rounded-lg self-start transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Envoyer le message
          </motion.button>
        </motion.form>

        <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-8">
          <div className="bg-card p-6 rounded-2xl border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">Mes informations de contact</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <FaEnvelope className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                  <a href="mailto:contact@theomultimedia.com" className="text-foreground hover:text-accent transition-colors">contact@theomultimedia.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <FaPhone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Téléphone</p>
                  <a href="tel:+3376851695" className="text-foreground hover:text-accent transition-colors">+33 7 68 51 95 16</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Adresse</p>
                  <p className="text-foreground">16000 Angoulême, France</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-2xl border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Horaires d'ouverture</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Lundi - Vendredi</span>
                <span className="font-medium text-foreground">09h00 - 18h00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Samedi</span>
                <span className="font-medium text-foreground">10h00 - 15h00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Dimanche</span>
                <span className="font-medium text-foreground">Fermé</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
};

export default ContactPage;
