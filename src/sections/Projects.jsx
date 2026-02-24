import { Link } from 'react-router-dom'
import ButtonLink from '../components/ButtonLink'
import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/projects'
import { isUsableHref } from '../utils/link'

function ProjectLink({ href, label }) {
  if (isUsableHref(href)) {
    return (
      <ButtonLink href={href} target="_blank" rel="noreferrer" className="px-3 py-1.5 text-xs">
        {label}
      </ButtonLink>
    )
  }

  return (
    <ButtonLink as="button" type="button" variant="muted" disabled className="px-3 py-1.5 text-xs">
      {label}
    </ButtonLink>
  )
}

function Projects() {
  const featuredProject = projects.find((project) => project.featured)
  const regularProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="scroll-mt-28 py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work"
          description="Recent work in UAV autonomy and scheduling software."
        />

        {featuredProject ? (
          <Card className="p-7" hover>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              Featured Project
            </p>

            <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {featuredProject.role} • {featuredProject.period}
                </p>
                <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  {featuredProject.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {(featuredProject.bullets ?? []).map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300"
                    >
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
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
                      className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:text-zinc-200"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <ButtonLink as={Link} to="/teknofest" variant="primary">
                    Read more
                  </ButtonLink>

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
          </Card>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {regularProjects.map((project) => (
            <Card key={project.title} className="flex h-full flex-col" hover>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {project.title}
              </h3>
              {project.role && project.period ? (
                <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {project.role} • {project.period}
                </p>
              ) : null}
              <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {project.description}
              </p>

              {(project.bullets ?? []).length > 0 ? (
                <ul className="mt-3 space-y-2">
                  {project.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300"
                    >
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:text-zinc-200"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                {(project.links ?? []).map((link) => (
                  <ProjectLink key={`${project.title}-${link.label}`} href={link.href} label={link.label} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects
