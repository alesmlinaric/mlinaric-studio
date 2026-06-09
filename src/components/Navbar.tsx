import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang, getAlternatePath } from '../lib/language';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const lang = useLang();
  const hiddenNavbarPaths = ['/small-business', '/sl/small-business'];
  const shouldHideNavbar = hiddenNavbarPaths.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  
if (shouldHideNavbar) return null;

  const navLinks =
    lang === 'sl'
      ? [
          { path: '/sl', label: 'Domov' },
          { path: '/sl/projects', label: 'Projekti' },
          { path: '/sl/services', label: 'Storitve' },
          { path: '/sl/about', label: 'O meni' },
          { path: '/sl/contact', label: 'Kontakt' },
        ]
      : [
          { path: '/', label: 'Home' },
          { path: '/projects', label: 'Projects' },
          { path: '/services', label: 'Services' },
          { path: '/about', label: 'About' },
          { path: '/contact', label: 'Contact' },
        ];

  const alternatePath = getAlternatePath(location.pathname);
  const alternateLang = lang === 'en' ? 'SL' : 'EN';

  const isActivePath = (path: string) => {
    if (path === '/' || path === '/sl') {
      return location.pathname === path;
    }
    return location.pathname === path;
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50">
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? 'border-b border-white/5 bg-[#0B0B0F]/58 backdrop-blur-md'
              : 'border-b border-transparent bg-transparent'
          }`}
        >
          <div className="pointer-events-none absolute inset-x-0 top-full h-12 bg-gradient-to-b from-[#0B0B0F]/28 via-[#0B0B0F]/10 to-transparent" />

          <div className="relative mx-auto max-w-[1240px] px-4 py-2.5 md:px-0 md:py-2 2xl:max-w-[1320px]">
            <div className="flex items-center justify-between">
              <Link
                to={lang === 'sl' ? '/sl' : '/'}
                className="flex items-center transition-opacity duration-300 hover:opacity-80"
              >
                <img
                  src="/logo-website.png"
                  alt="Mlinaric Studio"
                  className="h-9 w-auto md:h-10 2xl:h-11"
                />
                <span
                  className="ml-[-7px] md:ml-[-9px] text-[10px] uppercase tracking-[0.2em] text-white/80 md:text-[11px] md:tracking-[0.22em]"
                  style={{ fontWeight: 300 }}
                >
                  Studio
                </span>
              </Link>

              <div className="hidden items-center gap-1.5 md:flex 2xl:gap-2">
                {navLinks.map((link) => {
                  const isActive = isActivePath(link.path);

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`relative inline-flex h-8 items-center justify-center rounded-full px-3.5 text-[14px] font-light tracking-[0.01em] transition-colors duration-300 2xl:px-4 2xl:text-[15px] ${
                        isActive ? 'text-white' : 'text-white/42 hover:text-white/78'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="navbar-pill"
                          className="absolute inset-0 rounded-full border border-[#CAA96A]/50 bg-transparent"
                          transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        />
                      )}

                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  );
                })}

                <Link
                  to={alternatePath}
                  className="ml-2 inline-flex h-7 items-center rounded-full border border-white/15 px-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45 transition-all duration-300 hover:border-[#CAA96A]/40 hover:text-[#CAA96A] 2xl:ml-3"
                >
                  {alternateLang}
                </Link>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="text-white/70 transition-colors hover:text-white md:hidden"
                aria-label="Toggle menu"
                type="button"
              >
                {isMobileMenuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-[#0B0B0F] px-6 pt-24 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = isActivePath(link.path);

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`rounded-full px-5 py-2 text-[1.25rem] font-medium tracking-[-0.03em] transition-colors ${
                      isActive
                        ? 'border border-white/10 bg-white/[0.03] text-[#CAA96A]'
                        : 'text-white/70'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                to={alternatePath}
                className="mt-2 inline-flex w-fit items-center rounded-full border border-white/15 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-white/45 transition-all duration-300 hover:border-[#CAA96A]/40 hover:text-[#CAA96A]"
              >
                {alternateLang}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
