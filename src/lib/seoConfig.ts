export type SeoLang = 'en' | 'sl';

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogLocale: string;
  ogImage?: string;
}

export interface SeoPageConfig {
  en: SeoMeta;
  sl: SeoMeta;
}

const BASE_URL = 'https://mlinaric.studio';
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export const seoPages: Record<string, SeoPageConfig> = {
  home: {
    en: {
      title: 'Mlinaric Studio - Web Design & Development for Musicians, Artists, and Creators',
      description:
        'Mlinaric Studio creates elegant websites for musicians, artists, and creators - combining refined design, front-end development, and thoughtful digital positioning.',
      canonical: `${BASE_URL}/`,
      ogLocale: 'en_US',
      ogImage: OG_IMAGE,
    },
    sl: {
      title: 'Mlinaric Studio - Izdelava spletnih strani za glasbenike, umetnike in podjetja',
      description:
        'Mlinaric Studio ustvarja elegantne in moderne spletne strani za glasbenike, umetnike in podjetja - z dovršenim dizajnom, razvojem in premišljeno digitalno prisotnostjo.',
      canonical: `${BASE_URL}/sl`,
      ogLocale: 'sl_SI',
      ogImage: OG_IMAGE,
    },
  },
  projects: {
    en: {
      title: 'Projects - Mlinaric Studio',
      description:
        'Browse selected web design and development projects by Mlinaric Studio — elegant websites for musicians, artists, and creative businesses.',
      canonical: `${BASE_URL}/projects`,
      ogLocale: 'en_US',
      ogImage: OG_IMAGE,
    },
    sl: {
      title: 'Projekti - Mlinaric Studio',
      description:
        'Oglejte si izbrane projekte spletnega oblikovanja in razvoja pri Mlinaric Studio — elegantne spletne strani za glasbenike, umetnike in ustvarjalna podjetja.',
      canonical: `${BASE_URL}/sl/projects`,
      ogLocale: 'sl_SI',
      ogImage: OG_IMAGE,
    },
  },
  services: {
    en: {
      title: 'Services - Mlinaric Studio',
      description:
        'Web design, front-end development, and digital strategy services by Mlinaric Studio — tailored for musicians, artists, and creative professionals.',
      canonical: `${BASE_URL}/services`,
      ogLocale: 'en_US',
      ogImage: OG_IMAGE,
    },
    sl: {
      title: 'Storitve - Mlinaric Studio',
      description:
        'Storitve spletnega oblikovanja, front-end razvoja in digitalne strategije pri Mlinaric Studio — prilagojene glasbenikom, umetnikom in ustvarjalnim strokovnjakom.',
      canonical: `${BASE_URL}/sl/services`,
      ogLocale: 'sl_SI',
      ogImage: OG_IMAGE,
    },
  },
  about: {
    en: {
      title: 'About - Mlinaric Studio',
      description:
        'Learn about Aleš Mlinarič and Mlinaric Studio — a web designer and developer focused on crafting refined digital experiences for musicians and creative professionals.',
      canonical: `${BASE_URL}/about`,
      ogLocale: 'en_US',
      ogImage: OG_IMAGE,
    },
    sl: {
      title: 'O meni - Mlinaric Studio',
      description:
        'Spoznajte Aleša Mlinariča in Mlinaric Studio — spletnega oblikovalca in razvijalca, ki ustvarja prefinjena digitalna doživetja za glasbenike in ustvarjalne strokovnjake.',
      canonical: `${BASE_URL}/sl/about`,
      ogLocale: 'sl_SI',
      ogImage: OG_IMAGE,
    },
  },
  contact: {
    en: {
      title: 'Contact - Mlinaric Studio',
      description:
        'Get in touch with Mlinaric Studio to discuss your web design or development project. Based in Ljubljana, Slovenia, available worldwide.',
      canonical: `${BASE_URL}/contact`,
      ogLocale: 'en_US',
      ogImage: OG_IMAGE,
    },
    sl: {
      title: 'Kontakt - Mlinaric Studio',
      description:
        'Stopite v stik z Mlinaric Studio in se pogovorite o vašem projektu spletnega oblikovanja ali razvoja. Baziramo v Ljubljani, dostopni po vsem svetu.',
      canonical: `${BASE_URL}/sl/contact`,
      ogLocale: 'sl_SI',
      ogImage: OG_IMAGE,
    },
  },
};

export const hreflangLinks = [
  { hreflang: 'en', href: `${BASE_URL}/` },
  { hreflang: 'sl', href: `${BASE_URL}/sl` },
  { hreflang: 'x-default', href: `${BASE_URL}/` },
];

export function getProjectSeo(
  lang: SeoLang,
  projectId: string,
  title: string,
  description: string
): SeoMeta {
  const path = lang === 'sl' ? `/sl/project/${projectId}` : `/project/${projectId}`;
  return {
    title: `${title} - Mlinaric Studio`,
    description,
    canonical: `${BASE_URL}${path}`,
    ogLocale: lang === 'sl' ? 'sl_SI' : 'en_US',
    ogImage: OG_IMAGE,
  };
}
