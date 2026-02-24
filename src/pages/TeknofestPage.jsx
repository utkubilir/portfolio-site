import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonLink from '../components/ButtonLink'
import Card from '../components/Card'
import Container from '../components/Container'
import { useI18n } from '../i18n'
import { projects } from '../data/projects'
import { isUsableHref } from '../utils/link'

function TeknofestPage() {
  const navigate = useNavigate()
  const { messages } = useI18n()

  const project = useMemo(
    () => projects.find((item) => item.slug === 'teknofest' || item.featured),
    [],
  )

  const detailBlocks = useMemo(
    () => [
      {
        id: 'architecture',
        title: messages.teknofest.sections.architecture.title,
        items: messages.teknofest.sections.architecture.body,
      },
      {
        id: 'leadership',
        title: messages.teknofest.sections.leadership.title,
        items: messages.teknofest.sections.leadership.body,
      },
      {
        id: 'simulation',
        title: messages.teknofest.sections.simulation.title,
        items: messages.teknofest.sections.simulation.body,
      },
      {
        id: 'autonomy',
        title: messages.teknofest.sections.autonomy.title,
        items: messages.teknofest.sections.autonomy.body,
      },
      {
        id: 'telemetry',
        title: messages.teknofest.sections.telemetry.title,
        items: messages.teknofest.sections.telemetry.body,
      },
    ],
    [messages],
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
      <section className="py-16 sm:py-20">
        <Container className="space-y-6">
          <ButtonLink as="button" type="button" onClick={handleBack} className="w-full sm:w-auto">
            ← {messages.teknofest.back}
          </ButtonLink>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">Project details are not available.</p>
        </Container>
      </section>
    )
  }

  return (
    <section id="teknofest" className="py-14 sm:py-20">
      <Container className="space-y-8 sm:space-y-10">
        <ButtonLink as="button" type="button" onClick={handleBack} className="w-full sm:w-auto">
          ← {messages.teknofest.back}
        </ButtonLink>

        <section id="overview" className="scroll-mt-28">
          <Card className="p-6 sm:p-7" hover>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              {messages.teknofest.projectDetail}
            </p>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl dark:text-zinc-100">
              {messages.teknofest.title}
            </h1>
            <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
              {messages.teknofest.rolePeriod}
            </p>
            <p className="mt-4 max-w-3xl break-words text-base leading-7 text-zinc-600 dark:text-zinc-300">
              {messages.projects.items.teknofest.description}
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

        <div className="grid gap-6 md:grid-cols-2">
          {detailBlocks.map((block) => (
            <section id={block.id} key={block.id} className="scroll-mt-28">
              <Card hover>
                <h2 className="break-words text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {block.title}
                </h2>
                <ul className="mt-4 space-y-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 break-words text-sm leading-7 text-zinc-600 dark:text-zinc-300"
                    >
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
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {messages.teknofest.roadmap}
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.roadmap.map((item) => (
                  <div
                    key={`${item.phase}-${item.title}`}
                    className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">
                      {item.phase}
                    </p>
                    <h3 className="mt-2 break-words text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 break-words text-sm leading-6 text-zinc-600 dark:text-zinc-300">
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
