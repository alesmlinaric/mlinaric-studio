import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Loader2 } from 'lucide-react';
import Button from '../components/Button';

type StyleMode = 'classic' | 'cinema' | 'minimal';
type AccentColor = 'gold' | 'white' | 'burgundy' | 'deepBlue';
type TypographyMode = 'editorial' | 'modern' | 'contrast';

const accentColors = {
  gold: '#CAA96A',
  white: '#F5F5F7',
  burgundy: '#7A1F2B',
  deepBlue: '#3A5DAE'
};

const accentMapping: Record<string, AccentColor> = {
  gold: 'gold',
  white: 'white',
  burgundy: 'burgundy',
  blue: 'deepBlue'
};

interface GeneratedConcept {
  style: string;
  accent: string;
  typography: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  sections: string[];
  ctaPrimary: string;
  ctaSecondary: string;
}

type WorkType =
  | 'Musician / Artist'
  | 'Creative Studio'
  | 'Personal Brand'
  | 'Designer / Freelancer'
  | 'Small Business';

type GoalType =
  | 'Showcase my work'
  | 'Get more clients'
  | 'Book inquiries'
  | 'Sell products'
  | 'Build a stronger brand';

type FeelingType = 'Minimal' | 'Elegant' | 'Cinematic' | 'Bold' | 'Classic';

function getMockConcept(
  workType: WorkType,
  goal: GoalType,
  feeling: FeelingType
): GeneratedConcept {
  let style: string = 'cinema';
  let accent: string = 'gold';
  let typography: string = 'editorial';
  let heroTitle: string = '';
  let heroSubtitle: string = '';
  let heroDescription: string = '';
  let sections: string[] = [];
  let ctaPrimary: string = '';
  let ctaSecondary: string = '';

  switch (feeling) {
    case 'Minimal':
      style = 'minimal';
      typography = 'modern';
      accent = 'white';
      break;
    case 'Elegant':
      style = 'cinema';
      typography = 'editorial';
      accent = 'gold';
      break;
    case 'Cinematic':
      style = 'cinema';
      typography = 'editorial';
      accent = 'gold';
      break;
    case 'Bold':
      style = 'classic';
      typography = 'contrast';
      accent = 'burgundy';
      break;
    case 'Classic':
      style = 'classic';
      typography = 'editorial';
      accent = 'gold';
      break;
  }

  switch (workType) {
    case 'Musician / Artist':
      heroTitle = 'Refined Expression';
      heroSubtitle = 'Artist & Performer';
      heroDescription =
        'Capturing the essence of musical expression through refined performance and timeless interpretation.';
      sections = ['About', 'Projects', 'Booking'];
      ctaPrimary = 'View Work';
      ctaSecondary = 'Book a Call';
      break;

    case 'Creative Studio':
      heroTitle = 'Intentional Design';
      heroSubtitle = 'Creative Studio';
      heroDescription =
        'Building digital experiences with clarity, structure, and visual precision for forward-thinking brands.';
      sections = ['Services', 'Selected Work', 'Contact'];
      ctaPrimary = 'Explore Work';
      ctaSecondary = 'Start Project';
      break;

    case 'Personal Brand':
      heroTitle = 'Distinct Perspective';
      heroSubtitle = 'Creative Professional';
      heroDescription =
        'Building a presence through thoughtful craft, clear vision, and meaningful connection.';
      sections = ['About', 'Work', 'Connect'];
      ctaPrimary = 'Learn More';
      ctaSecondary = 'Get in Touch';
      break;

    case 'Designer / Freelancer':
      heroTitle = 'Thoughtful Solutions';
      heroSubtitle = 'Independent Designer';
      heroDescription =
        'Crafting considered visual solutions for brands seeking clarity, intention, and lasting impact.';
      sections = ['Portfolio', 'Services', 'Contact'];
      ctaPrimary = 'View Portfolio';
      ctaSecondary = 'Start Conversation';
      break;

    case 'Small Business':
      heroTitle = 'Curated Excellence';
      heroSubtitle = 'Premium Business';
      heroDescription =
        'Presenting carefully selected products and services with refined presentation and seamless experience.';
      sections = ['About', 'Offerings', 'Contact'];
      ctaPrimary = 'Explore';
      ctaSecondary = 'Get in Touch';
      break;
  }

  if (goal === 'Sell products') {
    sections = ['About', 'Shop', 'Contact'];
    ctaPrimary = 'View Products';
    ctaSecondary = 'Learn More';
  }

  if (goal === 'Book inquiries') {
    sections = ['About', 'Projects', 'Booking'];
    ctaSecondary = 'Book a Call';
  }

  if (goal === 'Get more clients') {
    sections = ['Services', 'Selected Work', 'Contact'];
    ctaPrimary = 'Explore Work';
    ctaSecondary = 'Start Project';
  }

  return {
    style,
    accent,
    typography,
    heroTitle,
    heroSubtitle,
    heroDescription,
    sections,
    ctaPrimary,
    ctaSecondary
  };
}

