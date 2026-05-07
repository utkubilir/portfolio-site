type TocItem = {
  id: string
  title: string
}

type TeknofestTocProps = {
  items: TocItem[]
  activeId: string
  onNavigate: (id: string) => void
  variant: 'mobile' | 'desktop'
}

function TeknofestToc({ items, activeId, onNavigate, variant }: TeknofestTocProps) {
  if (variant === 'mobile') {
    return (
      <nav aria-label="Case study sections" className="lg:hidden">
        <div className="-mx-5 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8">
          <ul className="flex min-w-max gap-2">
            {items.map((item) => {
              const isActive = item.id === activeId

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={(event) => {
                      event.preventDefault()
                      onNavigate(item.id)
                    }}
                    className={`inline-flex whitespace-nowrap border px-3 py-2 font-['Space_Grotesk'] text-[0.72rem] font-semibold uppercase tracking-[0.16em] no-underline transition-colors focus-visible:outline-none ${
                      isActive
                        ? 'border-[color:rgba(217,93,38,0.75)] bg-[rgba(217,93,38,0.12)] text-[color:var(--color-accent-soft)]'
                        : 'border-[color:var(--color-line-soft)] bg-[rgba(19,19,19,0.82)] text-[color:rgba(232,228,217,0.76)]'
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }

  return (
    <aside className="hidden lg:block">
      <nav aria-label="Case study sections" className="mission-card sticky top-24 p-5">
        <p className="font-['Space_Grotesk'] text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
          On this page
        </p>
        <ul className="mt-4 border-l border-[color:var(--color-line-soft)] pl-3">
          {items.map((item) => {
            const isActive = item.id === activeId

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={(event) => {
                    event.preventDefault()
                    onNavigate(item.id)
                  }}
                  className={`block px-2 py-2 font-['Space_Grotesk'] text-sm uppercase tracking-[0.08em] no-underline transition-colors focus-visible:outline-none ${
                    isActive
                      ? 'text-[color:var(--color-accent-soft)]'
                      : 'text-[color:rgba(232,228,217,0.72)] hover:text-[color:var(--color-text)]'
                  }`}
                >
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default TeknofestToc
