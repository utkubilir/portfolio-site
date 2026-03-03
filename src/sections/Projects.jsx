import { Link } from 'react-router-dom'
import ButtonLink from '../components/ButtonLink'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'
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
  const { messages } = useI18n()
  const getProjectCopy = (project) => messages.projects.items[project.slug] ?? null

  return (
    <section id="projects" className="scroll-mt-28 py-12 sm:py-16">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow={messages.projects.eyebrow}
          title={messages.projects.title}
          description={messages.projects.intro}
        />

        <div className="space-y-6">
          {projects.map((project, index) => {
            const projectCopy = getProjectCopy(project)
            const isReversed = index % 2 === 1
            const summary = projectCopy?.context ?? projectCopy?.description ?? project.description
            const role = projectCopy?.role ?? project.role
            const fields = [
              { label: messages.projects.fields.problem, value: projectCopy?.caseStudy?.problem },
              { label: messages.projects.fields.role, value: role },
              { label: messages.projects.fields.techStack, value: project.tech.join(', ') },
              { label: messages.projects.fields.constraints, value: projectCopy?.caseStudy?.constraints },
              { label: messages.projects.fields.keyDecision, value: projectCopy?.caseStudy?.keyDecision },
              { label: messages.projects.fields.result, value: projectCopy?.caseStudy?.result },
              { label: messages.projects.fields.learned, value: projectCopy?.caseStudy?.learned },
            ].filter((field) => Boolean(field.value))

            return (
              <article
                key={project.slug ?? project.title}
                className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800 sm:p-7"
              >
                <div className="grid gap-7 lg:gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
                  <div className={`min-w-0 ${isReversed ? 'xl:order-2' : ''}`}>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                      {messages.projects.caseStudy}
                    </p>
                    <h3 className="mt-2 break-words text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                      {projectCopy?.title ?? project.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                      {[role, project.period].filter(Boolean).join(' • ')}
                    </p>
                    {summary ? (
                      <p className="mt-4 break-words text-base leading-7 text-zinc-700 dark:text-zinc-300">
                        {summary}
                      </p>
                    ) : null}

                    <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                      {project.slug === 'teknofest' ? (
                        <ButtonLink as={Link} to="/teknofest" variant="primary" className="w-full sm:w-auto">
                          {messages.projects.readMore}
                        </ButtonLink>
                      ) : null}

                      {(project.links ?? []).map((link) => (
                        <ProjectLink key={`${project.title}-${link.label}`} href={link.href} label={link.label} />
                      ))}
                    </div>
                  </div>

                  <dl className={`min-w-0 space-y-4 ${isReversed ? 'xl:order-1' : ''}`}>
                    {fields.map((field) => (
                      <div key={field.label} className="border-t border-zinc-200 pt-3 first:border-t-0 first:pt-0 dark:border-zinc-800">
                        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                          {field.label}
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                          {field.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Projects
