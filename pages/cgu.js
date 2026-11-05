import Link from 'next/link';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { business, fullAddress } from '../lib/business';

const PATH = '/cgu';
const UPDATED = '2026-11-05';
const crumbs = [
  ['Accueil', '/'],
  ['Conditions générales d’utilisation', PATH],
];

// Hosting provider, as published on netlify.com (privacy policy and terms of use), checked on 2026-11-05.
const host = {
  name: 'Netlify, Inc.',
  address: '101 2nd Street, San Francisco, CA 94105, États-Unis',
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

export default function CGU() {
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
        title="Conditions générales d’utilisation (CGU)"
        description={`Conditions générales d’utilisation du site ${business.brandName} : accès, propriété intellectuelle, liens, données personnelles, cookies, responsabilité et droit applicable.`}
        path={PATH}
        crumbs={crumbs}
        dateModified={UPDATED}
      />
      <PageHero
        eyebrow="Informations légales"
        title="Conditions générales d’utilisation"
        lede={`Les règles d’utilisation du site ${siteHost}.`}
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
              Les présentes conditions générales d’utilisation (ci-après «&nbsp;CGU&nbsp;») définissent les modalités de
              mise à disposition de mes services sur le site <strong>{siteHost}</strong> (ci-après «&nbsp;le
              Site&nbsp;») et les conditions d’utilisation du Site par l’Utilisateur.
            </p>
            <p>
              Tout accès et/ou utilisation du Site suppose l’acceptation et le respect de l’ensemble des termes des
              présentes CGU et leur acceptation inconditionnelle. Elles constituent donc un contrat entre moi (
              {business.brandName}) et l’Utilisateur.
            </p>

            <h2>Article 2 – Mentions légales</h2>
            <p>J’édite ce site :</p>
            <dl>
              <Fact term="Éditeur">
                {business.legalName}, {business.legalForm.toLowerCase()} exerçant sous le nom {business.brandName}
              </Fact>
              <Fact term="N° SIRET">{business.siret}</Fact>
              <Fact term="N° TVA intracommunautaire">{business.vatNumber}</Fact>
              <Fact term="Adresse">{fullAddress}, France</Fact>
              <Fact term="Téléphone">{phone}</Fact>
              <Fact term="Demandes écrites">Par le {contactForm} ou par courrier à l’adresse ci-dessus</Fact>
              <Fact term="Directeur de la publication">{business.founder}</Fact>
              <Fact term="Hébergeur">
                {host.name}, {host.address}
              </Fact>
            </dl>
            <p>
              L’ensemble des informations légales figure dans les{' '}
              <Link href="/mentions-legales" className="text-link">
                mentions légales
              </Link>
              .
            </p>

            <h2>Article 3 – Définitions</h2>
            <p>La présente clause a pour objet de définir les différents termes essentiels du contrat :</p>
            <ul>
              <li>
                <strong>Site</strong> : désigne le site accessible à l’adresse {business.siteUrl}.
              </li>
              <li>
                <strong>Éditeur</strong> : désigne la personne qui édite et met à disposition le Site, en l’occurrence{' '}
                {business.legalName}, {business.legalForm.toLowerCase()} exerçant sous le nom {business.brandName}.
              </li>
              <li>
                <strong>Utilisateur</strong> : désigne toute personne qui utilise le Site ou l’un des services proposés
                sur le Site.
              </li>
              <li>
                <strong>Contenu Utilisateur</strong> : désigne les données transmises par l’Utilisateur au sein du Site,
                notamment par le formulaire de contact.
              </li>
            </ul>

            <h2>Article 4 – Accès au site</h2>
            <p>
              Le Site est accessible gratuitement à tout Utilisateur disposant d’un accès à Internet. Tous les coûts
              afférents à l’accès au Site et aux services (matériel informatique, logiciel, connexion Internet, etc.)
              sont à la charge de l’Utilisateur.
            </p>
            <p>
              Je m’efforce d’assurer un accès de qualité au Site, mais je ne suis tenu à aucune obligation d’y parvenir.
            </p>
            <p>
              Je ne peux être tenu responsable des dysfonctionnements du réseau ou des serveurs ou de tout autre
              événement échappant à mon contrôle raisonnable, qui empêcherait ou dégraderait l’accès au Site.
            </p>
            <p>
              Je me réserve le droit, sans préavis ni indemnité, de fermer temporairement le Site ou l’accès à un ou
              plusieurs services, notamment pour procéder à des mises à jour, à des modifications de contenu ou à toute
              autre action jugée nécessaire au bon fonctionnement du Site.
            </p>

            <h2>Article 5 – Propriété intellectuelle</h2>
            <p>
              La structure du Site, ainsi que les textes, graphismes, images, photographies, sons, vidéos et
              applications informatiques qui le composent, sont ma propriété et sont protégés comme tels par les lois
              relatives à la propriété intellectuelle.
            </p>
            <p>
              Toute représentation, reproduction, adaptation ou exploitation partielle ou totale des contenus, marques
              et services proposés par le Site, par quelque procédé que ce soit, sans mon autorisation préalable,
              expresse et écrite, est strictement interdite et serait susceptible de constituer une contrefaçon au sens
              des articles L. 335-2 et suivants du Code de la propriété intellectuelle.
            </p>
            <p>
              L’Utilisateur s’engage à ne pas modifier, copier, traduire, reproduire, vendre, publier, exploiter et
              diffuser le Site ou son contenu, en tout ou partie, sous quelque forme et par quelque moyen que ce soit.
            </p>

            <h2>Article 6 – Liens hypertextes</h2>
            <p>
              Le Site peut contenir des liens hypertextes vers d’autres sites internet sur lesquels l’Éditeur n’exerce
              pas de contrôle. Malgré les vérifications préalables et régulières réalisées par l’Éditeur, celui-ci
              décline toute responsabilité quant aux contenus des sites ainsi accessibles.
            </p>
            <p>
              L’Utilisateur s’engage à ne pas mettre en place un lien hypertexte vers le Site sans l’autorisation
              expresse et préalable de l’Éditeur. L’Éditeur se réserve le droit de demander la suppression d’un lien
              s’il estime que le site source ne respecte pas les règles ainsi définies.
            </p>

            <h2>Article 7 – Données personnelles</h2>
            <p>
              Les données personnelles sont traitées conformément à la{' '}
              <Link href="/politique-confidentialite" className="text-link">
                politique de confidentialité
              </Link>
              .
            </p>
            <p>
              Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement général sur la
              protection des données (RGPD), vous disposez d’un droit d’accès, de rectification, de suppression et
              d’opposition aux données vous concernant, que vous pouvez exercer via le {contactForm} ou par courrier.
            </p>

            <h2>Article 8 – Cookies</h2>
            <p>
              Le Site ne dépose aucun cookie et n’utilise aucun autre traceur : pas d’outil de mesure d’audience, pas de
              publicité, pas de module de réseau social.
            </p>
            <p>
              Pour plus d’informations, consultez la{' '}
              <Link href="/politique-confidentialite#cookies" className="text-link">
                politique de confidentialité
              </Link>
              .
            </p>

            <h2>Article 9 – Responsabilité</h2>
            <p>
              L’Utilisateur s’engage à utiliser le Site conformément à la réglementation en vigueur et aux présentes
              CGU.
            </p>
            <p>
              L’Utilisateur est seul responsable des contenus qu’il transmet via le Site, notamment par le formulaire de
              contact. Il s’engage à ne pas transmettre de contenus illicites, diffamatoires, injurieux, racistes,
              xénophobes, à caractère pédophile, pornographiques, contraires aux bonnes mœurs ou portant atteinte à la
              vie privée d’autrui.
            </p>
            <p>
              Dans les limites autorisées par la loi, l’Éditeur ne pourra être tenu pour responsable des dommages
              directs ou indirects qui pourraient survenir du fait de l’utilisation du Site, et notamment d’une perte de
              bénéfices, de clientèle, de données ou de toute autre perte de biens incorporels pouvant survenir à raison
              de l’accès au Site, de son utilisation ou, inversement, de l’impossibilité d’y accéder.
            </p>

            <h2>Article 10 – Évolution des CGU</h2>
            <p>
              Les présentes CGU peuvent être modifiées à tout moment par l’Éditeur. Les nouvelles CGU sont applicables
              immédiatement dès leur mise en ligne. Il est donc conseillé à l’Utilisateur de se référer régulièrement à
              la dernière version des CGU en vigueur.
            </p>

            <h2>Article 11 – Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes CGU sont régies par le droit français. En cas de différend, les tribunaux français seront
              seuls compétents.
            </p>
            <p>
              Pour un litige relatif à une prestation, la possibilité de recourir à un médiateur de la consommation est
              précisée dans les{' '}
              <Link href="/cgv" className="text-link">
                conditions générales de vente
              </Link>
              .
            </p>

            <h2>Article 12 – Contact</h2>
            <p>
              Pour toute question ou demande d’information concernant le Site, ou pour signaler un contenu ou une
              activité illicite, vous pouvez me contacter :
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
