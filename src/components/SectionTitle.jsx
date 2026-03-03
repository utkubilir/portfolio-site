function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl min-w-0 space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="break-words text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
        {title}
      </h2>
      {description ? (
        <p className="break-words text-base leading-7 text-zinc-600 dark:text-zinc-300">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionTitle
