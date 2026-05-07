type ScrollProgressProps = {
  progress: number
  reducedMotion: boolean
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function ScrollProgress({ progress, reducedMotion }: ScrollProgressProps) {
  const normalized = clamp(progress, 0, 1)
  const percentage = Math.round(normalized * 100)

  return (
    <div
      role="progressbar"
      aria-label="Case study reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percentage}
      className="sticky top-[4.65rem] z-40 h-2 w-full overflow-hidden border border-[color:var(--color-line-soft)] bg-[rgba(19,19,19,0.8)]"
    >
      <div
        className={`h-full bg-[repeating-linear-gradient(90deg,var(--color-accent)_0_14px,rgba(255,181,153,0.95)_14px_18px)] ${
          reducedMotion ? '' : 'transition-[width] duration-150'
        }`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

export default ScrollProgress
