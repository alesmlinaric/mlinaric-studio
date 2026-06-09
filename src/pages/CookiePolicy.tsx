import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '../lib/language';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
  }),
};

const content = {
  sl: {
    eyebrow: 'Pravni dokument',
    title: 'Politika zasebnosti',
    updated: 'Zadnja posodobitev: april 2026',
    back: 'Nazaj na domačo stran',
    homeLink: '/',
    sections: [
      {
        title: '1. Upravljavec osebnih podatkov',
        body: `Upravljavec osebnih podatkov na tej spletni strani je:

Mlinaric Studio
Aleš Mlinarič
Ljubljana, Slovenija
E-pošta: mlinaric.alesh@gmail.com

Če imate vprašanja glede obdelave osebnih podatkov, nam lahko pišete na zgornji e-poštni naslov.`,
      },
      {
        title: '2. Katere podatke zbiramo',
        body: `Prek kontaktnega obrazca lahko zbiramo naslednje podatke:
- ime
- e-poštni naslov
- tip projekta
- vsebino sporočila

Ob obisku spletne strani se lahko ob vaši privolitvi obdelujejo tudi analitični podatki o uporabi strani, na primer ogledane strani, osnovni tehnični podatki o napravi in agregirani podatki o obisku.`,
      },
      {
        title: '3. Namen obdelave',
        body: `Vaše podatke obdelujemo za naslednje namene:
- odgovor na vaše povpraševanje
- priprava ponudbe ali nadaljnja komunikacija glede projekta
- izboljšanje delovanja spletne strani in uporabniške izkušnje
- osnovna analitika obiska, če ste v to privolili`,
      },
      {
        title: '4. Pravne podlage',
        body: `Podatke iz kontaktnega obrazca obdelujemo, kadar je to potrebno za odgovor na vaše povpraševanje in izvedbo korakov na vašo zahtevo pred morebitno sklenitvijo sodelovanja.

Analitične podatke obdelujemo na podlagi vaše privolitve, kadar sprejmete analitične piškotke.

Kadar je potrebno, lahko določene podatke obdelujemo tudi na podlagi našega zakonitega interesa, na primer za zaščito spletne strani, preprečevanje zlorab ali vodenje osnovne poslovne evidence.`,
      },
      {
        title: '5. Komu se podatki lahko posredujejo',
        body: `Za delovanje spletne strani in obdelavo povpraševanj lahko uporabljamo zunanje ponudnike storitev, ki podatke obdelujejo v našem imenu ali kot samostojni upravljavci, odvisno od storitve.

To lahko vključuje:
- ponudnika gostovanja spletne strani
- Google Analytics 4 za analitiko, če ste v to privolili
- Make za avtomatizacijo prejema oddanih obrazcev
- Microsoft Excel / Microsoft 365 / OneDrive / SharePoint, če se oddaje zapisujejo v tak sistem
- ponudnika e-pošte za komunikacijo

Podatke delimo samo v obsegu, ki je potreben za dosego zgoraj navedenih namenov.`,
      },
      {
        title: '6. Prenosi v tretje države',
        body: `Nekateri uporabljeni ponudniki lahko podatke obdelujejo tudi izven Evropskega gospodarskega prostora. V takih primerih si prizadevamo uporabljati ponudnike, ki zagotavljajo ustrezne zaščitne ukrepe v skladu z veljavno zakonodajo, na primer standardne pogodbene klavzule ali druge ustrezne mehanizme.`,
      },
      {
        title: '7. Hramba podatkov',
        body: `Podatke iz kontaktnega obrazca hranimo toliko časa, kolikor je potrebno za obravnavo vašega povpraševanja in nadaljnjo komunikacijo, oziroma dokler obstaja zakonit poslovni razlog za hrambo.

Če ne pride do sodelovanja, se podatki praviloma izbrišejo v razumnem roku, razen če je njihova hramba potrebna zaradi pravnih obveznosti, reševanja sporov ali zaščite naših pravnih interesov.

Analitični podatki se hranijo v skladu z nastavitvami posameznega analitičnega orodja.`,
      },
      {
        title: '8. Vaše pravice',
        body: `V zvezi z vašimi osebnimi podatki imate lahko naslednje pravice:
- pravico do dostopa
- pravico do popravka
- pravico do izbrisa
- pravico do omejitve obdelave
- pravico do ugovora
- pravico do prenosljivosti podatkov, kadar je to primerno
- pravico do preklica privolitve, kadar obdelava temelji na privolitvi

Za uveljavljanje pravic nam pišite na: mlinaric.alesh@gmail.com

Prav tako imate pravico vložiti pritožbo pri pristojnem nadzornem organu za varstvo osebnih podatkov.`,
      },
      {
        title: '9. Piškotki in analitika',
        body: `Podrobnosti o uporabi piškotkov so opisane v Politiki piškotkov.

Analitični piškotki se naložijo le na podlagi vaše privolitve. Svojo odločitev lahko kadar koli spremenite prek nastavitev piškotkov na spletni strani.`,
      },
      {
        title: '10. Varnost',
        body: `Prizadevamo si uporabljati razumne tehnične in organizacijske ukrepe za zaščito osebnih podatkov pred nepooblaščenim dostopom, izgubo, zlorabo ali nepooblaščenim razkritjem.

Kljub temu noben prenos ali elektronska hramba podatkov ni popolnoma brez tveganja.`,
      },
      {
        title: '11. Spremembe politike zasebnosti',
        body: `To politiko zasebnosti lahko občasno posodobimo. Ob pomembnejših spremembah bomo na spletni strani objavili posodobljeno različico z novim datumom zadnje posodobitve.`,
      },
    ],
  },
  en: {
    eyebrow: 'Legal document',
    title: 'Privacy Policy',
    updated: 'Last updated: April 2026',
    back: 'Back to home',
    homeLink: '/en',
    sections: [
      {
        title: '1. Data controller',
        body: `The data controller for this website is:

Mlinaric Studio
Aleš Mlinarič
Ljubljana, Slovenia
Email: mlinaric.alesh@gmail.com

If you have any questions about the processing of personal data, you can contact us at the email above.`,
      },
      {
        title: '2. What data we collect',
        body: `Through the contact form, we may collect the following data:
- name
- email address
- project type
- message content

When you visit the website, and if you consent, we may also process analytics-related data about website usage, such as visited pages, basic device information, and aggregated visit data.`,
      },
      {
        title: '3. Purpose of processing',
        body: `We process your data for the following purposes:
- responding to your inquiry
- preparing an offer or continuing communication about a project
- improving website performance and user experience
- basic visitor analytics, if you have consented`,
      },
      {
        title: '4. Legal bases',
        body: `We process contact form data where necessary to respond to your inquiry and to take steps at your request prior to a potential business engagement.

We process analytics data on the basis of your consent when you accept analytics cookies.

Where necessary, we may also process certain data on the basis of our legitimate interests, for example to protect the website, prevent abuse, or maintain basic business records.`,
      },
      {
        title: '5. Who data may be shared with',
        body: `To operate the website and handle inquiries, we may use external service providers that process data on our behalf or as independent controllers, depending on the service.

This may include:
- website hosting provider
- Google Analytics 4 for analytics, if you consent
- Make for form submission automation
- Microsoft Excel / Microsoft 365 / OneDrive / SharePoint, if submissions are stored there
- email provider for communication

We only share data to the extent necessary for the purposes described above.`,
      },
      {
        title: '6. Transfers to third countries',
        body: `Some service providers may process data outside the European Economic Area. In such cases, we aim to use providers that offer appropriate safeguards in accordance with applicable law, such as Standard Contractual Clauses or other suitable transfer mechanisms.`,
      },
      {
        title: '7. Data retention',
        body: `We retain contact form data for as long as necessary to handle your inquiry and any follow-up communication, or as long as there is a legitimate business reason to keep it.

If no business relationship follows, data is generally deleted within a reasonable period unless retention is necessary for legal obligations, dispute resolution, or the protection of our legal interests.

Analytics data is retained in accordance with the settings of the relevant analytics tool.`,
      },
      {
        title: '8. Your rights',
        body: `Regarding your personal data, you may have the following rights:
- right of access
- right to rectification
- right to erasure
- right to restriction of processing
- right to object
- right to data portability, where applicable
- right to withdraw consent where processing is based on consent

To exercise your rights, contact us at: mlinaric.alesh@gmail.com

You also have the right to lodge a complaint with the competent data protection supervisory authority.`,
      },
      {
        title: '9. Cookies and analytics',
        body: `Details about the use of cookies are described in the Cookie Policy.

Analytics cookies are only loaded based on your consent. You can change your choice at any time through the cookie settings on the website.`,
      },
      {
        title: '10. Security',
        body: `We seek to use reasonable technical and organisational measures to protect personal data against unauthorised access, loss, misuse, or unauthorised disclosure.

However, no electronic transmission or storage system is completely risk-free.`,
      },
      {
        title: '11. Changes to this Privacy Policy',
        body: `We may update this Privacy Policy from time to time. When material changes are made, we will publish the updated version on the website with a new “last updated” date.`,
      },
    ],
  },
} as const;

