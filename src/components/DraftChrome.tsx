import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X, Phone, Mail } from 'lucide-react';
import { socialProfiles } from '../content';
import { SocialIcon } from './SocialIcon';
import { FooterMap } from './FooterMap';
import { FooterBranches } from './FooterBranches';
import { isHomePath } from '../lib/homeRoutes';
import '../styles/draft-chrome-enhancements.css';
import { ADDRESS_LINE, LEGAL_ENTITY, NZBN } from '../seo';
export const serviceLinks = [['SEO','/services/seo','Be found on Google'],['Google Ads','/services/google-ads','Reach people ready to buy'],['Social media','/services/social-media','Turn attention into enquiries'],['Web design','/services/web-design','Make your website work harder']];
const menuGroups = [
 { heading: 'Services', links: serviceLinks.map(([label, to]) => [label, to]) },
 { heading: 'Company', links: [['About us', '/about'], ['Meet the founders', '/#founders'], ['How we work', '/#how-it-works'], ['Client reviews', '/#results'], ['Talk to us', '/#contact']] },
 { heading: 'SEO guides', links: [['What is SEO?', '/what-is-seo'], ['Technical SEO', '/seo/technical-seo'], ['Ecommerce SEO', '/seo/ecommerce']] },
 { heading: 'Industries', links: [['Builders', '/industries/builders'], ['Plumbers', '/industries/plumbers'], ['Electricians', '/industries/electricians'], ['Roofers', '/industries/roofers']] },
];
export function DraftNav() {
 const dialog=useRef<HTMLDialogElement>(null),toggle=useRef<HTMLButtonElement>(null),dropdown=useRef<HTMLDetailsElement>(null);
 const [open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false); const location=useLocation();
 useEffect(()=>{const scroll=()=>setScrolled(window.scrollY>24);scroll();window.addEventListener('scroll',scroll,{passive:true});return()=>window.removeEventListener('scroll',scroll);},[]);
 useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==='Escape'&&dropdown.current?.open){dropdown.current.open=false;dropdown.current.querySelector('summary')?.focus();}};const outside=(e:MouseEvent)=>{if(dropdown.current&&!dropdown.current.contains(e.target as Node))dropdown.current.open=false;};document.addEventListener('keydown',close);document.addEventListener('click',outside);return()=>{document.removeEventListener('keydown',close);document.removeEventListener('click',outside);};},[]);
 useEffect(()=>{dialog.current?.close();setOpen(false);if(dropdown.current)dropdown.current.open=false;},[location]);
 useEffect(()=>{if(!open)return;const prior=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=prior;};},[open]);
 return <><header className={`dm-header dm-header--social ${scrolled||!isHomePath(location.pathname)?'is-scrolled':''}`}><div className="dm-header-inner"><Link to="/" className="dm-brand" aria-label="Digital Movement home"><img src={`${import.meta.env.BASE_URL}brand/logo-color-negative.svg`} alt="Digital Movement" width="230" height="49" /></Link><nav className="dm-header-socials" aria-label="Follow Digital Movement">{socialProfiles.map(s=><a key={s.label} href={s.href} aria-label={`Digital Movement on ${s.label}`} target="_blank" rel="noopener noreferrer"><SocialIcon label={s.label} size={16}/></a>)}</nav><nav className="dm-desktop-nav" aria-label="Main navigation"><details ref={dropdown} className="dm-service-menu"><summary>Services <ChevronDown size={14}/></summary><div className="dm-dropdown">{serviceLinks.map(([label,to,sub])=><Link key={to} to={to}><strong>{label}</strong><span>{sub}</span><ArrowUpRight size={17}/></Link>)}</div></details><Link className="dm-nav-cta" to="/#contact">Talk to us <ArrowUpRight size={15}/></Link></nav><button ref={toggle} className="dm-menu-toggle" aria-label="Open website menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>{dialog.current?.showModal();setOpen(true);}}><Menu size={24}/></button></div></header>
 <dialog ref={dialog} id="mobile-navigation" className="dm-mobile-menu dm-site-menu" aria-labelledby="mobile-menu-title" onKeyDown={e=>{if(e.key!=='Tab')return;const items=[...e.currentTarget.querySelectorAll<HTMLElement>('a[href],button:not([disabled])')].filter(el=>el.getClientRects().length>0);const first=items[0],last=items[items.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}}} onClose={()=>{setOpen(false);toggle.current?.focus();}} onClick={e=>{if(e.target===dialog.current)dialog.current.close();}}>
  <div className="dm-mobile-menu-inner">
   <div className="dm-mobile-menu-top"><span id="mobile-menu-title">Explore Digital Movement</span><button aria-label="Close website menu" onClick={()=>dialog.current?.close()}><X size={24}/></button></div>
   <nav className="dm-site-menu-grid" aria-label="Website pages">{menuGroups.map(group=><section className="dm-menu-group" key={group.heading}><h2>{group.heading}</h2><ul>{group.links.map(([label,to])=><li key={to}><Link to={to}>{label}<ArrowUpRight size={16}/></Link></li>)}</ul></section>)}</nav>
   <div className="dm-site-menu-actions"><Link className="dm-button" to="/#contact">Talk to us <ArrowRight size={18}/></Link><a className="dm-mobile-phone" href="tel:+64272894423">Call Martey · 027 289 4423</a></div>
   <nav className="dm-menu-socials" aria-label="Follow Digital Movement">{socialProfiles.map(s=><a key={s.label} href={s.href} aria-label={`Digital Movement on ${s.label}`} target="_blank" rel="noopener noreferrer"><SocialIcon label={s.label} size={18}/></a>)}</nav>
  </div>
 </dialog></>;
}
export function DraftStickyCTA(){
 const [visible,setVisible]=useState(false);const {pathname}=useLocation();
 useEffect(()=>{
  const mobile=window.matchMedia('(max-width: 767px)');let frame=0;
  const update=()=>{
   frame=0;
   if(!mobile.matches||!isHomePath(pathname)||document.querySelector('dialog[open]')){setVisible(false);return;}
   const heroCTA=document.querySelector<HTMLElement>('.dm-hero .dm-hero-actions .dm-button');
   const headerBottom=document.querySelector('.dm-header')?.getBoundingClientRect().bottom??0;
   if(!heroCTA||window.scrollY<=0||heroCTA.getBoundingClientRect().bottom>headerBottom){setVisible(false);return;}
   const height=window.innerHeight,width=window.innerWidth;
   const contact=document.getElementById('contact'),footer=document.getElementById('site-footer');
   if([contact,footer].some(el=>{if(!el)return false;const r=el.getBoundingClientRect();return r.top<height+24&&r.bottom>headerBottom;})){setVisible(false);return;}
   const zone={left:(width-232)/2-8,right:(width+232)/2+8,top:height-112,bottom:height};
   const covered=[...document.querySelectorAll<HTMLElement>('main a[href],main button,main input,main textarea,main select,main summary,main [role="button"],main video[controls],main audio[controls]')].some(el=>{
    if(el.closest('.dm-sticky,dialog,#contact,#site-footer'))return false;
    const r=el.getBoundingClientRect();if(!r.width||!r.height)return false;
    // Reserve the control strip, not the full area of a video or linked card.
    const controlTop=(el instanceof HTMLMediaElement||r.height>96)?Math.max(r.top,r.bottom-56):r.top;
    return r.left<zone.right&&r.right>zone.left&&controlTop<zone.bottom&&r.bottom>zone.top;
   });
   setVisible(!covered);
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};update();
  window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);mobile.addEventListener('change',schedule);document.addEventListener('toggle',schedule,true);
  return()=>{if(frame)cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);mobile.removeEventListener('change',schedule);document.removeEventListener('toggle',schedule,true);};
 },[pathname]);
 return visible?<aside className="dm-sticky dm-sticky--mobile" aria-label="Talk to Digital Movement"><Link className="dm-button" to="/#contact">Let’s talk <ArrowUpRight size={16}/></Link><a className="dm-sticky-call" href="tel:+64272894423" aria-label="Call Martey on 027 289 4423"><Phone size={18}/></a></aside>:null;
}

