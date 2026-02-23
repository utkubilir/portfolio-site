import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { profile } from '../data/profile'

function About() {
  return (
    <section id="about" className="scroll-mt-28 py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="About"
          title="A short story about your background."
          description={profile.summary}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {profile.highlights.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.value}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default About
