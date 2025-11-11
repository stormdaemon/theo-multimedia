import { motion } from 'framer-motion';
import SEO, { createOrganizationSchema, createWebPageSchema } from '../components/SEO';
import { getSiteUrlFromHeaders } from '../lib/siteUrl'

const PolitiqueConfidentialite = ({ baseUrl }) => {
  const organizationSchema = createOrganizationSchema();
  const privacyPageSchema = createWebPageSchema(
    'Politique de confidentialité',
    'Politique confidentialité Théo Multimédia. Protection données personnelles et respect vie privée selon RGPD.',
    `${baseUrl}/politique-confidentialite`
  );
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, privacyPageSchema]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Politique de Confidentialité | Théo Multimédia - RGPD"
        description="Politique confidentialité Théo Multimédia. Protection données personnelles et respect vie privée selon RGPD."
        canonical="/politique-confidentialite"
        schema={schema}
        ogImage="/og-privacy.jpg"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Politique de Confidentialité</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              Dernière mise à jour : 24 juin 2025
            </p>

            <section className="mb-12">
              <p>Chez Théo Multimédia, je m'engage à protéger et respecter votre vie privée. Cette politique de confidentialité explique comment je collecte, utilise et protège vos données personnelles lorsque vous utilisez mon site web.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Responsable du traitement</h2>
              <p>Le responsable du traitement des données est :</p>
              <address className="not-italic mt-2 mb-4">
                <p>Monsieur Théo LAFONT</p>
                <p>16000 Angoulême, France</p>
                <p>Email : contact@theo-multimedia.com</p>
                <p>Téléphone : +33 7 68 51 95 68</p>
                <p>N° SIRET : 884 758 970 00039</p>
              </address>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Données personnelles collectées</h2>
              <p>Je peux collecter et traiter les données suivantes :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Vos coordonnées (nom, prénom, adresse email, numéro de téléphone)</li>
                <li>Les informations de connexion (adresse IP, type de navigateur, pages consultées)</li>
                <li>Les données de navigation et d'audience</li>
                <li>Toutes autres informations que vous choisissez de me fournir via les formulaires de contact</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Finalités du traitement</h2>
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Répondre à vos demandes d'information</li>
                <li>Vous fournir les services demandés</li>
                <li>Améliorer mon site web et mes services</li>
                <li>Vous envoyer des communications marketing (avec votre consentement)</li>
                <li>Respecter mes obligations légales et réglementaires</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Base légale du traitement</h2>
              <p>Le traitement de vos données est fondé sur :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Votre consentement pour l'envoi de communications marketing</li>
                <li>L'exécution d'un contrat pour la fourniture de mes services</li>
                <li>Mon intérêt légitime pour améliorer mes services</li>
                <li>Le respect d'obligations légales</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Destinataires des données</h2>
              <p>Vos données peuvent être transmises à :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Mes prestataires techniques (hébergeur, développeurs)</li>
                <li>Les autorités compétentes en cas d'obligation légale</li>
                <li>D'autres tiers uniquement avec votre consentement explicite</li>
              </ul>
              <p className="mt-4">Je m'assure que tous les tiers respectent des normes de sécurité appropriées.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Durée de conservation</h2>
              <p>Je conserve vos données personnelles uniquement aussi longtemps que nécessaire aux fins pour lesquelles elles ont été collectées :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Données de contact : 3 ans à compter du dernier contact</li>
                <li>Données de connexion : 13 mois</li>
                <li>Données de facturation : 10 ans (obligation légale)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4" id="cookies">7. Cookies et technologies similaires</h2>
              <p>Mon site utilise des cookies pour :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Faciliter votre navigation</li>
                <li>Mesurer l'audience</li>
                <li>Personnaliser le contenu</li>
              </ul>
              <p className="mt-4">Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités pourraient ne plus être disponibles.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Sécurité des données</h2>
              <p>Je mets en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Vos droits</h2>
              <p>Conformément à la réglementation sur la protection des données, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement (droit à l'oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition</li>
                <li>Définir des directives relatives au sort de vos données après votre décès</li>
              </ul>
              <p className="mt-4">Pour exercer ces droits, contactez-moi à l'adresse : contact@theo-multimedia.com</p>
              <p className="mt-2">Vous avez également le droit d'introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a></p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Modifications de la politique de confidentialité</h2>
              <p>Je me réserve le droit de modifier cette politique de confidentialité à tout moment. Je vous conseille de la consulter régulièrement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact</h2>
              <p>Pour toute question concernant cette politique de confidentialité, vous pouvez me contacter :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Par email : <a href="mailto:contact@theo-multimedia.com" className="text-accent hover:underline">contact@theo-multimedia.com</a></li>
                <li>Par courrier : 16000 Angoulême, France</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PolitiqueConfidentialite;

export async function getServerSideProps({ req }) {
  const { getSiteUrlFromHeaders } = await import('../lib/siteUrl')
  const baseUrl = getSiteUrlFromHeaders(req)
  return { props: { baseUrl } }
}
