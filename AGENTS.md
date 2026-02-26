# AGENTS.md — kindpath-collective-website

## What This Repository Is

The public-facing website for KindPath Collective. Built with Next.js, TypeScript, and Tailwind CSS. This is how the world encounters KindPath.

KINDFIELD foundation: https://github.com/S4mu3lD4v1d/KindField

## Repository Structure

```
app/          — Next.js App Router pages and components
public/       — Static assets (images, fonts, icons)
next.config.js   — Next.js configuration
tailwind.config.js — Tailwind CSS configuration
tsconfig.json — TypeScript configuration
```

## Operating Principles for AI Agents

### Voice and Tone
The website communicates KindPath to the world. Use:
- Plain, honest language
- KindPath terminology precisely (define on first use for public audiences)
- Active voice
- Community-centred framing (not organisation-centred)

### Technical Standards
- Next.js App Router patterns (not Pages Router)
- TypeScript strict mode — no `any` types
- Tailwind utility classes
- Semantic HTML with ARIA labels
- All images must have descriptive `alt` text
- Responsive design (mobile-first)

### KindPath Language for Public Audiences
When writing copy or page content, translate KindPath terminology for general audiences:
- KQ → "a measure of genuine community care"
- ZPB → "conditions where people can be authentically themselves"
- IN → "the quiet disengagement that precedes community breakdown"
- BGR → "how individual behaviour shapes community experience"

### Performance
- Images must be optimised (use Next.js `<Image>` component)
- No unnecessary client-side JavaScript
- Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1

### What Not to Do
- Do not add third-party tracking scripts without explicit approval
- Do not commit real `.env` files
- Do not use `any` TypeScript type
- Do not use deprecated Next.js patterns (Pages Router, `getServerSideProps`, etc.)
- Do not publish content that has not been reviewed for accuracy against KINDFIELD
