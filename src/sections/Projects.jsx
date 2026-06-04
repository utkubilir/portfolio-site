import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { useI18n } from '../i18n'
import { projects } from '../data/projects'
import { isUsableHref } from '../utils/link'

function Projects() {
  const { messages } = useI18n()
  const getCopy = (project) => messages.projects.items[project.slug] ?? null

  return (
    <section id="projects" className="scroll-mt-32 pt-24 sm:pt-32">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="ed-eyebrow">{messages.projects.eyebrow}</p>
            <h2 className="ed-display mt-3 text-3xl font-semibold sm:text-[2.5rem]">
              {messages.projects.title}
            </h2>
          </div>
          <span className="ed-meta hidden whitespace-nowrap sm:block">
            {String(projects.length).padStart(2, '0')} —
          </span>
        </div>

        <p className="mt-5 max-w-2xl text-base leading-7" style={{ color: 'var(--ed-muted)' }}>
          {messages.projects.intro}
        </p>

        <div className="mt-12">
          {projects.map((project, index) => {
            const copy = getCopy(project)
            const title = copy?.title ?? project.title
            const summary = copy?.context ?? copy?.description ?? project.description
            const links = (project.links ?? []).filter((link) => isUsableHref(link.href))

            return (
              <article key={project.slug ?? title} className="ed-project">
                <div className="ed-index">{String(index + 1).padStart(2, '0')}</div>

                <div className="min-w-0">
                  <h3 className="ed-display text-2xl font-semibold leading-tight sm:text-[1.9rem]">
                    {title}
                  </h3>
                  <p
                    className="mt-2.5 max-w-xl text-sm leading-7"
                    style={{ color: 'var(--ed-muted)' }}
                  >
                    {summary}
                  </p>
                  <p className="ed-tech mt-4">{project.tech.join('   ·   ')}</p>
                </div>

                <div className="flex flex-col items-start gap-4 lg:items-end lg:text-right">
                  <p className="ed-meta">
                    {[project.role, project.period].filter(Boolean).join(' · ')}
                  </p>
                  <div className="flex flex-col items-start gap-2.5 lg:items-end">
                    {project.slug === 'teknofest' ? (
                      <Link to="/teknofest" className="ed-link">
                        {messages.projects.readMore}
                        <span className="ed-link-arrow">→</span>
                      </Link>
                    ) : null}

                    {links.map((link) => (
                      <a
                        key={`${project.slug}-${link.label}`}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="ed-link"
                      >
                        {link.label}
                        <span className="ed-link-arrow">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
          <div className="ed-rule" />
        </div>
      </Container>
    </section>
  )
}

export default Projects
