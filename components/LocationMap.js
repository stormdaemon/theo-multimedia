import { business } from '../lib/business';

// Coordonnées de Cognac (secteur commercial principal). Mapbox attend lon,lat.
const LON = -0.329;
const LAT = 45.6959;
const ZOOM = 11;

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${LAT},${LON}`;

const LocationMap = () => {
  const staticImageUrl = MAPBOX_TOKEN
    ? `https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/pin-l+ff5a00(${LON},${LAT})/${LON},${LAT},${ZOOM},0/720x360@2x?access_token=${MAPBOX_TOKEN}`
    : null;

  return (
    <section className="px-6 py-6">
      <div className="mx-auto max-w-4xl">
        <a
          href={externalMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tm-glass-soft group block overflow-hidden rounded-2xl"
          aria-label={`Ouvrir la localisation de ${business.brandName} (${business.baseArea}) dans une carte`}
        >
          {staticImageUrl ? (
            <img
              src={staticImageUrl}
              alt={`Carte de localisation : ${business.baseArea}`}
              width="720"
              height="360"
              loading="lazy"
              className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] md:h-72"
            />
          ) : (
            <div className="flex h-56 w-full items-center justify-center bg-gradient-to-br from-accent/15 to-background md:h-72">
              <span className="text-sm font-medium text-slate-300">Voir la zone sur la carte</span>
            </div>
          )}
          <div className="flex items-center justify-between gap-3 px-5 py-4">
            <span className="flex items-center gap-2 text-sm font-bold text-white">
              <img src="/assets/icon-footer-location-orange.webp" alt="" className="h-4 w-4 object-contain" />
              {business.baseArea}
            </span>
            <span className="text-xs font-bold text-accent transition-colors group-hover:text-white">
              Ouvrir la carte →
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default LocationMap;
