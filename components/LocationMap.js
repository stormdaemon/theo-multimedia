import { useEffect, useRef } from 'react';
import { business } from '../lib/business';

// Coordonnées de Cognac (secteur commercial principal). Mapbox attend [lon, lat].
const LON = -0.329;
const LAT = 45.6959;
const ZOOM = 11;

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const LocationMap = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!MAPBOX_TOKEN || !containerRef.current) return undefined;

    let map;
    let cancelled = false;

    (async () => {
      const mapboxgl = (await import('mapbox-gl')).default;
      if (cancelled || !containerRef.current) return;

      mapboxgl.accessToken = MAPBOX_TOKEN;
      map = new mapboxgl.Map({
        container: containerRef.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [LON, LAT],
        zoom: ZOOM,
        cooperativeGestures: true,
      });
      map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');
      new mapboxgl.Marker({ color: '#ff5a00' }).setLngLat([LON, LAT]).addTo(map);
    })();

    return () => {
      cancelled = true;
      if (map) map.remove();
    };
  }, []);

  return (
    <section className="px-6 py-6">
      <div className="mx-auto max-w-4xl">
        <div className="tm-glass-soft overflow-hidden rounded-2xl">
          {MAPBOX_TOKEN ? (
            <div
              ref={containerRef}
              className="tm-map h-64 w-full md:h-80"
              role="img"
              aria-label={`Carte de localisation : ${business.baseArea}`}
            />
          ) : (
            <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-accent/15 to-background md:h-80">
              <span className="text-sm font-medium text-slate-300">Carte indisponible</span>
            </div>
          )}
          <div className="flex items-center gap-2 px-5 py-4 text-sm font-bold text-white">
            <img src="/assets/icon-footer-location-orange.webp" alt="" className="h-4 w-4 object-contain" />
            {business.baseArea}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
