import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { languages } from '../data/languages'

function Languages() {
  return (
    <section id="languages" className="scroll-mt-28 py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Languages"
          title="Communication proficiency."
          description="Language levels used in academic, technical, and team contexts."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {item.name}
              </h3>
              <p className="mt-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {item.level}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Languages
