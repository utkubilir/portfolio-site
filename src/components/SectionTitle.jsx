function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionTitle
