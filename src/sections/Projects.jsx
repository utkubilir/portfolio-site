import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/projects'
import { isUsableHref } from '../utils/link'

function ProjectLink({ href, label }) {
  if (isUsableHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-slate-300 px-3 py-1.5 font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-slate-100"
      >
        {label}
      </a>
    )
  }

  return (
    <span className="cursor-not-allowed rounded-full border border-slate-200 px-3 py-1.5 font-medium text-slate-400 dark:border-slate-800 dark:text-slate-500">
      {label}
    </span>
  )
}

function Projects() {
  const featuredProject = projects.find((project) => project.featured)
  const regularProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="scroll-mt-28 py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work highlights."
          description="Project cards are rendered from a data array so you can update content quickly."
        />

        {featuredProject ? (
          <article className="rounded-3xl border border-cyan-200/70 bg-gradient-to-br from-cyan-50 to-white p-7 shadow-sm dark:border-cyan-500/30 dark:from-cyan-950/40 dark:to-slate-900">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
              Featured Project
            </p>

            <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {featuredProject.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  {featuredProject.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {(featuredProject.bullets ?? []).map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-7 text-slate-700 dark:text-slate-300"
                    >
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between gap-5">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="rounded-full border border-cyan-300/70 bg-white/80 px-3 py-1 text-xs text-slate-700 dark:border-cyan-500/50 dark:bg-slate-900 dark:text-slate-200"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm">
                  {(featuredProject.links ?? []).map((link) => (
                    <ProjectLink
                      key={`${featuredProject.title}-${link.label}`}
                      href={link.href}
                      label={link.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {regularProjects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-100">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-200"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                {(project.links ?? []).map((link) => (
                  <ProjectLink
                    key={`${project.title}-${link.label}`}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects
