import Link from 'next/link';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { business, fullAddress } from '../lib/business';

const PATH = '/cgv';
const UPDATED = '2026-11-05';
const crumbs = [
  ['Accueil', '/'],
  ['Conditions générales de vente', PATH],
];

function Fact({ term, children }) {
  return (
    <div>
      <dt>{term}</dt>
      <dd>{children}</dd>
    </div>
  );
}

export default function CGV() {
  const contactForm = (
    <Link href="/contact" className="text-link">
      formulaire de contact
    </Link>
  );
  const phone = (
    <a className="text-link" href={`tel:${business.phoneE164}`}>
      {business.phone}
    </a>
  );

  return (
    <>
      <SEO
        title="Conditions générales de vente (CGV)"
        description={`Conditions générales de vente de ${business.brandName} : devis, commande, paiement, délais, propriété intellectuelle, Préversion express 24 h et règlement des litiges.`}
        path={PATH}
        crumbs={crumbs}
        dateModified={UPDATED}
      />
      <PageHero
        eyebrow="Informations légales"
        title="Conditions générales de vente"
        lede="Les règles qui encadrent mes prestations, du devis à la livraison."
        crumbs={crumbs}
      />

      <section className="section">
        <div className="container">
          <div className="legal">
            <p>
              Dernière mise à jour : <time dateTime={UPDATED}>5 novembre 2026</time>
            </p>

            <h2>Article 1 – Objet</h2>
            <p>
              Les présentes conditions générales de vente (CGV) définissent les conditions dans lesquelles{' '}
              {business.legalName}, {business.legalForm.toLowerCase()} exerçant sous le nom {business.brandName}{' '}
              (ci-après «&nbsp;le Prestataire&nbsp;» ou «&nbsp;je&nbsp;»), propose ses prestations à ses clients
              (ci-après «&nbsp;le Client&nbsp;» ou «&nbsp;vous&nbsp;»).
            </p>
            <p>
              Toute commande implique l’adhésion sans réserve du Client aux présentes conditions générales de vente.
            </p>

            <h2>Article 2 – Identification du Prestataire</h2>
            <dl>
              <Fact term="Prestataire">
                {business.legalName}, exerçant sous le nom {business.brandName}
              </Fact>
              <Fact term="Forme juridique">{business.legalForm}</Fact>
              <Fact term="N° SIRET">{business.siret}</Fact>
              <Fact term="N° TVA intracommunautaire">{business.vatNumber}</Fact>
              <Fact term="Adresse">{fullAddress}, France</Fact>
              <Fact term="Téléphone">{phone}</Fact>
              <Fact term="Demandes écrites">Par le {contactForm} ou par courrier à l’adresse ci-dessus</Fact>
            </dl>

            <h2>Article 3 – Description des prestations</h2>
            <p>
              Je propose des prestations de création et de refonte de sites internet, de développement web et d’outils
              sur mesure (e-commerce, CRM, plateformes de formation), de référencement naturel et local, de GEO
              (visibilité dans les réponses des intelligences artificielles), de maintenance et de conseil en
              communication digitale. Les caractéristiques essentielles de mes prestations sont décrites sur ce site,
              notamment sur la page{' '}
              <Link href="/services" className="text-link">
                Services
              </Link>
              , et précisées dans chaque devis.
            </p>
            <p className="note">
              La{' '}
              <Link href="/preversion-express-24h" className="text-link">
                Préversion express 24 h
              </Link>{' '}
              est une première version rapide du site, publiée pour répondre à une urgence ou pour lancer plus tôt
              l’indexation par les moteurs de recherche. Ce n’est ni un site fini ni un site définitif : elle est
              ensuite enrichie puis finalisée, selon ce que prévoit le devis. Le délai de 24 h suppose un périmètre
              court et des contenus fournis dès le démarrage ; à défaut, un délai réaliste est fixé ensemble.
            </p>
            <p>
              Je me réserve le droit de modifier mes prestations à tout moment, étant entendu que les commandes en cours
              seront honorées sur la base des conditions en vigueur au moment de la commande.
            </p>

            <h2>Article 4 – Tarifs</h2>
            <p>
              Mes prix sont indiqués dans le devis, en euros toutes taxes comprises (TVA en vigueur). Ils sont fermes et
              non révisables pendant leur période de validité. Je me réserve le droit de modifier mes prix à tout
              moment, étant entendu que les prestations sont facturées sur la base des tarifs en vigueur au moment de
              l’enregistrement de la commande.
            </p>

            <h2>Article 5 – Commande</h2>
            <p>
              Pour passer commande, adressez-moi votre demande via le {contactForm} ou par téléphone. Après étude de
              votre demande, je vous adresse un devis détaillé.
            </p>
            <p>
              La commande n’est considérée comme ferme qu’après réception d’un acompte de 30 % du montant total de la
              prestation et signature du devis par vos soins.
            </p>

            <h2>Article 6 – Modalités de paiement</h2>
            <p>Le paiement s’effectue selon les modalités suivantes :</p>
            <ul>
              <li>30 % à la commande (acompte) ;</li>
              <li>40 % à la validation des maquettes ;</li>
              <li>30 % à la livraison finale.</li>
            </ul>
            <p>
              Vous pouvez régler par virement bancaire ou par carte bancaire via une plateforme de paiement sécurisée.
            </p>
            <p>
              <strong>
                En cas de retard de paiement, j’appliquerai une pénalité égale à trois fois le taux d’intérêt légal.
              </strong>
            </p>

            <h2>Article 7 – Délais de réalisation</h2>
            <p>
              J’indique les délais de réalisation à titre indicatif dans le devis. Ils deviennent contractuels après
              validation du cahier des charges définitif et réception de tous les éléments nécessaires à la réalisation
              de la prestation.
            </p>
            <p>
              En cas de retard de votre part (retard dans la fourniture des éléments, validations tardives, etc.), les
              délais sont automatiquement prolongés.
            </p>

            <h2>Article 8 – Droit de rétractation</h2>
            <p>
              Conformément à l’article L. 221-28 du Code de la consommation, le droit de rétractation ne peut être
              exercé pour les contrats de fourniture de services pleinement exécutés avant la fin du délai de
              rétractation et dont l’exécution a commencé après accord préalable exprès du consommateur et renoncement
              exprès à son droit de rétractation.
            </p>

            <h2>Article 9 – Propriété intellectuelle</h2>
            <p>
              Les éléments graphiques, chartes graphiques, maquettes, développements spécifiques, etc. restent ma
              propriété exclusive jusqu’au paiement intégral du prix convenu.
            </p>
            <p>
              Après règlement complet, je vous cède les droits de propriété intellectuelle sur les créations, à
              l’exception des logiciels, bibliothèques et autres outils préexistants ou sous licence dont je reste
              propriétaire ou titulaire des droits d’exploitation.
            </p>

            <h2>Article 10 – Hébergement et nom de domaine</h2>
            <p>
              L’hébergement du site n’est pas inclus dans mes prestations. Vous êtes libre de choisir votre hébergeur.
              Je peux recommander des solutions d’hébergement, mais je ne saurais être tenu responsable des problèmes
              liés à l’hébergeur choisi.
            </p>
            <p>
              Le nom de domaine est à votre charge et vous en êtes le propriétaire. Je vous recommande de le réserver
              pour une durée minimale de 5 ans.
            </p>

            <h2>Article 11 – Maintenance et mises à jour</h2>
            <p>
              La maintenance corrective et évolutive n’est pas incluse dans le prix de la prestation initiale. Elle fait
              l’objet d’un devis séparé si vous le souhaitez.
            </p>
            <p>
              Je peux vous proposer des contrats de maintenance annuels couvrant les mises à jour de sécurité et les
              corrections de bugs majeurs.
            </p>

            <h2>Article 12 – Responsabilité</h2>
            <p>
              Dans les limites autorisées par la loi, le Prestataire ne pourra être tenu pour responsable des dommages
              directs ou indirects qui pourraient survenir du fait de l’utilisation du site internet, et notamment d’une
              perte de bénéfices, de clientèle, de données ou de toute autre perte de biens incorporels pouvant survenir
              à raison de l’accès au site, de l’utilisation du site ou, inversement, de l’impossibilité d’y accéder.
            </p>
            <p>
              Le Client est seul responsable du contenu qu’il fournit et garantit le Prestataire contre tout recours de
              tiers lié à ce contenu.
            </p>

            <h2>Article 13 – Données personnelles</h2>
            <p>
              Les données personnelles collectées sont traitées conformément à la{' '}
              <Link href="/politique-confidentialite" className="text-link">
                politique de confidentialité
              </Link>
              .
            </p>

            <h2>Article 14 – Résiliation</h2>
            <p>
              En cas de manquement par l’une des parties à ses obligations, le contrat pourra être résilié de plein
              droit après mise en demeure restée sans effet dans un délai de 15 jours.
            </p>
            <p>
              En cas de résiliation à l’initiative du Client, les sommes versées à titre d’acompte restent acquises au
              Prestataire à titre de dédommagement.
            </p>

            <h2>Article 15 – Droit applicable et règlement des litiges</h2>
            <p>
              Les présentes conditions générales de vente sont soumises au droit français. En cas de litige, les
              tribunaux français seront seuls compétents.
            </p>
            <p>
              Conformément aux articles L. 612-1 et suivants du Code de la consommation, tout consommateur a la
              possibilité de recourir gratuitement à un médiateur de la consommation pour la résolution amiable de tout
              litige relatif à l’exécution des présentes conditions générales de vente.
            </p>

            <h2>Article 16 – Acceptation des conditions</h2>
            <p>
              Le fait de passer commande implique l’acceptation pleine et entière des présentes conditions générales de
              vente.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
