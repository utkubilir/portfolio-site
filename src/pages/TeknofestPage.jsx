import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonLink from '../components/ButtonLink'
import Card from '../components/Card'
import Container from '../components/Container'
import { projects } from '../data/projects'
import { isUsableHref } from '../utils/link'

function TeknofestPage() {
  const navigate = useNavigate()

  const project = useMemo(
    () => projects.find((item) => item.slug === 'teknofest' || item.featured),
    [],
  )

  const detailBlocks = useMemo(
    () => [
      {
        id: 'leadership',
        title: 'Leadership',
        items: project?.detailSections?.leadership ?? [],
      },
      {
        id: 'simulation',
        title: 'Simulation & Testing',
        items: project?.detailSections?.simulationTesting ?? [],
      },
      {
        id: 'autonomy',
        title: 'Autonomy & Guidance',
        items: project?.detailSections?.autonomyGuidance ?? [],
      },
      {
        id: 'telemetry',
        title: 'Telemetry / Infrastructure',
        items: project?.detailSections?.telemetryInfrastructure ?? [],
      },
    ],
    [project],
  )

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
      return
    }

    navigate('/#projects')
  }

  if (!project) {
    return (
      <section className="py-20 sm:py-24">
        <Container className="space-y-6">
          <ButtonLink as="button" type="button" onClick={handleBack}>
            ← Back to Home
          </ButtonLink>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">Project details are not available.</p>
        </Container>
      </section>
    )
  }

  return (
    <section id="teknofest" className="py-16 sm:py-20">
      <Container className="space-y-8">
        <ButtonLink as="button" type="button" onClick={handleBack}>
          ← Back to Home
        </ButtonLink>

        <section id="overview" className="scroll-mt-28">
          <Card className="p-7" hover>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              Project Detail
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
              {project.title}
            </h1>
            <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
              {project.role} • {project.period}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((techItem) => (
                <span
                  key={techItem}
                  className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:text-zinc-200"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </Card>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          {detailBlocks.map((block) => (
            <section id={block.id} key={block.id} className="scroll-mt-28">
              <Card hover>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{block.title}</h2>
                <ul className="mt-4 space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>
          ))}
        </div>

        {(project.roadmap ?? []).length > 0 ? (
          <section id="roadmap" className="scroll-mt-28">
            <Card hover>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Roadmap</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {project.roadmap.map((item) => (
                  <div
                    key={`${item.phase}-${item.title}`}
                    className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">
                      {item.phase}
                    </p>
                    <h3 className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        ) : null}

        <section id="links" className="scroll-mt-28">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            {(project.links ?? []).map((link) =>
              isUsableHref(link.href) ? (
                <ButtonLink
                  key={`${project.title}-${link.label}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </ButtonLink>
              ) : null,
            )}
          </div>
        </section>
      </Container>
    </section>
  )
}

export default TeknofestPage
