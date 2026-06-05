import { useEffect, useState } from 'react'
import LanguageToggle from './LanguageToggle'
import Container from './Container'
import ResumeButton from './ResumeButton'
import ThemeToggle from './ThemeToggle'

function MenuIcon({ isOpen }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      {isOpen ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  )
}

function Navbar({ navItems, activeId, isDark, onToggleTheme, brand, brandHref = '#hero' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--ui-border)] bg-[color:var(--ui-header)]/88 backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-3 py-4">
        <a
          href={brandHref}
          className="site-brand ed-display text-[1.2rem] font-semibold tracking-tight text-[color:var(--page-text)] no-underline sm:text-[1.35rem]"
        >
          {brand}
        </a>

        <nav className="hidden items-center justify-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = Boolean(activeId) && item.id === activeId

            return (
              <a
                key={item.id ?? item.href}
                href={item.href ?? `#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`site-nav-link text-sm text-[color:var(--page-muted)] no-underline ${
                  isActive ? 'is-active' : ''
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <ResumeButton />
        </div>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="site-icon-toggle"
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </Container>

      <div className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <Container className="pb-4">
          <div className="mobile-nav-panel">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = Boolean(activeId) && item.id === activeId

                return (
                  <a
                    key={item.id ?? item.href}
                    href={item.href ?? `#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`mobile-nav-link ${isActive ? 'is-active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>

            <div className="mt-4">
              <ResumeButton className="w-full justify-center" />
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Navbar
