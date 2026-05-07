import { Link } from 'react-router-dom'
import ButtonLink from '../components/ButtonLink'
import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'
import uavPreview from '../assets/teknofest/uav-3.svg'
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

  return null
}

function Projects() {
  const { messages } = useI18n()
  const featuredProject = projects.find((project) => project.featured)
  const regularProjects = projects.filter((project) => !project.featured)
  const projectCopyBySlug = {
    teknofest: messages.projects.items.teknofest,
    'exam-timetable-planner': messages.projects.items.examPlanner,
  }

  const getProjectCopy = (project) => projectCopyBySlug[project.slug] ?? null
  const getRole = (project) => getProjectCopy(project)?.role ?? project.role
  const getPeriod = (project) => getProjectCopy(project)?.period ?? project.period
  const getBullets = (project) => getProjectCopy(project)?.bullets ?? project.bullets ?? []

  return (
    <section id="projects" className="scroll-mt-32 py-16 sm:py-20 lg:py-24">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow={messages.projects.eyebrow}
          title={messages.projects.title}
          description={messages.projects.intro}
        />

        {featuredProject ? (
          <Card className="p-6 sm:p-8" hover>
            <div className="flex flex-wrap items-center gap-2">
              <p className="eyebrow-tag">{messages.projects.featured}</p>
              <span className="hud-chip hud-chip-accent">{messages.projects.preview}</span>
            </div>

            <div className="mt-5 grid gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
              <div className="min-w-0">
                <h3 className="break-words font-['Space_Grotesk'] text-2xl font-semibold uppercase tracking-[0.08em] text-[color:var(--color-text)] sm:text-3xl">
                  {getProjectCopy(featuredProject)?.title ?? featuredProject.title}
                </h3>
                <p className="terminal-subtitle mt-2">
                  {getRole(featuredProject)} • {getPeriod(featuredProject)}
                </p>
                <p className="copy-lead mt-4 break-words">
                  {getProjectCopy(featuredProject)?.description ?? featuredProject.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {getBullets(featuredProject).map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-7 text-[color:rgba(232,228,217,0.76)]"
                    >
                      <span className="mt-2 inline-block h-2 w-2 border border-[color:var(--color-accent)] bg-[rgba(217,93,38,0.25)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                  <ButtonLink
                    as={Link}
                    to="/teknofest"
                    variant="primary"
                    serial="OPEN"
                    className="w-full sm:w-auto"
                  >
                    {messages.projects.readMore}
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

              <div className="project-preview min-w-0">
                <div className="project-preview-media">
                  <img src={uavPreview} alt="" className="h-full w-full object-cover" />
                  <div className="project-preview-overlay" />
                  <div className="project-preview-readout">
                    <p>{messages.projects.contributions}</p>
                    <strong>PX4 SITL + Gazebo</strong>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="font-['Space_Grotesk'] text-[0.72rem] uppercase tracking-[0.16em] text-[color:var(--color-muted)]">
                    {messages.projects.stack}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {featuredProject.tech.map((techItem) => (
                      <span key={techItem} className="hud-chip">
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {regularProjects.map((project) => (
            <Card key={project.title} className="flex h-full min-w-0 flex-col" hover>
              <p className="font-['Space_Grotesk'] text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                [ {messages.projects.eyebrow} ]
              </p>
              <h3 className="mt-3 break-words font-['Space_Grotesk'] text-xl font-semibold uppercase tracking-[0.08em] text-[color:var(--color-text)]">
                {getProjectCopy(project)?.title ?? project.title}
              </h3>
              {project.role && project.period ? (
                <p className="terminal-subtitle mt-2">
                  {getRole(project)} • {getPeriod(project)}
                </p>
              ) : null}
              <p className="copy-muted mt-4 flex-1 break-words text-sm">
                {getProjectCopy(project)?.description ?? project.description}
              </p>

              {(project.bullets ?? []).length > 0 ? (
                <ul className="mt-3 space-y-2">
                  {getBullets(project).map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-6 text-[color:rgba(232,228,217,0.74)]"
                    >
                      <span className="mt-2 inline-block h-2 w-2 border border-[color:var(--color-accent)] bg-[rgba(217,93,38,0.25)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((techItem) => (
                  <span key={techItem} className="hud-chip hud-chip-quiet">
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
