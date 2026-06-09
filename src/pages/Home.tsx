import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiStripe,
  SiGoogleanalytics,
  SiReactrouter,
  SiVite,
}
from 'react-icons/si';
import { Search, Hammer } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, Zap, ShoppingCart, TrendingUp } from 'lucide-react';
import Button from '../components/Button';
import Seo from '../components/Seo';
import { projects } from '../data/projects';
import { useLang } from '../lib/language';
import { homeContent } from '../content/home';
import { seoPages } from '../lib/seoConfig';

const toolIcons = [SiReact, SiTailwindcss, SiFramer, SiStripe, Search, SiGoogleanalytics, SiReactrouter, Hammer, SiVite];
const serviceIcons = [Palette, Zap, ShoppingCart, TrendingUp];

export default function Home() {
  const lang = useLang();
  const c = homeContent[lang];
  const seoContent = c.seoBlock;

  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(1);

  const contactPath = lang === 'sl' ? '/sl/contact' : '/contact';
  const aboutPath = lang === 'sl' ? '/sl/about' : '/about';

  const nextProject = () => {
    setDirection(1);
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === c.process.steps.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [c.process.steps.length]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 }
  };

  const seoMeta = seoPages.home[lang];

  return (
    <>
      <Seo meta={seoMeta} lang={lang} />
    <div className="bg-[#0B0B0F] text-white">
    {/* HERO */}
<section className="relative flex min-h-[100svh] items-start px-6 pt-28 pb-14 md:min-h-[105vh] md:items-center md:px-6 md:pt-44 md:pb-36">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(202,169,106,0.07),transparent_38%)]" />
  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_22%,transparent_78%,rgba(255,255,255,0.015))]" />
  <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-start gap-10 md:items-center md:gap-20 md:grid-cols-[1.05fr_0.95fr]">
    {/* LEFT */}
    <div className="flex flex-col items-start text-left">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.05 }}
        className="mb-7 ml-1 text-[11px] uppercase tracking-[0.3em] text-[#CAA96A]/70 md:mb-10 md:ml-2 md:tracking-[0.34em]"
      >
        {c.hero.eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95 }}
        className="max-w-[300px] tracking-[-0.04em] leading-[0.92] md:max-w-none md:leading-[0.95]"
      >
        <span className="block text-white text-[clamp(3.2rem,15vw,7.4rem)]" style={{ fontWeight: 300 }}>
          {c.hero.line1}
        </span>
        <span className="mt-2 block text-[#CAA96A] text-[clamp(4rem,16vw,8.6rem)] leading-[0.9]" style={{ fontWeight: 400 }}>
          {c.hero.line2}
        </span>
      </motion.h1>
    </div>
   {/* RIGHT */}
<div className="flex flex-col items-start text-left md:mt-24 lg:mt-24">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.24 }}
    className="mb-5 h-px w-12 bg-[#CAA96A]/35 md:mb-6"
  />

  <motion.p
    initial={{ opacity: 0, y: 28 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.32 }}
    className="w-full max-w-[330px] text-left text-[1rem] font-light leading-[1.7] tracking-[0.01em] text-[#A1A1AA] md:max-w-[420px] md:text-[clamp(0.875rem,1.3vw,1.05rem)] md:leading-[1.7]"
  >
    {c.hero.body1}
    <br /><br />
    {c.hero.body2}
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 28 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.46 }}
    className="mt-16 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-14 md:items-start md:justify-start"
  >
    <Button to={contactPath} variant="primary" className="w-full max-w-[220px]">
      {c.hero.cta1}
    </Button>
    <Button to={aboutPath} variant="secondary" className="w-full max-w-[220px]">
      {c.hero.cta2}
    </Button>
  </motion.div>
</div>
  </div>
