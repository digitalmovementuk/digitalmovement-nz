export const HOME_SHARE_PATHS = [
  '/share/marketing-spend/',
  '/share/founders-20260908-v2/',
] as const;

/** Sharing pages render the complete homepage, including its navigation and mobile CTA. */
export function isHomePath(pathname: string): boolean {
  const path = pathname.replace(/\/+$/, '') || '/';
  return path === '/' || HOME_SHARE_PATHS.some(sharePath => sharePath.slice(0, -1) === path);
}
