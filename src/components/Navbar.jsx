import LanguageToggle from './LanguageToggle'
import Container from './Container'
import { useI18n } from '../i18n'

function Navbar({ navItems, brand, brandHref = '#hero' }) {
  const { messages } = useI18n()

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-line-soft)] bg-[rgba(5,5,5,0.88)] backdrop-blur-xl">
      <Container className="flex max-w-none flex-wrap items-center justify-between gap-3 py-4">
        <div className="flex items-center gap-3">
          <span className="eyebrow-tag hidden sm:inline-flex">{messages.ui.portfolioNode}</span>
          <a
            href={brandHref}
            className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-[0.26em] text-[color:var(--color-text)] no-underline sm:text-base"
          >
            {brand}
          </a>
        </div>

        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id ?? item.href}
              href={item.href ?? `#${item.id}`}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex flex-wrap items-center gap-2">
          <LanguageToggle />
        </div>
      </Container>

      <div className="border-t border-[color:var(--color-line-soft)] py-3 md:hidden">
        <Container className="max-w-none">
          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <a
                key={item.id ?? item.href}
                href={item.href ?? `#${item.id}`}
                className="mobile-nav-link whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  )
}

export default Navbar
