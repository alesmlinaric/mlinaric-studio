# Premium Portfolio Website

A cinematic, minimalist portfolio website for a web developer and musician. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Design Philosophy

This portfolio combines the precision of code with the rhythm of music, creating a premium digital experience that feels elegant, intentional, and refined.

### Visual Identity

- **Color Palette**: Deep black background (#0a0a0a), white text, elegant gold accents (#caa96a)
- **Typography**: Clean editorial style with strong hierarchy and generous spacing
- **Animation**: Subtle fade-up transitions with staggered reveals
- **Layout**: Minimalist editorial aesthetic with lots of whitespace

## Features

### Pages

1. **Home** - Full-featured landing page with hero, featured projects, services, process, about preview, skills, and final CTA
2. **Projects** - Portfolio grid showcasing all projects
3. **Project Detail** - Individual case study pages with overview, challenge, solution, tech stack, and results
4. **About** - Personal story connecting music to web development
5. **Contact** - Contact form with Supabase integration

### Components

- **Navbar** - Transparent navbar that becomes dark on scroll, with smooth active state indicators
- **Footer** - Minimal footer with social links
- **Button** - Reusable button component with primary and secondary variants

### Technical Features

- React Router for navigation
- Framer Motion for smooth animations
- Supabase integration for contact form
- Fully responsive design
- Smooth scroll behavior
- SEO optimized

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Supabase
- Vite

## Project Structure

```
src/
├── components/      # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Button.tsx
├── pages/          # Page components
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── ProjectDetail.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── data/           # Project data
│   └── projects.ts
├── lib/            # Utilities
│   └── supabase.ts
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Customization

### Adding Projects

Edit `src/data/projects.ts` to add or modify projects. Each project includes:
- Title, category, description
- Overview, challenge, solution
- Tech stack
- Results
- Images

### Changing Colors

Update the gold accent color in `tailwind.config.js` and throughout the components. The current palette uses:
- Background: `#0a0a0a`
- Gold accent: `#caa96a`
- Blue accent: `#3b82f6`

### Contact Form

The contact form is connected to Supabase. Messages are stored in the `contacts` table with RLS policies for security.

## Content Tone

The content is written to be:
- Calm and confident
- Refined and creative
- Premium without arrogance
- Clear and intentional
- Not corporate, not casual

## Design Principles

1. **Clarity over noise** - Every element has purpose
2. **Elegance over clutter** - Generous whitespace and restraint
3. **Structure with emotion** - Balance between logic and feeling
4. **Intentional details** - Subtle animations and refined interactions

## Performance

- Optimized images from Pexels
- Lazy loading for images
- Code splitting with React Router
- Minimal bundle size with tree shaking

## Browser Support

Modern browsers including:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

---

Designed with precision, rhythm, and intent.
