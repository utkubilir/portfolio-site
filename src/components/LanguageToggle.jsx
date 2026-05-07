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
      className="control-toggle"
    >
      {nextLanguageLabel}
    </button>
  )
}

export default LanguageToggle
