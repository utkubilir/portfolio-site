import { useI18n } from '../i18n'

function ThemeToggle({ isDark, onToggle }) {
  const { messages } = useI18n()
  const nextThemeLabel = isDark ? messages.ui.themeLight : messages.ui.themeDark

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={nextThemeLabel}
      aria-pressed={isDark}
      className="rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900/40"
    >
      {nextThemeLabel}
    </button>
  )
}

export default ThemeToggle
