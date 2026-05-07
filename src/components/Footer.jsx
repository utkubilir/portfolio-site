import Container from './Container'
import { socials } from '../data/socials'
import { isUsableHref } from '../utils/link'
import { useI18n } from '../i18n'

function Footer({ name }) {
  const { language } = useI18n()
  const footerLinks = socials.filter((item) =>
    ['GitHub', 'LinkedIn', 'Email'].includes(item.label),
  )
  const labelByLanguage = {
    tr: { Email: 'E-posta' },
    en: { Email: 'Email' },
  }

  return (
    <footer className="border-t border-[color:var(--color-line-soft)] py-8">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-['Space_Grotesk'] text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
          © {new Date().getFullYear()} {name}. {language === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
        </p>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          {footerLinks.map((item) =>
            isUsableHref(item.href) ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="hud-chip no-underline"
              >
                {labelByLanguage[language]?.[item.label] ?? item.label}
              </a>
            ) : null,
          )}
        </div>
      </Container>
    </footer>
  )
}

export default Footer
