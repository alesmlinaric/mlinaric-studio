import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Search, Layers, LayoutTemplate, X } from 'lucide-react';
import { projects } from '../data/projects';
import Button from '../components/Button';
import Seo from '../components/Seo';
import { useLang } from '../lib/language';
import { getProjectSeo } from '../lib/seoConfig';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const lang = useLang();
  const project = projects.find((p) => p.id === id);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0B0B0F] px-6 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-semibold tracking-[-0.03em]">
            {lang === 'sl' ? 'Projekt ni najden' : 'Project Not Found'}
          </h1>
          <Button to={lang === 'sl' ? '/sl/projects' : '/projects'} variant="secondary">
            {lang === 'sl' ? 'Nazaj na projekte' : 'Back to Projects'}
          </Button>
        </div>
      </div>
    );
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxImage) {
        setLightboxImage(null);
      }
    };

    if (lightboxImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [lightboxImage]);

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 }
  };

  const BASE_URL = 'https://mlinaric.studio';
  const seoMeta = getProjectSeo(
    lang,
    project.id,
    project.title[lang],
    project.seoDescription[lang]
  );
  const projectHreflang = {
    en: `${BASE_URL}/project/${project.id}`,
    sl: `${BASE_URL}/sl/project/${project.id}`,
  };

  return (
    <>
      <Seo meta={seoMeta} lang={lang} projectHreflang={projectHreflang} />
    <div className="bg-[#0B0B0F] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-36 pb-26 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(202,169,106,0.07),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_22%,transparent_78%,rgba(255,255,255,0.015))]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-14"
          >
            <Link
              to={lang === 'sl' ? '/sl/projects' : '/projects'}
              className="inline-flex items-center gap-2 text-[#A1A1AA] transition-colors duration-300 hover:text-[#CAA96A]"
            >
              <ArrowLeft size={18} />
              {lang === 'sl' ? 'Nazaj na projekte' : 'Back to Projects'}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl"
          >
            <div className="mb-6 text-xs uppercase tracking-[0.28em] text-[#CAA96A]/80">
              {project.category[lang]}
            </div>

            <h1 className="mb-8 text-[clamp(3rem,6vw,5.5rem)] font-light leading-[0.95] tracking-[-0.04em]">
              {project.title[lang]}
            </h1>

            <p className="max-w-2xl text-[clamp(1.05rem,1.9vw,1.6rem)] font-light leading-[1.6] tracking-[0.005em] text-[#A1A1AA]">
  {project.description[lang]}
</p>
          </motion.div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-12 overflow-hidden rounded-[2rem] border border-white/10"
          >
            <img
              src={project.image}
              alt={project.imageAlt[lang]}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

           {/* CONTENT */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-3 lg:gap-20">
          {/* TEXT */}
          <motion.div {...fadeInUp} className="space-y-20 md:space-y-24 lg:col-span-2">
            <div>
              <h2 className="mb-5 text-3xl font-light tracking-[-0.03em] md:text-4xl">
                {lang === 'sl' ? 'Pregled projekta' : 'Project Overview'}
              </h2>
              <p className="text-lg font-light leading-[1.75] text-[#A1A1AA] md:text-xl">
                {project.overview[lang]}
              </p>
            </div>

            <div>
              <h2 className="mb-5 text-3xl font-light tracking-[-0.03em] md:text-4xl">
                {lang === 'sl' ? 'Izziv' : 'Challenge'}
              </h2>
              <p className="text-lg font-light leading-[1.75] text-[#A1A1AA] md:text-xl">
                {project.challenge[lang]}
              </p>
            </div>

            <div>
              <h2 className="mb-5 text-3xl font-light tracking-[-0.03em] md:text-4xl">
                {lang === 'sl' ? 'Rešitev' : 'Solution'}
              </h2>
              <p className="text-lg font-light leading-[1.75] text-[#A1A1AA] md:text-xl">
                {project.solution[lang]}
              </p>
            </div>

            {project.keyDecisions && (
  <div>
    <h2 className="mb-5 text-3xl font-light tracking-[-0.03em] md:text-4xl">
      {lang === 'sl' ? 'Ključne odločitve' : 'Key Decisions'}
    </h2>

    <div className="grid gap-4 md:grid-cols-2">
      {project.keyDecisions[lang].map((item, index) => (
        <div
          key={index}
          className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-5 md:p-6"
        >
          <div className="mb-3 text-xs uppercase tracking-[0.22em] text-[#CAA96A]/75">
            {String(index + 1).padStart(2, '0')}
          </div>
          <p className="text-sm font-light leading-[1.7] text-[#A1A1AA] md:text-base">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>
)}
          </motion.div>

          {/* SIDEBAR */}
          <motion.div {...fadeInUp}>
            <div className="sticky top-40 space-y-10">
              {project.projectScope && (
  <div>
    <h3 className="mb-6 text-xl font-light tracking-[-0.02em]">
      {lang === 'sl' ? 'Obseg projekta' : 'Project Scope'}
    </h3>

    <div className="space-y-3">
      {project.projectScope[lang].map((item) => (
        <div
          key={item}
          className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-light text-white/85"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
)}

              <div>
                <h3 className="mb-6 text-xl font-light tracking-[-0.02em]">
                  {lang === 'sl' ? 'Tehnologije' : 'Tech Stack'}
                </h3>

                <div className="space-y-3">
                  {project.techStack.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-light text-white/85"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS - Only for Coworking Case Study */}
      {project.id === 'coworking-case-study' && (
        <section className="relative px-6 pb-24 md:pb-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(202,169,106,0.015),transparent_40%)]" />
          <div className="relative mx-auto max-w-6xl">
            <motion.div {...fadeInUp}>
              <div className="mb-16 text-center">
                <h2 className="mb-3 text-3xl font-light tracking-[-0.03em] md:text-4xl">
                  {lang === 'sl' ? 'Pristop' : 'Approach'}
                </h2>
                <p className="text-sm font-light tracking-[0.02em] text-[#A1A1AA]/80">
                  {lang === 'sl' ? 'Od vpogleda do izvedbe' : 'From insight to execution'}
                </p>
              </div>

              <div className="relative grid gap-8 md:grid-cols-3 md:gap-12 lg:gap-16">
                <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent md:block" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-6 flex h-[104px] w-[104px] items-center justify-center rounded-full border border-white/10 bg-[#0B0B0F] transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_20px_rgba(202,169,106,0.15)]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#CAA96A]/10 to-transparent transition-all duration-500 group-hover:from-[#CAA96A]/15">
                      <Search className="text-[#CAA96A] transition-all duration-500 group-hover:scale-110" size={28} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-light tracking-[-0.02em]">
                    {lang === 'sl' ? 'Raziskava' : 'Research'}
                  </h3>
                  <p className="max-w-[280px] text-sm font-light leading-[1.7] text-[#A1A1AA]">
                    {lang === 'sl'
                      ? 'Potrebe občinstva, pozicioniranje in kontekst.'
                      : 'Audience needs, positioning, and context.'}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-6 flex h-[104px] w-[104px] items-center justify-center rounded-full border border-white/10 bg-[#0B0B0F] transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_20px_rgba(202,169,106,0.15)]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#CAA96A]/10 to-transparent transition-all duration-500 group-hover:from-[#CAA96A]/15">
                      <Layers className="text-[#CAA96A] transition-all duration-500 group-hover:scale-110" size={28} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-light tracking-[-0.02em]">
                    {lang === 'sl' ? 'Strategija' : 'Strategy'}
                  </h3>
                  <p className="max-w-[280px] text-sm font-light leading-[1.7] text-[#A1A1AA]">
                    {lang === 'sl'
                      ? 'Sporočilo, struktura in usmeritev.'
                      : 'Messaging, structure, and direction.'}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-6 flex h-[104px] w-[104px] items-center justify-center rounded-full border border-white/10 bg-[#0B0B0F] transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_20px_rgba(202,169,106,0.15)]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#CAA96A]/10 to-transparent transition-all duration-500 group-hover:from-[#CAA96A]/15">
                      <LayoutTemplate className="text-[#CAA96A] transition-all duration-500 group-hover:scale-110" size={28} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-light tracking-[-0.02em]">
                    {lang === 'sl' ? 'Izvedba' : 'Execution'}
                  </h3>
                  <p className="max-w-[280px] text-sm font-light leading-[1.7] text-[#A1A1AA]">
                    {lang === 'sl'
                      ? 'Koncept spletne strani in digitalna prisotnost.'
                      : 'Website concept and digital presence.'}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* RESULTS */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeInUp}>
            <div className="mb-16 max-w-3xl">
              <h2 className="mb-5 text-3xl font-light tracking-[-0.03em] md:text-4xl">
  {lang === 'sl' ? 'Rezultati in učinek' : 'Results & Impact'}
</h2>
              <p className="text-lg font-light leading-[1.75] text-[#A1A1AA]">
                {project.impactIntro[lang]}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 md:gap-7">
              {project.results[lang].map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative flex min-h-[200px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] ${
                    index === 0 ? 'p-9 md:p-10' : 'p-8 md:p-9'
                  }`}
                >
                  {index === 0 && (
                    <div className="mb-4 text-xs uppercase tracking-[0.26em] text-[#CAA96A]/60">
                      {lang === 'sl' ? 'Ključni rezultat' : 'Key Outcome'}
                    </div>
                  )}

                  <div className={`mb-5 font-light tracking-[-0.02em] text-[#CAA96A] ${
                    index === 0 ? 'text-4xl md:text-[2.75rem]' : 'text-3xl md:text-4xl'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <p className={`font-light leading-[1.75] text-[#A1A1AA] transition-colors duration-500 group-hover:text-[#B8B8C0] ${
                    index === 0 ? 'text-lg md:text-xl' : 'text-base md:text-lg'
                  }`}>
                    {result}
                  </p>

                  <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#CAA96A]/[0.02] blur-3xl transition-all duration-700 group-hover:bg-[#CAA96A]/[0.04]" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ANALYTICS */}
      {project.analytics && (
        <section className="relative px-6 pb-24 md:pb-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(202,169,106,0.03),transparent_40%)]" />
          <div className="relative mx-auto max-w-6xl">
            <motion.div {...fadeInUp}>
              <div className="mb-14 max-w-3xl">
                <h2 className="mb-4 text-3xl font-light tracking-[-0.03em] md:text-4xl">
                  {project.analytics.title[lang]}
                </h2>

                <p className="text-lg font-light leading-[1.75] text-[#A1A1AA]/90 md:text-xl">
                  {project.analytics.intro[lang]}
                </p>
              </div>

              <div className="mb-14 grid gap-4 sm:grid-cols-3 md:gap-6">
                <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/[0.15] hover:bg-white/[0.04] md:p-8">
                  <div className="mb-3 text-[2.2rem] font-light tracking-[-0.04em] text-white md:mb-4 md:text-5xl">
                    100+
                  </div>
                  <p className="text-[0.825rem] leading-[1.6] text-[#A1A1AA]/90 md:text-[0.9rem] md:leading-[1.65]">
                    {lang === 'sl'
                      ? 'aktivnih uporabnikov v prvih dneh po objavi'
                      : 'active users in the first days after launch'}
                  </p>
                  <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#CAA96A]/[0.015] blur-2xl transition-all duration-700 group-hover:bg-[#CAA96A]/[0.03]" />
                </div>

                <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/[0.15] hover:bg-white/[0.04] md:p-8">
                  <div className="mb-3 text-[2.2rem] font-light tracking-[-0.04em] text-white md:mb-4 md:text-5xl">
                    3+
                  </div>
                  <p className="text-[0.825rem] leading-[1.6] text-[#A1A1AA]/90 md:text-[0.9rem] md:leading-[1.65]">
                    {lang === 'sl'
                      ? 'digitalne prodaje brez plačanih oglasov'
                      : 'digital product sales without paid ads'}
                  </p>
                  <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#CAA96A]/[0.015] blur-2xl transition-all duration-700 group-hover:bg-[#CAA96A]/[0.03]" />
                </div>

                <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/[0.15] hover:bg-white/[0.04] md:p-8">
                  <div className="mb-3 text-[2.2rem] font-light tracking-[-0.04em] text-white md:mb-4 md:text-5xl">
                    600 - 700%
                  </div>
                  <p className="text-[0.825rem] leading-[1.6] text-[#A1A1AA]/90 md:text-[0.9rem] md:leading-[1.65]">
                    {lang === 'sl'
                      ? 'rast prometa v primerjavi s prejšnjo stranjo'
                      : 'traffic growth compared to the previous site'}
                  </p>
                  <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#CAA96A]/[0.015] blur-2xl transition-all duration-700 group-hover:bg-[#CAA96A]/[0.03]" />
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {project.analytics.images.map((item, index) => (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] ${
                      index === 0 ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-t-[1.75rem] bg-black">
                      <img
                        src={item.src}
                        alt={item.alt[lang]}
                        className="w-full h-auto object-contain cursor-pointer md:cursor-default"
                        onClick={() => {
                          if (window.innerWidth < 768) {
                            setLightboxImage({ src: item.src, alt: item.alt[lang] });
                          }
                        }}
                      />
                      <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1.5 text-[0.7rem] tracking-wider text-white/70 backdrop-blur-sm md:hidden">
                        {lang === 'sl' ? 'Povečaj' : 'Tap to enlarge'}
                      </div>
                    </div>

                    <div className="p-6 md:p-7">
                      <div className="mb-3 text-sm uppercase tracking-[0.22em] text-[#CAA96A]">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <h3 className="mb-3 text-xl font-light tracking-[-0.02em] md:text-2xl">
                        {item.title[lang]}
                      </h3>

                      <p className="max-w-3xl text-sm font-light leading-[1.7] text-[#A1A1AA] md:text-[0.98rem]">
                        {item.description[lang]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* NEXT PROJECT */}
      <section className="border-t border-white/10 px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 md:gap-16">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-[#CAA96A]/70">
              {lang === 'sl' ? 'Naslednji projekt' : 'Next Project'}
            </div>

            <h3 className="mb-4 text-3xl font-light tracking-[-0.03em] md:text-4xl">
              {nextProject.title[lang]}
            </h3>

            <p className="mb-8 font-light text-[#A1A1AA]">
              {nextProject.category[lang]}
            </p>

            <Button to={`${lang === 'sl' ? '/sl' : ''}/project/${nextProject.id}`} variant="primary">
              {lang === 'sl' ? 'Poglej študijo primera' : 'View Case Study'} <ArrowRight size={18} />
            </Button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={nextProject.image}
              alt={nextProject.title[lang]}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-white/[0.02] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div {...fadeInUp}>
            <h2 className="mb-6 text-4xl font-light tracking-[-0.03em] md:text-5xl">
              {lang === 'sl' ? 'Pripravljen začeti projekt?' : 'Ready to start your project?'}
            </h2>

            <p className="mb-10 text-lg font-light leading-[1.65] text-[#A1A1AA] md:text-xl">
              {lang === 'sl'
                ? 'Zgradiva nekaj premišljenega, jasnega in zapomnljivega.'
                : "Let's build something thoughtful, clear, and memorable."}
            </p>

            <Button to={lang === 'sl' ? '/sl/contact' : '/contact'} variant="primary">
              {lang === 'sl' ? 'Stopi v stik' : 'Get in Touch'}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX MODAL - Mobile Only */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:hidden"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
            aria-label={lang === 'sl' ? 'Zapri povečavo' : 'Close lightbox'}
          >
            <X size={20} />
          </button>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
    </>
  );
}