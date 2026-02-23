import Container from '../components/Container'
import { contact } from '../data/contact'
import { education } from '../data/education'
import { profile } from '../data/profile'

function Hero() {
  const primaryEducation = education[0]
  const educationLabel = primaryEducation?.degree ?? 'Education'
  const educationDetails = primaryEducation
    ? `${primaryEducation.institution} • ${primaryEducation.period}`
    : ''

  return (
    <section id="hero" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-500/40 dark:bg-cyan-500/10 dark:text-cyan-200">
              {profile.location}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-100">
              {profile.name}
            </h1>
            <p className="max-w-2xl text-base font-semibold leading-8 text-slate-700 sm:text-lg dark:text-slate-200">
              {profile.title}
            </p>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
              {profile.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Quick Snapshot
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                <p className="text-xs uppercase text-slate-500 dark:text-slate-400">
                  Availability
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {contact.availability}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                <p className="text-xs uppercase text-slate-500 dark:text-slate-400">
                  Education
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {educationLabel}
                </p>
                {educationDetails ? (
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {educationDetails}
                  </p>
                ) : null}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default Hero
