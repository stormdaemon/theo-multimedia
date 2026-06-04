import { motion } from 'motion/react';
import Link from 'next/link';
import SEO, { createLocalBusinessSchema, createWebPageSchema } from '../components/SEO';
import { CrawlerPageContent } from '../components/CrawlerContent';
import PageFeatureBand from '../components/PageFeatureBand';
import { getSiteUrlFromHeaders } from '../lib/siteUrl';

const pillars = [
  { icon: '/assets/icon-seo-audit-orange.webp', title: 'Audit technique', text: 'Structure, vitesse, indexation, maillage et priorités: vous savez quoi corriger et dans quel ordre.' },
  { icon: '/assets/icon-seo-local-orange.webp', title: 'SEO local', text: 'Pages de zone, contenus utiles et signaux locaux pour apparaître au moment où vos prospects cherchent.' },
  { icon: '/assets/icon-target-orange.webp', title: 'Contenus utiles', text: 'Des pages organisées autour des intentions de recherche, sans remplissage ni jargon artificiel.' },
  { icon: '/assets/icon-audit-graph-orange.webp', title: 'Suivi lisible', text: 'Des indicateurs simples pour relier les actions SEO aux prises de contact et aux opportunités.' },
  { icon: '/assets/icon-crm-orange.webp', title: 'SEO et conversion', text: 'La visibilité n’est pas isolée: chaque page visible doit aussi guider vers une action concrète.' },
  { icon: '/assets/icon-rocket-orange.webp', title: 'Google et IA', text: 'Balisage structuré et informations claires pour faciliter la lecture par les moteurs et assistants IA.' },
];

const SeoPage = ({ baseUrl, isCrawler }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      createLocalBusinessSchema(),
      createWebPageSchema('SEO local et visibilité Google', 'Audit SEO, référencement local et optimisation pour Google et les assistants IA.', `${baseUrl}/seo`),
    ],
  };

  return (
    <>
      <SEO title="SEO Local, Audit et Visibilité Google" description="Audit SEO, référencement local et contenus optimisés pour Google et les assistants IA. Accompagnement direct à Cognac et en Charente." canonical="/seo" schema={schema} enableLocalSEO={true} />
      <CrawlerPageContent isCrawler={isCrawler} title="SEO local et visibilité Google" description="Audit, référencement local, contenus et données structurées." sections={pillars.map(({ title, text }) => ({ title, content: text }))} />
      <div className="bg-background">
        <section className="tm-subpage-hero relative overflow-hidden px-6 pb-20 pt-24 md:pb-28 md:pt-32">
          <div className="tm-subpage-art" style={{ backgroundImage: "url('/assets/services-seo-local-map-dashboard.webp')" }} />
          <div className="mx-auto max-w-6xl relative">
            <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="tm-badge">SEO local, Google & IA</span>
              <h1 className="tm-title mt-5 text-5xl leading-[1.04] md:text-7xl">Être visible quand<br /><span className="tm-orange">vos clients cherchent.</span></h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Un référencement utile relie la technique, les contenus locaux et la conversion. Vous obtenez une feuille de route claire et un site compréhensible par les moteurs.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="tm-button tm-button-primary">Demander mon audit</Link>
                <Link href="/portfolio" className="tm-button tm-button-dark">Voir les réalisations</Link>
              </div>
            </motion.div>
          </div>
        </section>

        <PageFeatureBand
          eyebrow="Une stratégie lisible"
          title="Pas de promesses floues, des priorités."
          description="Le SEO est traité comme un parcours complet: comprendre, corriger, publier, mesurer et améliorer."
          artwork="/assets/services-audit-seo-diagnostics.webp"
          items={[
            { icon: '/assets/icon-audit-graph-orange.webp', title: 'Diagnostic priorisé', text: 'Les blocages critiques apparaissent avant les optimisations secondaires.' },
            { icon: '/assets/icon-location-orange.webp', title: 'Contexte local', text: 'Cognac, Angoulême, Saintes et les zones utiles à votre activité sont intégrées intelligemment.' },
            { icon: '/assets/icon-seo-audit-orange.webp', title: 'Données structurées', text: 'Les pages expliquent clairement votre activité aux moteurs de recherche et assistants IA.' },
          ]}
        />

        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="tm-kicker">Les briques de votre visibilité</p>
            <h2 className="tm-title mt-2 max-w-2xl text-4xl">Une architecture SEO qui sert aussi vos visiteurs.</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {pillars.map((pillar, index) => (
                <motion.article key={pillar.title} initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="tm-thick-glass rounded-2xl p-6">
                  <img src={pillar.icon} alt="" className="h-10 w-10 object-contain" />
                  <h3 className="mt-4 text-xl font-bold">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{pillar.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="tm-audit tm-thick-glass mx-auto max-w-5xl rounded-2xl p-8 text-center md:p-12">
            <p className="tm-kicker">Audit offert</p>
            <h2 className="tm-title mt-2 text-4xl">Commençons par ce qui bloque vraiment.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-200">Vous recevez un premier regard concret sur votre visibilité et les priorités à traiter.</p>
            <Link href="/contact" className="tm-button tm-button-primary mt-7">Demander mon audit SEO</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export async function getServerSideProps({ req }) {
  const { isCrawler } = await import('../lib/isCrawler');
  return { props: { baseUrl: getSiteUrlFromHeaders(req), isCrawler: isCrawler(req.headers['user-agent'] || '') } };
}

export default SeoPage;