</section>

      {/* RECENT WORK */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeInUp} className="mb-20 text-center md:mb-24">
            <h2 className="mb-6 text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.04em] leading-[1.05]" style={{ fontWeight: 300 }}>
              {c.recentWork.heading}
            </h2>
            <p className="mx-auto max-w-3xl text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
              {c.recentWork.sub}
            </p>
          </motion.div>

          <div
            className="relative min-h-[620px] md:min-h-[700px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={projects[currentProject].id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50, y: 16 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50, y: -16 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <Link
                  to={`${lang === 'sl' ? '/sl' : ''}/project/${projects[currentProject].id}`}
                  className="group block"
                >
                  <div className="mb-8 overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03]">
                    <img
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title[lang]}
                      style={{ objectPosition: projects[currentProject].imagePosition || "center top" }}
                      className="h-[280px] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.02] md:h-[360px] lg:h-[420px]"
                    />
                  </div>

                  <div className="max-w-4xl">
                    <div className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[#CAA96A]">
                      {projects[currentProject].category[lang]}
                    </div>

                    <h3 className="mb-5 text-3xl tracking-[-0.03em] transition-colors duration-500 group-hover:text-[#CAA96A] md:text-5xl" style={{ fontWeight: 400 }}>
                      {projects[currentProject].title[lang]}
                    </h3>

                    <p className="text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
                      {projects[currentProject].description[lang]}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => {
                  setDirection(index > currentProject ? 1 : -1);
                  setCurrentProject(index);
                }}
                aria-label={`Go to ${project.title[lang]}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'w-8 bg-[#CAA96A]'
                    : 'w-2.5 bg-white/20 hover:bg-white/35'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OFFER PREVIEW */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mb-20 text-center md:mb-24"
          >
            <h2 className="mb-6 text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.04em] leading-[1.05]" style={{ fontWeight: 300 }}>
              {c.whatIBuild.heading}
            </h2>
            <p className="mx-auto max-w-3xl text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
              {c.whatIBuild.sub}
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {c.whatIBuild.cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.07 }}
                className={`rounded-[1.75rem] p-8 md:p-9 ${
                  index === 1
                    ? 'border border-[#CAA96A]/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))]'
                    : 'border border-white/10 bg-white/[0.02]'
                }`}
              >
                <div className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-[#CAA96A]">
                  {card.price}
                </div>
                <h3 className="mb-4 text-2xl tracking-[-0.03em] md:text-3xl" style={{ fontWeight: 400 }}>
                  {card.title}
                </h3>
                <p className="text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-10 max-w-3xl text-center text-sm font-light leading-[1.7] text-white/40 md:text-base"
          >
            {c.whatIBuild.footnote}
          </motion.p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mb-24 text-center md:mb-28"
          >
            <h2 className="mb-6 text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.04em] leading-[1.05]" style={{ fontWeight: 300 }}>
              {c.services.heading}
            </h2>
            <p className="text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
              {c.services.sub}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-14"
          >
            {c.services.items.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <div
                  key={index}
                  className="group flex items-start gap-5 border-t border-white/10 pt-10 transition-all duration-500"
                >
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#CAA96A]/20 bg-[#CAA96A]/8">
                    <Icon size={20} strokeWidth={1.6} className="text-[#CAA96A]" />
                  </div>
                  <div>
                    <div className="mb-2 text-xs uppercase tracking-[0.24em] text-[#CAA96A]/80">
                      {c.services.labels[index]}
                    </div>
                    <h3 className="mb-4 text-2xl tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#CAA96A] md:text-3xl" style={{ fontWeight: 400 }}>
                      {service.title}
                    </h3>
                    <p className="max-w-3xl text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

    {/* PROCESS */}
<section className="border-t border-white/10 px-6 py-20 md:py-24">
  <div className="mx-auto max-w-7xl">
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85 }}
      className="mb-20 text-center"
    >
      <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.04em] leading-[1.05]" style={{ fontWeight: 300 }}>
        {c.process.heading}
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
        {c.process.sub}
      </p>
    </motion.div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {c.process.steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: index * 0.08 }}
          className="group rounded-[2rem] border border-white/10 bg-white/[0.02] p-10 transition duration-300 hover:border-white/20 hover:bg-white/[0.03]"
        >
          <div className="mb-8 text-[11px] uppercase tracking-[0.34em] text-[#CAA96A]">
            Step {step.number}
          </div>
          <h3 className="mb-6 text-3xl tracking-[-0.03em] text-white" style={{ fontWeight: 400 }}>
            {step.title}
          </h3>
          <p className="text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>

    <motion.p
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto mt-14 max-w-3xl text-center text-base font-light leading-[1.8] text-[#A1A1AA]"
    >
      {c.process.footnote}
    </motion.p>
  </div>
</section>

      {/* ABOUT PREVIEW */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#CAA96A]">
                {c.about.eyebrow}
              </span>
            </div>

            <h2
              className="mx-auto mb-8 max-w-4xl text-[clamp(2.4rem,4.8vw,4.8rem)] leading-[0.98] tracking-[-0.045em] text-white"
              style={{ fontWeight: 300 }}
            >
              {c.about.heading1}
              <br />
              {c.about.heading2}{' '}
              <span className="text-[#CAA96A]">{c.about.highlight}</span>
            </h2>

            <p className="mx-auto mb-12 max-w-3xl text-[clamp(0.95rem,1.3vw,1.08rem)] font-light leading-[1.75] text-[#A1A1AA]">
              {c.about.body}
            </p>

            <Button to={aboutPath} variant="secondary">
              {c.about.cta}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* TOOLS */}
<section className="border-t border-white/10 px-6 py-20 md:py-24">
  <div className="mx-auto max-w-5xl">
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85 }}
      className="mb-16 text-center"
    >
      <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.04em] leading-[1.05]" style={{ fontWeight: 300 }}>
        {c.tools.heading}
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
        {c.tools.sub}
      </p>
    </motion.div>

    <div className="mx-auto grid max-w-[1120px] justify-center gap-x-16 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {c.tools.items.map((tool, index) => {
        const Icon = toolIcons[index];
        return (
          <motion.button
            key={tool.name}
            type="button"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            className="group flex w-[280px] items-start gap-4 rounded-2xl px-2 py-3 text-left transition duration-300 hover:bg-white/[0.02]"
          >
            <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.02] text-[#CAA96A] transition duration-300 group-hover:border-[#CAA96A]/20 group-hover:bg-[#CAA96A]/[0.04]">
              <Icon size={20} strokeWidth={1.8} />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-medium tracking-[-0.02em] text-white transition duration-300 group-hover:text-white">
                {tool.name}
              </h3>
              <p className="mt-1 text-sm font-light leading-6 text-[#A1A1AA] transition duration-300 group-hover:text-[#CFCFD4]">
                {tool.description}
              </p>
            </div>
          </motion.button>
        );
      })}
    </div>
  </div>
</section>

   {/* SEO BLOCK */}
<section className="border-t border-white/10 px-6 py-24 md:py-28">
  <div className="mx-auto max-w-4xl">
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
      className="text-center"
    >
      <div className="mb-5 inline-flex items-center justify-center">
        <span className="text-[0.72rem] uppercase tracking-[0.28em] text-[#CAA96A]">
          {lang === 'sl' ? 'Spletna prisotnost' : 'Web presence'}
        </span>
      </div>

      <h2
        className="mx-auto max-w-4xl text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.04em] text-white"
        style={{ fontWeight: 300 }}
      >
        {seoContent.heading}
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-[clamp(1rem,1.45vw,1.18rem)] font-light leading-[1.75] text-[#D4D4D8]">
        {seoContent.paragraphs[0]}
      </p>

      <div className="mx-auto mt-10 h-px w-16 bg-[#CAA96A]/40" />

      <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2 md:text-left">
        <p className="text-[0.98rem] font-light leading-[1.8] text-[#A1A1AA]">
          {seoContent.paragraphs[1]}
        </p>

        <p className="text-[0.98rem] font-light leading-[1.8] text-[#A1A1AA]">
          {seoContent.paragraphs[2]}
        </p>
      </div>
    </motion.div>
  </div>
</section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="mx-auto mb-10 max-w-4xl text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.04em]" style={{ fontWeight: 300 }}>
              {c.cta.heading}
            </h2>
            <p className="mx-auto mb-14 max-w-3xl text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
              {c.cta.sub}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button to={contactPath} variant="primary">
                {c.cta.cta1}
              </Button>
              <Button to={aboutPath} variant="secondary">
                {c.cta.cta2}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
