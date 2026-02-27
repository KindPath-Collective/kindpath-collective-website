# AGENTS.md — kindpath-collective-website

## What This Repository Is

kindpath-collective-website is the public-facing website for KindPath Collective — the world's introduction to KindPath. It is built with Next.js (App Router), TypeScript, and Tailwind CSS.

KINDFIELD foundation: https://github.com/S4mu3lD4v1d/KindField

## Agent Operating Rules

1. **TypeScript strictly** — no `any` types; use proper type definitions
2. **Tailwind CSS only** — no custom CSS unless absolutely necessary
3. **App Router conventions** — use Next.js App Router patterns (`app/` directory)
4. **Server components by default** — only use `'use client'` when interactivity requires it
5. **Accessible markup** — semantic HTML, ARIA labels, keyboard navigation
6. **ESLint clean** — `npm run lint` must pass before any PR
7. **Build must pass** — `npm run build` must succeed

## Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint
- **Branch:** `master` (not `main`)
- **Node:** 20 LTS

## Website Content Principles (from KINDFIELD)

The website represents KindPath Collective to the world. Content should:
- Use clear, warm, accessible language
- Explain KindPath concepts without jargon
- Invite participation rather than broadcast at people
- Reflect the relational, ecological values of KINDFIELD

## What Agents Must Not Do

- Do not use `any` TypeScript types
- Do not add custom CSS outside Tailwind when Tailwind can handle it
- Do not break the build — `npm run build` must always pass
- Do not use `main` as the branch name — the default branch is `master`
- Do not expose environment variables to client-side code