export default function PrivacyPolicy() {
  const lang = useLang();
  const t = lang === 'sl' ? content.sl : content.en;

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-[720px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#CAA96A]/70">
            {t.eyebrow}
          </p>

          <h1 className="text-[38px] font-light leading-[1.15] tracking-[-0.02em] text-white md:text-[52px]">
            {t.title}
          </h1>

          <p className="mt-5 text-[15px] font-light leading-relaxed text-white/40">
            {t.updated}
          </p>
        </motion.div>

        <div className="space-y-14">
          {t.sections.map((section, i) => (
            <motion.section
              key={section.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
            >
              <h2 className="mb-4 text-[17px] font-medium tracking-[-0.01em] text-white">
                {section.title}
              </h2>

              <div className="mb-5 h-px w-12 bg-[#CAA96A]/30" />

              <div className="space-y-4">
                {section.body.split('\n\n').map((paragraph, j) => (
                  <p
                    key={j}
                    className="whitespace-pre-line text-[14px] font-light leading-[1.75] text-white/50"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-20 flex flex-col gap-4 border-t border-white/[0.06] pt-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <Link
            to={t.homeLink}
            className="text-[13px] font-light text-white/30 underline underline-offset-4 decoration-white/15 transition-colors duration-200 hover:text-white/55"
          >
            {t.back}
          </Link>
        </motion.div>
      </div>
    </main>
  );
}