function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
        {title}
      </h2>
      <p className="text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
        {description}
      </p>
    </div>
  )
}

export default SectionHeader
