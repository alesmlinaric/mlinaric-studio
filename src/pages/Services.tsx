import { motion } from 'framer-motion';
import { Palette, Music, ShoppingCart, ArrowRight, Check } from 'lucide-react';
import Button from '../components/Button';
import Seo from '../components/Seo';
import { useLang } from '../lib/language';
import { servicesContent } from '../content/services';
import { seoPages } from '../lib/seoConfig';

const serviceIcons = [Music, Palette, ShoppingCart];

export default function Services() {
  const lang = useLang();
  const c = servicesContent[lang];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: 'easeOut' },
  };

  const contactPath = lang === 'sl' ? '/sl/contact' : '/contact';
  const projectsPath = lang === 'sl' ? '/sl/projects' : '/projects';

  return (
    <>
      <Seo meta={seoPages.services[lang]} lang={lang} />
    <div className="bg-[#0a0a0a] text-white">
      {/* HERO */}
<section className="relative overflow-hidden px-6 pt-24 pb-24 md:pt-40 md:pb-32">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,162,58,0.16),transparent_45%)]" />
  <div className="relative mx-auto max-w-6xl">
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="grid items-end gap-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]"
    >
      <div>
        <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#d6a23a]">
          {c.hero.eyebrow}
        </p>
        <h1 className="leading-[0.95] tracking-[-0.04em]">
          <span className="block text-white text-[clamp(3.4rem,8vw,7.4rem)]" style={{ fontWeight: 300 }}>
            {c.hero.line1}
          </span>
          <span className="mt-3 block text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.02] text-[#CAA96A]" style={{ fontWeight: 400, letterSpacing: '-0.035em' }}>
            {c.hero.line2}
          </span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-10 max-w-[760px] text-left text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] tracking-[0.01em] text-[#A1A1AA]"
        >
          {c.hero.sub}
        </motion.p>
        <div className="mt-12 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <Button to={contactPath} className="w-full max-w-[220px]">
            {c.hero.cta1}
          </Button>
          <Button to={projectsPath} variant="secondary" className="w-full max-w-[220px]">
            {c.hero.cta2}
          </Button>
        </div>
      </div>

      <div className="max-w-sm lg:ml-auto lg:translate-y-18">
        <div className="rounded-[1.75rem] border border-white/8 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#d6a23a]">
            {c.hero.card.eyebrow}
          </p>
          <div className="mt-6 space-y-5">
            {c.hero.card.items.map((item, index) => (
              <div key={index}>
                {index > 0 && <div className="mb-5 h-px w-full bg-white/8" />}
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-white/55">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 h-px w-full bg-white/8" />
          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-white/35">
            {c.hero.card.tags.map((tag, index) => (
              <span key={index}>
                {index > 0 && <span className="mr-3">/</span>}
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* SERVICES */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="mb-14 max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#d6a23a]">
              {c.services.eyebrow}
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.04em] leading-[1.05]" style={{ fontWeight: 300 }}>
              {c.services.heading}
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {c.services.items.map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-300 hover:border-[#d6a23a]/40 hover:bg-white/[0.045]"
                >
                  <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <Icon className="h-6 w-6 text-[#d6a23a]" />
                  </div>

                  <h3 className="text-2xl leading-snug" style={{ fontWeight: 400 }}>
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
                    {service.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                        <Check className="mt-[2px] h-4 w-4 shrink-0 text-[#d6a23a]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="mb-16 max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#d6a23a]">
              {c.process.eyebrow}
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.04em] leading-[1.05]" style={{ fontWeight: 300 }}>
              {c.process.heading}
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {c.process.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
              >
                <p className="text-sm tracking-[0.2em] text-[#d6a23a]">{step.number}</p>
                <h3 className="mt-4 text-2xl" style={{ fontWeight: 400 }}>{step.title}</h3>
                <p className="mt-4 max-w-lg text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="mb-16 max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#d6a23a]">
              {c.pricing.eyebrow}
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.04em] leading-[1.05]" style={{ fontWeight: 300 }}>
              {c.pricing.heading}
            </h2>
            <p className="mt-5 text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
              {c.pricing.sub}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {c.pricing.items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="text-2xl" style={{ fontWeight: 400 }}>{item.title}</h3>
                <p className="mt-4 text-3xl text-[#d6a23a]" style={{ fontWeight: 400 }}>{item.price}</p>
                <p className="mt-5 text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">{item.description}</p>

                <ul className="mt-8 space-y-3">
                  {item.includes.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                      <Check className="mt-[2px] h-4 w-4 shrink-0 text-[#d6a23a]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* CTA */}
<section className="px-6 pb-24 md:pb-32">
  <div className="mx-auto max-w-6xl">
    <motion.div
      {...fadeInUp}
      className="px-8 py-14 text-center md:px-16 md:py-20"
    >
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#d6a23a]">
        {c.cta.eyebrow}
      </p>

      <h2
        className="mx-auto max-w-3xl text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.04em]"
        style={{ fontWeight: 300 }}
      >
        {c.cta.heading}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
        {c.cta.sub}
      </p>

      <div className="mt-10 flex justify-center">
        <Button to={contactPath}>{c.cta.ctaLabel}</Button>
      </div>
    </motion.div>
  </div>
</section>
    </div>
    </>
  );
}
