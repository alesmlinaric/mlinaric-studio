import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { getCookieConsent, setCookieConsent } from '../lib/cookieConsent';
import { initAnalytics } from '../lib/analytics';
import { useLang } from '../lib/language';

export const COOKIE_SETTINGS_EVENT = 'open-cookie-settings';

const content = {
  sl: {
    ariaLabel: 'Nastavitve piškotkov',
    title: 'Piškotki',
    description:
      'Ta spletna stran uporablja nujne piškotke za delovanje ter analitične piškotke za razumevanje obiska in izboljšanje izkušnje. Analitični piškotki se naložijo samo z vašo privolitvijo.',
    accept: 'Sprejmi vse',
    reject: 'Zavrni nenujne',
    more: 'Več o piškotkih',
    link: '/sl/cookies',
  },
  en: {
    ariaLabel: 'Cookie settings',
    title: 'Cookies',
    description:
      'This website uses essential cookies for proper operation and analytics cookies to understand visits and improve the experience. Analytics cookies are loaded only with your consent.',
    accept: 'Accept all',
    reject: 'Reject non-essential',
    more: 'Learn more',
    link: '/cookies',
  },
} as const;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const lang = useLang();
  const t = lang === 'sl' ? content.sl : content.en;

  useEffect(() => {
    if (getCookieConsent() === null) {
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handler = () => setVisible(true);
    window.addEventListener(COOKIE_SETTINGS_EVENT, handler);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, handler);
  }, []);

  const handleAccept = useCallback(() => {
    setCookieConsent('accepted');
    initAnalytics();
    setVisible(false);
  }, []);

  const handleReject = useCallback(() => {
    setCookieConsent('rejected');
    setVisible(false);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && getCookieConsent() !== null) {
      setVisible(false);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div
          className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t.ariaLabel}
            onKeyDown={handleKeyDown}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="w-[92%] max-w-[600px]"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/90 shadow-[0_8px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/[0.03] to-transparent" />

              <div className="relative px-6 pt-6 pb-5">
                <p className="mb-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-white/40">
                  {t.title}
                </p>

                <p className="text-[14px] font-light leading-[1.65] text-[#A1A1AA]">
                  {t.description}
                </p>

                <div className="mt-5 h-px w-full bg-white/[0.06]" />

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleAccept}
                    aria-label={t.accept}
                    className="rounded-xl bg-white px-5 py-2.5 text-[13px] font-medium text-black transition-all duration-200 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.97]"
                  >
                    {t.accept}
                  </button>

                  <button
                    onClick={handleReject}
                    aria-label={t.reject}
                    className="rounded-xl border border-white/[0.14] px-5 py-2.5 text-[13px] font-medium text-white/80 transition-all duration-200 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 active:scale-[0.97]"
                  >
                    {t.reject}
                  </button>

                  <Link
                    to={t.link}
                    onClick={() => setVisible(false)}
                    className="ml-auto text-[12px] font-light text-white/30 underline underline-offset-4 decoration-white/20 transition-colors duration-200 hover:text-white/55 hover:decoration-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30"
                  >
                    {t.more}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}