import { useEffect, useState } from 'react'

const DEFAULT_DURATION = 900
const REDUCED_DURATION = 400
const FADE_DURATION = 220

function SplashScreen({ onDone }: { onDone?: () => void }) {
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      onDone?.()
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      const reducedTimer = window.setTimeout(() => {
        onDone?.()
      }, REDUCED_DURATION)

      return () => window.clearTimeout(reducedTimer)
    }

    const fadeTimer = window.setTimeout(() => {
      setIsFading(true)
    }, DEFAULT_DURATION)

    const doneTimer = window.setTimeout(() => {
      onDone?.()
    }, DEFAULT_DURATION + FADE_DURATION)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white text-zinc-900 transition-opacity duration-200 motion-reduce:transition-none dark:bg-zinc-950 dark:text-zinc-100 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-live="polite"
    >
      <p className="text-4xl font-semibold tracking-tight sm:text-5xl">Utku Bilir</p>
    </div>
  )
}

export default SplashScreen
