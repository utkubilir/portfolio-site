import Container from '../components/Container'
import { useI18n } from '../i18n'
import { profile } from '../data/profile'

function Hero() {
  const { messages } = useI18n()
  const facts = profile.highlights

  return (
    <section id="hero" className="scroll-mt-32">
      <Container>
        {/* Masthead */}
        <div className="flex items-center justify-between gap-4">
          <span className="ed-eyebrow">Portfolio — 2026</span>
          <span className="ed-eyebrow inline-flex items-center gap-2">
            <span className="ed-status-dot" aria-hidden="true" />
            <span className="hidden sm:inline">{messages.contact.availability}</span>
          </span>
        </div>
        <div className="ed-rule mt-3" />

        {/* Statement */}
        <div className="grid gap-x-16 gap-y-12 pt-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:pt-24">
          <div>
            <p className="ed-eyebrow">{messages.hero.kicker}</p>
            <h1 className="ed-display mt-6 text-[2.6rem] font-semibold leading-[1.05] sm:text-5xl lg:text-[4.4rem] lg:leading-[1.02]">
              {messages.hero.subtitle}
            </h1>
            <p
              className="mt-7 max-w-xl text-base leading-8 sm:text-[1.05rem]"
              style={{ color: 'var(--ed-muted)' }}
            >
              {messages.hero.summary}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a href="#projects" className="ed-cta">
                {messages.hero.cta.projects}
              </a>
              <a href="#contact" className="ed-link">
                {messages.hero.cta.contact}
                <span className="ed-link-arrow">→</span>
              </a>
            </div>
          </div>

          {/* Facts rail */}
          <aside className="lg:border-l lg:pl-10" style={{ borderColor: 'var(--ed-line)' }}>
            <p className="ed-eyebrow">{messages.hero.quickSnapshot}</p>
            <div className="mt-3">
              {facts.map((fact) => (
                <div key={fact.label} className="ed-fact">
                  <p className="ed-fact-label">{fact.label}</p>
                  <p className="ed-fact-value">{fact.value}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default Hero
