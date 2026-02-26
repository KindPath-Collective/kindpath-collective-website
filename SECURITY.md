# Security Policy

The KindPath Collective website is the public face of the organisation. It must be trustworthy, accessible, and secure.

## Reporting a Vulnerability

**Do not open a public issue for security vulnerabilities.**

Email: security@kindpathcollective.org

We will acknowledge receipt within 48 hours and coordinate responsible disclosure.

## Scope

Security concerns relevant to this repository include:
- Cross-site scripting (XSS) vulnerabilities in the Next.js application
- Dependency vulnerabilities (npm packages)
- Sensitive data exposure via environment variables
- Third-party script injection
- Content Security Policy gaps

## Environment Variables

- Never commit `.env.local` or any file containing real environment variables
- All required environment variables must be documented in `.env.example` (if applicable)
- Use Vercel / deployment platform secrets management for production values

## Supported Versions

| Branch | Supported |
|--------|-----------|
| `master` | ✅ Active |
