import LanguageToggle from './LanguageToggle'
import Container from './Container'
import ThemeToggle from './ThemeToggle'

function Navbar({ navItems, isDark, onToggleTheme, brand, brandHref = '#hero' }) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 dark:border-zinc-800 dark:bg-zinc-950/95">
      <Container className="flex items-center justify-between py-4">
        <a
          href={brandHref}
          className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-900 no-underline dark:text-zinc-100"
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

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </div>
      </Container>

      <div className="border-t border-zinc-200 py-3 md:hidden dark:border-zinc-800">
        <Container>
          <nav className="flex gap-2 overflow-x-auto">
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
