import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { experience } from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Experience"
          title="Professional timeline"
          description="Internship and project contributions across software and autonomy workflows."
        />

        <div className="space-y-4">
          {experience.map((item) => (
            <Card key={`${item.org}-${item.role}`} hover>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.period}</p>
              </div>
              <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">{item.org}</p>
              {item.type ? (
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                  {item.type}
                </p>
              ) : null}
              {item.description ? (
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                  {item.description}
                </p>
              ) : null}
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
              {(item.tech ?? []).length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:text-zinc-200"
                    >
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
