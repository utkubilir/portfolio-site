import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { experience } from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Experience"
          title="Professional timeline."
          description="Optional section for roles, dates, and impact-focused summaries."
        />

        <div className="space-y-4">
          {experience.map((item) => (
            <article
              key={`${item.org}-${item.role}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
                  {item.period}
                </p>
              </div>
              <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                {item.org}
              </p>
              <ul className="mt-3 space-y-2">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm leading-7 text-slate-600 dark:text-slate-300"
                  >
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Experience
