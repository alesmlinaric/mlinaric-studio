import { useEffect, useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import Button from '../components/Button';
import Seo from '../components/Seo';
import { useLang } from '../lib/language';
import { contactContent } from '../content/contact';
import { seoPages } from '../lib/seoConfig';

const MAKE_WEBHOOK_URL = 'https://hook.eu2.make.com/9ctt83ffkntlxotemmd7ttayaodf94sg';

export default function Contact() {
  const lang = useLang();
  const c = contactContent[lang];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
    website: '',
  });

  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const [formError, setFormError] = useState('');


  useEffect(() => {
    if (formStatus === 'success' || formStatus === 'error') {
      const timeout = setTimeout(() => {
        setFormStatus('idle');
        setFormError('');
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [formStatus]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formStatus !== 'idle') {
      setFormStatus('idle');
    }

    if (formError) {
      setFormError('');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      projectType: '',
      message: '',
      website: '',
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormStatus('idle');
    setFormError('');

    if (formData.website.trim()) {
      return;
    }

    const name = formData.name.trim();
    const email = formData.email.trim();
    const projectType = formData.projectType.trim();
    const message = formData.message.trim();

    if (!name) {
      setFormStatus('error');
      setFormError(lang === 'sl' ? 'Prosim, vnesite ime.' : 'Please enter your name.');
      return;
    }

    if (!email) {
      setFormStatus('error');
      setFormError(
        lang === 'sl'
          ? 'Prosim, vnesite e-poštni naslov.'
          : 'Please enter your email address.'
      );
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailIsValid) {
      setFormStatus('error');
      setFormError(
        lang === 'sl'
          ? 'Prosim, vnesite veljaven e-poštni naslov.'
          : 'Please enter a valid email address.'
      );
      return;
    }

    if (!projectType) {
      setFormStatus('error');
      setFormError(
        lang === 'sl'
          ? 'Prosim, izberite tip projekta.'
          : 'Please select a project type.'
      );
      return;
    }

    if (!message) {
      setFormStatus('error');
      setFormError(
        lang === 'sl'
          ? 'Prosim, vnesite sporočilo.'
          : 'Please enter a message.'
      );
      return;
    }

    setFormStatus('submitting');

    try {
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          projectType,
          message,
          source: 'mlinaric.studio/contact',
          page: 'contact',
          language: lang,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook request failed with status ${response.status}`);
      }

      setFormStatus('success');
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setFormError(
        lang === 'sl'
          ? 'Prišlo je do napake. Poskusite znova ali mi pišite neposredno na email.'
          : 'Something went wrong. Please try again or contact me directly by email.'
      );
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  };

  return (
    <>
      <Seo meta={seoPages.contact[lang]} lang={lang} />
    <div className="bg-[#0B0B0F] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[80svh] items-start justify-center overflow-hidden px-6 pt-24 pb-10 md:min-h-[100vh] md:items-center md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(202,169,106,0.07),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_22%,transparent_78%,rgba(255,255,255,0.015))]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mb-16 text-[11px] uppercase tracking-[0.28em] text-[#CAA96A]/70 md:mb-8 md:tracking-[0.34em]"
          >
            {c.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95 }}
            className="max-w-[320px] text-center leading-[0.94] tracking-[-0.04em] md:max-w-[980px] md:leading-[0.95]"
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
            transition={{ duration: 0.9, delay: 0.32 }}
            className="mt-12 max-w-[330px] text-center text-[1rem] font-light leading-[1.65] tracking-[0.01em] text-[#A1A1AA] md:mt-9 md:max-w-[760px] md:text-[clamp(0.875rem,1.3vw,1.05rem)] md:leading-[1.6]"
          >
            {c.hero.sub}
          </motion.p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="border-t border-white/10 px-6 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
            {/* FORM */}
            <motion.div {...fadeInUp} className="lg:col-span-7 xl:col-span-6">
              <div className="max-w-[760px] rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
                <div className="mb-10 md:mb-12">
                  <h2
                    className="text-3xl tracking-[-0.03em] md:text-4xl"
                    style={{ fontWeight: 400 }}
                  >
                    {c.form.heading}
                  </h2>
                  <p className="mt-4 max-w-xl text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
                    {c.form.sub}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-7">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-medium tracking-[0.01em] text-white/75"
                    >
                      {lang === 'sl' ? 'Ime' : 'Name'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-[#CAA96A]/60 focus:bg-white/[0.045]"
                      placeholder={c.form.namePlaceholder}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium tracking-[0.01em] text-white/75"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-[#CAA96A]/60 focus:bg-white/[0.045]"
                      placeholder={c.form.emailPlaceholder}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="mb-3 block text-sm font-medium tracking-[0.01em] text-white/75"
                    >
                      {c.form.projectTypeLabel}
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-[#CAA96A]/60 focus:bg-white/[0.045]"
                    >
                      <option value="" className="bg-[#0B0B0F]">
                        {c.form.projectTypePlaceholder}
                      </option>
                      {c.form.projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#0B0B0F]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-3 block text-sm font-medium tracking-[0.01em] text-white/75"
                    >
                      {c.form.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-[#CAA96A]/60 focus:bg-white/[0.045]"
                      placeholder={c.form.messagePlaceholder}
                    />
                  </div>

                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={formStatus === 'submitting'}
                      className="w-full md:min-w-[220px] md:w-auto"
                    >
                      {formStatus === 'submitting'
                        ? c.form.sendingLabel
                        : formStatus === 'success'
                        ? c.form.sentLabel
                        : formStatus === 'error'
                        ? c.form.retryLabel
                        : c.form.sendLabel}
                    </Button>
                  </div>

                  {formStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-[#CAA96A]"
                    >
                      {c.form.successMsg}
                    </motion.p>
                  )}

                  {formStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-[#A1A1AA]"
                    >
                      {formError || c.form.errorMsg}
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>

            {/* SIDE INFO */}
            <motion.div {...fadeInUp} className="lg:col-span-5 xl:col-span-6">
              <div className="space-y-8">
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 md:p-10">
                  <h2
                    className="text-2xl tracking-[-0.03em] md:text-3xl"
                    style={{ fontWeight: 400 }}
                  >
                    {c.directContact.heading}
                  </h2>

                  <div className="mt-8 space-y-5">
                    <a
                      href="mailto:mlinaric.alesh@gmail.com"
                      className="group flex items-center gap-4 text-[#A1A1AA] transition-colors duration-300 hover:text-[#CAA96A]"
                    >
                      <Mail
                        size={20}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-base md:text-lg">mlinaric.alesh@gmail.com</span>
                    </a>

                    <a
                      href="https://linkedin.com/in/alesmlinaric/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 text-[#A1A1AA] transition-colors duration-300 hover:text-[#CAA96A]"
                    >
                      <Linkedin
                        size={20}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-base md:text-lg">LinkedIn</span>
                    </a>

                    <a
                      href="https://instagram.com/alesmlinaric/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 text-[#A1A1AA] transition-colors duration-300 hover:text-[#CAA96A]"
                    >
                      <Instagram
                        size={20}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-base md:text-lg">Instagram</span>
                    </a>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 md:p-10">
                  <h3 className="text-2xl tracking-[-0.03em]" style={{ fontWeight: 400 }}>
                    {c.focusAreas.heading}
                  </h3>

                  <p className="mt-6 max-w-md text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-[#A1A1AA]">
                    {c.focusAreas.body}
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(202,169,106,0.12),rgba(255,255,255,0.02))] p-8 md:p-10">
                  <p className="max-w-md text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.6] text-white/75">
                    {c.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}