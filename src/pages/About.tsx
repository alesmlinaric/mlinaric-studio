import { motion } from 'framer-motion';
import { Music, Palette, Code } from 'lucide-react';
import Seo from '../components/Seo';
import { useLang } from '../lib/language';
import { aboutContent } from '../content/about';
import { seoPages } from '../lib/seoConfig';

const journeyIcons = [Music, Palette, Code];

export default function About() {
  const lang = useLang();
  const c = aboutContent[lang];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  };

  return (
    <>
      <Seo meta={seoPages.about[lang]} lang={lang} />
    <div className="bg-[#0B0B0F] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[80svh] items-start justify-center overflow-hidden px-6 pt-24 pb-10 md:min-h-[105vh] md:items-center md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(202,169,106,0.07),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_22%,transparent_78%,rgba(255,255,255,0.015))]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-[11px] uppercase tracking-[0.28em] text-[#CAA96A]/70 md:mb-8 md:tracking-[0.34em]"
          >
            {c.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95 }}
            className="max-w-[320px] text-center tracking-[-0.04em] leading-[0.94] md:max-w-[980px] md:leading-[0.95]"
          >
            <span
              className="block text-[clamp(3.1rem,15vw,7.4rem)] text-white"
              style={{ fontWeight: 300 }}
            >
              {c.hero.line1}
            </span>

            <span
              className="mt-2 block text-[clamp(2.2rem,11vw,4rem)] leading-[1.02] text-[#CAA96A]"
              style={{ fontWeight: 400, letterSpacing: '-0.035em' }}
            >
              {c.hero.line2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-12 max-w-[300px] text-center text-[1rem] font-light leading-[1.8] tracking-[0.01em] text-[#A1A1AA] md:mt-10 md:max-w-[620px] md:text-[clamp(0.95rem,1.1vw,1.02rem)]"
          >
            {c.hero.sub}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.08 }}
            className="flex flex-col items-center"
          >
            <div className="mt-8 h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent md:w-20" />
            <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-white/50 md:text-[12px]">
              {c.hero.credit}
            </p>
          </motion.p>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="border-t border-white/10 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="mb-20 text-center">
            <h2
              className="mb-6 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.04em]"
              style={{ fontWeight: 300 }}
            >
              {c.journey.heading}
            </h2>
            <p className="text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
              {c.journey.sub}
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-3">
            {c.journey.stages.map((stage, index) => {
              const Icon = journeyIcons[index];
              return (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className="relative text-center"
                >
                  <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border border-[#CAA96A]/25 bg-[#CAA96A]/10">
                    <Icon className="text-[#CAA96A]" size={32} strokeWidth={1.5} />
                  </div>

                  <h3 className="mb-3 text-2xl tracking-[-0.02em]" style={{ fontWeight: 400 }}>
                    {stage.label}
                  </h3>

                  <p className="mx-auto max-w-[280px] text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
                    {stage.description}
                  </p>

                  {index < c.journey.stages.length - 1 && (
                    <div className="absolute left-[64%] top-10 hidden h-px w-[72%] bg-gradient-to-r from-[#CAA96A]/45 to-transparent md:block" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="border-t border-white/10 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeInUp} className="mb-20 text-center">
            <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              {c.story.eyebrow}
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.04em]"
              style={{ fontWeight: 300 }}
            >
              {c.story.heading.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < c.story.heading.split('\n').length - 1 && <br className="hidden md:block" />}
                </span>
              ))}
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-[clamp(0.95rem,1.2vw,1.05rem)] font-light leading-[1.75] text-[#A1A1AA]">
              {c.story.intro.split(/<w>|<\/w>/).map((part, i) =>
                i % 2 === 1 ? <span key={i} className="text-white">{part}</span> : part
              )}
            </p>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            {/* BLOCK 1 */}
            <motion.div
              {...fadeInUp}
              className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16"
            >
              <div className="mx-auto max-w-[380px] overflow-hidden rounded-[1.75rem] border border-white/10 md:max-w-[420px]">
                <img
                  src="/ales.jpg"
                  alt="Aleš Mlinarič – designer and developer behind Mlinaric Studio"
                  className="h-[400px] w-full object-cover md:h-[440px]"
                />
              </div>

              <div>
                <span className="mb-4 block text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
                  {c.story.blocks[0].eyebrow}
                </span>
                <h3 className="mb-6 text-3xl tracking-[-0.03em] md:text-5xl" style={{ fontWeight: 400 }}>
                  {c.story.blocks[0].heading}
                </h3>
                <p className="text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
                  {c.story.blocks[0].body}
                </p>
              </div>
            </motion.div>

            {/* BLOCK 2 */}
            <motion.div
              {...fadeInUp}
              className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-16"
            >
              <div>
                <span className="mb-4 block text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
                  {c.story.blocks[1].eyebrow}
                </span>
                <h3 className="mb-6 text-3xl tracking-[-0.03em] md:text-5xl" style={{ fontWeight: 400 }}>
                  {c.story.blocks[1].heading}
                </h3>
                <p className="text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
                  {c.story.blocks[1].body}
                </p>
              </div>

              <div className="flex items-center justify-start">
                <div className="max-w-md border-l border-[#D4AF37]/40 pl-6">
                  <p className="text-base font-light leading-[1.8] text-[#E4E4E7] md:text-lg">
                    {c.story.blocks[1].quote}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* BLOCK 3 */}
            <motion.div
              {...fadeInUp}
              className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-16"
            >
              <div>
                <span className="mb-4 block text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
                  {c.story.blocks[2].eyebrow}
                </span>
                <h3 className="mb-6 text-3xl tracking-[-0.03em] md:text-5xl" style={{ fontWeight: 400 }}>
                  {c.story.blocks[2].heading}
                </h3>
                <p className="text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
                  {c.story.blocks[2].body}
                </p>
              </div>

              <div className="flex items-center justify-start md:justify-end">
                <div className="max-w-md border-l border-[#D4AF37]/40 pl-6">
                  <p className="text-base font-light leading-[1.8] text-[#E4E4E7] md:text-lg">
                    {c.story.blocks[2].quote}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-t border-white/10 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="mb-20 text-center">
            <h2
              className="mb-6 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.04em]"
              style={{ fontWeight: 300 }}
            >
              {c.capabilities.heading}
            </h2>
            <p className="mx-auto max-w-2xl text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
              {c.capabilities.sub}
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {c.capabilities.cards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <span className="mb-4 block text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
                  {item.number} / {item.label}
                </span>

                <h3
                  className="mb-4 text-2xl tracking-[-0.03em] md:text-3xl"
                  style={{ fontWeight: 400 }}
                >
                  {item.title}
                </h3>

                <p className="mb-8 max-w-xl text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {item.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/80"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-t border-white/10 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="mb-20 text-center">
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.04em]"
              style={{ fontWeight: 300 }}
            >
              {c.philosophy.heading}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
              {c.philosophy.sub}
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-3">
            {c.philosophy.principles.map((principle) => (
              <motion.div key={principle.title} {...fadeInUp}>
                <span className="mb-4 block text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
                  {principle.label}
                </span>

                <h3 className="mb-4 text-2xl" style={{ fontWeight: 400 }}>
                  {principle.title}
                </h3>

                <p className="text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
                  {principle.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
