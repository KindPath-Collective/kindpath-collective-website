# Copilot Instructions — kindpath-collective-website

## What This Repository Is

kindpath-collective-website is the public-facing website for KindPath Collective — the world's introduction to KindPath. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

KINDFIELD foundation: https://github.com/S4mu3lD4v1d/KindField

## Stack

- **Framework:** Next.js (App Router) — `app/` directory
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS
- **Linting:** ESLint (`eslint.config.js`)
- **Branch:** `master`
- **Node:** 20 LTS

## Code Standards

- TypeScript strictly — no `any` types
- Tailwind CSS for all styling
- Server components by default — `'use client'` only when needed
- ESLint clean — `npm run lint` must pass
- Build must pass — `npm run build` must succeed

## Content Principles

- Clear, warm, accessible language
- KindPath terminology explained, not assumed
- Relational and ecological values (from KINDFIELD) reflected throughout

## What Not To Do

- No `any` TypeScript types
- No custom CSS when Tailwind suffices
- Do not break the build
- Do not expose environment variables client-side
- Do not use `main` — default branch is `master`