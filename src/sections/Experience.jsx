import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'
import { experience } from '../data/experience'

function Experience() {
  const { messages } = useI18n()
  const localizedItems = experience.map((item, index) => ({
    ...item,
    ...(messages.experience.items?.[index] ?? {}),
  }))

  return (
    <section id="experience" className="scroll-mt-32 py-16 sm:py-20 lg:py-24">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow={messages.experience.eyebrow}
          title={messages.experience.title}
          description={messages.experience.description}
        />

        <div className="space-y-4">
          {localizedItems.map((item) => (
            <Card key={`${item.org}-${item.role}`} hover>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="terminal-title">{item.role}</h3>
                <p className="hud-chip hud-chip-accent">{item.period}</p>
              </div>
              <p className="mt-3 text-sm font-medium text-[color:var(--color-text)]">{item.org}</p>
              {item.type ? (
                <p className="mt-2 font-['Space_Grotesk'] text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                  {item.type}
                </p>
              ) : null}
              {item.description ? (
                <p className="copy-muted mt-4 text-sm">{item.description}</p>
              ) : null}
              <ul className="mt-3 space-y-2">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-7 text-[color:rgba(232,228,217,0.76)]"
                  >
                    <span className="mt-2 inline-block h-2 w-2 border border-[color:var(--color-accent)] bg-[rgba(217,93,38,0.25)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              {(item.tech ?? []).length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((techItem) => (
                    <span key={techItem} className="hud-chip hud-chip-quiet">
                      {techItem}
                    </span>
                  ))}
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Experience
