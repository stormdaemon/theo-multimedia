import { motion } from 'motion/react';
import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';
import { ArrowRight, Mail, MapPin, Clock, Zap, CheckCircle } from 'lucide-react';
import SEO, { createLocalBusinessSchema, createWebPageSchema, createFAQSchema, createBreadcrumbSchema } from '../components/SEO';
import { CrawlerPageContent } from '../components/CrawlerContent';
import { getSiteUrlFromHeaders } from '../lib/siteUrl';

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@theo-multimedia.com",
    link: "mailto:contact@theo-multimedia.com"
  },
  {
    icon: MapPin,
    title: "Localisation",
    value: "Angouleme, Charente",
    link: null
  },
  {
    icon: Clock,
    title: "Delai de reponse",
    value: "Sous 24 heures",
    link: null
  }
];

const faqs = [
  {
    question: "Combien coute la creation d'un site internet ?",
    answer: "Les tarifs dependent de la complexite du projet. Un site vitrine professionnel demarre a partir de 1 000 euros. Une boutique e-commerce ou une application web sur-mesure sera evaluee selon vos besoins specifiques. Contactez-moi pour un devis gratuit et detaille en moins de 24h."
  },
  {
    question: "Livraison en 24h, c'est vraiment possible ?",
    answer: "Oui, pour les sites vitrines et landing pages. C'est ideal pour les lancements urgents, les evenements ou les opportunites business qui n'attendent pas. La qualite et la performance restent garanties."
  },
  {
    question: "C'est quoi l'eco-conception web ?",
    answer: "L'eco-conception web consiste a creer des sites legers et optimises qui consomment moins d'energie. Mes sites ont une empreinte carbone 60% inferieure a la moyenne. Resultat : un site plus rapide, un meilleur referencement Google, et un impact positif sur votre image de marque."
  },
  {
    question: "Comment fonctionne le referencement IA (SEO IA) ?",
    answer: "Le referencement IA (ou GEO - Generative Engine Optimization) consiste a optimiser votre site pour etre cite et recommande par les intelligences artificielles comme ChatGPT, Perplexity et Gemini. J'utilise le balisage schema.org enrichi, du contenu structure et des techniques specifiques pour que les IA comprennent et recommandent votre activite."
  }
];

