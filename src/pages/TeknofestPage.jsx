import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bg1 from '../assets/teknofest/uav-1.svg'
import bg2 from '../assets/teknofest/uav-2.svg'
import bg3 from '../assets/teknofest/uav-3.svg'
import Container from '../components/Container'
import { projects } from '../data/projects'
import { isUsableHref } from '../utils/link'

const backgrounds = [bg1, bg2, bg3].filter(Boolean)

function normalizeBgIndex(index) {
  if (backgrounds.length === 0) {
    return 0
  }

  return ((index % backgrounds.length) + backgrounds.length) % backgrounds.length
}

function TeknofestPage() {
  const navigate = useNavigate()
  const pageRef = useRef(null)
  const [activeBg, setActiveBg] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

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
        bgIndex: 1,
      },
      {
        id: 'simulation',
        title: 'Simulation & Testing',
        items: project?.detailSections?.simulationTesting ?? [],
        bgIndex: 2,
      },
      {
        id: 'autonomy',
        title: 'Autonomy & Guidance',
        items: project?.detailSections?.autonomyGuidance ?? [],
        bgIndex: 0,
      },
      {
        id: 'telemetry',
        title: 'Telemetry / Infrastructure',
        items: project?.detailSections?.telemetryInfrastructure ?? [],
        bgIndex: 1,
      },
    ],
    [project],
  )

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    updateMotionPreference()

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateMotionPreference)
      return () => mediaQuery.removeEventListener('change', updateMotionPreference)
    }

    mediaQuery.addListener(updateMotionPreference)
    return () => mediaQuery.removeListener(updateMotionPreference)
  }, [])

  useEffect(() => {
    if (!pageRef.current || backgrounds.length === 0) {
      return undefined
    }

    const sections = Array.from(pageRef.current.querySelectorAll('[data-bg-index]'))
    if (sections.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          const rawIndex = Number(entry.target.getAttribute('data-bg-index'))
          if (Number.isNaN(rawIndex)) {
            return
          }

          setActiveBg(normalizeBgIndex(rawIndex))
        })
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.01,
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [detailBlocks, project])

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
          <button
            type="button"
            onClick={handleBack}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            ← Back to Home
          </button>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Project details are not available.
          </p>
        </Container>
      </section>
    )
  }

  return (
    <div ref={pageRef} className="relative">
      {backgrounds.length > 0 ? (
        <div className="pointer-events-none fixed inset-0 z-0">
          {backgrounds.map((source, index) => (
            <img
              key={source}
              src={source}
              alt=""
              aria-hidden="true"
              loading={index === 0 ? 'eager' : 'lazy'}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity ${
                prefersReducedMotion ? 'duration-0' : 'duration-700'
              } ${index === activeBg ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        </div>
      ) : null}

      <section id="teknofest" className="relative z-10 py-16 sm:py-20">
        <Container className="space-y-8">
          <button
            type="button"
            onClick={handleBack}
            className="rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            ← Back to Home
          </button>

          <section
            id="overview"
            data-bg-index={normalizeBgIndex(0)}
            className="scroll-mt-28"
          >
            <header className="rounded-3xl border border-cyan-200/70 bg-white/88 p-7 shadow-sm backdrop-blur-sm dark:border-cyan-500/30 dark:bg-slate-900/88">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
                Project Detail
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
                {project.title}
              </h1>
              <p className="mt-2 text-sm font-medium text-cyan-700 dark:text-cyan-300">
                {project.role} • {project.period}
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="rounded-full border border-cyan-300/70 bg-white/80 px-3 py-1 text-xs text-slate-700 dark:border-cyan-500/50 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </header>
          </section>

          <div className="grid gap-6 lg:grid-cols-2">
            {detailBlocks.map((block) => (
              <section
                id={block.id}
                data-bg-index={normalizeBgIndex(block.bgIndex)}
                key={block.id}
                className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white/88 p-6 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/88"
              >
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {block.title}
                </h2>
                <ul className="mt-4 space-y-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-7 text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {(project.roadmap ?? []).length > 0 ? (
            <section
              id="roadmap"
              data-bg-index={normalizeBgIndex(2)}
              className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white/88 p-6 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/88"
            >
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Roadmap
              </h2>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {project.roadmap.map((item) => (
                  <div
                    key={`${item.phase}-${item.title}`}
                    className="rounded-xl border border-slate-200 bg-white/90 p-4 dark:border-slate-700 dark:bg-slate-900"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
                      {item.phase}
                    </p>
                    <h3 className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section
            id="links"
            data-bg-index={normalizeBgIndex(2)}
            className="scroll-mt-28"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm">
              {(project.links ?? []).map((link) =>
                isUsableHref(link.href) ? (
                  <a
                    key={`${project.title}-${link.label}`}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-300 bg-white/90 px-4 py-2 font-medium text-slate-700 transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:bg-slate-900"
                  >
                    {link.label}
                  </a>
                ) : null,
              )}
            </div>
          </section>
        </Container>
      </section>
    </div>
  )
}

export default TeknofestPage
