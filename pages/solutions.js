import { motion } from 'motion/react';
import Link from 'next/link';
import SEO, { createLocalBusinessSchema, createWebPageSchema } from '../components/SEO';
import { CrawlerPageContent } from '../components/CrawlerContent';
import PageFeatureBand from '../components/PageFeatureBand';
import { getSiteUrlFromHeaders } from '../lib/siteUrl';

const solutions = [
  { icon: '/assets/icon-crm-orange.webp', image: '/assets/services-crm-pipeline-dashboard.webp', title: 'CRM sur mesure', text: 'Clients, devis, relances et suivi commercial réunis dans un outil qui colle à votre organisation.', href: '/crm-sur-mesure' },
  { icon: '/assets/icon-lms-orange.webp', image: '/assets/services-lms-course-dashboard.webp', title: 'LMS & E-learning', text: 'Parcours, ressources et espaces utilisateurs pour organismes de formation, écoles et équipes internes.', href: '/lms-elearning' },
  { icon: '/assets/icon-ecommerce-orange.webp', image: '/assets/services-ecommerce-cart-dashboard.webp', title: 'E-commerce', text: 'Une boutique rapide avec les bons parcours de vente, sans vous enfermer dans un thème générique.', href: '/ecommerce-sur-mesure' },
  { icon: '/assets/icon-code-orange.webp', image: '/assets/about-expertise-dashboard.webp', title: 'Applications web', text: 'Un outil métier, un espace membre ou une plateforme spécifique construite autour de votre besoin réel.', href: '/creation-site-internet' },
];

const SolutionsPage = ({ baseUrl, isCrawler }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      createLocalBusinessSchema(),
      createWebPageSchema('Solutions web sur mesure', 'CRM, LMS, e-commerce et applications web sur mesure pour entreprises et organismes.', `${baseUrl}/solutions`),
    ],
  };

  return (
    <>
      <SEO title="Solutions web sur mesure: CRM, LMS et E-commerce" description="CRM, LMS, e-commerce et applications web conçus selon vos usages. Solutions sur mesure avec accompagnement direct." canonical="/solutions" schema={schema} />
      <CrawlerPageContent isCrawler={isCrawler} title="Solutions web sur mesure" description="CRM, LMS, e-commerce et outils métier adaptés." sections={solutions.map(({ title, text }) => ({ title, content: text }))} />
      <div className="bg-background">
        <section className="tm-subpage-hero relative overflow-hidden px-6 pb-20 pt-24 md:pb-28 md:pt-32">
          <div className="tm-subpage-art" style={{ backgroundImage: "url('/assets/services-crm-pipeline-dashboard.webp')" }} />
          <div className="mx-auto max-w-6xl relative">
            <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="tm-badge">CRM, LMS, e-commerce & outils métier</span>
              <h1 className="tm-title mt-5 text-5xl leading-[1.04] md:text-7xl">Votre activité mérite<br /><span className="tm-orange">mieux qu’un template.</span></h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Quand un site vitrine ne suffit plus, je construis les interfaces, tableaux de bord et parcours qui simplifient vraiment votre travail.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="tm-button tm-button-primary">Parler de mon outil</Link>
                <Link href="/portfolio" className="tm-button tm-button-dark">Explorer les projets</Link>
              </div>
            </motion.div>
          </div>
        </section>

        <PageFeatureBand
          eyebrow="Un outil qui vous ressemble"
          title="La bonne complexité, au bon endroit."
          description="Le sur mesure ne consiste pas à empiler des fonctions. Il consiste à rendre les usages quotidiens plus simples, plus fiables et plus lisibles."
          artwork="/assets/services-process-orange-orbit.webp"
          items={[
            { icon: '/assets/icon-users-orange.webp', title: 'Usages d’abord', text: 'Les parcours sont dessinés à partir des personnes qui utiliseront vraiment la solution.' },
            { icon: '/assets/icon-code-orange.webp', title: 'Architecture évolutive', text: 'Les fondations permettent de faire grandir le produit sans le reconstruire à chaque étape.' },
            { icon: '/assets/icon-design-orange.webp', title: 'Interface soignée', text: 'Un outil métier peut être dense sans être froid, confus ou difficile à prendre en main.' },
          ]}
        />

        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="tm-kicker">Solutions spécialisées</p>
            <h2 className="tm-title mt-2 max-w-3xl text-4xl">Des interfaces métier aussi soignées que votre site public.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {solutions.map((solution, index) => (
                <motion.article key={solution.title} initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .07 }} className="tm-thick-glass overflow-hidden rounded-2xl">
                  <Link href={solution.href} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  <img src={solution.image} alt="" className="h-48 w-full object-cover opacity-90" />
                  <div className="p-6">
                    <img src={solution.icon} alt="" className="h-10 w-10 object-contain" />
                    <h3 className="mt-4 text-2xl font-bold">{solution.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{solution.text}</p>
                  </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="tm-audit tm-thick-glass mx-auto max-w-5xl rounded-2xl p-8 text-center md:p-12">
            <p className="tm-kicker">Cadrage direct</p>
            <h2 className="tm-title mt-2 text-4xl">Décrivons votre besoin avant de parler fonctionnalités.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-200">Un premier échange permet de distinguer l’essentiel, le confort et les évolutions à prévoir.</p>
            <Link href="/contact" className="tm-button tm-button-primary mt-7">Échanger sur ma solution</Link>
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

export default SolutionsPage;
