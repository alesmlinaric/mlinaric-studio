import { useLocation } from 'react-router-dom';

export type Lang = 'en' | 'sl';

export function useLang(): Lang {
  const { pathname } = useLocation();
  return pathname.startsWith('/sl') ? 'sl' : 'en';
}

export function getAlternatePath(pathname: string): string {
  if (pathname.startsWith('/sl')) {
    const stripped = pathname.replace(/^\/sl/, '') || '/';
    return stripped;
  }
  if (pathname === '/') return '/sl';
  return `/sl${pathname}`;
}
