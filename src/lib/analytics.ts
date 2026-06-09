const GA_ID = 'G-PW3ZEKT19Z';
let initialized = false;

export function initAnalytics(): void {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
}

export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}
