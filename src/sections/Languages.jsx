import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'
import { languages } from '../data/languages'

function Languages() {
  const { messages } = useI18n()

  return (
    <section id="languages" className="scroll-mt-28 py-12 sm:py-16">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow={messages.languagesSection.eyebrow}
          title={messages.languagesSection.title}
          description={messages.languagesSection.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((item) => (
            <Card key={item.name} className="p-5" hover>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{item.name}</h3>
              <p className="mt-2 inline-flex rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:text-zinc-200">
                {item.level}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Languages
