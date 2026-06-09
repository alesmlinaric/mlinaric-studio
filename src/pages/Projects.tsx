import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useLang } from "../lib/language";
import { projectsContent } from "../content/projects";
import Seo from "../components/Seo";
import { seoPages } from "../lib/seoConfig";

export default function Projects() {
  const lang = useLang();
  const c = projectsContent[lang];

  return (
    <>
      <Seo meta={seoPages.projects[lang]} lang={lang} />
    <div className="bg-[#0B0B0F] text-white">
     {/* HERO */}
<section className="relative flex min-h-[83svh] items-start justify-center overflow-hidden px-6 pt-24 pb-10 md:min-h-[105vh] md:items-center md:pt-40 md:pb-28">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(202,169,106,0.07),transparent_38%)]" />
  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_22%,transparent_78%,rgba(255,255,255,0.015))]" />

  <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center text-center">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[#CAA96A]/70 md:mb-8 md:tracking-[0.34em]"
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
        className="block text-white text-[clamp(3.1rem,15vw,7.4rem)]"
        style={{ fontWeight: 300 }}
      >
        {c.hero.line1}
      </span>

      <span
        className="mt-2 block text-[clamp(2.2rem,11vw,4rem)] leading-[1.02] text-[#CAA96A]"
        style={{ fontWeight: 400, letterSpacing: "-0.035em" }}
      >
        {c.hero.line2}
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="mt-8 max-w-[330px] text-center text-[1rem] font-light leading-[1.65] tracking-[0.01em] text-[#A1A1AA] md:mt-10 md:max-w-[760px] md:text-[clamp(0.875rem,1.3vw,1.05rem)] md:leading-[1.6]"
    >
      {c.hero.sub}
    </motion.p>
  </div>
</section>

      {/* PROJECT LIST */}
      <section className="px-6 pb-36 md:pb-44 pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-32">
            {projects.map((project, index) => {
              const mobileBadgeImages: Record<string, string> = {
                'ion-delic': '/iondelic.logo.png',
                'coworking-case-study': '/vicvibes.logo.png',
                'zm-automations': '/zmautomation.logo.png',
              };

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: index * 0.1 }}
                >
                  <Link to={`${lang === 'sl' ? '/sl' : ''}/project/${project.id}`} className="group block">
                    <div className="relative overflow-hidden rounded-2xl">
                     {/* MOBILE BADGE IMAGE */}
<div className="relative block h-[420px] w-full overflow-hidden bg-black md:hidden">
  <img
    src={mobileBadgeImages[project.id]}
    alt={project.title[lang]}
    className="h-full w-full object-cover opacity-90"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/20 to-transparent" />
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/70 to-transparent" />
</div>

                      {/* DESKTOP SCREENSHOT IMAGE */}
                      <div className="hidden md:block relative">
                        <img
                          src={project.image}
                          alt={project.title[lang]}
                          style={{ objectPosition: "center top" }}
                          className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/14 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/28 to-transparent" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.34),rgba(0,0,0,0.08),rgba(0,0,0,0.16))]" />
                        {project.id === 'coworking-case-study' && (
                          <>
                            <div className="absolute inset-0 bg-black/25" />
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.78),rgba(0,0,0,0.18),transparent)]" />
                          </>
                        )}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/70 to-transparent" />
                      </div>

                      {/* TEXT */}
                      <div className="absolute bottom-10 left-10 z-10 max-w-lg md:bottom-12 md:left-12">
                        <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#CAA96A]">
                          {project.category[lang]}
                        </p>
                        <h2
                          className="mb-3 text-3xl tracking-[-0.03em] md:text-5xl"
                          style={{ fontWeight: 400 }}
                        >
                          {project.title[lang]}
                        </h2>
                        <p className="text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
                          {project.description[lang]}
                        </p>
                        <span className="mt-5 inline-block text-sm tracking-wide text-[#CAA96A] opacity-80 transition group-hover:opacity-100">
                          {c.viewCaseStudy}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
