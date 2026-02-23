import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'

function About() {
  return (
    <section id="about" className="scroll-mt-28 py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="About"
          title="A short story about your background."
          description="Use this area to summarize your experience, what you build best, and the value you bring to teams."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              Experience
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Placeholder text for years of experience and key domains.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              Approach
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Placeholder text for problem-solving style and collaboration habits.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              Goals
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Placeholder text for current goals and ideal opportunities.
            </p>
          </article>
        </div>
      </Container>
    </section>
  )
}

export default About
