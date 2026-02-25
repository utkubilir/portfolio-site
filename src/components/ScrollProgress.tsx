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
      className="sticky top-[4.5rem] z-40 h-1 w-full rounded-full bg-zinc-200/70 dark:bg-zinc-800/70"
    >
      <div
        className={`h-full rounded-full bg-blue-600 dark:bg-blue-400 ${
          reducedMotion ? '' : 'transition-[width] duration-150'
        }`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

export default ScrollProgress
