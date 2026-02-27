# Contributing to kindpath-collective-website

This is the public-facing website for KindPath Collective — built with Next.js, TypeScript, and Tailwind CSS.

## Before You Contribute

Read [KINDFIELD.md](https://github.com/S4mu3lD4v1d/KindField/blob/main/KINDFIELD.md) — the epistemological foundation.

## Development Setup

```bash
git clone https://github.com/KindPath-Collective/kindpath-collective-website.git
cd kindpath-collective-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Code Standards

- TypeScript strictly — no `any` types
- Tailwind CSS for all styling — no custom CSS unless absolutely necessary
- ESLint clean — no lint errors
- All new pages/components must be server components unless client interactivity is required
- Accessible markup — semantic HTML, ARIA labels where needed

## Pull Request Process

1. `npm run build` must pass without errors
2. `npm run lint` must pass
3. Describe: what changed on the website and why

## Content

Website content should reflect the KindPath Collective values grounded in KINDFIELD.md. If you are updating text, ensure the language is true to the KindPath orientation.
