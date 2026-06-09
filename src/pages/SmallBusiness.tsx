import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Monitor,
  Smartphone,
  Search,
  MessageSquare,
  LayoutGrid as Layout,
  Zap,
} from 'lucide-react';
import Button from '../components/Button';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

const problems = [
  {
    number: '01',
    title: 'Outdated or generic presentation',
    body: 'A website that looks like it was built in 2015 — or assembled from a free template — says more about your business than you realize. First impressions happen before anyone reads a word.',
  },
  {
    number: '02',
    title: 'No clear direction for the visitor',
    body: "When people land on your site and don't immediately understand what you do, who it's for, or what to do next, they leave. Unclear structure costs real inquiries every week.",
  },
  {
    number: '03',
    title: 'Weak on mobile, invisible on search',
    body: "Most visitors arrive on a phone. If the experience feels broken, or if your business doesn’t appear when someone searches nearby — you’re losing ground to competitors who do.",
  },
];

const solutionPoints = [
  {
    icon: Layout,
    label: 'Clear messaging',
    desc: 'Every page opens with a direct, structured answer to what you do and why it matters.',
  },
  {
    icon: Smartphone,
    label: 'Mobile-first build',
    desc: 'Designed to feel premium and fully functional on every screen size, from the first pixel.',
  },
  {
    icon: Search,
    label: 'SEO foundations',
    desc: 'Proper structure, metadata, and technical setup so search engines can find and surface your business.',
  },
  {
    icon: MessageSquare,
    label: 'Contact flow',
    desc: 'A clean path from interest to inquiry. No friction, no confusion — just a clear next step.',
  },
  {
    icon: Monitor,
    label: 'Modern presentation',
    desc: 'Refined visuals that reflect the quality of your work and build trust before a word is spoken.',
  },
  {
    icon: Zap,
    label: 'Strategic structure',
    desc: 'Pages organized around how people actually think and decide — not just how information is categorized.',
  },
];

const offers = [
  {
    tier: 'One-Page',
    price: 'from 250€',
    desc: 'A focused, single-page website that presents everything a visitor needs to understand your offer and get in touch.',
    idealFor: 'Freelancers, service providers, coaches, personal brands',
    features: [
      'Custom design, not a template',
      'Mobile responsive',
      'Contact section',
      'Basic SEO setup',
      'Fast loading',
    ],
  },
  {
    tier: 'Multi-Page',
    price: 'from 500€',
    desc: 'A full website with dedicated pages for your services, work, and story — structured to guide visitors from discovery to inquiry.',
    idealFor: 'Studios, salons, local businesses, small agencies, restaurants',
    features: [
      'Everything in One-Page',
      'Multiple structured pages',
      'Project or service showcase',
      'About & contact pages',
      'Navigation and page transitions',
    ],
    highlighted: true,
  },
  {
    tier: 'Custom Build',
    price: 'from 800€',
    desc: 'A fully custom website with advanced functionality, integrations, or e-commerce — built precisely for your specific needs.',
    idealFor: 'Businesses needing bookings, sales, automations, or complex flows',
    features: [
      'Everything in Multi-Page',
      'Custom integrations',
      'E-commerce or booking logic',
      'Analytics & conversion tracking',
      'Extended project scope',
    ],
  },
];

const workProjects = [
  {
    id: 'ion-delic',
    image: '/ion-delic-website-homepage.png',
    category: 'Digital Presence & Sales',
    title: 'Ion Delić',
    desc: 'A refined portfolio and digital sales platform designed to turn visitors into buyers — built with clear structure, smooth checkout, and strong search visibility.',
    result: '600–700% increase in website traffic after launch',
  },
  {
    id: 'zm-automations',
    image: '/ziga-mlinaric-website-homepage.png',
    category: 'Service Brand Website',
    title: 'ZM Automations',
    desc: 'A conversion-focused website for an AI automation business. Complex services made clear, trust built through visual quality, and a structured path toward inquiry.',
    result: 'Stronger brand positioning and clearer conversion path',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We start with what matters: your business, your audience, and what a successful website should actually do for you.',
  },
  {
    number: '02',
    title: 'Structure',
    desc: 'Before design begins, we define the page architecture — what goes where and why — to ensure clarity drives every decision.',
  },
  {
    number: '03',
    title: 'Design & Development',
    desc: 'Custom design built in code. No templates, no shortcuts. Every detail is considered and every interaction is intentional.',
  },
  {
    number: '04',
    title: 'Launch',
    desc: 'A clean handoff, fully reviewed across devices and browsers. Your site goes live ready to represent your business properly.',
  },
];

