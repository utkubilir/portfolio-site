import { useI18n } from '../i18n'

function SunIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5" />
      <path d="M12 19v2.5" />
      <path d="m4.93 4.93 1.77 1.77" />
      <path d="m17.3 17.3 1.77 1.77" />
      <path d="M2.5 12H5" />
      <path d="M19 12h2.5" />
      <path d="m4.93 19.07 1.77-1.77" />
      <path d="m17.3 6.7 1.77-1.77" />
    </svg>
  )
}

function MoonIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M21 13.2A8.8 8.8 0 1 1 10.8 3a7.2 7.2 0 0 0 10.2 10.2Z" />
    </svg>
  )
}

function ThemeToggle({ isDark, onToggle }) {
  const { messages } = useI18n()
  const nextThemeLabel = isDark ? messages.ui.themeLight : messages.ui.themeDark

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={nextThemeLabel}
      aria-pressed={isDark}
      className="site-icon-toggle"
    >
      <SunIcon className={`h-4 w-4 transition-opacity ${isDark ? 'opacity-35' : 'opacity-100'}`} />
      <MoonIcon className={`h-4 w-4 transition-opacity ${isDark ? 'opacity-100' : 'opacity-35'}`} />
    </button>
  )
}

export default ThemeToggle
