import { MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ButtonLink from '../components/ButtonLink'
import Card from '../components/Card'
import Container from '../components/Container'
import ScrollProgress from '../components/ScrollProgress'
import TeknofestToc from '../components/TeknofestToc'
import uavBg0 from '../assets/teknofest/uav-1.svg'
import uavBg1 from '../assets/teknofest/uav-2.svg'
import uavBg2 from '../assets/teknofest/uav-3.svg'
import { useNavigate } from 'react-router-dom'
import { teknofestSections } from '../data/teknofestSections'

const BACKGROUNDS = [uavBg0, uavBg1, uavBg2] as const

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => setReducedMotion(mediaQuery.matches)

    handleChange()

    if ('addEventListener' in mediaQuery) {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }

    mediaQuery.addListener(handleChange)
    return () => mediaQuery.removeListener(handleChange)
  }, [])

  return reducedMotion
}

function Teknofest() {
  const navigate = useNavigate()
  const prefersReducedMotion = usePrefersReducedMotion()
  const contentRef = useRef<HTMLElement | null>(null)
  const firstRenderRef = useRef(true)
  const sections = useMemo(() => teknofestSections, [])

  const sectionMap = useMemo(
    () => new Map(sections.map((section) => [section.id, section])),
    [sections],
  )
  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id ?? 'hero')
  const [activeBgIndex, setActiveBgIndex] = useState<0 | 1 | 2>(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const activeSection = sectionMap.get(activeSectionId)
    setActiveBgIndex(activeSection?.bgIndex ?? 0)
  }, [activeSectionId, sectionMap])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const hashId = window.location.hash.replace('#', '')
    if (!hashId || !sectionMap.has(hashId)) {
      return
    }

    setActiveSectionId(hashId)

    const target = document.getElementById(hashId)
    if (!target) {
      return
    }

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'auto', block: 'start' })
    })
  }, [sectionMap])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const nextHash = `#${activeSectionId}`
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }

    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, '', nextHash)
    }
  }, [activeSectionId])

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element))

    if (elements.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      () => {
        const viewportMiddle = window.innerHeight * 0.5
        let closestElement: HTMLElement | null = null
        let closestDistance = Number.POSITIVE_INFINITY

        for (const element of elements) {
          const rect = element.getBoundingClientRect()
          if (rect.bottom < 0 || rect.top > window.innerHeight) {
            continue
          }

          const center = rect.top + rect.height / 2
          const distance = Math.abs(center - viewportMiddle)

          if (distance < closestDistance) {
            closestDistance = distance
            closestElement = element
          }
        }

        if (!closestElement) {
          return
        }

        const nextId = closestElement.id
        setActiveSectionId((current) => (current === nextId ? current : nextId))
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0.01,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [sections])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    let rafId = 0

    const updateProgress = () => {
      const node = contentRef.current
      if (!node) {
        return
      }

      const rect = node.getBoundingClientRect()
      const start = window.scrollY + rect.top
      const maxScrollable = Math.max(node.offsetHeight - window.innerHeight, 1)
      const rawProgress = (window.scrollY - start) / maxScrollable
      setScrollProgress(clamp(rawProgress, 0, 1))
    }

    const onScrollOrResize = () => {
      if (rafId) {
        return
      }

      rafId = window.requestAnimationFrame(() => {
        updateProgress()
        rafId = 0
      })
    }

    updateProgress()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [sections])

  const handleNavigateToSection = useCallback(
    (id: string) => {
      const target = document.getElementById(id)
      if (!target) {
        return
      }

      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      })

      setActiveSectionId(id)
      setActiveBgIndex(sectionMap.get(id)?.bgIndex ?? 0)
    },
    [prefersReducedMotion, sectionMap],
  )

  const handleHeroActionClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith('#')) {
        event.preventDefault()
        handleNavigateToSection(href.slice(1))
        return
      }

      if (href.startsWith('/')) {
        event.preventDefault()
        navigate(href)
      }
    },
    [handleNavigateToSection, navigate],
  )

  return (
    <section id="teknofest" className="relative isolate overflow-x-clip py-16 sm:py-24">
      <a
        href="#teknofest-content"
        className="sr-only z-[60] rounded-md bg-blue-600 px-4 py-2 text-sm text-white no-underline focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to case study content
      </a>

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {BACKGROUNDS.map((background) => (
          <div
            key={background}
            className={`absolute inset-0 ${
              background === BACKGROUNDS[activeBgIndex] ? 'opacity-100' : 'opacity-0'
            } ${prefersReducedMotion ? '' : 'transition-opacity duration-700 ease-out'}`}
          >
            <img src={background} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-white/90 dark:bg-zinc-950/70" />
          </div>
        ))}
      </div>

      <Container className="space-y-6 sm:space-y-8">
        <ScrollProgress progress={scrollProgress} reducedMotion={prefersReducedMotion} />

        <div className="grid min-w-0 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10">
          <div className="space-y-4 lg:hidden">
            <TeknofestToc
              variant="mobile"
              items={sections.map((section) => ({ id: section.id, title: section.title }))}
              activeId={activeSectionId}
              onNavigate={handleNavigateToSection}
            />
          </div>

          <main
            id="teknofest-content"
            ref={contentRef}
            className="mx-auto w-full max-w-2xl min-w-0 space-y-6 sm:space-y-8"
          >
            {sections.map((section) => {
              const isHero = section.id === 'hero'
              const isHighlights = section.id === 'highlights'
              const isTimeline = section.id === 'timeline'

              return (
                <section
                  id={section.id}
                  key={section.id}
                  className="scroll-mt-28"
                  aria-labelledby={`${section.id}-heading`}
                >
                  <Card className="border-zinc-200 bg-white/90 p-6 sm:p-7 dark:border-zinc-800 dark:bg-zinc-950/75">
                    {isHero ? (
                      <>
                        <h1
                          id={`${section.id}-heading`}
                          className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl dark:text-zinc-100"
                        >
                          {section.title}
                        </h1>
                        {section.subtitle ? (
                          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-200">
                            {section.subtitle}
                          </p>
                        ) : null}
                      </>
                    ) : (
                      <h2
                        id={`${section.id}-heading`}
                        className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-100"
                      >
                        {section.title}
                      </h2>
                    )}

                    <div className="mt-4 max-w-2xl space-y-4">
                      {section.body.map((paragraph) => (
                        <p
                          key={`${section.id}-${paragraph}`}
                          className="break-words text-base leading-7 text-zinc-700 dark:text-zinc-200"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.meta?.length ? (
                      <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                        {section.meta.map((item) => (
                          <div
                            key={`${section.id}-${item.label}`}
                            className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800"
                          >
                            <dt className="text-xs uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                              {item.label}
                            </dt>
                            <dd className="mt-1 text-sm font-medium text-zinc-800 dark:text-zinc-100">
                              {item.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}

                    {section.actions?.length ? (
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        {section.actions.map((action) => (
                          <ButtonLink
                            key={`${section.id}-${action.label}`}
                            href={action.href}
                            variant={action.variant ?? 'secondary'}
                            onClick={(event) => handleHeroActionClick(event, action.href)}
                            className="w-full sm:w-auto"
                          >
                            {action.label}
                          </ButtonLink>
                        ))}
                      </div>
                    ) : null}

                    {isHighlights && section.highlights?.length ? (
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {section.highlights.map((item) => (
                          <article
                            key={`${section.id}-${item.title}`}
                            className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
                          >
                            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                              {item.detail}
                            </p>
                          </article>
                        ))}
                      </div>
                    ) : null}

                    {section.chips?.length ? (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {section.chips.map((chip) => (
                          <span
                            key={`${section.id}-${chip}`}
                            className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:text-zinc-200"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    {isTimeline && section.timeline?.length ? (
                      <ol className="mt-6 space-y-4 border-l border-zinc-200 pl-4 dark:border-zinc-800">
                        {section.timeline.map((item) => (
                          <li key={`${section.id}-${item.month}-${item.title}`} className="relative">
                            <span className="absolute -left-[1.12rem] top-2 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">
                              {item.month}
                            </p>
                            <h3 className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                              {item.title}
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                              {item.detail}
                            </p>
                          </li>
                        ))}
                      </ol>
                    ) : null}

                    {!isHero && section.bullets?.length ? (
                      <ul className="mt-5 space-y-2">
                        {section.bullets.map((bullet) => (
                          <li
                            key={`${section.id}-${bullet}`}
                            className="flex gap-2 break-words text-sm leading-7 text-zinc-700 dark:text-zinc-200"
                          >
                            <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </Card>
                </section>
              )
            })}
          </main>

          <TeknofestToc
            variant="desktop"
            items={sections.map((section) => ({ id: section.id, title: section.title }))}
            activeId={activeSectionId}
            onNavigate={handleNavigateToSection}
          />
        </div>
      </Container>
    </section>
  )
}

export default Teknofest
