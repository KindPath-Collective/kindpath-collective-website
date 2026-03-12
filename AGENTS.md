# AI Agent Rules for kindpath-collective-website

## Session Init Protocol

Before reading code or making changes, run:
```bash
cat ~/.kindpath/HANDOVER.md
python3 ~/.kindpath/kp_memory.py dump --domain gotcha
python3 ~/.kindpath/kp_memory.py dump
```

---

## What This Is

The public-facing KindPath Collective website. Built with Next.js 14 (App Router),
Tailwind CSS, and TypeScript.

## Structure

```
app/                — Next.js App Router pages and layouts
public/             — Static assets
```

## Operational Commands

- **Dev server**: `npm run dev` (port 3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint`

## Rules

- This is a public website — no sensitive data in any page or component
- No API keys in client-side code — all external integrations via server-side routes
- Keep dependencies minimal — check `package.json` before adding new ones
- All public-facing copy must be accessible and non-technical where possible
- Follow KindPath doctrine: benevolence, syntropy, sovereignty

## Security Mandates

- No API keys or secrets in source control
- All external integrations via server-side routes only
- Content Security Policy should be enforced in production
