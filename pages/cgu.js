import { motion } from 'framer-motion';
import SEO, { createOrganizationSchema, createWebPageSchema } from '../components/SEO';

const CGU = ({ baseUrl }) => {
  const organizationSchema = createOrganizationSchema();
  const cguPageSchema = createWebPageSchema(
    'Conditions Générales d\'Utilisation',
    'Conditions générales utilisation Théo Multimédia. Informations légales utilisation services web et solutions digitales.',
    `${baseUrl}/cgu`
  );
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, cguPageSchema]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="CGU | Théo Multimédia - Conditions Générales d'Utilisation"
        description="Conditions générales utilisation Théo Multimédia. Informations légales utilisation services web et solutions digitales."
        canonical="/cgu"
        schema={schema}
      />

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Conditions Générales d'Utilisation</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              En vigueur au 24 juin 2025
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 1 - Objet</h2>
              <p>Les présentes conditions générales d'utilisation (ci-après dénommées "CGU") définissent les modalités de mise à disposition de mes services sur le site <strong>theo-multimedia.com</strong> (ci-après dénommé "le Site") et les conditions d'utilisation du Site par l'Utilisateur.</p>
              <p className="mt-4">Tout accès et/ou utilisation du Site suppose l'acceptation et le respect de l'ensemble des termes des présentes CGU et leur acceptation inconditionnelle. Elles constituent donc un contrat entre moi (Théo Multimédia) et l'Utilisateur.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 2 - Mentions légales</h2>
              <p>J'édite ce site :</p>
              <address className="not-italic mt-2">
                <p>Monsieur Théo LAFONT</p>
                <p>Entreprise individuelle</p>
                <p>N° SIRET : 884 758 970 00039</p>
                <p>N° TVA intracommunautaire : FR59884758970</p>
                <p>16000 Angoulême, France</p>
                <p>Email : contact@theo-multimedia.com</p>
                <p>Téléphone : +33 7 68 51 95 68</p>
              </address>
              <p className="mt-4">Je suis le directeur de la publication : Théo LAFONT</p>
              <p>J'héberge ce site chez O2SWITCH - Chem. des Pardiaux 63000 Clermont-Ferrand</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 3 - Définitions</h2>
              <p>La présente clause a pour objet de définir les différents termes essentiels du contrat :</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Site</strong> : désigne le site accessible à l'adresse theo-multimedia.com ainsi que l'ensemble de ses sous-domaines.</li>
                <li><strong>Éditeur</strong> : désigne la personne morale ou physique qui édite et met à disposition le Site, en l'occurrence Théo Multimédia.</li>
                <li><strong>Utilisateur</strong> : désigne toute personne qui utilise le Site ou l'un des services proposés sur le Site.</li>
                <li><strong>Contenu Utilisateur</strong> : désigne les données transmises par l'Utilisateur au sein du Site.</li>
                <li><strong>Membre</strong> : désigne un Utilisateur identifié sur le Site.</li>
                <li><strong>Identifiants</strong> : désigne l'ensemble des informations nécessaires à l'identification d'un Utilisateur sur le Site.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 4 - Accès au site</h2>
              <p>Le Site est accessible gratuitement à tout Utilisateur disposant d'un accès à Internet. Tous les coûts afférents à l'accès au Site et aux services (matériel informatique, logiciel, connexion Internet, etc.) sont à la charge de l'Utilisateur.</p>
              <p className="mt-4">Je m'efforce d'assurer un accès de qualité au Site, mais je ne suis tenu à aucune obligation d'y parvenir.</p>
              <p className="mt-4">Je ne peux être tenu responsable des dysfonctionnements du réseau ou des serveurs ou de tout autre événement échappant à mon contrôle raisonnable, qui empêcherait ou dégraderait l'accès au Site.</p>
              <p className="mt-4">Je me réserve le droit, sans préavis ni indemnité, de fermer temporairement le Site ou l'accès à un ou plusieurs services, notamment pour procéder à des mises à jour, à des modifications de contenu ou à toute autre action jugée nécessaire au bon fonctionnement du Site.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 5 - Propriété intellectuelle</h2>
              <p>La structure du Site, ainsi que les textes, graphismes, images, photographies, sons, vidéos et applications informatiques qui le composent, sont ma propriété et sont protégés comme tels par les lois relatives à la propriété intellectuelle.</p>
              <p className="mt-4">Toute représentation, reproduction, adaptation ou exploitation partielle ou totale des contenus, marques et services proposés par le Site, par quelque procédé que ce soit, sans mon autorisation préalable, expresse et écrite, est strictement interdite et serait susceptible de constituer une contrefaçon au sens des articles L. 335-2 et suivants du Code de la propriété intellectuelle.</p>
              <p className="mt-4">L'Utilisateur s'engage à ne pas modifier, copier, traduire, reproduire, vendre, publier, exploiter et diffuser le Site ou son contenu, en tout ou partie, sous quelque forme et par quelque moyen que ce soit.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 6 - Liens hypertextes</h2>
              <p>Le Site peut contenir des liens hypertextes vers d'autres sites internet sur lesquels l'Éditeur n'exerce pas de contrôle. Malgré les vérifications préalables et régulières réalisées par l'Éditeur, celui-ci décline toute responsabilité quant aux contenus des sites ainsi accessibles.</p>
              <p className="mt-4">L'Utilisateur s'engage à ne pas mettre en place un lien hypertexte vers le Site sans l'autorisation expresse et préalable de l'Éditeur. L'Éditeur se réserve le droit de demander la suppression d'un lien s'il estime que le site source ne respecte pas les règles ainsi définies.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 7 - Données personnelles</h2>
              <p>Les données personnelles sont traitées conformément à notre <a href="/politique-confidentialite" className="text-accent hover:underline">Politique de Confidentialité</a>.</p>
              <p className="mt-4">Conformément à la loi "informatique et libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 8 - Cookies</h2>
              <p>Le Site peut utiliser des cookies. Un cookie est un fichier texte stocké sur le disque dur de l'ordinateur de l'Utilisateur lors de sa navigation sur le Site.</p>
              <p className="mt-4">L'Utilisateur peut s'opposer à l'enregistrement de cookies en configurant son navigateur. Cependant, cette désactivation pourrait empêcher l'accès à certaines fonctionnalités du Site.</p>
              <p className="mt-4">Pour plus d'informations, consultez notre <a href="/politique-confidentialite#cookies" className="text-accent hover:underline">Politique de Cookies</a>.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 9 - Responsabilité</h2>
              <p>L'Utilisateur s'engage à utiliser le Site conformément à la réglementation en vigueur et aux présentes CGU.</p>
              <p className="mt-4">L'Utilisateur est seul responsable des contenus qu'il diffuse sur le Site. Il s'engage à ne pas publier de contenus illicites, diffamatoires, injurieux, racistes, xénophobes, à caractère pédophile, pornographiques, contraires aux bonnes mœurs ou portant atteinte à la vie privée d'autrui.</p>
              <p className="mt-4">L'Éditeur ne pourra être tenu pour responsable des dommages directs ou indirects qui pourraient survenir du fait de l'utilisation du Site, et notamment d'une perte de bénéfices, de clientèle, de données ou de tout autre perte de biens incorporels pouvant survenir à raison de l'accès au site, de l'utilisation du site ou inversement, de l'impossibilité d'accéder à ce dernier.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 10 - Évolution des CGU</h2>
              <p>Les présentes CGU peuvent être modifiées à tout moment par l'Éditeur. Les nouvelles CGU seront applicables immédiatement dès leur mise en ligne. Il est donc conseillé à l'Utilisateur de se référer régulièrement à la dernière version des CGU en vigueur.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 11 - Droit applicable et juridiction compétente</h2>
              <p>Les présentes CGU sont régies par le droit français. En cas de différend, les tribunaux français seront seuls compétents.</p>
              <p className="mt-4">Conformément aux articles L. 612-1 et suivants du Code de la consommation, tout consommateur a la possibilité de recourir gratuitement à un médiateur de la consommation pour la résolution amiable de tout litige relatif à l'exécution des présentes conditions générales de vente.</p>
              <p className="mt-4">Le consommateur peut également recourir au règlement en ligne des litiges (RLL) sur la plateforme européenne : <a href="https://ec.europa.eu/consumers/odr/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 12 - Contact</h2>
              <p>Pour toute question ou demande d'information concernant le Site, ou tout signalement de contenu ou d'activités illicites, vous pouvez me contacter :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Par email : <a href="mailto:contact@theo-multimedia.com" className="text-accent hover:underline">contact@theo-multimedia.com</a></li>
                <li>Par téléphone : <a href="tel:+33123456789" className="text-accent hover:underline">+33 7 68 51 95 68</a></li>
                <li>Par courrier : 16000 Angoulême, France</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CGU;

export async function getServerSideProps({ req }) {
  const { getSiteUrlFromHeaders } = await import('../lib/siteUrl')
  const baseUrl = getSiteUrlFromHeaders(req)
  return { props: { baseUrl } }
}
