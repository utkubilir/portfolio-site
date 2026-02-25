import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'
import { activities } from '../data/activities'

function Activities() {
  const { messages } = useI18n()

  return (
    <section id="activities" className="scroll-mt-28 py-12 sm:py-16">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow={messages.activities.eyebrow}
          title={messages.activities.title}
          description={messages.activities.description}
        />

        <div className="space-y-4">
          {activities.map((item) => (
            <Card key={`${item.role}-${item.period}`} hover>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{item.role}</h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.period}</p>
              </div>
              <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">{item.org}</p>

              <ul className="mt-3 space-y-2">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300"
                  >
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Activities
