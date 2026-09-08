import { ArrowUpRight, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const founders = [
  {
    name: 'Martey Quaye',
    key: 'martey',
    responsibility: 'Head of Customer Success',
    experience: 'More than 15 years of experience with leading marketing firms. Martey takes time to understand your business, explains your options and helps you choose the right next steps to bring in more enquiries.',
    image: 'martey-quaye',
    fullWidth: 600,
    heroSizes: '(max-width: 359px) 59px, (max-width: 389px) 70px, (max-width: 767px) 82px, (max-width: 1000px) 94px, 117px',
    portraitSizes: '(max-width: 767px) 319px, (max-width: 1100px) 288px, 350px',
    linkedin: 'https://www.linkedin.com/in/martey-quaye-64a05017b/',
  },
  {
    name: 'Dean Bosilkovski',
    key: 'dean',
    responsibility: 'Head of Operations',
    experience: 'Dean has helped more than 300 businesses grow through successful projects. His focus is on keeping your project moving, bringing the right people together and making sure the work supports your business goals.',
    image: 'dean-bosilkovski',
    fullWidth: 640,
    heroSizes: '(max-width: 359px) 32px, (max-width: 389px) 38px, (max-width: 767px) 45px, (max-width: 1000px) 51px, 63px',
    portraitSizes: '(max-width: 767px) 173px, (max-width: 1100px) 156px, 189px',
    linkedin: 'https://www.linkedin.com/in/deanbosilkovski/',
  },
  {
    name: 'Raoul Müller',
    key: 'raoul',
    responsibility: 'Head of Customer Care',
    experience: 'Experience in Big Four consulting, with specialist expertise in AI and customer excellence. Raoul is there when you need him, keeps you updated and makes sure you know what’s happening with your project.',
    image: 'raoul-mueller',
    fullWidth: 570,
    heroSizes: '(max-width: 359px) 44px, (max-width: 389px) 53px, (max-width: 767px) 61px, (max-width: 1000px) 70px, 87px',
    portraitSizes: '(max-width: 767px) 238px, (max-width: 1100px) 215px, 261px',
    linkedin: 'https://www.linkedin.com/in/raoulschaller/',
  },
];

export function HomeFounders() {
  return (
    <section id="founders" className="dm-section dm-founders" aria-labelledby="founders-heading">
      <div className="dm-wrap">
        <div className="dm-section-heading" data-reveal>
          <div>
            <p className="dm-kicker">Who’s behind Digital Movement?</p>
            <h2 id="founders-heading">Meet our<br/><span className="dm-gradient-text">three founders.</span></h2>
          </div>
          <p>Marketing, customer care and project delivery. Three areas of experience, brought together to help your business grow.</p>
        </div>
        <div className="dm-founder-grid">
          {founders.map(founder => (
            <article key={founder.key} className="dm-founder-card" data-reveal>
              <div className={`dm-founder-portrait dm-founder-portrait-${founder.key}`}>
                <img
                  src={`${import.meta.env.BASE_URL}brand/founders/${founder.image}-320.webp`}
                  srcSet={`${import.meta.env.BASE_URL}brand/founders/${founder.image}-160.webp 160w, ${import.meta.env.BASE_URL}brand/founders/${founder.image}-320.webp 320w, ${import.meta.env.BASE_URL}brand/founders/${founder.image}-${founder.fullWidth}.webp ${founder.fullWidth}w`}
                  sizes={founder.portraitSizes}
                  alt={founder.name}
                  width="600"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{founder.name}</h3>
              <p className="dm-founder-role">Director &amp; Co-Founder<span>{founder.responsibility}</span></p>
              <p className="dm-founder-experience">{founder.experience}</p>
              <a
                className="dm-founder-linkedin"
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${founder.name} on LinkedIn (opens in a new tab)`}
              >
                <Linkedin size={20} aria-hidden="true"/>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeFounderTrust() {
  return (
    <Link className="dm-hero-founders" to="/#founders">
      <span className="dm-hero-founder-faces">
        {founders.map(founder => (
          <span key={founder.key} className={`dm-founder-portrait dm-founder-portrait-${founder.key}`}>
            <img src={`${import.meta.env.BASE_URL}brand/founders/${founder.image}-160.webp`} srcSet={`${import.meta.env.BASE_URL}brand/founders/${founder.image}-160.webp 160w, ${import.meta.env.BASE_URL}brand/founders/${founder.image}-320.webp 320w`} sizes={founder.heroSizes} alt="" width="60" height="60" decoding="async"/>
          </span>
        ))}
      </span>
      <span className="dm-hero-founder-caption"><strong>Martey, Dean &amp; Raoul</strong><span>Meet the founders <ArrowUpRight size={13} aria-hidden="true"/></span></span>
    </Link>
  );
}
