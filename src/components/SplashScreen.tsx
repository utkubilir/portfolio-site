import { useEffect, useState } from 'react'
import { useI18n } from '../i18n'

const DEFAULT_DURATION = 900
const REDUCED_DURATION = 400
const FADE_DURATION = 220

function SplashScreen({ onDone }: { onDone?: () => void }) {
  const { messages } = useI18n()
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
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[color:var(--color-bg)] px-5 text-[color:var(--color-text)] transition-opacity duration-200 motion-reduce:transition-none ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="mission-card w-full max-w-xl p-8 sm:p-10">
        <p className="eyebrow-tag">{messages.ui.systemBoot}</p>
        <p className="display-hero mt-6">Utku Bilir</p>
        <p className="mt-4 font-['Space_Grotesk'] text-xs uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
          {messages.ui.bootMessage}
        </p>
      </div>
    </div>
  )
}

export default SplashScreen
