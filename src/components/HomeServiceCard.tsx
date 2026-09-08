import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export type HomeService = {
  title: string;
  lead: string;
  body: string;
  to: string;
  tags: string[];
  tone: string;
  video: string;
  poster: string;
};

export function HomeServiceCard({ service, paused }: { service: HomeService; paused: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const base = import.meta.env.BASE_URL;
  const id = `home-service-${service.to.split('/').pop()}`;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      setReducedMotion(media.matches);
    };
    update();
    media.addEventListener('change', update);
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold: 0.2 });
    if (video.current) observer.observe(video.current);
    return () => {
      media.removeEventListener('change', update);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    if (!inView || paused || reducedMotion) {
      element.pause();
      return;
    }
    if (!element.getAttribute('src')) element.src = `${base}${service.video}`;
    element.muted = true;
    element.play().catch(() => { /* Keep the poster if playback is unavailable. */ });
  }, [inView, reducedMotion, paused, service.video, base]);

  return (
    <article className={`dm-service-card dm-tone-${service.tone}`} data-reveal>
      <Link to={service.to} className="dm-service-card-main" aria-labelledby={`${id}-name ${id}-heading`}>
        <div className="dm-service-visual">
          <video
            ref={video}
            className="dm-service-video"
            poster={`${base}${service.poster}`}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          />
        </div>
        <p className="dm-service-name" id={`${id}-name`}>{service.title}</p>
        <h3 id={`${id}-heading`}>{service.lead}</h3>
        <p className="dm-service-description">{service.body}</p>
        <div className="dm-service-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <span className="dm-service-link">Explore {service.title}<ArrowRight size={16} /></span>
      </Link>

    </article>
  );
}
