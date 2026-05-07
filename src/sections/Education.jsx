import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'
import { education } from '../data/education'

function Education() {
  const { messages } = useI18n()
  const localizedItems = education.map((item, index) => ({
    ...item,
    ...(messages.education.items?.[index] ?? {}),
  }))

  return (
    <section id="education" className="scroll-mt-32 py-16 sm:py-20 lg:py-24">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow={messages.education.eyebrow}
          title={messages.education.title}
          description={messages.education.description}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {localizedItems.map((item) => (
            <Card key={`${item.institution}-${item.degree}`} hover>
              <p className="font-['Space_Grotesk'] text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                [ {messages.education.academicNode} ]
              </p>
              <h3 className="mt-3 terminal-title">{item.institution}</h3>
              <p className="terminal-subtitle mt-3">{item.degree}</p>
              <p className="copy-muted mt-3 text-sm">{item.details}</p>
              <p className="hud-chip mt-5 inline-flex">
                {item.period}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Education
