import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Phone, Mail, Check, Pause, Play, ChevronDown, Volume2 } from 'lucide-react';
import { Seo, faqSchema } from '../seo';
import { submitLead, trackLead } from '../lib/submitLead';
import { CONSENT_TEXT } from '../components/Consent';
import { HomeServiceCard } from '../components/HomeServiceCard';
import { HomeFounders, HomeFounderTrust } from '../components/HomeFounders';
import { GoogleReviewBadge, GoogleReviewStars } from '../components/GoogleReviewBadge';

const faqs=[
 {q:'What will the work cost?',a:'We’ll explain the recommended work and its cost before you decide to go ahead. If paid advertising is part of the plan, we’ll show the agency fee and advertising spend separately.'},
 {q:'What’s in my free plan?',a:'We’ll look at your website, who you want to reach and where your marketing could work harder. You’ll get a free one-page plan with the three changes we’d prioritise first and why. Martey will call within one working day to talk it through.'},
 {q:'Do I need SEO, ads or a new website?',a:'You don’t need to know that before you get in touch. Tell us what you want to achieve and what you’ve tried. We’ll help you work out where your budget will make the most difference.'},
 {q:'How quickly will I see a difference?',a:'It depends on where you’re starting and the work involved. Ads can reach customers once a campaign is live; SEO builds over time. We’ll explain the expected timing for your business before you decide to go ahead.'},
 {q:'Can you work with my existing website?',a:'Yes. We’ll review what you already have and tell you what’s worth improving. If a new website makes sense, we’ll explain why before recommending it.'},
 {q:'I’ve already spoken to Martey. What’s next?',a:'Call Martey on 027 289 4423, or email martey@digitalmovement.co.nz to continue your conversation.'},
];
const services=[
 {title:'SEO',lead:'Show up when customers search.',body:'Help people find your business on Google when they’re looking for what you sell.',to:'/services/seo',video:'video/seo-logo-card.mp4',poster:'video/seo-logo-poster.webp',tags:['Local searches','Lasting visibility'],tone:'peach'},
 {title:'Google Ads',lead:'Put your budget where it counts.',body:'Reach people looking to buy, and see which ads bring enquiries through your website.',to:'/services/google-ads',video:'video/google-ads-logo-card.mp4',poster:'video/google-ads-logo-poster.webp',tags:['Ready-to-buy customers','Clear tracking'],tone:'lavender'},
 {title:'Social media',lead:'Give people a reason to stop.',body:'Get in front of the right people with ads and content that give them a clear next step.',to:'/services/social-media',video:'video/socials-logo-card.mp4',poster:'video/socials-logo-poster.webp',tags:['Meta ads','Content that connects'],tone:'pink'},
 {title:'Web design',lead:'Turn visits into conversations.',body:'Make it easy for customers to understand your business, trust you and get in touch.',to:'/services/web-design',video:'video/website-logo-card.mp4',poster:'video/website-logo-poster.webp',tags:['Easy on mobile','Built for enquiries'],tone:'blue'},
];
function HomeHero(){
 const video=useRef<HTMLVideoElement>(null);const [playing,setPlaying]=useState(false);const [motionAllowed,setMotionAllowed]=useState(false);
 useEffect(()=>{const media=window.matchMedia('(prefers-reduced-motion: reduce)');const update=()=>{setMotionAllowed(!media.matches);if(media.matches){video.current?.pause();setPlaying(false);}};update();media.addEventListener('change',update);return()=>media.removeEventListener('change',update);},[]);
 useEffect(()=>{const el=video.current;if(!el||!motionAllowed)return;el.src=window.matchMedia('(max-width:767px)').matches?`${import.meta.env.BASE_URL}video/hero/mobile/mountain.mp4`:`${import.meta.env.BASE_URL}video/hero/desktop/mountain.mp4`;el.play().catch(()=>setPlaying(false));const observer=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)el.pause();},{threshold:0});observer.observe(el);return()=>observer.disconnect();},[motionAllowed]);
 return <section className="dm-hero" aria-labelledby="hero-title"><img className="dm-hero-poster" src={`${import.meta.env.BASE_URL}video/hero/mountain-poster.jpg`} alt="" width="854" height="480" fetchPriority="high"/><video ref={video} className="dm-hero-video" muted loop playsInline aria-hidden="true" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)}/><div className="dm-hero-shade"/><div className="dm-hero-inner"><div className="dm-hero-copy"><p className="dm-kicker">Digital marketing for New Zealand businesses</p><h1 id="hero-title">Let’s make your<br/>marketing spend <span>count.</span></h1><p className="dm-promise">We guarantee real growth and real enquiries through your website.</p><p className="dm-hero-note">Start with a free plan. We’ll call within one working day.</p><div className="dm-hero-actions"><Link className="dm-button" to="/#contact">Get my free plan <ArrowRight size={18}/></Link><div className="dm-returning">Already spoken to Martey?<Link to="/#martey">Continue the conversation <ArrowUpRight size={13}/></Link></div></div></div><HomeFounderTrust/></div>{motionAllowed&&<button className="dm-motion-toggle" aria-label={playing?'Pause background video':'Play background video'} onClick={()=>{if(playing)video.current?.pause();else video.current?.play().catch(()=>{});}}>{playing?<Pause size={14}/>:<Play size={14}/>}</button>}</section>;
}
function AdVideo(){
 const video=useRef<HTMLVideoElement>(null);
 const [mobile,setMobile]=useState(false),[failed,setFailed]=useState(false),[needsSound,setNeedsSound]=useState(false);
 useEffect(()=>{
  const element=video.current;if(!element)return;
  const query=window.matchMedia('(max-width:767px)');
  let disposed=false,generation=0,initial=true;
  const update=async()=>{
   const current=++generation,fresh=initial;initial=false;
   const resume=fresh||!element.paused,muted=fresh?false:element.muted;
   element.pause();setMobile(query.matches);setFailed(false);
   element.muted=muted;
   element.src=`${import.meta.env.BASE_URL}video/meta-ad-${query.matches?'mobile':'desktop'}.mp4`;
   element.load();
   if(!resume)return;
   try{await element.play();if(!disposed&&current===generation)setNeedsSound(element.muted);}
   catch{
    if(disposed||current!==generation)return;
    element.muted=true;setNeedsSound(true);
    try{await element.play();}catch{/* Native play remains available if autoplay is unavailable. */}
   }
  };
  void update();query.addEventListener('change',update);
  return()=>{disposed=true;generation++;query.removeEventListener('change',update);element.pause();};
 },[]);
 function turnSoundOn(){
  const element=video.current;if(!element)return;
  element.currentTime=0;element.muted=false;element.volume=1;setNeedsSound(false);
  element.play().catch(()=>setNeedsSound(true));
 }
 return <section id="watch" className="dm-ad" aria-labelledby="ad-heading"><div className="dm-ad-inner"><div className="dm-ad-copy"><p className="dm-kicker">Sound familiar?</p><h2 id="ad-heading">Let’s get your<br/>business moving.</h2><p>Spending on marketing without seeing enough come back? Let’s talk.</p></div><div className="dm-player"><video ref={video} controls playsInline preload="auto" poster={`${import.meta.env.BASE_URL}video/meta-ad-${mobile?'mobile':'desktop'}-poster.webp`} aria-label="Digital Movement: stop wasting money on advertising that isn’t working" onVolumeChange={()=>setNeedsSound(Boolean(video.current?.muted))} onError={()=>setFailed(true)}><track kind="descriptions" src={`${import.meta.env.BASE_URL}video/meta-ad-captions.vtt`} srcLang="en" label="On-screen text and visuals (English)"/></video>{needsSound&&!failed&&<button type="button" className="dm-ad-sound" onClick={turnSoundOn}><Volume2 size={17}/>Turn sound on</button>}{failed&&<p className="dm-video-error">Video unavailable. <a href={`${import.meta.env.BASE_URL}video/meta-ad-${mobile?'mobile':'desktop'}.mp4`}>Open the video</a>.</p>}</div></div><p className="sr-only">Video message: Stop wasting money on advertising that’s not working. We guarantee results for our clients. Digital Movement.</p></section>;
}
function phoneError(value:string){
 const digits=value.replace(/\D/g,'');
 return digits.length>=7&&digits.length<=15&&!/[a-z]/i.test(value)?'':'Please enter a phone number with 7 to 15 digits. You can include a country code.';
}
function PlanForm(){
 const emailOnly=import.meta.env.VITE_PREVIEW_EMAIL_ONLY==='1';
 const [state,setState]=useState<'idle'|'sending'|'success'|'error'>('idle');
 const [honey,setHoney]=useState('');const feedback=useRef<HTMLDivElement>(null);
 useEffect(()=>{if(state==='success'||state==='error')feedback.current?.focus();},[state]);
 async function send(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();if(honey||state==='sending')return;
  const data=new FormData(e.currentTarget);
  const name=String(data.get('name')||''),phone=String(data.get('phone')||''),website=String(data.get('website')||'Not supplied');
  const phoneInput=e.currentTarget.elements.namedItem('phone') as HTMLInputElement;
  phoneInput.setCustomValidity(phoneError(phone));
  if(!phoneInput.reportValidity())return;
  if(emailOnly){
   const body=`Hi Martey,\n\nPlease call me about a free marketing plan.\n\nName: ${name}\nPhone: ${phone}\nWebsite: ${website}\n`;
   window.location.href=`mailto:martey@digitalmovement.co.nz?subject=${encodeURIComponent('My free marketing plan')}&body=${encodeURIComponent(body)}`;return;
  }
  setState('sending');
  const result=await submitLead({name,phone,service:'Free marketing plan',message:`Business website: ${website}\nPlease call me about my free marketing plan.`,consent:data.get('consent')!==null,source:'nz-homepage-free-plan'});
  if(result.ok){trackLead('nz-homepage-free-plan');setState('success');}else setState('error');
 }
 if(state==='success')return <div ref={feedback} className="dm-form-success" tabIndex={-1} role="status"><span className="dm-success-icon"><Check size={30}/></span><h3>Thanks. Let’s get you moving.</h3><p>Your request is through. Martey will call you within one working day to talk through your business and your free plan.</p><p>Want to add anything? <a href="mailto:martey@digitalmovement.co.nz">Email Martey</a> or call <a href="tel:+64272894423">027 289 4423</a>.</p></div>;
 return <form className="dm-plan-form" onSubmit={send} aria-labelledby="plan-form-heading">
  <div className="dm-form-heading"><h3 id="plan-form-heading">Get my free plan</h3><p>Leave your number and Martey will give you a call.</p></div>
  <div className="dm-form-row">
   <div><label htmlFor="plan-name">Your name <span>(required)</span></label><input id="plan-name" name="name" autoComplete="name" required maxLength={120}/></div>
   <div><label htmlFor="plan-phone">Phone <span>(required)</span></label><input id="plan-phone" name="phone" type="tel" autoComplete="tel" required maxLength={40} onInput={e=>e.currentTarget.setCustomValidity(e.currentTarget.value?phoneError(e.currentTarget.value):'')}/></div>
  </div>
  <div><label htmlFor="plan-website">Your website <span>(optional)</span></label><input id="plan-website" name="website" type="text" inputMode="url" autoComplete="url" placeholder="yourbusiness.co.nz" maxLength={300}/></div>
  <div className="dm-honeypot" aria-hidden="true"><label htmlFor="plan-honey">Leave this empty</label><input id="plan-honey" name="_honey" value={honey} onChange={e=>setHoney(e.target.value)} tabIndex={-1} autoComplete="off"/></div>
  <label className="dm-consent"><input type="checkbox" name="consent" required/><span>{CONSENT_TEXT}</span></label>
  <button className="dm-button" disabled={state==='sending'} type="submit">{state==='sending'?'Sending your request…':emailOnly?'Continue by email':'Get my free plan'}<ArrowRight size={18}/></button>
  {state==='error'&&<div ref={feedback} tabIndex={-1} role="alert" className="dm-form-error">Your request hasn’t gone through. Please try again, <a href="mailto:martey@digitalmovement.co.nz">email Martey</a> or call <a href="tel:+64272894423">027 289 4423</a>.</div>}
  <p className="dm-form-note">{emailOnly?'Opens an email to Martey with these details. Send it from your email app. ':'We’ll use your details to respond to this enquiry. '}<Link to="/privacy">How we look after your information</Link>.</p>
 </form>;
}
export function HomePage(){
 const home=useRef<HTMLDivElement>(null);
 const [serviceAnimationsPaused,setServiceAnimationsPaused]=useState(false);
 useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('dm-revealed');observer.unobserve(entry.target);}}),{threshold:.08});home.current?.querySelectorAll('[data-reveal]').forEach(el=>{el.classList.add('dm-reveal-ready');observer.observe(el);});return()=>observer.disconnect();},[]);
 return <div className="dm-home" ref={home}><Seo title="Digital Movement NZ | Marketing that brings real enquiries" description="Make your marketing spend count. SEO, Google Ads, social media and web design for New Zealand businesses. Talk to Martey and get your free plan." path="/" schema={[faqSchema(faqs)]}/><HomeHero/><AdVideo/>
 <section id="martey" className="dm-section dm-martey"><div className="dm-wrap dm-martey-grid"><div className="dm-person-card" data-reveal><div className="dm-portrait-frame"><img src={`${import.meta.env.BASE_URL}brand/founders/martey-quaye-600.webp`} srcSet={`${import.meta.env.BASE_URL}brand/founders/martey-quaye-320.webp 320w, ${import.meta.env.BASE_URL}brand/founders/martey-quaye-600.webp 600w`} sizes="(max-width: 379px) calc(100vw - 78px), (max-width: 767px) 306px, 374px" alt="Martey Quaye, Head of Customer Success" width="600" height="603" loading="lazy"/></div><div className="dm-person-caption"><strong>Martey Quaye</strong><span>Head of Customer Success</span><a href="tel:+64272894423"><Phone size={15}/>027 289 4423</a></div><span className="dm-person-mark" aria-hidden="true">Let’s talk.</span></div><div className="dm-martey-copy" data-reveal><p className="dm-kicker">A real person in your corner</p><h2>You’ll be talking<br/>to <span className="dm-gradient-text">Martey.</span></h2><p className="dm-lead">Good marketing starts with understanding your business.</p><p>Martey will take the time to hear what you’re working towards, what you’ve tried and what’s getting in the way. Then he’ll help you work out a sensible next step.</p><p>Already had a chat? You can pick up right where you left off.</p><div className="dm-person-links"><a className="dm-text-link" href="tel:+64272894423">Call Martey <ArrowUpRight size={18}/></a><a className="dm-text-link" href="mailto:martey@digitalmovement.co.nz">Email Martey <ArrowUpRight size={18}/></a></div></div></div></section>
 <section id="results" className="dm-section dm-proof"><div className="dm-wrap"><div className="dm-section-heading" data-reveal><div><p className="dm-kicker">What matters to you</p><h2>More enquiries.<br/>A business that’s <span className="dm-gradient-text">moving forward.</span></h2></div><p>We look at what your marketing brings back: the calls, enquiries and opportunities that help your business grow.</p></div><GoogleReviewBadge/><div className="dm-proof-grid"><div className="dm-guarantee" data-reveal><span className="dm-guarantee-symbol" aria-hidden="true"><Check size={30}/></span><p className="dm-kicker">Our promise</p><h3>Real growth.<br/>Real enquiries.<br/>Through your website.</h3><p>That’s what we guarantee. Let’s talk through what it means for your business.</p><Link className="dm-text-link" to="/#contact">Talk it through with Martey <ArrowUpRight size={18}/></Link></div><div className="dm-review-stack"><figure className="dm-review" data-reveal><span className="dm-quote-mark" aria-hidden="true">“</span><blockquote>Dean and the team built me a great website and set up SEO and Google Ads and I started getting real leads not long after.</blockquote><figcaption><span className="dm-review-avatar" aria-hidden="true">BS</span><span><strong>Beth Sorensen</strong><small>Digital Movement client</small></span><GoogleReviewStars/></figcaption></figure><figure className="dm-review" data-reveal><span className="dm-quote-mark" aria-hidden="true">“</span><blockquote>Martey and the team were so amazing and professional in helping me grow my business.</blockquote><figcaption><span className="dm-review-avatar" aria-hidden="true">MM</span><span><strong>Maree Misbrener</strong><small>Digital Movement client</small></span><GoogleReviewStars/></figcaption></figure></div></div><p className="dm-proof-note">Customer feedback from Digital Movement Australia.</p></div></section>
 <section id="services" className="dm-section dm-services"><div className="dm-wrap"><div className="dm-section-heading" data-reveal><div><p className="dm-kicker">The right help for your business</p><h2>Where should your<br/>marketing work <span className="dm-gradient-text">harder?</span></h2></div><p>You don’t have to know which service you need. Tell us where you want to go. We’ll help you choose the right way to get there.</p></div><div className="dm-service-grid" id="service-cards">{services.map(service=><HomeServiceCard key={service.title} service={service} paused={serviceAnimationsPaused}/>)}</div><div className="dm-service-animation-actions"><button type="button" className="dm-service-animation-toggle" aria-controls="service-cards" aria-pressed={serviceAnimationsPaused} onClick={()=>setServiceAnimationsPaused(paused=>!paused)}>{serviceAnimationsPaused?'Play animations':'Pause animations'}</button></div></div></section>
 <section id="how-it-works" className="dm-section dm-process"><div className="dm-wrap"><div className="dm-section-heading" data-reveal><div><p className="dm-kicker">A clear way forward</p><h2>Let’s start with<br/><span>your business.</span></h2></div><p>No need to come with all the answers. That’s what the first conversation is for.</p></div><ol className="dm-steps">{[{title:'Start with a quick call.',body:'Leave your name and number. Martey will call within one working day to hear what you sell and what you’d like to improve.'},{title:'Get a plan that makes sense.',body:'We’ll review your website and marketing, then talk through a free one-page plan with the three changes we’d prioritise first.'},{title:'Decide what comes next.',body:'Talk it through with Martey. If we’re a good fit, we’ll agree the work, budget and goals before getting started.'}].map((step,i)=><li key={step.title} data-reveal><span className="dm-step-number">0{i+1}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol><div className="dm-process-bottom" data-reveal><p>Leave your number. Martey will call within one working day.</p><Link to="/#contact" className="dm-button">Get my free plan <ArrowRight size={18}/></Link></div></div></section>
 <HomeFounders/>
 <section id="questions" className="dm-section dm-faq"><div className="dm-wrap dm-faq-grid"><div data-reveal><p className="dm-kicker">Common questions</p><h2>Before we<br/><span className="dm-gradient-text">get started.</span></h2><p>Something else on your mind?<br/><a className="dm-text-link" href="tel:+64272894423">Ask us directly <ArrowUpRight size={18}/></a></p></div><div>{faqs.map(({q,a})=><details className="dm-faq-item" key={q} data-reveal><summary>{q}<ChevronDown size={20}/></summary><p>{a}</p></details>)}</div></div></section>
 <section id="contact" className="dm-section dm-contact"><div className="dm-wrap dm-contact-grid"><div className="dm-contact-copy" data-reveal><p className="dm-kicker">Talk to us</p><h2>Tell Martey where<br/>you want to <span className="dm-gradient-text">go.</span></h2><p className="dm-lead">Let’s work out what will help you get there.</p><p>Leave your number and Martey will call within one working day. We’ll talk through your business and a free one-page plan with the three changes we’d prioritise first.</p><div className="dm-contact-person"><img src={`${import.meta.env.BASE_URL}brand/photos/martey-quaye-340.webp`} alt="" width="72" height="72" loading="lazy"/><div><strong>Martey Quaye</strong><span>Head of Customer Success</span></div></div><div className="dm-contact-methods"><a href="tel:+64272894423"><Phone size={19}/><span><small>Call Martey</small>027 289 4423</span><ArrowUpRight size={16}/></a><a href="mailto:martey@digitalmovement.co.nz"><Mail size={19}/><span><small>Email Martey</small>martey@digitalmovement.co.nz</span><ArrowUpRight size={16}/></a></div><p className="dm-contact-return">Already spoken to Martey? Call or email him directly to continue your conversation.</p></div><div className="dm-form-panel" data-reveal><PlanForm/></div></div></section>
 </div>;
}
