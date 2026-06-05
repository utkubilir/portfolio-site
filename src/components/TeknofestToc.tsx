import { useI18n } from '../i18n'

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
  const { messages } = useI18n()

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
                    className={`inline-flex whitespace-nowrap rounded-full border px-3 py-1.5 text-xs no-underline transition-colors ${
                      isActive
                        ? 'border-[color:var(--ed-accent)] bg-[color:var(--ed-accent-soft)] text-[color:var(--ed-accent)]'
                        : 'border-[color:var(--ed-line-strong)] text-[color:var(--ed-muted)]'
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
        <p className="ed-eyebrow">{messages.teknofest.onThisPage}</p>
        <ul className="mt-4 border-l pl-4" style={{ borderColor: 'var(--ed-line)' }}>
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
                  className={`block py-1.5 text-sm no-underline transition-colors ${
                    isActive ? 'font-semibold' : ''
                  }`}
                  style={{ color: isActive ? 'var(--ed-accent)' : 'var(--ed-muted)' }}
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
