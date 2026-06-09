import type { Lang } from '../lib/language';

type Bilingual = { en: string; sl: string };
type BilingualArr = { en: string[]; sl: string[] };

export interface AnalyticsImage {
  src: string;
  alt: Bilingual;
  title: Bilingual;
  description: Bilingual;
}

export interface Analytics {
  title: Bilingual;
  intro: Bilingual;
  images: AnalyticsImage[];
}

export interface Project {
  id: string;
  title: Bilingual;
  category: Bilingual;
  description: Bilingual;
  seoDescription: Bilingual;
  image: string;
  imageAlt: Bilingual;
  imagePosition?: string;
  overview: Bilingual;
  challenge: Bilingual;
  solution: Bilingual;
  techStack: string[];
  keyDecisions?: BilingualArr;
  projectScope?: BilingualArr;
  results: BilingualArr;
  impactIntro: Bilingual;
  analytics?: Analytics;
}

export const projects: Project[] = [
  {
  id: 'ion-delic',
  title: { en: 'Ion Delić', sl: 'Ion Delić' },
  category: {
    en: 'Musician Portfolio + Digital Sales',
    sl: 'Portfolio glasbenika + digitalna prodaja',
  },
  imageAlt: {
    en: 'Homepage design for Ion Delić, a classical percussionist portfolio website with digital sheet music sales',
    sl: 'Dizajn domače strani za Ion Delić, portfolio spletna stran klasičnega tolkalista z digitalno prodajo notnih zapisov',
  },
  description: {
    en: 'A refined portfolio website for a classical percussionist, designed to combine artistic presentation with a smooth digital sales experience for sheet music and booking inquiries.',
    sl: 'Prefinjena portfolio spletna stran za klasičnega tolkalista, zasnovana tako, da združuje umetniško predstavitev z enostavno digitalno prodajo notnih zapisov in povpraševanji za nastope.',
  },
  seoDescription: {
    en: 'Ion Delić — a musician portfolio and digital sales case study by Mlinaric Studio, combining elegant presentation, Stripe integration, and a refined user journey for bookings and sheet music sales.',
    sl: 'Ion Delić — portfolio glasbenika in primer digitalne prodaje pri Mlinaric Studio, ki združuje elegantno predstavitev, Stripe integracijo in premišljeno pot za rezervacije in prodajo notnih zapisov.',
  },
  image: '/ion-delic-website-homepage.png',
  overview: {
    en: 'Ion Delić needed a digital presence that would reflect the precision, discipline, and artistic identity of his work as a classical percussionist. The goal was to create a professional platform where visitors could explore his projects, discover performances, and purchase sheet music compositions, while also making it easy to submit booking inquiries. The website needed to feel minimal and refined, but still function as a practical business tool.',
    sl: 'Ion Delić je potreboval digitalno prisotnost, ki bi odražala natančnost, disciplino in umetniško identiteto njegovega dela kot klasičnega tolkalista. Cilj je bil ustvariti profesionalno platformo, kjer bi obiskovalci lahko raziskovali njegove projekte, odkrivali nastope in kupili notne zapise, hkrati pa enostavno oddali povpraševanje za nastop. Spletna stran je morala delovati minimalistično in prefinjeno, obenem pa služiti kot praktično poslovno orodje.',
  },
  challenge: {
    en: 'The challenge was to create a website that felt as intentional and refined as a classical performance, while also supporting real business goals. The platform had to balance artistic presentation with practical functionality such as digital product sales, search visibility, and a clear user journey from discovery to purchase. It was essential that the site never felt overloaded, but instead guided visitors with clarity and ease.',
    sl: 'Izziv je bil ustvariti spletno stran, ki bi delovala tako premišljeno in prefinjeno kot klasičen nastop, hkrati pa podpirala konkretne poslovne cilje. Platforma je morala uravnotežiti umetniško predstavitev s praktično funkcionalnostjo, kot so prodaja digitalnih izdelkov, vidljivost v iskalnikih in jasna pot obiskovalca od odkritja do nakupa. Ključno je bilo, da stran nikoli ne deluje prenasičeno, ampak obiskovalca vodi jasno in lahkotno.',
  },
  solution: {
    en: 'The solution was a minimalist portfolio architecture built with React and Tailwind CSS, focused on clarity, typography, rhythm, and carefully controlled spacing. The website integrates Stripe-powered digital product sales, allowing visitors to purchase sheet music compositions directly through a seamless checkout flow. Additional improvements included structured project pages, an optimized contact flow for booking inquiries, strong SEO foundations, and analytics tracking for performance insights. The result is a digital platform that presents the artist professionally while also supporting visibility, engagement, and direct sales.',
    sl: 'Rešitev je bila minimalistična portfolio arhitektura, zgrajena z React in Tailwind CSS, s poudarkom na jasnosti, tipografiji, ritmu in skrbno nadzorovanem razmiku. Spletna stran vključuje Stripe prodajo digitalnih izdelkov, ki obiskovalcem omogoča neposreden nakup notnih zapisov prek tekočega in enostavnega nakupnega procesa. Dodatne izboljšave so vključevale strukturirane projektne strani, optimiziran kontaktni tok za povpraševanja, močne SEO temelje in analitično sledenje za vpogled v uspešnost. Rezultat je digitalna platforma, ki umetnika predstavi profesionalno, hkrati pa podpira vidljivost, angažiranost in neposredno prodajo.',
  },
  techStack: [
    'React',
    'Tailwind CSS',
    'Stripe Checkout',
    'SEO Optimization',
    'Google Analytics',
    'Supabase',
  ],
    keyDecisions: {
  en: [
    'Minimal visual language to keep focus on the artist and his work',
    'Clear navigation structure to reduce friction across portfolio, projects, and shop',
    'Direct digital sales flow for sheet music through Stripe Checkout',
    'Responsive layout with strong typography and spacing for a polished experience across devices',
  ],
  sl: [
    'Minimalističen vizualni jezik, ki ohranja fokus na umetniku in njegovem delu',
    'Jasna navigacijska struktura za manj trenja med portfoliem, projekti in trgovino',
    'Neposreden digitalni prodajni tok za notne zapise prek Stripe Checkout',
    'Odziven layout z močno tipografijo in razmikom za prefinjeno izkušnjo na vseh napravah',
  ],
},
projectScope: {
  en: [
    'Portfolio Website',
    'Digital Sheet Music Sales',
    'Booking Inquiry Flow',
    'SEO Foundations',
    'Analytics Tracking',
  ],
  sl: [
    'Portfolio spletna stran',
    'Digitalna prodaja notnih zapisov',
    'Tok za povpraševanja nastopov',
    'SEO temelji',
    'Analitično sledenje',
  ],
},
  results: {
    en: [
      'First digital sheet music sales within the first week after launch',
      '600–700% increase in website traffic compared to the previous site',
      'Stronger search visibility for classical percussion-related content',
      'A clearer and more seamless journey from discovery to purchase',
    ],
    sl: [
      'Prve digitalne prodaje notnih zapisov že v prvem tednu po objavi',
      '600 – 700 % povečanje prometa v primerjavi s prejšnjo spletno stranjo',
      'Močnejša vidljivost v iskalnikih za vsebine, povezane s klasičnim tolkalstvom',
      'Bolj jasna in tekoča pot uporabnika od odkritja do nakupa',
    ],
  },
  impactIntro: {
    en: 'Within the first days after launch, the platform already began generating measurable traction through stronger visibility, higher engagement, and early digital product sales.',
    sl: 'Že v prvih dneh po objavi je platforma začela ustvarjati merljive rezultate skozi večjo vidljivost, višjo angažiranost in zgodnje digitalne prodaje.',
  },
  analytics: {
    title: {
  en: 'Performance & Validation',
  sl: 'Uspešnost in potrditev',
},
    intro: {
      en: 'Analytics from the first days after launch revealed a clear improvement in traffic, engagement, and conversion potential. Compared to the previous website, the new platform quickly generated stronger visibility and the first digital product sales.',
      sl: 'Analitika iz prvih dni po objavi je pokazala jasen napredek v prometu, angažiranosti in konverzijskem potencialu. V primerjavi s prejšnjo spletno stranjo je nova platforma hitro ustvarila večjo vidljivost in prve digitalne prodaje.',
    },
    images: [
      {
        src: '/analytics-5-days.png',
        alt: {
          en: 'Google Analytics data showing active users in the first days after the Ion Delić website launch',
          sl: 'Podatki Google Analytics o aktivnih uporabnikih v prvih dneh po objavi spletne strani Ion Delić',
        },
        title: {
          en: 'First Days After Launch',
          sl: 'Prvi dnevi po objavi',
        },
        description: {
          en: 'Shortly after launch, the website reached over 100 active users and showed strong visibility across social, direct, and organic traffic sources.',
          sl: 'Kmalu po objavi je spletna stran dosegla več kot 100 aktivnih uporabnikov ter pokazala močno vidljivost prek socialnih, neposrednih in organskih virov prometa.',
        },
      },
      {
        src: '/analytics-old-site-year.png',
        alt: {
          en: 'Analytics of the previous Ion Delić website showing limited traffic and lower engagement',
          sl: 'Analitika prejšnje spletne strani Ion Delić s prikazom omejenega prometa in manjše angažiranosti',
        },
        title: {
          en: 'Previous Website Performance',
          sl: 'Uspešnost prejšnje spletne strani',
        },
        description: {
          en: 'The previous website generated very limited traffic and lacked a structured system for engagement, visibility, or sales.',
          sl: 'Prejšnja spletna stran je ustvarjala zelo omejen promet in ni imela strukturiranega sistema za angažiranost, vidljivost ali prodajo.',
        },
      },
      {
        src: '/analytics-ion-conversion.png',
        alt: {
          en: 'Conversion tracking for completed Stripe checkout purchases on the Ion Delić website',
          sl: 'Sledenje konverzijam za zaključene nakupe prek Stripe na spletni strani Ion Delić',
        },
        title: {
          en: 'Conversion Tracking',
          sl: 'Sledenje konverzijam',
        },
        description: {
          en: 'The platform combines Stripe checkout with analytics tracking, making it possible to measure completed purchases and better understand real website performance.',
          sl: 'Platforma združuje Stripe plačilni sistem z analitičnim sledenjem, kar omogoča merjenje zaključenih nakupov in boljše razumevanje dejanske uspešnosti spletne strani.',
        },
      },
    ],
  },
},
  {
    id: 'zm-automations',
    title: { en: 'ZM Automations', sl: 'ZM Automations' },
    category: {
      en: 'AI Automation Website',
      sl: 'Spletna stran za AI avtomatizacije',
    },
    imageAlt: {
      en: 'Homepage design for ZM Automations, an AI automation brand website focused on clarity and conversion',
      sl: 'Dizajn domače strani za ZM Automations, spletna stran blagovne znamke AI avtomatizacij, osredotočena na jasnost in konverzijo',
    },
    description: {
  en: 'A strategic website for an AI automation brand, designed to simplify complex services, build trust, and guide visitors toward inquiry through clear, conversion-focused communication.',
  sl: 'Strateška spletna stran za blagovno znamko AI avtomatizacij, zasnovana za poenostavitev kompleksnih storitev, gradnjo zaupanja in usmerjanje obiskovalcev k povpraševanju prek jasne, konverzijsko usmerjene komunikacije.',
},
    seoDescription: {
      en: 'ZM Automations — a web design case study by Mlinaric Studio, created to position an AI automation brand through clear messaging, modern visual direction, and conversion-focused structure.',
      sl: 'ZM Automations — primer spletnega dizajna pri Mlinaric Studio, ustvarjen za pozicioniranje blagovne znamke AI avtomatizacij prek jasnega sporočanja, sodobne vizualne usmeritve in konverzijsko usmerjene strukture.',
    },
    image: '/ziga-mlinaric-website-homepage.png',
    overview: {
      en: 'ZM Automations needed a modern digital presence that would position the brand as a trustworthy provider of AI automation services. The goal of the project was not only to create a strong visual identity, but to build a website that could simplify complex services, communicate them clearly, and guide visitors toward a meaningful next step.',
      sl: 'ZM Automations je potreboval sodobno digitalno prisotnost, ki bi blagovno znamko pozicionirala kot zaupanja vrednega ponudnika storitev AI avtomatizacij. Cilj projekta ni bil samo ustvariti močno vizualno identiteto, temveč zgraditi spletno stran, ki poenostavlja kompleksne storitve, jih jasno komunicira in usmerja obiskovalce k smiselnem naslednjemu koraku.',
    },
    challenge: {
      en: 'The main challenge was translating technically complex services into messaging that felt clear, simple, and business-focused. The offer included AI chatbots, booking flows, CRM support, automated follow-up systems, analytics, and various integrations, so it was essential that the website did not overwhelm visitors with too much technical detail. At the same time, the site needed to create an immediate sense of professionalism, trust, and modernity. Visually, it had to feel premium and clean, while the content had to remain structured, clear, and conversion-oriented.',
      sl: 'Glavni izziv je bil prevesti tehnično kompleksne storitve v sporočila, ki bi delovala jasno, preprosto in poslovno usmerjena. Ponudba je vključevala AI chatbote, tokove rezervacij, podporo CRM, avtomatizirane sisteme sledenja, analitiko in različne integracije, zato je bilo bistveno, da spletna stran obiskovalcev ne preobremeni s preveč tehničnimi podrobnostmi. Hkrati je morala stran ustvariti takojšen občutek profesionalnosti, zaupanja in modernosti.',
    },
    solution: {
      en: 'The website was designed as a conversion-focused digital presence with a strong emphasis on clear hierarchy, thoughtful content structure, and strategic service positioning. Services and packages were presented in a clear and structured way, allowing visitors to understand the offer quickly without feeling overwhelmed. AI solutions, automations, and support systems were positioned around business value rather than technical complexity, with messaging focused on benefits such as faster response times, less manual work, better organization, more structured inquiries, and an improved client experience.',
      sl: 'Spletna stran je bila oblikovana kot konverzijsko usmerjena digitalna prisotnost s poudarkom na jasni hierarhiji, premišljeni vsebinski strukturi in strateškem pozicioniranju storitev. Storitve in paketi so bili predstavljeni na jasen in strukturiran način, kar obiskovalcem omogoča hitro razumevanje ponudbe brez preobremenitve. Rešitve AI, avtomatizacije in sistemi podpore so bili pozicionirani okoli poslovne vrednosti, sporočilo pa je poudarjalo koristi, kot so hitrejši odzivni časi, manj ročnega dela in izboljšana izkušnja strank.',
    },
    techStack: [
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'SEO Optimization',
      'Google Analytics',
      'Calendly Integration',
      'Make.com Automation',
      'AI Chatbot Integration',
      'Booking Flow Logic',
    ],
    keyDecisions: {
  en: [
    'Clear messaging to make complex AI services feel simple and business-focused',
    'Conversion-driven structure designed to guide visitors toward inquiry or booking',
    'Premium visual direction to build trust and modern brand perception',
    'Service presentation centered around benefits, not technical jargon',
  ],
  sl: [
    'Jasno sporočanje, ki kompleksne AI storitve predstavi preprosto in poslovno usmerjeno',
    'Konverzijsko usmerjena struktura, zasnovana za vodenje obiskovalca do povpraševanja ali rezervacije',
    'Prefinjena vizualna usmeritev za gradnjo zaupanja in sodobne percepcije blagovne znamke',
    'Predstavitev storitev, osredotočena na koristi namesto tehničnega žargona',
  ],
},
projectScope: {
  en: [
    'Service Website',
    'Lead Generation Flow',
    'AI Offer Positioning',
    'Calendly Integration',
    'Automation Logic',
  ],
  sl: [
    'Storitvena spletna stran',
    'Tok za pridobivanje leadov',
    'Pozicioniranje AI ponudbe',
    'Calendly integracija',
    'Logika avtomatizacij',
  ],
},
    results: {
  en: [
    'Clarified a complex AI offer into a more accessible and business-focused presentation',
    'Strengthened the path from first impression to inquiry through clearer calls to action',
    'Created a more premium and trustworthy digital presence for the brand',
    'Built a stronger foundation for future automation services, lead generation, and growth',
  ],
  sl: [
    'Kompleksno AI ponudbo pretvoril v bolj dostopno in poslovno usmerjeno predstavitev',
    'Okrepil pot od prvega vtisa do povpraševanja prek jasnejših pozivov k dejanju',
    'Vzpostavil bolj premium in zaupanja vredno digitalno prisotnost blagovne znamke',
    'Postavil močnejšo osnovo za prihodnje storitve avtomatizacij, generiranje leadov in rast',
  ],
},
impactIntro: {
  en: 'The project gave the brand a clearer digital identity, a more business-oriented offer presentation, and a stronger conversion path for future inquiries and growth.',
  sl: 'Projekt je blagovni znamki dal jasnejšo digitalno identiteto, bolj poslovno usmerjeno predstavitev ponudbe in močnejšo konverzijsko pot za prihodnja povpraševanja ter rast.',
},
  },
  {
  id: 'coworking-case-study',
  title: { en: 'Coworking Space Case Study', sl: 'Študija primera coworking prostora' },
  category: {
    en: 'Academic / Real-World Case Study',
    sl: 'Akademska / realna študija primera',
  },
  imageAlt: {
    en: 'Homepage concept for a coworking space website focused on digital promotion and clear service positioning',
    sl: 'Koncept domače strani za spletno stran coworking prostora, osredotočena na digitalno promocijo in jasno pozicioniranje storitev',
  },
  description: {
    en: 'An academic case study developed in a real business context, exploring how a coworking space can position itself online through clear structure, user-focused design, and strategic digital promotion.',
    sl: 'Akademska študija primera, razvita v realnem poslovnem kontekstu, ki raziskuje, kako se coworking prostor lahko digitalno pozicionira prek jasne strukture, na uporabnika osredotočenega dizajna in strateške digitalne promocije.',
  },
  seoDescription: {
    en: 'Coworking Space Case Study — an academic and real-world website and digital promotion concept by Mlinaric Studio, focused on structure, user-centered communication, and strategic positioning.',
    sl: 'Študija primera coworking prostora — akademski in realni koncept spletne strani ter digitalne promocije pri Mlinaric Studio, osredotočen na strukturo, na uporabnika usmerjeno komunikacijo in strateško pozicioniranje.',
  },
  image: '/studio-mazzini-website-hompage.png',
  overview: {
    en: 'This project was developed as an academic case study grounded in a real business context. The goal was to explore how a coworking space could communicate its value more clearly through digital channels and a strategically structured website. The project combined market analysis, user-centered thinking, and communication strategy to design a concept that supports visibility, understanding, and inquiry generation. Rather than presenting the space simply as office rental, the concept positioned it as a flexible environment for productivity, collaboration, and community.',
    sl: 'Ta projekt je bil razvit kot akademska študija primera, zasnovana na realnem poslovnem kontekstu. Cilj je bil raziskati, kako lahko coworking prostor svojo vrednost jasneje komunicira prek digitalnih kanalov in strateško zasnovane spletne strani. Projekt je združil tržno analizo, na uporabnika osredotočeno razmišljanje in komunikacijsko strategijo za oblikovanje koncepta, ki podpira vidljivost, razumevanje in generiranje povpraševanj. Namesto da bi prostor predstavljal zgolj kot najem pisarne, ga koncept pozicionira kot prilagodljivo okolje za produktivnost, sodelovanje in skupnost.',
  },
  challenge: {
    en: 'Coworking services often struggle with generic messaging and unclear communication of value. The challenge of this project was to move beyond a simple presentation of office space and instead communicate the broader experience and benefits of coworking. Another important challenge was structuring information so that different visitor groups — freelancers, remote workers, and small teams — could quickly understand what the offer includes and why it is relevant to them. At the same time, the website needed to support digital promotion activities and provide a clear next step for inquiries.',
    sl: 'Coworking storitve se pogosto soočajo z generičnim sporočanjem in nejasnim komuniciranjem vrednosti. Izziv tega projekta je bil preseči preprosto predstavitev pisarniškega prostora in namesto tega komunicirati širšo izkušnjo ter koristi coworkinga. Pomemben izziv je bil tudi strukturirati informacije tako, da različne skupine obiskovalcev — freelancerji, oddaljeni delavci in manjše ekipe — hitro razumejo, kaj ponudba vključuje in zakaj je relevantna zanje. Hkrati je morala spletna stran podpirati aktivnosti digitalne promocije in ponuditi jasen naslednji korak za oddajo povpraševanja.',
  },
  solution: {
    en: 'The solution focused on building a clear, user-centered information structure supported by thoughtful content hierarchy and simple visual communication. The website concept was designed around the visitor journey, guiding users from initial awareness toward understanding the benefits of the coworking space and eventually encouraging them to make contact. The homepage structure introduces the service in a clear and accessible way, while the content emphasizes user benefits instead of simply listing features. Navigation was simplified to help visitors quickly find relevant information, and strategically placed calls to action supported the inquiry process. Overall, the project combined communication strategy with UX thinking to create a concept that is both visually clean and functionally aligned with digital promotion goals.',
    sl: 'Rešitev se je osredotočila na izgradnjo jasne, na uporabnika osredotočene informacijske strukture, podprte s premišljeno hierarhijo vsebine in preprosto vizualno komunikacijo. Koncept spletne strani je bil zasnovan okoli poti obiskovalca, ki uporabnika vodi od začetnega zavedanja do razumevanja koristi coworking prostora in ga nato spodbuja k stiku. Struktura domače strani storitev predstavi jasno in dostopno, vsebina pa poudarja koristi za uporabnika namesto zgolj naštevanja funkcionalnosti. Navigacija je bila poenostavljena za hitrejše iskanje relevantnih informacij, strateško postavljeni pozivi k dejanju pa podpirajo proces povpraševanja. Projekt tako združuje komunikacijsko strategijo in UX razmišljanje v koncept, ki je hkrati vizualno čist in funkcionalno usklajen s cilji digitalne promocije.',
  },
  techStack: [
    'Laravel',
    'Adobe XD',
    'SQL Database',
    'Email Integration',
    'Social Media Setup',
    'Google Ads Campaign',
  ],
  keyDecisions: {
    en: [
      'Position the space around flexibility, productivity, and community rather than simple office rental',
      'Structure content for different visitor types with distinct needs and motivations',
      'Use clear calls to action to support inquiries and digital promotion goals',
      'Keep the visual approach clean and accessible to strengthen clarity and trust',
    ],
    sl: [
      'Prostor pozicionirati okoli fleksibilnosti, produktivnosti in skupnosti namesto zgolj najema pisarne',
      'Strukturirati vsebino za različne tipe obiskovalcev z različnimi potrebami in motivacijami',
      'Uporabiti jasne pozive k dejanju za podporo povpraševanjem in ciljem digitalne promocije',
      'Ohraniti čist in dostopen vizualni pristop za večjo jasnost in zaupanje',
    ],
  },
  projectScope: {
    en: [
      'Academic Case Study',
      'Website Concept',
      'Digital Promotion Strategy',
      'UX Structure',
      'Communication Positioning',
    ],
    sl: [
      'Akademska študija primera',
      'Koncept spletne strani',
      'Strategija digitalne promocije',
      'UX struktura',
      'Komunikacijsko pozicioniranje',
    ],
  },
  results: {
    en: [
      'Demonstrated strategic thinking in digital promotion and service positioning',
      'Created a clearer information architecture for different audience needs',
      'Defined a more distinctive, community-oriented positioning compared to generic competitors',
      'Built a framework adaptable to similar service-based businesses',
    ],
    sl: [
      'Prikazal strateško razmišljanje pri digitalni promociji in pozicioniranju storitve',
      'Vzpostavil jasnejšo informacijsko arhitekturo za različne potrebe občinstva',
      'Določil bolj razlikovalno, na skupnost usmerjeno pozicioniranje v primerjavi z generično konkurenco',
      'Oblikoval okvir, prilagodljiv tudi za podobna storitveno usmerjena podjetja',
    ],
  },
  impactIntro: {
    en: 'The project demonstrated how stronger structure, clearer positioning, and a more user-centered communication approach can improve digital presence, credibility, and inquiry potential.',
    sl: 'Projekt je pokazal, kako lahko močnejša struktura, jasnejše pozicioniranje in bolj na uporabnika osredotočena komunikacija izboljšajo digitalno prisotnost, verodostojnost in potencial za povpraševanja.',
  },
}
];

export function t(field: Bilingual, lang: Lang): string {
  return field[lang];
}

export function tArr(field: BilingualArr, lang: Lang): string[] {
  return field[lang];
}
