import { motion } from 'framer-motion';
import SEO, { createOrganizationSchema, createWebPageSchema } from '../components/SEO';
import { getSiteUrlFromHeaders } from '../lib/siteUrl'

// Next.js 16: Force SSR (Nov 2025 requirement)
export const dynamic = 'force-dynamic';

const CGV = ({ baseUrl }) => {
  const organizationSchema = createOrganizationSchema();
  const cgvPageSchema = createWebPageSchema(
    'Conditions Générales de Vente',
    'Conditions générales vente Théo Multimédia. Modalités prestations web, tarifs et conditions contractuelles services digitaux.',
    `${baseUrl}/cgv`
  );
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, cgvPageSchema]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="CGV | Théo Multimédia - Conditions Générales de Vente"
        description="Conditions générales vente Théo Multimédia. Modalités prestations web, tarifs et conditions contractuelles services digitaux."
        canonical="/cgv"
        schema={schema}
        ogImage="/og-cgv.jpg"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Conditions Générales de Vente</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              En vigueur au 24 juin 2025
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 1 - Objet</h2>
              <p>Les présentes conditions générales de vente (CGV) définissent les conditions dans lesquelles je propose mes prestations.</p>
              <p className="mt-4">Toute commande implique l'adhésion sans réserve de l'acheteur aux présentes conditions générales de vente.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 2 - Identification du Prestataire</h2>
              <p>Je suis Théo LAFONT</p>
              <p>Entreprise individuelle</p>
              <p>N° SIRET : 884 758 970 00039</p>
              <p>N° TVA intracommunautaire : FR59884758970</p>
              <p>16000 Angoulême, France</p>
              <p>Email : contact@theo-multimedia.com</p>
              <p>Téléphone : +33 7 68 51 95 68</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 3 - Description des prestations</h2>
              <p>Je propose des services de création de sites internet, de développement web et de conseil en communication digitale. Les caractéristiques essentielles de mes prestations sont décrites sur le site theo-multimedia.com.</p>
              <p className="mt-4">Je me réserve le droit de modifier mes prestations à tout moment, étant entendu que les commandes en cours seront honorées sur la base des conditions en vigueur au moment de la commande.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 4 - Tarifs</h2>
              <p>Mes tarifs sont indiqués en euros toutes taxes comprises (TVA en vigueur). Ils sont fermes et non révisables pendant leur période de validité. Je me réserve le droit de modifier mes prix à tout moment, étant entendu que mes prestations seront facturées sur la base des tarifs en vigueur au moment de l'enregistrement de la commande.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 5 - Commande</h2>
              <p>Pour passer commande, vous devez effectuer une demande par email ou via le formulaire de contact. Après étude de votre demande, je vous adresse un devis détaillé.</p>
              <p className="mt-4">La commande ne sera considérée comme ferme qu'après réception d'un acompte de 30% du montant total de la prestation et la signature du devis par vos soins.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 6 - Modalités de paiement</h2>
              <p>Le paiement s'effectue selon les modalités suivantes :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>30% à la commande (acompte)</li>
                <li>40% à la validation des maquettes</li>
                <li>30% à la livraison finale</li>
              </ul>
              <p className="mt-4">Vous pouvez régler par virement bancaire ou par carte bancaire via une plateforme de paiement sécurisée.</p>
              <p className="mt-4 font-semibold">En cas de retard de paiement, j'appliquerai une pénalité de 3 fois le taux d'intérêt légal.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 7 - Délais de réalisation</h2>
              <p>J'indique les délais de réalisation à titre indicatif dans le devis. Ils deviennent contractuels après validation du cahier des charges définitif et réception de tous les éléments nécessaires à la réalisation de la prestation.</p>
              <p className="mt-4">En cas de retard de votre part (retard dans la fourniture des éléments, validations tardives, etc.), les délais seront automatiquement prolongés.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 8 - Droit de rétractation</h2>
              <p>Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture de services pleinement exécutés avant la fin du délai de rétractation et dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 9 - Propriété intellectuelle</h2>
              <p>Les éléments graphiques, chartes graphiques, maquettes, développements spécifiques, etc. restent ma propriété exclusive jusqu'au paiement intégral du prix convenu.</p>
              <p className="mt-4">Après règlement complet, je vous cède les droits de propriété intellectuelle sur les créations, à l'exception des logiciels, bibliothèques et autres outils préexistants ou sous licence dont je reste propriétaire ou titulaire des droits d'exploitation.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 10 - Hébergement et nom de domaine</h2>
              <p>L'hébergement du site n'est pas inclus dans mes prestations. Vous êtes libre de choisir votre hébergeur. Je peux recommander des solutions d'hébergement mais je ne saurais être tenu responsable des problèmes liés à l'hébergeur choisi.</p>
              <p className="mt-4">Le nom de domaine est à votre charge et vous en êtes le propriétaire. Je vous recommande de le réserver pour une durée minimale de 5 ans.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 11 - Maintenance et mises à jour</h2>
              <p>La maintenance corrective et évolutive n'est pas incluse dans le prix de la prestation initiale. Elle fera l'objet d'un devis séparé si vous le souhaitez.</p>
              <p className="mt-4">Je peux vous proposer des contrats de maintenance annuels couvrant les mises à jour de sécurité et les corrections de bugs majeurs.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 12 - Responsabilité</h2>
              <p>Le Prestataire ne pourra être tenu pour responsable des dommages directs ou indirects qui pourraient survenir du fait de l'utilisation du site internet, et notamment d'une perte de bénéfices, de clientèle, de données ou de tout autre perte de biens incorporels pouvant survenir à raison de l'accès au site, de l'utilisation du site ou inversement, de l'impossibilité d'accéder à ce dernier.</p>
              <p className="mt-4">Le Client est seul responsable du contenu qu'il fournit et garantit le Prestataire contre tout recours de tiers lié à ce contenu.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 13 - Données personnelles</h2>
              <p>Les données personnelles collectées sont traitées conformément à notre <a href="/politique-confidentialite" className="text-accent hover:underline">Politique de Confidentialité</a>.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 14 - Résiliation</h2>
              <p>En cas de manquement par l'une des parties à ses obligations, le contrat pourra être résilié de plein droit après mise en demeure restée sans effet dans un délai de 15 jours.</p>
              <p className="mt-4">En cas de résiliation à l'initiative du Client, les sommes versées à titre d'acompte restent acquises au Prestataire à titre de dédommagement.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 15 - Droit applicable et juridiction compétente</h2>
              <p>Les présentes conditions générales de vente sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 16 - Acceptation des conditions</h2>
              <p>Le fait de passer commande implique l'acceptation pleine et entière des présentes conditions générales de vente.</p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CGV;

export async function getServerSideProps({ req }) {
  const { getSiteUrlFromHeaders } = await import('../lib/siteUrl')
  const baseUrl = getSiteUrlFromHeaders(req)
  return { props: { baseUrl } }
}
