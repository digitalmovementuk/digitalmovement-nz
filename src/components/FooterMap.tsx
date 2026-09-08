import { useEffect, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { ADDRESS_LINE, POSTAL_ADDRESS } from "../seo";

/**
 * The map card in the footer. Twin of the one on digitalmovement.eu.
 *
 * Two states, one click between them:
 *
 *   1. From the first paint, a real map of the address — a still stitched
 *      from OpenStreetMap tiles and served from OUR host. No connection to
 *      anyone else's server is made to show it.
 *   2. After a click on "Load Google Maps", the live, draggable Google map
 *      takes the same spot.
 *
 * Why not Google straight away: an embedded Google map loads Google's
 * scripts and sends the visitor's IP address to Google before they have
 * done anything. The privacy page says we run no third-party trackers
 * beyond Analytics; a map that phones home on load would make that line
 * untrue. The click is the visitor's say-so — and it keeps ~1 MB of map
 * JavaScript off a page whose job is the enquiry form above it.
 *
 * The OpenStreetMap credit bottom-right is the ODbL licence condition for
 * using their tiles, not a courtesy. It stays.
 */

/** Remember the choice for the visit, so it is not asked again on every page. */
const CONSENT_KEY = "dm-maps";

/* Google's own embed address for this street address. No API key, no
   billing, no watermark. */
const EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m3!2m1!1s139+Quay+Street%2C+Auckland+1010%2C+New+Zealand!6i16";

/** Directions — opens Google Maps in a new tab, so only on request. */
const ROUTE_HREF =
  "https://www.google.com/maps/dir/?api=1&destination=139+Quay+Street%2C+Auckland+1010%2C+New+Zealand";

export function FooterMap() {
  const [live, setLive] = useState(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(CONSENT_KEY) === "1") setLive(true);
    } catch {
      /* Storage blocked: then it is one click per page view. */
    }
  }, []);

  function loadMap() {
    setLive(true);
    try {
      window.sessionStorage.setItem(CONSENT_KEY, "1");
    } catch {
      /* see above */
    }
  }

  const base = import.meta.env.BASE_URL;

  return (
    <section aria-labelledby="footer-map-heading" className="mt-14 sm:mt-16">
      <div className="grid overflow-hidden rounded-card-lg border border-ink/10 bg-white shadow-card lg:grid-cols-[300px_minmax(0,1fr)]">
        {/* Address */}
        <div className="flex flex-col justify-center gap-4 p-7 text-center sm:p-8 lg:text-left">
          <p
            id="footer-map-heading"
            className="text-[10.5px] font-bold uppercase tracking-[0.20em] text-ink-muted"
          >
            Where to find us
          </p>
          <p className="text-[17px] font-bold leading-snug text-ink">
            {POSTAL_ADDRESS.streetAddress}
            <br />
            {POSTAL_ADDRESS.addressLocality} {POSTAL_ADDRESS.postalCode}
          </p>
          <a
            href={ROUTE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:text-ink-soft lg:justify-start"
          >
            Plan a route <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Map */}
        <div className="relative min-h-[260px] bg-surface-2 sm:min-h-[300px] lg:min-h-[340px]">
          {live ? (
            <iframe
              src={EMBED_SRC}
              title={`Map: ${ADDRESS_LINE}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <>
              {/* 800 px is plenty on a phone: 36 KB instead of 138 KB. The
                  map column is ~900 px wide on desktop (grid `300px + rest`),
                  hence that figure in `sizes`. */}
              <picture className="contents">
                <source
                  type="image/webp"
                  sizes="(min-width: 1024px) 900px, 100vw"
                  srcSet={`${base}brand/map-139-quay-street-800.webp 800w, ${base}brand/map-139-quay-street-1600.webp 1600w`}
                />
                <img
                  src={`${base}brand/map-139-quay-street.jpg`}
                  srcSet={`${base}brand/map-139-quay-street-800.jpg 800w, ${base}brand/map-139-quay-street.jpg 1600w`}
                  sizes="(min-width: 1024px) 900px, 100vw"
                  alt={`Map showing ${ADDRESS_LINE}`}
                  width="1600"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>

              {/* The address itself — the centre of the image is the pin. */}
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-full items-center justify-center rounded-full bg-dm-hot-magenta text-white shadow-[0_8px_20px_-6px_rgba(27,14,46,0.55)] ring-4 ring-white/85"
              >
                <MapPin size={17} strokeWidth={2.4} />
              </span>

              {/* Darken only the bottom: the map is the thing being shown and
                  should stay light and legible. The gradient just carries
                  the button and the note. */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-plum-2/90 via-plum-2/55 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 px-5 pb-4 pt-8 text-center">
                <button
                  type="button"
                  onClick={loadMap}
                  className="rounded-pill bg-white px-6 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-ink shadow-card transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Load Google Maps
                </button>
                <p className="max-w-[42ch] text-[11.5px] leading-relaxed text-white/85">
                  Only then is a connection to Google made and your IP address sent to them.
                </p>
                <p className="text-[9.5px] text-white/60">Map © OpenStreetMap contributors</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
