import { Helmet } from 'react-helmet-async';
import type { SeoMeta, SeoLang } from '../lib/seoConfig';
import { hreflangLinks } from '../lib/seoConfig';

interface SeoProps {
  meta: SeoMeta;
  lang: SeoLang;
  projectHreflang?: { en: string; sl: string };
}

export default function Seo({ meta, lang, projectHreflang }: SeoProps) {
  const links = projectHreflang
    ? [
        { hreflang: 'en', href: projectHreflang.en },
        { hreflang: 'sl', href: projectHreflang.sl },
        { hreflang: 'x-default', href: projectHreflang.en },
      ]
    : hreflangLinks;

  return (
    <Helmet>
      <html lang={lang === 'sl' ? 'sl' : 'en'} />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.canonical} />

      {links.map((link) => (
        <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} />
      ))}

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:locale" content={meta.ogLocale} />
      {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
      {meta.ogImage && (
        <meta property="og:image:alt" content="Mlinaric Studio — web design and development" />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {meta.ogImage && <meta name="twitter:image" content={meta.ogImage} />}
      {meta.ogImage && (
        <meta
          name="twitter:image:alt"
          content="Mlinaric Studio — web design and development"
        />
      )}
    </Helmet>
  );
}
