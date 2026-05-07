import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'
import { languages } from '../data/languages'

function getLanguageSegments(level) {
  if (/native/i.test(level) || /c[12]/i.test(level)) {
    return 5
  }
  if (/b2/i.test(level)) {
    return 4
  }
  if (/b1/i.test(level)) {
    return 3
  }
  if (/a2/i.test(level)) {
    return 2
  }
  return 1
}

function Languages() {
  const { messages } = useI18n()
  const getLanguageName = (name) => messages.languagesSection.names?.[name] ?? name
  const getLanguageLevel = (level) =>
    Object.entries(messages.languagesSection.levels ?? {}).reduce(
      (current, [source, localized]) => current.replace(source, localized),
      level,
    )

  return (
    <section id="languages" className="scroll-mt-32 py-16 sm:py-20 lg:py-24">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow={messages.languagesSection.eyebrow}
          title={messages.languagesSection.title}
          description={messages.languagesSection.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((item) => (
            <Card key={item.name} className="p-5" hover>
              <h3 className="text-base font-semibold uppercase tracking-[0.08em] text-[color:var(--color-text)]">
                {getLanguageName(item.name)}
              </h3>
              <p className="hud-chip mt-3 inline-flex">{getLanguageLevel(item.level)}</p>
              <div className="segmented-meter mt-5">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={`${item.name}-${index}`}
                    className={`meter-segment ${
                      index < getLanguageSegments(item.level) ? 'meter-segment-active' : ''
                    }`}
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Languages