export function DraftFooter(){
 const groups=[{heading:'Grow your business',links:serviceLinks.map(([label,to])=>[label,to])},{heading:'Explore SEO',links:[['SEO across New Zealand','/seo'],['Ecommerce SEO','/seo/ecommerce'],['Technical SEO','/seo/technical-seo'],['What is SEO?','/what-is-seo']]},{heading:'Get to know us',links:[['About Digital Movement','/about'],['How we work','/#how-it-works'],['Talk to us','/#contact']]}];
 return <footer id="site-footer" className="dm-footer"><div className="dm-wrap"><div className="dm-footer-top"><div><Link to="/" aria-label="Digital Movement home"><img src={`${import.meta.env.BASE_URL}brand/logo-color-positive.svg`} alt="Digital Movement" width="235" height="50" loading="lazy"/></Link><p>Marketing that helps your business grow.</p></div><a href="mailto:office@digitalmovement.co.nz" className="dm-office"><Mail size={19}/><span>office@digitalmovement.co.nz</span><ArrowUpRight size={18}/></a></div><div className="dm-footer-grid">{groups.map(group=><div key={group.heading}><h2>{group.heading}</h2><ul>{group.links.map(([label,to])=><li key={to}><Link to={to}>{label}</Link></li>)}</ul></div>)}<div><h2>Let’s talk</h2><p>Martey Quaye<br/><span>Head of Customer Success</span></p><a className="dm-footer-contact" href="tel:+64272894423">027 289 4423</a><a className="dm-footer-contact" href="mailto:martey@digitalmovement.co.nz">martey@digitalmovement.co.nz</a><div className="dm-socials">{socialProfiles.map(s=><a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"><SocialIcon label={s.label} size={18}/></a>)}</div></div></div><div className="dm-footer-explore"><details><summary>Local marketing support <ChevronDown size={16}/></summary><ul>{[['Auckland','auckland'],['Christchurch','christchurch'],['Wellington','wellington'],['Hamilton','hamilton'],['Tauranga','tauranga'],['Dunedin','dunedin'],['Hawke’s Bay','hawkes-bay'],['Whangārei','whangarei']].map(([name,slug])=><li key={slug}><Link to={`/seo/${slug}`}>SEO in {name}</Link></li>)}</ul><Link to="/google-ads/christchurch">Google Ads in Christchurch</Link></details><details><summary>Marketing for trades <ChevronDown size={16}/></summary><ul>{['Builders','Plumbers','Electricians','Roofers'].map(name=><li key={name}><Link to={`/industries/${name.toLowerCase()}`}>{name}</Link></li>)}</ul></details></div><div className="dm-footer-map"><FooterMap/></div><FooterBranches/><div className="dm-legal"><p>© {new Date().getFullYear()} {LEGAL_ENTITY}.<br/>NZBN {NZBN} · Registered office: {ADDRESS_LINE}.</p><nav aria-label="Legal and site information"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/copyright">Copyright</Link><Link to="/sitemap">All pages</Link></nav></div></div></footer>;
}
