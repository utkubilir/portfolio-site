import { useI18n } from '../i18n'

function LanguageToggle() {
  const { language, messages, toggleLanguage } = useI18n()
  const nextLanguageLabel = language === 'en' ? 'TR' : 'EN'
  const nextLanguageDescription =
    language === 'en' ? messages.ui.switchToTurkish : messages.ui.switchToEnglish

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`${nextLanguageLabel} - ${nextLanguageDescription}`}
      className="rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900/40"
    >
      {nextLanguageLabel}
    </button>
  )
}

export default LanguageToggle
