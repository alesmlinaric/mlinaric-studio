import { Instagram, Linkedin, Mail } from 'lucide-react';
import { COOKIE_SETTINGS_EVENT } from './CookieConsent';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/alesmlinaric/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/in/alesmlinaric/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mlinaric.alesh@gmail.com', label: 'Email' },
  ];

  const openCookieSettings = () => {
    window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
  };

  return (
    <footer className="border-t border-white/10 bg-[#0B0B0F]">
      <div className="relative mx-auto max-w-[1240px] px-4 py-16 md:px-5 2xl:max-w-[1320px]">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
            <p className="text-sm font-light tracking-[0.01em] text-[#A1A1AA]">
              Designed with precision, rhythm, and intent.
            </p>
            <p className="text-sm font-light text-white/25">
              © 2026 Ales Mlinaric
            </p>
            <button
              onClick={openCookieSettings}
              className="text-[11px] font-light text-white/20 underline underline-offset-4 decoration-white/10 transition-colors duration-200 hover:text-white/40 hover:decoration-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/20"
            >
              Nastavitve piškotkov
            </button>
          </div>

          <div className="flex gap-7 2xl:gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 transition-all duration-300 hover:text-[#CAA96A] hover:scale-105"
                aria-label={link.label}
              >
                <link.icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}