import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from './components/GlassPanel'
import ButtonCard from './components/ButtonCard'
import PillButton from './components/PillButton'

export const metadata: Metadata = {
  title: 'KindPath Collective | For people, families and communities',
}

export default function Home() {
  const tools = [
    {
      title: 'Life-Field Tool',
      description: 'Helps people and practitioners map where things are now versus where they want to be — grounded in real circumstances, not systems language.',
      href: '/tools/life-field-tool',
    },
    {
      title: 'KindPath Compass',
      description: 'A practice aid for compassionate listening — prompts and frameworks for support workers, counsellors, and community practitioners.',
      href: '/tools/compass',
    },
    {
      title: 'Community Digital Libraries',
      description: 'Communities own their own data. Local knowledge stays local — with provenance, context, and the ability to say no.',
      href: '/tools/community-digital-libraries',
    },
    {
      title: 'Pilot Operations',
      description: 'Scoping and running community pilots that are measurable, reversible, and built around the people in them — not around institutions.',
      href: '/tools/pilot-operations',
    },
  ]

  const metrics = [
    { title: 'Relationship Health', href: '/platform/trust-liquidity' },
    { title: 'Community Stress', href: '/platform/policy-stress' },
    { title: 'Ecological Wellbeing', href: '/platform/ecological-constraint' },
    { title: 'System Drift', href: '/platform/drift-metrics' },
  ]

  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-16 text-center">
        <span className="inline-flex items-center rounded-full bg-amber/10 px-3 py-1 text-xs font-semibold text-amber">
          Pilot Program Open
        </span>
        <h1 className="mt-6 text-4xl leading-tight font-semibold text-[color:var(--kp-ink)] md:text-5xl md:leading-snug [text-wrap:balance]">
          For people, families and communities navigating hard circumstances.
        </h1>
        <p className="mt-5 text-lg text-[color:var(--kp-ink-soft)] md:text-xl">
          KindPath builds tools for practitioners, communities and families — to find clarity, restore connection, and move forward. Technology serves the relationship, not the other way round.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row">
          <a
            href="/join-pilot"
            className="btn-primary"
          >
            Join the Pilot
          </a>
          <a
            href="/platform"
            className="btn-secondary"
          >
            See What We Build
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <GlassPanel className="p-8 sm:p-10">
          <header className="mb-8">
            <div className="flex items-center justify-center gap-6">
              <div className="hidden sm:flex flex-col items-center gap-2">
                <img
                  src="/brand/kp-foundation-mark.svg"
                  alt="KindPath Foundation mark"
                  className="h-24 w-24 opacity-90"
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold text-[color:var(--kp-ink)]">
                  Tools built around people
                </h2>
                <p className="mt-2 text-sm text-[color:var(--kp-ink-muted)]">
                  For practitioners, community workers, and the families they support.
                </p>
              </div>
              <div className="hidden sm:flex flex-col items-center gap-2">
                <img
                  src="/brand/kindearth-mark.svg"
                  alt="KindEarth mark"
                  className="h-24 w-24 opacity-90"
                />
              </div>
            </div>
          </header>
          <div className="grid gap-4 md:grid-cols-2">
            {tools.map((tool) => (
              <ButtonCard
                key={tool.title}
                href={tool.href}
                title={tool.title}
                description={tool.description}
              />
            ))}
          </div>
        </GlassPanel>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <GlassPanel className="p-8 sm:p-10">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[color:var(--kp-ink)] md:text-4xl">Seeing What&apos;s Happening Before It Becomes a Crisis</h2>
              <p className="mt-4 text-base text-[color:var(--kp-ink-soft)]">
                Families and communities under pressure don&apos;t fail suddenly — they drift. Relationships fray. Trust erodes. The conditions that make things hard are often visible long before they become urgent.
              </p>
              <p className="mt-3 text-base text-[color:var(--kp-ink-soft)]">
                KindPath&apos;s tools help communities and the people who support them see that drift early — and respond thoughtfully, not reactively.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((metric) => (
                <PillButton key={metric.title} href={metric.href}>
                  {metric.title}
                </PillButton>
              ))}
            </div>
          </div>
        </GlassPanel>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <GlassPanel className="flex flex-col items-center gap-4 p-10 text-center">
          <h3 className="text-3xl font-semibold text-[color:var(--kp-ink)]">Proof of Build</h3>
          <p className="text-base text-[color:var(--kp-ink-soft)]">
            We operate with transparency. Explore our code and documentation.
          </p>
          <div className="flex flex-col gap-3 md:flex-row">
            <Link
              href="/build/github-kpth"
              className="btn-secondary"
            >
              GitHub Repo KPTH
            </Link>
            <Link
              href="/build/architecture-roadmap"
              className="btn-secondary"
            >
              Architecture + Roadmap
            </Link>
          </div>
        </GlassPanel>
      </section>

      <section className="bg-[#78d56a]">
        <div className="max-w-6xl mx-auto flex flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:gap-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/35 text-xl">🛡️</div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[color:var(--kp-ink)]">Governance & Safeguards</h3>
            <p className="text-sm md:text-base text-[color:var(--kp-ink-soft)]">
              We don&apos;t build surveillance tools. We don&apos;t score people. Consent and refusal are structural. Communities retain ownership and interpretive authority.
            </p>
          </div>
        </div>
      </section>

      <section id="pilot" className="max-w-6xl mx-auto px-4 py-14 text-center">
        <h3 className="text-2xl font-semibold text-[color:var(--kp-ink)]">Ready to explore ethical pilots?</h3>
        <p className="mt-3 text-base text-[color:var(--kp-ink-soft)]">
          If you&apos;re supporting families or communities and want to explore what a KindPath pilot could look like — reach out.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="/join-pilot"
            className="btn-primary"
          >
            Join the Pilot Interest List
          </a>
        </div>
      </section>
    </main>
  )
}
