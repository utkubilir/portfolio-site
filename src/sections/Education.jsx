import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { education } from '../data/education'

function Education() {
  return (
    <section id="education" className="scroll-mt-28 py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Education"
          title="Academic background."
          description="Current degree path and expected graduation timeline."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.degree}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {item.institution}
              </h3>
              <p className="mt-2 text-sm font-medium text-cyan-700 dark:text-cyan-300">
                {item.degree}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {item.details}
              </p>
              <p className="mt-4 inline-flex rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-200">
                {item.period}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Education
