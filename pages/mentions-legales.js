import Link from 'next/link';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { business, fullAddress } from '../lib/business';

const PATH = '/mentions-legales';
const UPDATED = '2026-11-05';
const crumbs = [
  ['Accueil', '/'],
  ['Mentions légales', PATH],
];

// Hosting provider, as published on netlify.com (privacy policy and terms of use), checked on 2026-11-05.
const host = {
  name: 'Netlify, Inc.',
  address: '101 2nd Street, San Francisco, CA 94105, États-Unis',
  url: 'https://www.netlify.com',
  label: 'www.netlify.com',
};

const siteHost = business.siteUrl.replace(/^https?:\/\//, '');

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

export default function MentionsLegales() {
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
        title="Mentions légales"
        description={`Mentions légales du site ${business.brandName} : éditeur (${business.legalName}, ${business.legalForm.toLowerCase()} à ${business.legalAddress.city}), SIRET, directeur de la publication, hébergeur et contact.`}
        path={PATH}
        crumbs={crumbs}
        dateModified={UPDATED}
      />
      <PageHero
        eyebrow="Informations légales"
        title="Mentions légales"
        lede="Qui édite ce site, qui l’héberge et comment me joindre."
        crumbs={crumbs}
      />

      <section className="section">
        <div className="container">
          <div className="legal">
            <p>
              Dernière mise à jour : <time dateTime={UPDATED}>5 novembre 2026</time>
            </p>

            <h2>1. Éditeur du site</h2>
            <p>
              J’édite le site <strong>{siteHost}</strong> :
            </p>
            <dl>
              <Fact term="Éditeur">
                {business.legalName}, exerçant sous le nom {business.brandName}
              </Fact>
              <Fact term="Forme juridique">{business.legalForm}</Fact>
              <Fact term="N° SIRET">{business.siret}</Fact>
              <Fact term="N° TVA intracommunautaire">{business.vatNumber}</Fact>
              <Fact term="Code APE">{business.apeCode}</Fact>
              <Fact term="Adresse">{fullAddress}, France</Fact>
              <Fact term="Téléphone">{phone}</Fact>
              <Fact term="Demandes écrites">Par le {contactForm} ou par courrier à l’adresse ci-dessus</Fact>
            </dl>

            <h2>2. Directeur de la publication</h2>
            <p>Je suis le directeur de la publication : {business.founder}.</p>

            <h2>3. Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <dl>
              <Fact term="Hébergeur">{host.name}</Fact>
              <Fact term="Adresse">{host.address}</Fact>
              <Fact term="Site web">
                <ExternalLink href={host.url}>{host.label}</ExternalLink>
              </Fact>
            </dl>

            <h2>4. Propriété intellectuelle</h2>
            <p>
              L’ensemble des éléments qui composent ce site (textes, images, vidéos, logos, etc.) est ma propriété
              exclusive ou fait l’objet d’une autorisation d’utilisation. Toute reproduction, représentation,
              modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou
              le procédé utilisé, est interdite sans mon autorisation écrite préalable.
            </p>

            <h2>5. Données personnelles</h2>
            <p>
              Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement général sur la
              protection des données (RGPD), vous disposez d’un droit d’accès, de rectification, de suppression et
              d’opposition aux données vous concernant. Pour exercer ces droits, écrivez-moi via le {contactForm} ou par
              courrier à l’adresse indiquée ci-dessus.
            </p>
            <p>
              Les messages envoyés depuis le formulaire de contact sont acheminés par le service Formspree. Pour savoir
              comment je traite vos données, consultez la{' '}
              <Link href="/politique-confidentialite" className="text-link">
                politique de confidentialité
              </Link>
              .
            </p>

            <h2>6. Cookies</h2>
            <p>
              Ce site ne dépose aucun cookie et n’utilise aucun outil de mesure d’audience ni de publicité. Le détail
              figure dans la{' '}
              <Link href="/politique-confidentialite#cookies" className="text-link">
                politique de confidentialité
              </Link>
              .
            </p>

            <h2>7. Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français
              seront seuls compétents.
            </p>

            <h2>8. Contact</h2>
            <p>
              Pour toute question ou demande d’information concernant le site, ou pour signaler un contenu ou une
              activité illicite, contactez-moi :
            </p>
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
