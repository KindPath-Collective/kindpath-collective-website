# Contributing to the KindPath Collective Website

The KindPath Collective website is the public face of the organisation. It communicates what KindPath is, what it does, and how communities can engage.

## Before You Contribute

Read [KINDFIELD.md](https://github.com/S4mu3lD4v1d/KindField/blob/main/KINDFIELD.md) for the values and language that should inform all public-facing communications.

## Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Lint
npm run lint
```

## Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint

## Content Standards

- Write in plain, honest language — no inflated claims
- Use KindPath terminology precisely (see KINDFIELD for definitions)
- Accessibility first — semantic HTML, ARIA labels, adequate colour contrast
- Mobile-first responsive design

## Code Standards

- TypeScript strict mode
- Functional components and hooks
- No `any` types
- Tailwind utility classes (no custom CSS unless absolutely necessary)
- All images must have `alt` text

## Pull Request Process

1. Ensure `npm run build` succeeds without errors
2. Ensure `npm run lint` passes
3. Test on mobile viewport before submitting
4. Describe: what changed on the site, why, and any content implications

## Accessibility

All new pages and components must meet WCAG 2.1 AA. Run an accessibility check before submitting a PR.
