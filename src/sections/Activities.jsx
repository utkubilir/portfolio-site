import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'
import { activities } from '../data/activities'

function Activities() {
  const { messages } = useI18n()
  const localizedItems = activities.map((item, index) => ({
    ...item,
    ...(messages.activities.items?.[index] ?? {}),
  }))

  return (
    <section id="activities" className="scroll-mt-32 py-16 sm:py-20 lg:py-24">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow={messages.activities.eyebrow}
          title={messages.activities.title}
          description={messages.activities.description}
        />

        <Card className="p-0">
          <p className="terminal-subtitle px-5 pt-5 sm:px-6 sm:pt-6">
            {messages.activities.compactLabel}
          </p>

          <div className="mt-4 divide-y divide-[color:var(--color-line-soft)]">
            {localizedItems.map((item) => (
              <article key={`${item.role}-${item.period}`} className="p-5 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="terminal-title text-[1rem]">{item.role}</h3>
                    <p className="mt-2 text-sm font-medium text-[color:var(--color-text)]">{item.org}</p>
                  </div>
                  <p className="hud-chip hud-chip-accent shrink-0">{item.period}</p>
                </div>

                <ul className="mt-4 grid gap-2 md:grid-cols-2">
                  {item.bullets.slice(0, 2).map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-6 text-[color:rgba(232,228,217,0.76)]"
                    >
                      <span className="mt-2 inline-block h-2 w-2 shrink-0 border border-[color:var(--color-accent)] bg-[rgba(217,93,38,0.25)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  )
}

export default Activities