const ContactPage = ({ baseUrl, isCrawler: isCrawlerBot }) => {
  const [state, handleSubmit] = useForm("mblypyew");

  const localBusinessSchema = createLocalBusinessSchema();
  const contactPageSchema = createWebPageSchema(
    'Contact - Parlez-nous de votre projet web',
    'Contactez Theo Multimedia pour discuter de votre projet de site internet. Devis gratuit en 24h. Agence web a Angouleme, specialisee SEO Google et IA.',
    `${baseUrl}/contact`
  );
  const faqSchema = createFAQSchema(faqs);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [localBusinessSchema, contactPageSchema, faqSchema, breadcrumbSchema]
  };

  if (state.succeeded) {
    return (
      <>
        <SEO
          title="Message envoye - Merci !"
          description="Merci pour votre message. Je vous repondrai dans les 24 heures."
          canonical="/contact"
          schema={schema}
        />
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-lg"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
              Message recu !
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Merci pour votre message. Je vous repondrai dans les 24 heures.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Retour a l'accueil
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Contact - Discutons de votre projet web"
        description="Contactez Theo Multimedia pour votre projet de site internet a Angouleme. Devis gratuit en 24h. Specialiste SEO Google et IA (ChatGPT, Perplexity). Livraison express disponible."
        canonical="/contact"
        schema={schema}
        enableLocalSEO={true}
      />

      <CrawlerPageContent
        isCrawler={isCrawlerBot}
        title="Contact - Theo Multimedia, Agence Web Angouleme"
        description="Contactez Theo Multimedia pour discuter de votre projet de site internet. Devis gratuit en moins de 24 heures. Agence web basee a Angouleme, Charente, specialisee dans la creation de sites ultra-rapides, eco-responsables et optimises pour le referencement Google et les moteurs de recherche IA."
        sections={[
          {
            title: "Parlons de votre projet",
            content: "Vous avez un projet de site web, de boutique en ligne ou d'application ? Je suis la pour vous ecouter et vous accompagner. Que ce soit pour une creation, une refonte ou une optimisation SEO, discutons ensemble de vos objectifs et de votre vision.",
          },
          {
            title: "Coordonnees",
            items: [
              "Email : contact@theo-multimedia.com",
              "Localisation : Angouleme, Charente, Nouvelle-Aquitaine, France",
              "Delai de reponse : sous 24 heures",
              "Horaires : lundi au vendredi, 9h-18h",
            ],
          },
          {
            title: "Services proposes",
            items: [
              "Creation de sites internet ultra-rapides et eco-responsables",
              "Refonte de sites existants pour ameliorer performances et SEO",
              "Boutiques e-commerce et solutions de vente en ligne",
              "Applications web sur-mesure avec React et Next.js",
              "Referencement SEO Google et IA (ChatGPT, Perplexity, Gemini)",
              "Livraison express en 24 heures pour sites vitrines et landing pages",
              "Maintenance et support technique continu",
            ],
          },
          {
            title: "Questions frequentes",
            items: faqs.map(f => `${f.question} : ${f.answer}`),
          },
        ]}
      />

      <div className="bg-background">
        {/* ─── HERO ─── */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 border border-accent/20 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-accent uppercase tracking-wider">Contact</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-[var(--font-heading)] leading-[1.1] mb-6" data-speakable="true">
                Parlons de<br />
                <span className="text-accent">votre projet.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Site ultra-rapide, eco-concu, visible sur Google et les IA ?
                Devis gratuit en moins de 24h.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── CONTACT INFO ─── */}
        <section className="py-6 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="p-5 rounded-xl border border-border bg-card text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mx-auto mb-3">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-foreground font-medium hover:text-accent transition-colors text-sm">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium text-sm">{info.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FORM ─── */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="p-8 md:p-10 rounded-2xl bg-card border border-border"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] tracking-tight mb-8 text-center">
                Envoyez-moi un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                    placeholder="Votre nom"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                    placeholder="votre@email.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                    Telephone <span className="text-muted-foreground">(optionnel)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-1.5">
                    Budget estime
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                  >
                    <option value="">Selectionnez une fourchette</option>
                    <option value="1000-3000">1 000 - 3 000 euros</option>
                    <option value="3000-5000">3 000 - 5 000 euros</option>
                    <option value="5000-10000">5 000 - 10 000 euros</option>
                    <option value="10000+">Plus de 10 000 euros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Parlez-moi de votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none text-sm"
                    placeholder="Decrivez votre projet, vos objectifs, vos besoins..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="urgent"
                    name="urgent"
                    className="mt-1 w-4 h-4 rounded border-border text-accent focus:ring-2 focus:ring-accent/20"
                  />
                  <label htmlFor="urgent" className="text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-accent" />
                      <span className="font-medium text-accent">Livraison express 24h</span>
                    </span>
                    {' '} — J'ai besoin de mon site rapidement
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3.5 bg-accent text-accent-foreground rounded-xl font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:opacity-90"
                >
                  {state.submitting ? "Envoi en cours..." : "Envoyer mon message"}
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-24 md:py-32 px-6 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
                Questions frequentes
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Tout ce que vous devez savoir avant de demarrer.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="p-6 rounded-xl border border-border bg-background"
                >
                  <h3 className="text-base font-semibold font-[var(--font-heading)] mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export async function getServerSideProps({ req }) {
  const { isCrawler } = await import('../lib/isCrawler');
  const { getSiteUrlFromHeaders } = await import('../lib/siteUrl');
  const baseUrl = getSiteUrlFromHeaders(req);
  const userAgent = req.headers['user-agent'] || '';
  return {
    props: {
      baseUrl,
      isCrawler: isCrawler(userAgent),
    },
  };
}

export default ContactPage;
