# CLAUDE.md — KindPath Collective Website

## Session Init Protocol

Before reading code or making changes, run:
```bash
cat ~/.kindpath/HANDOVER.md
python3 ~/.kindpath/kp_memory.py dump --domain gotcha
python3 ~/.kindpath/kp_memory.py dump
```

---

## What This Is
The public-facing KindPath Collective website. Built with Next.js 14, Tailwind CSS, TypeScript.

## Operational Commands
- **Dev server**: `npm run dev` (port 3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint`

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript

## Security Mandates
- No API keys or secrets in source
- All external integrations via server-side routes only
