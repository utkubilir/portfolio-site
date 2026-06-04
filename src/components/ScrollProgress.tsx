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
      className="sticky top-[4.5rem] z-40 h-1 w-full overflow-hidden rounded-full"
      style={{ backgroundColor: 'var(--ed-line)' }}
    >
      <div
        className={`h-full rounded-full ${reducedMotion ? '' : 'transition-[width] duration-150'}`}
        style={{ width: `${percentage}%`, backgroundColor: 'var(--ed-accent)' }}
      />
    </div>
  )
}

export default ScrollProgress
