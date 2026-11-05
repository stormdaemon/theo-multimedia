import Link from 'next/link';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { business, fullAddress } from '../lib/business';

const PATH = '/politique-confidentialite';
const UPDATED = '2026-11-05';
const crumbs = [
  ['Accueil', '/'],
  ['Politique de confidentialité', PATH],
];

function Fact({ term, children }) {
  return (
    <div>
      <dt>{term}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (nouvel onglet)</span>
    </a>
  );
}

export default function PolitiqueConfidentialite() {
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
        title="Politique de confidentialité"
        description={`Politique de confidentialité de ${business.brandName} : données du formulaire de contact, hébergement Netlify, aucun cookie ni mesure d’audience, vos droits RGPD.`}
        path={PATH}
        crumbs={crumbs}
        dateModified={UPDATED}
      />
      <PageHero
        eyebrow="Informations légales"
        title="Politique de confidentialité"
        lede="Peu de données, aucun cookie, aucun suivi publicitaire : voici ce que deviennent les informations que vous me confiez."
        crumbs={crumbs}
      />

      <section className="section">
        <div className="container">
          <div className="legal">
            <p>
              Dernière mise à jour : <time dateTime={UPDATED}>5 novembre 2026</time>
            </p>
            <p>
              Chez {business.brandName}, je m’engage à protéger et à respecter votre vie privée. Cette politique de
              confidentialité explique quelles données personnelles sont traitées lorsque vous utilisez ce site, dans
              quel but, par qui et pendant combien de temps, ainsi que les droits dont vous disposez.
            </p>
            <p className="note">
              En bref : ce site ne dépose aucun cookie et ne mesure pas l’audience. Les seules données personnelles
              qu’il traite sont celles que vous envoyez par le formulaire de contact et les données techniques de
              connexion enregistrées par l’hébergeur.
            </p>

            <h2>1. Responsable du traitement</h2>
            <p>Le responsable du traitement des données est :</p>
            <dl>
              <Fact term="Responsable">
                {business.legalName}, {business.legalForm.toLowerCase()} exerçant sous le nom {business.brandName}
              </Fact>
              <Fact term="Adresse">{fullAddress}, France</Fact>
              <Fact term="Téléphone">{phone}</Fact>
              <Fact term="N° SIRET">{business.siret}</Fact>
              <Fact term="Demandes écrites">Par le {contactForm} ou par courrier à l’adresse ci-dessus</Fact>
            </dl>

            <h2>2. Données personnelles collectées</h2>
            <p>Je peux collecter et traiter les données suivantes :</p>
            <ul>
              <li>
                les informations que vous saisissez dans le formulaire de contact : vos coordonnées (nom, prénom,
                adresse e-mail, numéro de téléphone), votre message et toute autre information que vous choisissez de me
                transmettre ;
              </li>
              <li>
                les données techniques de connexion enregistrées par l’hébergeur lors de votre visite (adresse IP, date
                et heure, page demandée, type de navigateur) ;
              </li>
              <li>
                si vous devenez client, les informations nécessaires au devis, à la réalisation de la prestation et à la
                facturation.
              </li>
            </ul>
            <p>
              Le site ne propose pas de compte utilisateur et ne collecte aucune donnée de navigation ou d’audience.
            </p>

            <h2>3. Finalités du traitement</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul>
              <li>répondre à vos demandes d’information et de devis ;</li>
              <li>vous fournir les services demandés et assurer le suivi de notre relation ;</li>
              <li>assurer le fonctionnement et la sécurité du site ;</li>
              <li>respecter mes obligations légales et réglementaires.</li>
            </ul>
            <p>Elles ne sont jamais utilisées à des fins publicitaires.</p>

            <h2>4. Base légale du traitement</h2>
            <p>Le traitement de vos données est fondé sur :</p>
            <ul>
              <li>
                l’exécution d’un contrat, ou de mesures précontractuelles prises à votre demande comme l’établissement
                d’un devis ;
              </li>
              <li>
                mon intérêt légitime à répondre à vos messages et à assurer le bon fonctionnement et la sécurité du site
                ;
              </li>
              <li>le respect d’obligations légales, notamment en matière de facturation et de comptabilité.</li>
            </ul>

            <h2>5. Destinataires des données</h2>
            <p>Vos données me sont destinées. Elles peuvent être transmises à :</p>
            <ul>
              <li>
                <strong>Netlify, Inc.</strong>, hébergeur du site, établi à San Francisco (États-Unis), qui enregistre
                les données techniques de connexion (
                <ExternalLink href="https://www.netlify.com/privacy/">
                  politique de confidentialité de Netlify
                </ExternalLink>
                ) ;
              </li>
              <li>
                <strong>Formspree</strong> (formspree.io), qui reçoit les messages envoyés depuis le formulaire de
                contact et me les transmet (
                <ExternalLink href="https://formspree.io/legal/privacy-policy">
                  politique de confidentialité de Formspree
                </ExternalLink>
                ) ;
              </li>
              <li>les autorités compétentes, uniquement en cas d’obligation légale ;</li>
              <li>d’autres tiers, uniquement avec votre consentement explicite.</li>
            </ul>
            <p>Je m’assure que ces prestataires appliquent des mesures de sécurité appropriées.</p>
            <p>
              La société Netlify, Inc. est établie aux États-Unis et Formspree indique traiter les informations qu’il
              reçoit aux États-Unis : vos données peuvent donc être transférées hors de l’Union européenne. Les
              politiques de confidentialité de ces prestataires décrivent les garanties qu’ils appliquent à ces
              transferts.
            </p>

            <h2>6. Durée de conservation</h2>
            <p>
              Je conserve vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles elles
              ont été collectées :
            </p>
            <ul>
              <li>messages et données de contact : 3 ans à compter du dernier contact ;</li>
              <li>données de facturation : 10 ans (obligation légale) ;</li>
              <li>
                données techniques de connexion : conservées par l’hébergeur, selon les durées prévues par sa politique
                de confidentialité.
              </li>
            </ul>

            <h2 id="cookies">7. Cookies, traceurs et services tiers</h2>
            <p>
              Ce site ne dépose aucun cookie et n’utilise aucun autre traceur : pas d’outil de mesure d’audience, pas de
              publicité, pas de bouton ni de module de réseau social. C’est pourquoi aucun bandeau de consentement ne
              s’affiche.
            </p>
            <p>
              Lorsque vous consultez une page, votre navigateur ne contacte que l’hébergeur du site : les polices de
              caractères sont hébergées avec le site (aucune requête vers Google Fonts) et le site n’intègre ni carte,
              ni vidéo, ni contenu provenant d’un service tiers. Le formulaire de contact ne contacte Formspree qu’au
              moment où vous l’envoyez.
            </p>
            <p>
              Certains liens mènent vers des services tiers, comme Google Maps pour l’itinéraire ou les sites de mes
              clients. Ces services ne reçoivent des informations que si vous cliquez sur le lien, et leur propre
              politique de confidentialité s’applique alors.
            </p>

            <h2>8. Sécurité des données</h2>
            <p>
              Je mets en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre
              tout accès non autorisé, altération, divulgation ou destruction. Le site est servi exclusivement en HTTPS
              : les échanges entre votre navigateur, le site et le formulaire de contact sont chiffrés.
            </p>

            <h2>9. Vos droits</h2>
            <p>Conformément à la réglementation sur la protection des données, vous disposez des droits suivants :</p>
            <ul>
              <li>droit d’accès à vos données ;</li>
              <li>droit de rectification ;</li>
              <li>droit à l’effacement (droit à l’oubli) ;</li>
              <li>droit à la limitation du traitement ;</li>
              <li>droit à la portabilité des données ;</li>
              <li>droit d’opposition ;</li>
              <li>droit de définir des directives relatives au sort de vos données après votre décès.</li>
            </ul>
            <p>
              Pour exercer ces droits, écrivez-moi via le {contactForm} ou par courrier à l’adresse : {fullAddress},
              France.
            </p>
            <p>
              Vous avez également le droit d’introduire une réclamation auprès de la CNIL (Commission nationale de
              l’informatique et des libertés) : <ExternalLink href="https://www.cnil.fr">www.cnil.fr</ExternalLink>.
            </p>

            <h2>10. Modifications de la politique de confidentialité</h2>
            <p>
              Je me réserve le droit de modifier cette politique de confidentialité à tout moment. Je vous conseille de
              la consulter régulièrement.
            </p>

            <h2>11. Contact</h2>
            <p>Pour toute question concernant cette politique de confidentialité, vous pouvez me contacter :</p>
            <ul>
              <li>par le {contactForm} ;</li>
              <li>par téléphone au {phone} ;</li>
              <li>par courrier : {fullAddress}, France.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
