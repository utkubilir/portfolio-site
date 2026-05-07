import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'

function About() {
  const { messages } = useI18n()
  const [intro, ...notes] = messages.about.body

  return (
    <section id="about" className="scroll-mt-32 py-16 sm:py-20 lg:py-24">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow={messages.about.eyebrow}
          title={messages.about.title}
          description={intro}
        />

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-4">
            <p className="terminal-subtitle">{messages.about.fieldNotes}</p>
            {notes.map((paragraph) => (
              <p key={paragraph} className="copy-muted break-words text-base">
                {paragraph}
              </p>
            ))}
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            {messages.hero.signals.map((item, index) => (
              <Card key={item.label} hover className="space-y-3 compact-card">
                <p className="font-['Space_Grotesk'] text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                  [{String(index + 1).padStart(2, '0')}] {item.label}
                </p>
                <p className="text-base leading-7 text-[color:var(--color-text)]">{item.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