export default function ConceptBuilder() {
  const [styleMode, setStyleMode] = useState<StyleMode>('cinema');
  const [accentMode, setAccentMode] = useState<AccentColor>('gold');
  const [typeMode, setTypeMode] = useState<TypographyMode>('editorial');
  const [title, setTitle] = useState('Aleš Mlinarič');
  const [subtitle, setSubtitle] = useState('Web Developer / Musician');
  const [heroDescription, setHeroDescription] = useState(
    'Creating meaningful work at the intersection of craft, clarity, and visual precision.'
  );
  const [sections, setSections] = useState(['About', 'Selected Work', 'Contact']);
  const [primaryCta, setPrimaryCta] = useState('View Work');
  const [secondaryCta, setSecondaryCta] = useState('Get In Touch');

  const [selectedWorkType, setSelectedWorkType] = useState<WorkType>('Musician / Artist');
  const [selectedGoal, setSelectedGoal] = useState<GoalType>('Showcase my work');
  const [selectedFeeling, setSelectedFeeling] = useState<FeelingType>('Elegant');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateError, setGenerateError] = useState('');
  const [generatedConcept, setGeneratedConcept] = useState<GeneratedConcept | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 }
  };

  const getSectionDescription = (section: string) => {
    const descriptions: Record<string, string> = {
      About: 'A concise introduction to the person or brand.',
      Projects: 'Featured work presented with clarity and restraint.',
      'Selected Work': 'Curated portfolio showcasing depth and range.',
      Services: 'A structured presentation of offers and capabilities.',
      Booking: 'A dedicated path for inquiries and performance requests.',
      Shop: 'A focused space for products, editions, or digital items.',
      Contact: 'A clear next step for conversation or collaboration.',
      Portfolio: 'Comprehensive view of creative output and experience.',
      Work: 'Evidence of craft, process, and completed projects.',
      Offerings: 'What is available, presented with intention and clarity.',
      Connect: 'Ways to begin a dialogue or establish contact.'
    };
    return descriptions[section] || 'A thoughtfully designed section supporting the overall vision.';
  };

  const getPreviewStyles = () => {
    const styles: any = {
      accentColor: accentColors[accentMode]
    };

    if (styleMode === 'cinema') {
      styles.heroSize = 'text-[clamp(4rem,7.5vw,5.8rem)]';
      styles.spacing = 'py-16 md:py-20';
      styles.heroSpacing = 'mb-7';
      styles.contrast = 'high';
      styles.scale = 'scale-105';
      styles.sectionSpacing = 'py-14 md:py-16';
      styles.atmosphere = 'cinematic';
      styles.descriptionSize = 'text-[15px]';
    } else if (styleMode === 'minimal') {
      styles.heroSize = 'text-[clamp(2.5rem,5vw,3.5rem)]';
      styles.spacing = 'py-20 md:py-24';
      styles.heroSpacing = 'mb-10';
      styles.contrast = 'low';
      styles.scale = 'scale-95';
      styles.sectionSpacing = 'py-12 md:py-14';
      styles.atmosphere = 'minimal';
      styles.descriptionSize = 'text-[14px]';
    } else {
      styles.heroSize = 'text-[clamp(3.2rem,6.5vw,4.8rem)]';
      styles.spacing = 'py-18 md:py-22';
      styles.heroSpacing = 'mb-7';
      styles.contrast = 'medium';
      styles.scale = 'scale-100';
      styles.sectionSpacing = 'py-12 md:py-14';
      styles.atmosphere = 'classic';
      styles.descriptionSize = 'text-[15px]';
    }

    if (typeMode === 'editorial') {
      styles.headingWeight = 275;
      styles.bodyFont = 'font-light';
      styles.letterSpacing = 'tracking-[-0.045em]';
    } else if (typeMode === 'modern') {
      styles.headingWeight = 400;
      styles.bodyFont = 'font-normal';
      styles.letterSpacing = 'tracking-[-0.03em]';
    } else {
      styles.headingWeight = 500;
      styles.bodyFont = 'font-light';
      styles.letterSpacing = 'tracking-[-0.05em]';
    }

    if (selectedFeeling === 'Minimal') {
      styles.backgroundTreatment = 'bg-[#060606]';
      styles.atmosphereOverlay = 'bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01),transparent)]';
    } else if (selectedFeeling === 'Elegant') {
      styles.backgroundTreatment = 'bg-[#080808]';
      styles.atmosphereOverlay =
        'bg-[radial-gradient(circle_at_top,rgba(202,169,106,0.04),transparent_50%)]';
    } else if (selectedFeeling === 'Cinematic') {
      styles.backgroundTreatment = 'bg-[#050505]';
      styles.atmosphereOverlay =
        'bg-[radial-gradient(ellipse_at_top,rgba(202,169,106,0.06),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.6),transparent)]';
    } else if (selectedFeeling === 'Bold') {
      styles.backgroundTreatment = 'bg-[#080808]';
      styles.atmosphereOverlay =
        'bg-[radial-gradient(circle_at_center,rgba(122,31,43,0.08),transparent_60%)]';
    } else {
      styles.backgroundTreatment = 'bg-[#080808]';
      styles.atmosphereOverlay =
        'bg-[linear-gradient(to_bottom,rgba(202,169,106,0.02),transparent_30%)]';
    }

    return styles;
  };

  const previewStyles = getPreviewStyles();

  const handleGenerateConcept = async () => {
    setIsGenerating(true);
    setGenerateError('');

    await new Promise((resolve) => setTimeout(resolve, 1300));

    try {
      const data = getMockConcept(selectedWorkType, selectedGoal, selectedFeeling);
      setGeneratedConcept(data);

      setStyleMode(data.style as StyleMode);
      setAccentMode(accentMapping[data.accent] || 'gold');
      setTypeMode(data.typography as TypographyMode);
      setTitle(data.heroTitle);
      setSubtitle(data.heroSubtitle);
      setHeroDescription(data.heroDescription);
      setSections(data.sections);
      setPrimaryCta(data.ctaPrimary);
      setSecondaryCta(data.ctaSecondary);
    } catch (error) {
      console.error('Error generating concept:', error);
      setGenerateError(
        'Unable to generate concept at the moment. Please try again or refine manually.'
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const buildContactLink = () => {
    const params = new URLSearchParams({
      style: styleMode,
      accent: accentMode,
      type: typeMode,
      title: title,
      subtitle: subtitle
    });
    return `/contact?${params.toString()}`;
  };

  return (
    <div className="bg-[#0B0B0F] text-white">
      <section className="relative flex min-h-[90vh] items-center justify-center px-6 pb-24 pt-36 md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(202,169,106,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015),transparent_25%,transparent_75%,rgba(255,255,255,0.01))]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1000px] flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mb-8 text-[11px] uppercase tracking-[0.34em] text-[#CAA96A]/70"
          >
            AI Concept Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95 }}
            className="max-w-[900px] text-center leading-[1.05] tracking-[-0.04em]"
          >
            <span
              className="block text-[clamp(2.8rem,6vw,5.5rem)] text-white"
              style={{ fontWeight: 300 }}
            >
              Generate a website direction
            </span>
            <span
              className="mt-2 block text-[clamp(2.8rem,6vw,5.5rem)] text-white"
              style={{ fontWeight: 300 }}
            >
              refined by intelligence.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32 }}
            className="mt-10 max-w-[720px] text-center text-[clamp(0.875rem,1.3vw,1.05rem)] font-light leading-[1.65] tracking-[0.01em] text-[#A1A1AA]"
          >
            Describe your work and vision — then let AI suggest a starting direction you can
            refine with precision.
          </motion.p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-[420px_1fr] lg:gap-12">
            <motion.div {...fadeInUp} className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
                <div className="mb-8 flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-[#CAA96A]/10 p-2">
                    <Sparkles className="h-4 w-4 text-[#CAA96A]" />
                  </div>
                  <div className="flex-1">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-[#CAA96A]/70">
                      AI Concept Generator
                    </p>
                    <h2
                      className="mb-2 text-xl tracking-[-0.03em] text-white"
                      style={{ fontWeight: 300 }}
                    >
                      Generate a Starting Direction
                    </h2>
                    <p className="text-[13px] font-light leading-[1.6] text-white/55">
                      Describe what you do, what the website should achieve, and the overall
                      feeling you want — then generate a concept you can refine manually.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="mb-4 block text-[13px] font-light tracking-[0.02em] text-white/65">
                      What describes your work?
                    </label>
                    <div className="grid grid-cols-1 gap-2.5">
                      {(
                        [
                          'Musician / Artist',
                          'Creative Studio',
                          'Personal Brand',
                          'Designer / Freelancer',
                          'Small Business'
                        ] as WorkType[]
                      ).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedWorkType(type)}
                          disabled={isGenerating}
                          className={`rounded-xl border px-5 py-3.5 text-left text-[13px] font-light transition-all duration-300 ${
                            selectedWorkType === type
                              ? 'border-[#CAA96A]/60 bg-[#CAA96A]/10 text-[#CAA96A]'
                              : 'border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20 hover:bg-white/[0.04] hover:text-white/90'
                          } ${isGenerating ? 'cursor-not-allowed opacity-50' : ''}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-4 block text-[13px] font-light tracking-[0.02em] text-white/65">
                      What should the website help you do?
                    </label>
                    <div className="grid grid-cols-1 gap-2.5">
                      {(
                        [
                          'Showcase my work',
                          'Get more clients',
                          'Book inquiries',
                          'Sell products',
                          'Build a stronger brand'
                        ] as GoalType[]
                      ).map((goal) => (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => setSelectedGoal(goal)}
                          disabled={isGenerating}
                          className={`rounded-xl border px-5 py-3.5 text-left text-[13px] font-light transition-all duration-300 ${
                            selectedGoal === goal
                              ? 'border-[#CAA96A]/60 bg-[#CAA96A]/10 text-[#CAA96A]'
                              : 'border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20 hover:bg-white/[0.04] hover:text-white/90'
                          } ${isGenerating ? 'cursor-not-allowed opacity-50' : ''}`}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-4 block text-[13px] font-light tracking-[0.02em] text-white/65">
                      What feeling should it carry?
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {(['Minimal', 'Elegant', 'Cinematic', 'Bold', 'Classic'] as FeelingType[]).map(
                        (feeling) => (
                          <button
                            key={feeling}
                            type="button"
                            onClick={() => setSelectedFeeling(feeling)}
                            disabled={isGenerating}
                            className={`rounded-xl border px-4 py-3.5 text-[13px] font-light transition-all duration-300 ${
                              selectedFeeling === feeling
                                ? 'border-[#CAA96A]/60 bg-[#CAA96A]/10 text-[#CAA96A]'
                                : 'border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20 hover:bg-white/[0.04] hover:text-white/90'
                            } ${isGenerating ? 'cursor-not-allowed opacity-50' : ''}`}
                          >
                            {feeling}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleGenerateConcept}
                    disabled={isGenerating}
                    className="mt-2 w-full rounded-xl bg-[#CAA96A] px-6 py-3.5 text-[13px] font-light text-white transition-all duration-300 hover:bg-[#CAA96A]/90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isGenerating ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Generating...
                      </span>
                    ) : (
                      'Generate Concept'
                    )}
                  </button>

                  <AnimatePresence>
                    {isGenerating && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="rounded-lg border border-[#CAA96A]/20 bg-[#CAA96A]/5 px-4 py-3 text-[12px] font-light leading-[1.5] text-[#CAA96A]/80">
                          Shaping a concept direction...
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {generateError && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3 text-[12px] font-light leading-[1.5] text-red-400/90">
                          {generateError}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {generatedConcept && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-[2rem] border border-[#CAA96A]/20 bg-[#CAA96A]/5 p-6"
                >
                  <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-[#CAA96A]/80">
                    Generated Concept
                  </p>
                  <div className="space-y-2 text-[13px] font-light text-white/70">
                    <p>
                      <span className="text-white/50">Style:</span>{' '}
                      <span className="capitalize text-white/80">{generatedConcept.style}</span>
                    </p>
                    <p>
                      <span className="text-white/50">Accent:</span>{' '}
                      <span className="capitalize text-white/80">{generatedConcept.accent}</span>
                    </p>
                    <p>
                      <span className="text-white/50">Typography:</span>{' '}
                      <span className="capitalize text-white/80">
                        {generatedConcept.typography}
                      </span>
                    </p>
                    <p>
                      <span className="text-white/50">Structure:</span>{' '}
                      <span className="text-white/80">
                        {generatedConcept.sections.join(' / ')}
                      </span>
                    </p>
                  </div>
                </motion.div>
              )}

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
                <div className="mb-10 border-b border-white/10 pb-8">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[#CAA96A]/70">
                    Manual Refinement
                  </p>
                  <h2
                    className="mb-3 text-2xl tracking-[-0.03em] text-white"
                    style={{ fontWeight: 300 }}
                  >
                    Refine Your Vision
                  </h2>
                  <p className="text-sm font-light leading-[1.6] text-white/55">
                    Adjust style, color, and typography to explore variations of your concept.
                  </p>
                </div>

                <div className="space-y-10">
                  <div>
                    <label className="mb-4 block text-[13px] font-light tracking-[0.02em] text-white/65">
                      Visual Direction
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['classic', 'cinema', 'minimal'] as StyleMode[]).map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setStyleMode(mode)}
                          className={`rounded-xl border px-4 py-3.5 text-sm font-light capitalize transition-all duration-300 ${
                            styleMode === mode
                              ? 'border-[#CAA96A]/60 bg-[#CAA96A]/10 text-[#CAA96A]'
                              : 'border-white/10 bg-white/[0.02] text-white/65 hover:border-white/20 hover:bg-white/[0.04] hover:text-white/85'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-4 block text-[13px] font-light tracking-[0.02em] text-white/65">
                      Primary Accent
                    </label>
                    <div className="grid grid-cols-4 gap-3">
                      {(Object.keys(accentColors) as AccentColor[]).map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => setAccentMode(color)}
                          className={`group relative h-14 overflow-hidden rounded-xl border transition-all duration-300 ${
                            accentMode === color
                              ? 'scale-105 border-white/40 shadow-lg'
                              : 'border-white/10 hover:border-white/25 hover:scale-[1.02]'
                          }`}
                          style={{ backgroundColor: accentColors[color] }}
                          aria-label={color}
                        >
                          {accentMode === color && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="h-2 w-2 rounded-full bg-white shadow-sm" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                    <div className="mt-2.5 grid grid-cols-4 gap-3 text-[11px] font-light tracking-wide text-white/40">
                      <span>Gold</span>
                      <span>White</span>
                      <span>Burgundy</span>
                      <span>Blue</span>
                    </div>
                  </div>

                  <div>
                    <label className="mb-4 block text-[13px] font-light tracking-[0.02em] text-white/65">
                      Typographic Style
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        {
                          value: 'editorial',
                          label: 'Editorial Serif',
                          desc: 'Refined and timeless'
                        },
                        { value: 'modern', label: 'Modern Sans', desc: 'Clean and contemporary' },
                        {
                          value: 'contrast',
                          label: 'Refined Contrast',
                          desc: 'Expressive hierarchy'
                        }
                      ].map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setTypeMode(type.value as TypographyMode)}
                          className={`w-full rounded-xl border px-5 py-3.5 text-left transition-all duration-300 ${
                            typeMode === type.value
                              ? 'border-[#CAA96A]/60 bg-[#CAA96A]/10'
                              : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                          }`}
                        >
                          <div
                            className={`text-sm font-light ${typeMode === type.value ? 'text-[#CAA96A]' : 'text-white/75'}`}
                          >
                            {type.label}
                          </div>
                          <div
                            className={`mt-0.5 text-xs font-light ${typeMode === type.value ? 'text-[#CAA96A]/60' : 'text-white/40'}`}
                          >
                            {type.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-10">
                    <label
                      htmlFor="title"
                      className="mb-3 block text-[13px] font-light tracking-[0.02em] text-white/65"
                    >
                      Your Name or Studio
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-light text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#CAA96A]/60 focus:bg-white/[0.045]"
                      placeholder="Your name or brand"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subtitle"
                      className="mb-3 block text-[13px] font-light tracking-[0.02em] text-white/65"
                    >
                      Tagline or Discipline
                    </label>
                    <input
                      type="text"
                      id="subtitle"
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-light text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#CAA96A]/60 focus:bg-white/[0.045]"
                      placeholder="Musician / Creative / Studio"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="min-h-[700px]"
            >
              <div className="sticky top-28">
                <div className="mb-4 flex items-center justify-between px-2">
                  <span className="text-[10px] font-light uppercase tracking-[0.35em] text-white/35">
                    Concept Preview
                  </span>
                  <div className="flex items-center gap-2">
                    <div
                      className="h-1 w-1 rounded-full"
                      style={{ backgroundColor: previewStyles.accentColor, opacity: 0.4 }}
                    />
                    <span className="text-[10px] font-light text-white/30">Live</span>
                  </div>
                </div>

                <div
                  className={`relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl ${previewStyles.backgroundTreatment}`}
                >
                  <div className={`absolute inset-0 ${previewStyles.atmosphereOverlay}`} />

                  <div className="relative z-10">
                    <div className="border-b border-white/5 px-8 py-5 md:px-10 md:py-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="h-1.5 w-1.5 rounded-full transition-colors duration-500"
                            style={{ backgroundColor: previewStyles.accentColor, opacity: 0.6 }}
                          />
                          <span className="text-[11px] font-light tracking-wide text-white/45">
                            {title.split(' ')[0] || 'Logo'}
                          </span>
                        </div>
                        <div className="flex gap-5 text-[11px] font-light text-white/35">
                          {sections.slice(0, 3).map((section, idx) => (
                            <span key={idx} className="transition-colors hover:text-white/60">
                              {section}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={`px-8 md:px-10 ${previewStyles.spacing}`}>
                      <motion.div
                        key={`${styleMode}-${typeMode}-${title}-${accentMode}-${selectedFeeling}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div
                          className="mb-5 text-[10px] font-light uppercase tracking-[0.3em]"
                          style={{ color: previewStyles.accentColor, opacity: 0.85 }}
                        >
                          {subtitle || 'Your Discipline'}
                        </div>

                        <h1
                          className={`${previewStyles.heroSize} ${previewStyles.letterSpacing} leading-[0.95] text-white ${previewStyles.heroSpacing}`}
                          style={{ fontWeight: previewStyles.headingWeight }}
                        >
                          {title || 'Your Name'}
                        </h1>

                        <p
                          className={`mb-9 max-w-lg ${previewStyles.descriptionSize} leading-[1.7] text-white/55 ${previewStyles.bodyFont}`}
                        >
                          {heroDescription}
                        </p>

                        <div className="flex flex-wrap gap-3">
                          <button
                            type="button"
                            className="rounded-full px-7 py-3 text-[13px] font-light text-white transition-all duration-300 hover:opacity-90"
                            style={{ backgroundColor: previewStyles.accentColor }}
                          >
                            {primaryCta}
                          </button>
                          <button
                            type="button"
                            className="rounded-full border px-7 py-3 text-[13px] font-light text-white/70 transition-all duration-300 hover:bg-white/[0.04] hover:text-white/90"
                            style={{ borderColor: `${previewStyles.accentColor}40` }}
                          >
                            {secondaryCta}
                          </button>
                        </div>
                      </motion.div>
                    </div>

                    <div className={`border-t border-white/5 px-8 md:px-10 ${previewStyles.sectionSpacing}`}>
                      <div
                        className="mb-6 text-[10px] font-light uppercase tracking-[0.28em]"
                        style={{ color: previewStyles.accentColor, opacity: 0.7 }}
                      >
                        {sections[0] || 'About'}
                      </div>

                      <p className="max-w-xl text-[13px] font-light leading-[1.75] text-white/50">
                        {getSectionDescription(sections[0] || 'About')}
                      </p>
                    </div>

                    <div className={`border-t border-white/5 px-8 md:px-10 ${previewStyles.sectionSpacing}`}>
                      <div
                        className="mb-7 text-[10px] font-light uppercase tracking-[0.28em]"
                        style={{ color: previewStyles.accentColor, opacity: 0.7 }}
                      >
                        {sections[1] || 'Selected Work'}
                      </div>

                      <div className="space-y-6">
                        {[
                          {
                            title: 'Featured Project',
                            desc: 'Brand identity and digital experience'
                          },
                          {
                            title: 'Recent Commission',
                            desc: 'Editorial design and creative direction'
                          },
                          { title: 'Ongoing Collaboration', desc: 'Strategic positioning and voice' }
                        ].map((project, idx) => (
                          <div
                            key={idx}
                            className="group cursor-pointer border-b border-white/5 pb-5 transition-all duration-300 hover:border-white/10"
                          >
                            <div className="mb-1.5 flex items-center justify-between">
                              <h3 className="text-[15px] font-light tracking-[-0.01em] text-white/85 transition-colors group-hover:text-white">
                                {project.title}
                              </h3>
                              <div
                                className="text-[10px] font-light opacity-0 transition-opacity group-hover:opacity-60"
                                style={{ color: previewStyles.accentColor }}
                              >
                                View
                              </div>
                            </div>
                            <p className="text-[12px] font-light leading-[1.6] text-white/40">
                              {project.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {sections.length > 2 && (
                      <div className={`border-t border-white/5 px-8 md:px-10 ${previewStyles.sectionSpacing}`}>
                        <div
                          className="mb-6 text-[10px] font-light uppercase tracking-[0.28em]"
                          style={{ color: previewStyles.accentColor, opacity: 0.7 }}
                        >
                          {sections[2] || 'Services'}
                        </div>

                        <p className="max-w-xl text-[13px] font-light leading-[1.75] text-white/50">
                          {getSectionDescription(sections[2] || 'Services')}
                        </p>
                      </div>
                    )}

                    <div
                      className="border-t border-white/5 px-8 py-10 md:px-10 md:py-12"
                      style={{ backgroundColor: `${previewStyles.accentColor}08` }}
                    >
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="mb-2 text-[13px] font-light text-white/65">
                            Ready to begin?
                          </p>
                          <p className="text-[11px] font-light text-white/40">
                            Available for collaboration and new projects
                          </p>
                        </div>
                        <button
                          type="button"
                          className="rounded-full border px-6 py-2.5 text-[12px] font-light transition-all duration-300 hover:bg-white/[0.04]"
                          style={{
                            borderColor: `${previewStyles.accentColor}60`,
                            color: previewStyles.accentColor
                          }}
                        >
                          Start Conversation
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-28 md:py-36">
        <div className="mx-auto max-w-[960px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-7">
              <span className="text-[11px] font-light uppercase tracking-[0.32em] text-[#CAA96A]/60">
                From Concept to Reality
              </span>
            </div>

            <h2
              className="mx-auto mb-9 max-w-[820px] text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08] tracking-[-0.045em] text-white"
              style={{ fontWeight: 275 }}
            >
              This is only the beginning of what your website could become.
            </h2>

            <p className="mx-auto mb-14 max-w-[680px] text-[clamp(0.95rem,1.35vw,1.08rem)] font-light leading-[1.7] tracking-[0.005em] text-white/50">
              The final website would be designed with intentional structure, refined
              messaging, and a complete visual system built around your work, your audience,
              and your goals.
            </p>

            <Link to={buildContactLink()}>
              <Button variant="primary">Discuss This Direction</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
