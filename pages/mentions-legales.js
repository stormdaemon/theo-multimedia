import { motion } from 'framer-motion';
import Head from 'next/head';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Mentions Légales | Théo Multimédia - Informations Légales</title>
        <meta name="description" content="Mentions légales de Théo Multimédia. Informations légales, éditeur du site, hébergement et conditions d'utilisation de nos services web à Angoulême." />

        <meta name="author" content="Théo LAFONT" />
        <meta property="og:title" content="Mentions légales | Théo Multimédia" />
        <meta property="og:description" content="Consultez les mentions légales du site Théo Multimédia : éditeur, hébergeur, droits et responsabilités." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.theomultimedia.com/mentions-legales" />
        <meta property="og:image" content="https://www.theomultimedia.com/og-legal.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mentions légales | Théo Multimédia" />
        <meta name="twitter:description" content="Mentions légales du site Théo Multimédia : éditeur, hébergeur, propriété intellectuelle, responsabilités." />
        <meta name="twitter:image" content="https://www.theomultimedia.com/og-legal.jpg" />
        <meta name="ai-summary" content="Mentions légales du site Théo Multimédia : informations éditeur, hébergeur, droits, responsabilités et conditions d'utilisation." />
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Mentions légales Théo Multimédia",
          "author": {
            "@type": "Person",
            "name": "Théo LAFONT"
          },
          "description": "Mentions légales du site Théo Multimédia : informations éditeur, hébergeur, droits, responsabilités et conditions d'utilisation.",
          "inLanguage": "fr-FR"
        }
        `}</script>
      </Head>

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Mentions Légales</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Éditeur du site</h2>
              <p>J'édite le site internet <strong>www.theo-multimedia.com</strong> :</p>
              <address className="not-italic mt-4 space-y-1">
                <p>Monsieur Théo LAFONT</p>
                <p>Entreprise individuelle</p>
                <p>N° SIRET : 884 758 970 00039</p>
                <p>N° TVA intracommunautaire : FR59884758970</p>
                <p>Code APE : 4791B - Vente à distance sur catalogue spécialisé</p>
                <p>16000 Angoulême, France</p>
                <p>Email : contact@theo-multimedia.com</p>
                <p>Téléphone : +33 7 68 51 95 68</p>
              </address>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Directeur de la publication</h2>
              <p>Je suis le directeur de la publication : Monsieur Théo LAFONT.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Hébergement</h2>
              <p>J'héberge ce site chez :</p>
              <address className="not-italic mt-2">
                <p>O2SWITCH</p>
                <p>Chem. des Pardiaux 63000 Clermont-Ferrand</p>
                <p>Site web : <a href="https://www.o2switch.fr/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">www.o2switch.fr</a></p>
              </address>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Propriété intellectuelle</h2>
              <p>L'ensemble des éléments constituant ce site (textes, images, vidéos, logos, etc.) sont ma propriété exclusive ou font l'objet d'une autorisation d'utilisation. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans mon autorisation écrite préalable.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Données personnelles</h2>
              <p>Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant. Pour exercer ce droit, vous pouvez me contacter à l'adresse email : contact@theo-multimedia.com</p>
              <p className="mt-4">Pour plus d'informations sur la manière dont je traite vos données, consultez notre <a href="/politique-confidentialite" className="text-accent hover:underline">Politique de Confidentialité</a>.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies</h2>
              <p>Le site utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur ce site, vous acceptez l'utilisation des cookies conformément à notre politique en la matière. Pour en savoir plus, consultez notre <a href="/politique-confidentialite#cookies" className="text-accent hover:underline">Politique de Cookies</a>.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Droit applicable et juridiction compétente</h2>
              <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact</h2>
              <p>Pour toute question ou demande d'information concernant le site, ou tout signalement de contenu ou d'activités illicites, contactez-moi :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Par email : <a href="mailto:contact@theo-multimedia.com" className="text-accent hover:underline">contact@theo-multimedia.com</a></li>
                <li>Par téléphone : <a href="tel:+33123456789" className="text-accent hover:underline">+33 7 68 51 95 68</a></li>
                <li>Par courrier : 16000 Angoulême, France</li>
              </ul>
            </section>

            <p className="text-sm text-muted-foreground">Dernière mise à jour : 24 juin 2025</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default MentionsLegales;
