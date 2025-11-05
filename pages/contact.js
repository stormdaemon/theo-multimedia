import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import SEO, { createWebPageSchema, createFAQSchema } from '../components/SEO';

const contactInfo = [
  {
    icon: "📧",
    title: "Email",
    value: "contact@theomultimedia.com",
    link: "mailto:contact@theomultimedia.com"
  },
  {
    icon: "📍",
    title: "Localisation",
    value: "Angoulême, France",
    link: null
  },
  {
    icon: "⚡",
    title: "Délai de réponse",
    value: "Sous 24 heures",
    link: null
  }
];

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mblypyew");

  // FAQ data for AI search optimization
  const faqs = [
    {
      question: "Quel est le délai de réponse ?",
      answer: "Je réponds à tous les messages dans les 24 heures maximum. Pour les demandes urgentes, précisez-le dans votre message et je vous recontacterai en priorité."
    },
    {
      question: "Quel est le budget minimum pour un projet ?",
      answer: "Les tarifs varient selon la complexité. Un site vitrine commence à partir de 500€. Une landing page optimisée à partir de 300€. Livraison 24h disponible avec supplément. Devis gratuit et sans engagement."
    },
    {
      question: "La livraison en 24h est-elle vraiment possible ?",
      answer: "Oui ! Pour les projets standards (landing page, site vitrine simple), je livre en 24h chrono. Sites fonctionnels, optimisés, prêts à convertir. Parfait pour les lancements urgents."
    },
    {
      question: "Proposez-vous un accompagnement après livraison ?",
      answer: "Oui, support inclus : réponse sous 24h, mises à jour sécurité, sauvegardes quotidiennes. Forfaits maintenance disponibles pour évolutions régulières de votre site."
    }
  ];

  // Schema markup for contact page
  const schemas = {
    '@context': 'https://schema.org',
    '@graph': [
      createWebPageSchema(
        'Contact - Parlons de votre projet',
        'Contactez-moi pour votre projet web. Réponse sous 24h. Livraison express disponible. Devis gratuit et sans engagement.',
        'https://www.theomultimedia.com/contact'
      ),
      createFAQSchema(faqs.map(faq => ({
        question: faq.question,
        answer: faq.answer
      }))),
      {
        '@type': 'ContactPage',
        url: 'https://www.theomultimedia.com/contact',
        mainEntity: {
          '@type': 'Organization',
          name: 'Théo Multimédia',
          email: 'contact@theomultimedia.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Angoulême',
            addressCountry: 'FR'
          }
        }
      }
    ]
  };

  if (state.succeeded) {
    return (
      <>
        <SEO
          title="Message envoyé !"
          description="Votre message a bien été envoyé. Je vous répondrai dans les 24 heures."
          canonical="/contact"
        />
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="text-8xl mb-8"
            >
              ✅
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
              Message reçu !
            </h1>
            <p className="text-xl text-foreground/60 mb-10 font-light">
              Merci pour votre message. Je vous répondrai dans les 24 heures.
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium"
            >
              Retour à l'accueil
            </motion.a>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Contact - Parlons de votre projet"
        description="Contactez-moi pour votre projet web. Réponse sous 24h garantie. Livraison express en 24h disponible. Sites ultra-rapides, éco-responsables, optimisés pour convertir. Devis gratuit."
        canonical="/contact"
        schema={schemas}
        additionalMetaTags={[
          { name: 'keywords', content: 'contact développeur web, devis site internet, Angoulême, livraison 24h, création site rapide' },
        ]}
      />

      <div className="bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
              >
                <span className="text-sm font-medium text-accent">Contact</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
                Parlons de<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-blue-500 to-accent">
                  votre projet
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
                Je suis disponible pour discuter de vos idées et vous aider
                à les concrétiser. Réponse garantie sous 24h.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="p-6 rounded-3xl bg-card border border-border text-center"
                >
                  <div className="text-4xl mb-3">{info.icon}</div>
                  <h3 className="text-sm text-foreground/50 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-foreground font-medium hover:text-accent transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{info.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="p-8 md:p-12 rounded-[3rem] bg-card border border-border"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
                Envoyez-moi un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-4 rounded-2xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Votre nom"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-4 rounded-2xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="votre@email.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Téléphone <span className="text-foreground/40">(optionnel)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-4 rounded-2xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget estimé
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    className="w-full px-4 py-4 rounded-2xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  >
                    <option value="">Sélectionnez une fourchette</option>
                    <option value="1000-3000">1 000€ - 3 000€</option>
                    <option value="3000-5000">3 000€ - 5 000€</option>
                    <option value="5000-10000">5 000€ - 10 000€</option>
                    <option value="10000+">Plus de 10 000€</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Parlez-moi de votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    className="w-full px-4 py-4 rounded-2xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="Décrivez votre projet, vos objectifs, vos besoins..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="urgent"
                    name="urgent"
                    className="mt-1 w-5 h-5 rounded border-border text-accent focus:ring-2 focus:ring-accent/20"
                  />
                  <label htmlFor="urgent" className="text-sm text-foreground/70">
                    ⚡ <span className="font-medium text-accent">Livraison express 24h</span> - J'ai besoin de mon site rapidement
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-accent text-accent-foreground rounded-full font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-2xl hover:shadow-accent/20"
                >
                  {state.submitting ? "Envoi en cours..." : "Envoyer mon message"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                Questions fréquentes
              </h2>
              <p className="text-xl text-foreground/60 font-light">
                Tout ce que vous devez savoir
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: "Quel est votre délai de réponse ?",
                  a: "Je réponds à tous les messages dans les 24 heures, souvent bien plus rapidement."
                },
                {
                  q: "Proposez-vous vraiment une livraison en 24h ?",
                  a: "Oui ! Pour certains types de projets, je peux livrer en 24h. Contactez-moi pour vérifier si votre projet est éligible."
                },
                {
                  q: "Quels sont vos tarifs ?",
                  a: "Mes tarifs varient selon la complexité du projet. Partagez vos besoins et je vous ferai un devis personnalisé gratuit."
                },
                {
                  q: "Travaillez-vous avec des clients internationaux ?",
                  a: "Absolument ! Je travaille avec des clients partout en France et à l'international."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-3xl bg-card border border-border"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                  <p className="text-foreground/60">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

/**
 * Enable Server-Side Rendering
 * Ensures AI crawlers and search engines see server-rendered HTML
 */
export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default ContactPage;
