import { useI18n } from '../i18n'

function LanguageToggle() {
  const { language, messages, toggleLanguage } = useI18n()
  const nextLanguageDescription =
    language === 'en' ? messages.ui.switchToTurkish : messages.ui.switchToEnglish

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={nextLanguageDescription}
      className="site-language-toggle"
    >
      <span className={language === 'en' ? 'opacity-100' : 'opacity-55'}>EN</span>
      <span className="opacity-35">/</span>
      <span className={language === 'tr' ? 'opacity-100' : 'opacity-55'}>TR</span>
    </button>
  )
}

export default LanguageToggle
