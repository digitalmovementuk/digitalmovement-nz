import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { DraftNav, DraftFooter, DraftStickyCTA } from './DraftChrome';
import '../styles/homepage-draft.css';
export function Layout() {
 const { pathname, hash } = useLocation();
 useEffect(() => {
  if (!hash) { window.scrollTo({ top: 0, behavior: 'instant' }); return; }
  const timer = window.setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }), 100);
  return () => clearTimeout(timer);
 }, [pathname, hash]);
 return <div className={`dm-draft ${pathname === '/' ? 'dm-home-route' : 'dm-inner-route'}`}><a className="dm-skip" href="#main">Skip to content</a><DraftNav /><main id="main" tabIndex={-1}><Outlet /></main><DraftStickyCTA /><DraftFooter /></div>;
}
