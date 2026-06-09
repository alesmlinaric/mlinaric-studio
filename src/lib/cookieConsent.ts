export type CookieConsentValue = 'accepted' | 'rejected';

const STORAGE_KEY = 'cookie-consent';

export function getCookieConsent(): CookieConsentValue | null {
  const value = localStorage.getItem(STORAGE_KEY);
  if (value === 'accepted' || value === 'rejected') return value;
  return null;
}

export function setCookieConsent(value: CookieConsentValue): void {
  localStorage.setItem(STORAGE_KEY, value);
}

export function hasAcceptedCookies(): boolean {
  return getCookieConsent() === 'accepted';
}

export function hasRejectedCookies(): boolean {
  return getCookieConsent() === 'rejected';
}
