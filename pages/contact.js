import { motion } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, ValidationError } from '@formspree/react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEO, { createLocalBusinessSchema, createWebPageSchema, createFAQSchema, createBreadcrumbSchema } from '../components/SEO';
import PageFeatureBand from '../components/PageFeatureBand';
import LocationMap from '../components/LocationMap';
import { absoluteUrl, business } from '../lib/business';

const contactInfo = [
  {
    icon: '/assets/icon-footer-mail-orange.webp',
    title: "Email",
    value: "contact@theo-multimedia.com",
    link: "mailto:contact@theo-multimedia.com"
  },
  {
    icon: '/assets/icon-footer-location-orange.webp',
    title: "Localisation",
    value: "Cognac / Charente",
    link: null
  },
  {
    icon: '/assets/icon-clock-orange.webp',
    title: "Délai de réponse",
    value: "Sous 24 heures",
    link: null
  }
];

const faqs = [
  {
    question: "Combien coûte la création d’un site internet ?",
    answer: "Les tarifs dépendent de la complexité du projet. Un site vitrine professionnel démarre à partir de 1 000 euros. Une boutique e-commerce ou une application web sur mesure sera évaluée selon vos besoins spécifiques. Contactez-moi pour un devis gratuit et détaillé en moins de 24h."
  },
  {
    question: "Livraison en 24h, c’est vraiment possible ?",
    answer: "Oui, pour les sites vitrines et landing pages quand le périmètre est clair. C’est idéal pour les lancements urgents, les événements ou les opportunités business qui n’attendent pas. La qualité et la performance restent prioritaires."
  },
  {
    question: "C’est quoi l’éco-conception web ?",
    answer: "L’éco-conception web consiste à créer des sites légers et optimisés qui consomment moins d’énergie. Je travaille les images, le code et les parcours pour livrer un site plus sobre, plus rapide et plus simple à utiliser."
  },
  {
    question: "Comment fonctionne le référencement IA (SEO IA) ?",
    answer: "Le référencement IA (ou GEO - Generative Engine Optimization) consiste à optimiser votre site pour être cité et recommandé par les intelligences artificielles comme ChatGPT, Perplexity et Gemini. J’utilise le balisage schema.org enrichi, du contenu structuré et des techniques spécifiques pour que les IA comprennent et recommandent votre activité."
  }
];

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mblypyew");
  const { query } = useRouter();
  const requestedService = typeof query.service === 'string' ? query.service : '';

  const localBusinessSchema = createLocalBusinessSchema();
  const contactPageSchema = createWebPageSchema(
    'Contact - Parlez de votre projet web',
    'Contactez Théo Multimédia pour votre site internet, SEO local, CRM, LMS ou e-commerce. Réponse sous 24h ouvrées en Charente.',
    absoluteUrl('/contact')
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
          title="Message envoyé - Merci !"
          description="Merci pour votre message. Je vous répondrai dans les 24 heures."
          canonical="/contact"
          schema={schema}
        />
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-lg"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
              Message reçu !
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Merci pour votre message. Je vous répondrai dans les 24 heures.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Retour à l’accueil
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
        title="Contact - Site internet, SEO local et sur mesure"
        description="Contactez Théo Multimédia pour votre projet web en Charente : site vitrine 24h, SEO local, audit gratuit, CRM, LMS ou e-commerce."
        canonical="/contact"
        schema={schema}
        enableLocalSEO={true}
      />


      <div className="bg-background">
        {/* ─── HERO ─── */}
        <section className="tm-subpage-hero relative pt-24 pb-20 md:pt-32 md:pb-28 px-6 overflow-hidden">
          <div className="tm-subpage-art" style={{ backgroundImage: "url('/assets/contact-cognac-night.webp')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
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
                Site ultra-rapide, éco-conçu, visible sur Google et les IA ?
                Réponse sous 24h ouvrées, avec un premier retour concret.
              </p>
            </motion.div>
          </div>
        </section>

        <PageFeatureBand
          eyebrow="Un premier échange utile"
          title="Votre demande arrive directement au bon endroit."
          description="Le formulaire sert à comprendre votre besoin, votre urgence et le niveau d’accompagnement attendu. Vous recevez une réponse exploitable, pas une relance automatique."
          artwork="/assets/contact-form-orange-glow.webp"
          items={[
            { icon: '/assets/icon-footer-mail-orange.webp', title: 'Réponse directe', text: 'Votre demande est lue et traitée personnellement, avec une première orientation concrète.' },
            { icon: '/assets/icon-clock-orange.webp', title: 'Retour sous 24h', text: 'Le délai de réponse est court pour ne pas laisser un lancement ou une refonte en attente.' },
            { icon: '/assets/icon-footer-location-orange.webp', title: 'Ancrage local', text: 'Basé à Cognac et actif en Charente, avec la possibilité de travailler à distance.' },
          ]}
        />

        {/* ─── CONTACT INFO ─── */}
        <section className="py-6 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="tm-glass-soft p-5 rounded-xl text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mx-auto mb-3">
                    <img src={info.icon} alt="" className="w-6 h-6 object-contain" />
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

        {/* ─── CARTE ─── */}
        <LocationMap />

        {/* ─── FORM ─── */}
        <section id="audit" className="py-16 md:py-24 px-6 scroll-mt-24">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="tm-glass p-8 md:p-10 rounded-2xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] tracking-tight mb-8 text-center">
                Envoyer ma demande
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
                    Téléphone <span className="text-muted-foreground">(optionnel)</span>
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
                  <label htmlFor="city" className="block text-sm font-medium mb-1.5">
                    Ville
                  </label>
                  <select
                    id="city"
                    name="city"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                  >
                    <option value="">Sélectionnez votre secteur</option>
                    {business.serviceAreas.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                    <option value="autre">Autre / hors Charente</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-1.5">
                    Type de projet
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    key={requestedService || 'projectType'}
                    defaultValue={requestedService}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                  >
                    <option value="">Sélectionnez un type de projet</option>
                    <option value="site-vitrine-24h">Site vitrine en 24h</option>
                    <option value="creation-site-internet">Création de site internet</option>
                    <option value="audit-seo">Audit SEO gratuit</option>
                    <option value="referencement-local">SEO local</option>
                    <option value="seo-ia">SEO IA / GEO</option>
                    <option value="crm-sur-mesure">CRM sur mesure</option>
                    <option value="lms-elearning">LMS / E-learning</option>
                    <option value="ecommerce-sur-mesure">E-commerce sur mesure</option>
                    <option value="refonte-site-internet">Refonte de site</option>
                    <option value="maintenance-site-web">Maintenance</option>
                    <option value="projet-similaire">Projet similaire au portfolio</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-1.5">
                    Budget estimé
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                  >
                    <option value="">Sélectionnez une fourchette</option>
                    <option value="1000-3000">1 000 - 3 000 euros</option>
                    <option value="3000-5000">3 000 - 5 000 euros</option>
                    <option value="5000-10000">5 000 - 10 000 euros</option>
                    <option value="10000+">Plus de 10 000 euros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="delay" className="block text-sm font-medium mb-1.5">
                    Délai souhaité
                  </label>
                  <select
                    id="delay"
                    name="delay"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                  >
                    <option value="">Sélectionnez un délai</option>
                    <option value="24h">24h / urgent</option>
                    <option value="1-2-semaines">1 à 2 semaines</option>
                    <option value="1-mois">Dans le mois</option>
                    <option value="a-cadrer">À cadrer ensemble</option>
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
                    placeholder="Décrivez votre projet, vos objectifs, vos besoins..."
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
                      <img src="/assets/icon-rocket-orange.webp" alt="" className="w-4 h-4 object-contain" />
                      <span className="font-medium text-accent">Livraison express 24h</span>
                    </span>
                    {' '} — J’ai besoin de mon site rapidement
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="auditSeo"
                    name="auditSeo"
                    defaultChecked={requestedService === 'audit-seo'}
                    className="mt-1 w-4 h-4 rounded border-border text-accent focus:ring-2 focus:ring-accent/20"
                  />
                  <label htmlFor="auditSeo" className="text-sm text-muted-foreground">
                    Je souhaite aussi recevoir un audit SEO gratuit de mon site actuel.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3.5 bg-accent text-accent-foreground rounded-xl font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:opacity-90"
                >
                  {state.submitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-24 md:py-32 px-6 border-y border-border">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
                Questions fréquentes
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Tout ce que vous devez savoir avant de démarrer.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="tm-glass-soft p-6 rounded-xl"
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

export default ContactPage;
