import { ArrowUpRight, Star } from 'lucide-react';
import '../styles/google-review-badge.css';

// Rating checked on the Australian business's Google Maps listing, 8 September 2026.
// The logged-out listing does not expose a review count, so none is claimed here.
export const GOOGLE_REVIEW_URL = 'https://www.google.com/maps/search/?api=1&query=Digital%20Movement&query_place_id=ChIJuTdQJjZp1moR_AEpV_uVCp8';

export function GoogleReviewStars() {
  return (
    <a
      className="dm-google-review-stars"
      href={GOOGLE_REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="5 out of 5 on Google. Read reviews for Digital Movement Australia (opens in a new tab)"
    >
      <img
        src={`${import.meta.env.BASE_URL}brand/google-g.png`}
        width="20"
        height="20"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <span className="dm-google-review-stars__icons" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={12} fill="currentColor" strokeWidth={0} />)}
      </span>
    </a>
  );
}

export function GoogleReviewBadge() {
  return (
    <a
      className="dm-google-review-badge"
      href={GOOGLE_REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Read Google reviews for Digital Movement Australia, rated 5.0 out of 5 (opens in a new tab)"
      data-reveal
    >
      <span className="dm-google-review-badge__rating">
        <img
          className="dm-google-review-badge__logo"
          src={`${import.meta.env.BASE_URL}brand/google-g.png`}
          width="28"
          height="28"
          alt=""
          loading="lazy"
          decoding="async"
        />
        <span className="dm-google-review-badge__score">
          <strong>5.0 <span>on Google</span></strong>
          <span className="dm-google-review-badge__stars" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={14} fill="currentColor" strokeWidth={0} />)}
          </span>
        </span>
      </span>
      <span className="dm-google-review-badge__business">Digital Movement Australia</span>
      <span className="dm-google-review-badge__link">Read Google reviews <ArrowUpRight size={15} aria-hidden="true" /></span>
    </a>
  );
}