const trustPoints = [
  'Custom-built, not template-based',
  'Mobile-first and fast-loading',
  'Structured for clarity and inquiries',
];

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export default function SmallBusiness() {
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || workProjects.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentProject((prev) => (prev + 1) % workProjects.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="bg-[#0B0B0F] text-white">
      {/* MINIMAL LANDING HEADER */}
     <header className="fixed left-0 right-0 top-0 z-50">
  <div className="border-b border-white/5 bg-[#0B0B0F]/58 backdrop-blur-md transition-all duration-500">
    <div className="pointer-events-none absolute inset-x-0 top-full h-12 bg-gradient-to-b from-[#0B0B0F]/28 via-[#0B0B0F]/10 to-transparent" />

    <div className="relative mx-auto max-w-[1240px] px-4 py-2.5 md:px-0 md:py-2 2xl:max-w-[1320px]">
      <div className="flex items-center justify-between">
        <Link
          to="/"
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

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection('selected-work')}
            className="hidden h-8 items-center justify-center rounded-full border border-white/15 px-4 text-[14px] font-light tracking-[0.01em] text-white/70 transition-colors duration-300 hover:text-white md:inline-flex"
          >
            Selected Work
          </button>

          <Button to="/contact" variant="primary" className="h-8 px-4 text-[14px]">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  </div>
</header>

      {/* HERO */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] justify-center">
  <div className="max-w-[980px] text-center">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.05 }}
      className="mb-8 text-[11px] uppercase tracking-[0.32em] text-[#CAA96A]/70"
    >
      Mlinaric Studio — Small Business
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.95 }}
      className="mx-auto mb-8 max-w-[980px] text-[clamp(2.8rem,6.7vw,6.3rem)] leading-[0.98] tracking-[-0.045em]"
      style={{ fontWeight: 300 }}
    >
      Websites that bring{' '}
      <span className="text-[#CAA96A]">clarity, trust,</span>{' '}
      and new inquiries.
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.28 }}
      className="mx-auto mb-12 max-w-[700px] text-[clamp(1rem,1.4vw,1.1rem)] font-light leading-[1.8] text-[#A1A1AA]"
    >
      Clean, modern websites for small businesses that need more than just an online presence —
      they need structure, trust, and a clearer path to inquiry.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.42 }}
      className="flex flex-col items-center justify-center gap-4 sm:flex-row"
    >
      <Button to="/contact" variant="primary">
        Start a Project
      </Button>

      <button
        type="button"
        onClick={() => scrollToSection('selected-work')}
        className="inline-flex items-center justify-center rounded-full border border-white/12 px-7 py-4 text-[15px] font-medium text-white transition duration-300 hover:border-white/20 hover:bg-white/[0.03]"
      >
        View Selected Work
      </button>
    </motion.div>
  </div>
