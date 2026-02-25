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
        <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6">
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
                    className={`inline-flex whitespace-nowrap rounded-full border px-3 py-1.5 text-xs no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950 ${
                      isActive
                        ? 'border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-500/10 dark:text-blue-300'
                        : 'border-zinc-300 text-zinc-700 dark:border-zinc-700 dark:text-zinc-200'
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
      <nav aria-label="Case study sections" className="sticky top-24">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
          On this page
        </p>
        <ul className="mt-3 border-l border-zinc-200 pl-3 dark:border-zinc-800">
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
                  className={`block rounded-md px-2 py-2 text-sm no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950 ${
                    isActive
                      ? 'text-blue-700 dark:text-blue-300'
                      : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100'
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
