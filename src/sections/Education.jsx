import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'
import { education } from '../data/education'

function Education() {
  const { messages } = useI18n()

  return (
    <section id="education" className="scroll-mt-28 py-12 sm:py-16">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow={messages.education.eyebrow}
          title={messages.education.title}
          description={messages.education.description}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <Card key={`${item.institution}-${item.degree}`} hover>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {item.institution}
              </h3>
              <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">{item.degree}</p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{item.details}</p>
              <p className="mt-4 inline-flex rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:text-zinc-200">
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