</div>

      {/* PROBLEM */}
      <section id="problem" className="border-t border-white/10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="mb-16 md:mb-20">
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[#CAA96A]/70">
              The problem
            </p>
            <h2
              className="max-w-[680px] text-[clamp(1.95rem,4vw,3.4rem)] leading-[1.06] tracking-[-0.04em]"
              style={{ fontWeight: 300 }}
            >
              Many small business websites exist — but do very little.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {problems.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-8 md:p-9"
              >
                <div className="mb-6 text-[0.72rem] uppercase tracking-[0.3em] text-[#CAA96A]/60">
                  {item.number}
                </div>
                <h3
                  className="mb-4 text-xl leading-[1.25] tracking-[-0.025em] text-white md:text-2xl"
                  style={{ fontWeight: 400 }}
                >
                  {item.title}
                </h3>
                <p className="text-[clamp(0.875rem,1.2vw,1rem)] font-light leading-[1.75] text-[#A1A1AA]">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="what-i-deliver" className="border-t border-white/10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="mb-16 text-center md:mb-20">
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[#CAA96A]/70">
              What I deliver
            </p>
            <h2
              className="mx-auto max-w-[680px] text-[clamp(1.95rem,4vw,3.4rem)] leading-[1.06] tracking-[-0.04em]"
              style={{ fontWeight: 300 }}
            >
              A website should do more than look good.
            </h2>
            <p className="mx-auto mt-6 max-w-[620px] text-[clamp(0.9rem,1.3vw,1.05rem)] font-light leading-[1.75] text-[#A1A1AA]">
              Every decision — layout, copy hierarchy, mobile experience, contact flow — is
              made with one goal: helping your business get more inquiries.
            </p>
          </motion.div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {solutionPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, delay: index * 0.07 }}
                  className="group flex items-start gap-4"
                >
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#CAA96A]/20 bg-[#CAA96A]/[0.06] transition duration-300 group-hover:bg-[#CAA96A]/10">
                    <Icon size={18} strokeWidth={1.6} className="text-[#CAA96A]" />
                  </div>

                  <div>
                    <h3 className="mb-1.5 text-base font-medium tracking-[-0.01em] text-white">
                      {point.label}
                    </h3>
                    <p className="text-[0.92rem] font-light leading-[1.7] text-[#A1A1AA]">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section id="pricing" className="border-t border-white/10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="mb-16 text-center md:mb-20">
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[#CAA96A]/70">
              Pricing
            </p>
            <h2
              className="mx-auto max-w-[560px] text-[clamp(1.95rem,4vw,3.4rem)] leading-[1.06] tracking-[-0.04em]"
              style={{ fontWeight: 300 }}
            >
              Choose the scope that fits your needs.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.tier}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.75, delay: index * 0.08 }}
                className={`flex flex-col rounded-[1.75rem] p-8 md:p-9 ${
                  offer.highlighted
                    ? 'border border-[#CAA96A]/22 bg-[linear-gradient(160deg,rgba(202,169,106,0.04),rgba(255,255,255,0.015))]'
                    : 'border border-white/10 bg-white/[0.02]'
                }`}
              >
                {offer.highlighted && (
                  <div className="mb-5 inline-flex w-fit items-center rounded-full border border-[#CAA96A]/25 bg-[#CAA96A]/10 px-3 py-1">
                    <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[#CAA96A]">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="mb-2 text-[0.72rem] uppercase tracking-[0.28em] text-[#CAA96A]">
                  {offer.tier}
                </div>

                <div
                  className="mb-5 text-[1.6rem] tracking-[-0.03em] text-white"
                  style={{ fontWeight: 400 }}
                >
                  {offer.price}
                </div>

                <p className="mb-6 text-[0.92rem] font-light leading-[1.75] text-[#A1A1AA]">
                  {offer.desc}
                </p>

                <div className="mb-6 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3">
                  <p className="text-[0.72rem] uppercase tracking-[0.22em] text-white/40">
                    Ideal for
                  </p>
                  <p className="mt-1 text-[0.85rem] font-light leading-[1.55] text-[#A1A1AA]">
                    {offer.idealFor}
                  </p>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {offer.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={15}
                        strokeWidth={1.8}
                        className="mt-0.5 shrink-0 text-[#CAA96A]"
                      />
                      <span className="text-[0.88rem] font-light leading-[1.55] text-[#D4D4D8]">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  to="/contact"
                  variant={offer.highlighted ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  Start a Project
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-10 max-w-xl text-center text-sm font-light leading-[1.7] text-white/30"
          >
            Final pricing depends on scope and complexity. Every project begins with a
            conversation.
          </motion.p>
        </div>
      </section>

      {/* TRUST */}
      <section id="why-work-with-me" className="border-t border-white/10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20 lg:gap-28">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85 }}
            >
              <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[#CAA96A]/70">
                Why work with me
              </p>

              <h2
                className="mb-8 text-[clamp(1.95rem,4vw,3.2rem)] leading-[1.06] tracking-[-0.04em]"
                style={{ fontWeight: 300 }}
              >
                Built with precision, not assembled from templates.
              </h2>

              <p className="mb-6 text-[clamp(0.92rem,1.2vw,1.02rem)] font-light leading-[1.8] text-[#A1A1AA]">
                Every project is custom. I don&apos;t use drag-and-drop builders, pre-made
                themes, or cookie-cutter layouts. What you get is a website that&apos;s built
                from the ground up around your business and your audience.
              </p>

              <p className="mb-10 text-[clamp(0.92rem,1.2vw,1.02rem)] font-light leading-[1.8] text-[#A1A1AA]">
                Originally shaped through work with artists and creative brands, the same
                precision and taste now support businesses that simply need a website that
                works — and works well.
              </p>

              <Button to="/contact" variant="primary">
                Start a Project <ArrowRight size={16} strokeWidth={1.6} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, delay: 0.12 }}
              className="space-y-6"
            >
              {[
                {
                  title: 'Custom design',
                  desc: 'No two projects look the same. Designed specifically for your brand, audience, and business goals.',
                },
                {
                  title: 'Detail-oriented execution',
                  desc: 'Spacing, typography, interaction — every small decision adds up to a polished, coherent result.',
                },
                {
                  title: 'Structure + aesthetics',
                  desc: 'Visual quality and UX logic are never treated as separate concerns. Both are built into every page.',
                },
                {
                  title: 'Modern frontend quality',
                  desc: 'Built with current web standards. Fast, accessible, and ready for whatever comes next.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.07 }}
                  className="group border-t border-white/10 pt-6"
                >
                  <h3 className="mb-2 text-base font-medium tracking-[-0.01em] text-white transition duration-300 group-hover:text-[#CAA96A]">
                    {item.title}
                  </h3>
                  <p className="text-[0.92rem] font-light leading-[1.7] text-[#A1A1AA]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="selected-work" className="border-t border-white/10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeInUp} className="mb-16 md:mb-20">
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[#CAA96A]/70">
              Selected work
            </p>
            <h2
              className="max-w-[700px] text-[clamp(1.95rem,4vw,3.4rem)] leading-[1.06] tracking-[-0.04em]"
              style={{ fontWeight: 300 }}
            >
              Proof of structure, clarity, and stronger digital presence.
            </h2>
          </motion.div>

          <div
            className="relative min-h-[580px] md:min-h-[680px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={workProjects[currentProject].id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50, y: 16 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50, y: -16 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <Link to={`/project/${workProjects[currentProject].id}`} className="group block">
                  <div className="mb-8 overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03]">
                    <img
                      src={workProjects[currentProject].image}
                      alt={workProjects[currentProject].title}
                      className="h-[260px] w-full object-cover object-top transition-transform duration-1000 group-hover:scale-[1.02] md:h-[360px] lg:h-[400px]"
                    />
                  </div>

                  <div className="max-w-4xl">
                    <div className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-[#CAA96A]">
                      {workProjects[currentProject].category}
                    </div>

                    <h3
                      className="mb-4 text-3xl tracking-[-0.03em] transition-colors duration-500 group-hover:text-[#CAA96A] md:text-5xl"
                      style={{ fontWeight: 400 }}
                    >
                      {workProjects[currentProject].title}
                    </h3>

                    <p className="mb-5 text-[clamp(0.9rem,1.3vw,1.05rem)] font-light leading-[1.7] text-[#A1A1AA]">
                      {workProjects[currentProject].desc}
                    </p>

                    <div className="inline-flex items-center gap-2 rounded-full border border-[#CAA96A]/20 bg-[#CAA96A]/[0.06] px-4 py-2">
                      <span className="text-[0.78rem] font-light text-[#CAA96A]">
                        {workProjects[currentProject].result}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex justify-start gap-2">
            {workProjects.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  if (index === currentProject) return;
                  setDirection(index > currentProject ? 1 : -1);
                  setCurrentProject(index);
                }}
                aria-label={`Go to project ${index + 1}`}
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

      {/* PROCESS */}
      <section id="process" className="border-t border-white/10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="mb-16 text-center md:mb-20">
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[#CAA96A]/70">
              How it works
            </p>
            <h2
              className="mx-auto max-w-[560px] text-[clamp(1.95rem,4vw,3.4rem)] leading-[1.06] tracking-[-0.04em]"
              style={{ fontWeight: 300 }}
            >
              A clear process from first conversation to launch.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.02] p-9 transition duration-300 hover:border-white/20 hover:bg-white/[0.03]"
              >
                <div className="mb-8 text-[11px] uppercase tracking-[0.34em] text-[#CAA96A]">
                  Step {step.number}
                </div>

                <h3
                  className="mb-5 text-2xl tracking-[-0.03em] text-white"
                  style={{ fontWeight: 400 }}
                >
                  {step.title}
                </h3>

                <p className="text-[clamp(0.9rem,1.2vw,1rem)] font-light leading-[1.7] text-[#A1A1AA]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="final-cta" className="border-t border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#CAA96A]/70">
                Ready to start
              </span>
            </div>

            <h2
              className="mx-auto mb-8 max-w-[760px] text-[clamp(2rem,4.5vw,4rem)] leading-[1.04] tracking-[-0.04em]"
              style={{ fontWeight: 300 }}
            >
              Let&apos;s build a website that feels professional — and works like it should.
            </h2>

            <p className="mx-auto mb-14 max-w-[540px] text-[clamp(0.92rem,1.3vw,1.05rem)] font-light leading-[1.8] text-[#A1A1AA]">
              For businesses that want a stronger digital presence with clarity, taste, and
              intention.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button to="/contact" variant="primary">
                Start a Project
              </Button>

              <button
                type="button"
                onClick={() => scrollToSection('pricing')}
                className="inline-flex items-center justify-center rounded-full border border-white/12 px-7 py-4 text-[15px] font-medium text-white transition duration-300 hover:border-white/20 hover:bg-white/[0.03]"
              >
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}