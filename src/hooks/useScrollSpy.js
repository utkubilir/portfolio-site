import { useEffect, useState } from 'react'

/**
 * Tracks which in-page section is currently active based on scroll position.
 * Returns the id of the last section whose top has scrolled past `offset`
 * pixels from the top of the viewport. Falls back to the last id near the
 * bottom of the page so the final section reliably activates.
 */
export function useScrollSpy(ids, { offset = 160 } = {}) {
  const key = ids.join(',')
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    if (typeof window === 'undefined' || ids.length === 0) {
      return undefined
    }

    let rafId = 0

    const compute = () => {
      rafId = 0
      let current = ids[0]

      for (const id of ids) {
        const element = document.getElementById(id)
        if (!element) {
          continue
        }
        if (element.getBoundingClientRect().top - offset <= 0) {
          current = id
        }
      }

      const reachedBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (reachedBottom) {
        current = ids[ids.length - 1]
      }

      setActiveId((previous) => (previous === current ? previous : current))
    }

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(compute)
      }
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, offset])

  return activeId
}
