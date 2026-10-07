# Portfolio — Build Plan

Personal portfolio for **Ajeet Baghel** — inspired by modern animated developer portfolios, with an original design language (not a clone).

## Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 + shadcn/ui components + Lucide icons
- **Animation:** GSAP 3.13+ (ScrollTrigger, ScrollSmoother — now free on npm), Framer Motion for component-level motion
- **3D:** Three.js via @react-three/fiber + @react-three/drei (particle/interactive hero backdrop)
- **Contact:** EmailJS (env-based keys, no backend needed)
- **Hosting:** Vercel

## Design Direction (differentiated from reference)

- Dark-first theme: deep near-black navy + mint accent (reference uses black+purple)
- Typography: Space Grotesk (display) + Inter (body) — not Geist
- Asymmetric editorial layout: sticky section labels, bento project cards — not centered marquees
- Intro: quick name/title reveal, not a terminal loading screen
- Signature interactions: custom cursor dot, magnetic buttons, scroll progress, particle hero field

## Sections

1. Hero — name, role, pitch, 3D particle backdrop, CTAs
2. About — bio + stats
3. Tech Stack — categorized grid (languages / frameworks / tools)
4. Projects — 3–5 featured cards (horizontal scroll or alternating)
5. Experience — vertical timeline
6. Contact — EmailJS form + socials
7. Footer

## Commit Convention

One commit per feature — `feat:`, `chore:`, `fix:` prefixes, linked to GitHub issues (`Closes #N`).

## Roadmap / Issues

- [ ] Scaffold: Vite + React + TS + Tailwind + deps
- [ ] Layout shell: navbar, smooth scroll, section scaffolding
- [ ] Hero + intro reveal
- [ ] About + Tech Stack
- [ ] Projects
- [ ] Experience + Contact + Footer
- [ ] 3D particles + scroll animations + cursor polish
- [ ] Responsive/a11y/SEO polish
- [ ] Deploy to Vercel
