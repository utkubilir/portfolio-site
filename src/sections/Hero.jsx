import ButtonLink from '../components/ButtonLink'
import Card from '../components/Card'
import Container from '../components/Container'
import ResumeButton from '../components/ResumeButton'
import { useI18n } from '../i18n'

function Hero() {
  const { messages } = useI18n()

  return (
    <section id="hero" className="scroll-mt-32 py-10 sm:py-14 lg:py-16">
      <Container>
        <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.1fr)_22rem]">
          <Card className="p-6 sm:p-8 xl:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow-tag">{messages.hero.profileNode}</span>
              <span className="hud-chip hud-chip-quiet">{messages.hero.location}</span>
            </div>

            <h1 className="display-hero mt-6">Utku Bilir</h1>
            <p className="terminal-subtitle mt-5 max-w-3xl break-words">{messages.hero.subtitle}</p>

            <p className="copy-lead mt-6 max-w-3xl break-words">{messages.hero.summary}</p>

            <div className="hero-signal-grid mt-7">
              {messages.hero.signals.map((item) => (
                <div key={item.label} className="signal-tile">
                  <p>{item.label}</p>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="#projects" variant="primary" serial="RUN" className="w-full sm:w-auto">
                {messages.hero.cta.projects}
              </ButtonLink>
              <ResumeButton variant="primary" className="w-full sm:w-auto" />
              <ButtonLink href="#contact" serial="COM" className="w-full sm:w-auto">
                {messages.hero.cta.contact}
              </ButtonLink>
            </div>
          </Card>

          <Card as="aside" className="min-w-0 space-y-4 lg:sticky lg:top-28">
            <p className="eyebrow-tag">{messages.hero.recruiterSnapshot}</p>

            <div className="divide-y divide-[color:var(--color-line-soft)] border border-[color:var(--color-line-soft)] bg-[rgba(11,13,15,0.72)]">
              {messages.hero.snapshot.map((item) => (
                <div key={item.label} className="p-4">
                  <p className="font-['Space_Grotesk'] text-[0.7rem] uppercase tracking-[0.16em] text-[color:var(--color-muted)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--color-text)]">{item.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default Hero
