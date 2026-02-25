import LanguageToggle from './LanguageToggle'
import Container from './Container'
import ThemeToggle from './ThemeToggle'

function Navbar({ navItems, isDark, onToggleTheme, brand, brandHref = '#hero' }) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 dark:border-zinc-800 dark:bg-zinc-950/95">
      <Container className="max-w-none px-2 sm:px-3 lg:px-4 flex flex-wrap items-center justify-between gap-2 py-3 sm:py-4">
        <a
          href={brandHref}
          className="text-sm font-extrabold uppercase tracking-[0.18em] text-zinc-900 no-underline sm:text-base sm:tracking-[0.24em] dark:text-zinc-100"
        >
          {brand}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id ?? item.href}
              href={item.href ?? `#${item.id}`}
              className="text-sm text-zinc-600 no-underline transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex flex-wrap items-center gap-2">
          <LanguageToggle />
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </div>
      </Container>

      <div className="border-t border-zinc-200 py-3 md:hidden dark:border-zinc-800">
        <Container className="max-w-none px-2 sm:px-3 lg:px-4">
          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <a
                key={item.id ?? item.href}
                href={item.href ?? `#${item.id}`}
                className="whitespace-nowrap rounded-lg border border-zinc-300 px-3 py-1 text-xs text-zinc-700 no-underline transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900/40"
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
