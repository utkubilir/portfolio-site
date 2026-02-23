import Container from './Container'
import ThemeToggle from './ThemeToggle'

function Navbar({ navItems, isDark, onToggleTheme, brand }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/85">
      <Container className="flex items-center justify-between py-4">
        <a
          href="#hero"
          className="text-sm font-extrabold uppercase tracking-[0.22em] text-slate-900 dark:text-slate-100"
        >
          {brand}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
      </Container>

      <div className="border-t border-slate-200/80 px-6 py-3 md:hidden dark:border-slate-800">
        <nav className="mx-auto flex max-w-6xl gap-3 overflow-x-auto">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="whitespace-nowrap rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
