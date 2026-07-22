# ComHub — Marketing Landing Page

A premium, animated Next.js 15 landing page for ComHub, an all-in-one team
communication workspace.

## Stack

- React 19 + Next.js 15 (App Router)
- TypeScript
- Tailwind CSS (design tokens in `tailwind.config.ts`)
- Framer Motion (scroll reveals via `components/ui/Reveal.tsx`)
- lucide-react icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/                      Routing, layout, global styles
components/layout/        Navbar, Footer
components/sections/      One file per landing-page section
components/ui/            Reusable primitives (Reveal, RippleButton, TiltCard, CountUp)
lib/data.ts                All copy/content in one typed source of truth
lib/hooks/                 useReveal (IntersectionObserver), useCountUp (rAF)
```

## Notes

- Colors, spacing, and radii are defined once in `tailwind.config.ts` and
  `app/globals.css` — update them there rather than in individual components.
- All page copy (features, pricing, FAQ, testimonials, steps) lives in
  `lib/data.ts` so content can be edited without touching markup.
- Motion respects `prefers-reduced-motion` globally (see `globals.css`).
- Replace the placeholder testimonials, logos, and stats in `lib/data.ts`
  with real customer data before shipping.
