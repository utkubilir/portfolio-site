import Container from './Container'
import { socials } from '../data/socials'
import { isUsableHref } from '../utils/link'

function Footer({ name }) {
  const footerLinks = socials.filter((item) =>
    ['GitHub', 'LinkedIn', 'Email'].includes(item.label),
  )

  return (
    <footer className="border-t border-slate-200/80 py-6 dark:border-slate-800">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center gap-3 text-xs">
          {footerLinks.map((item) =>
            isUsableHref(item.href) ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="rounded-full border border-slate-300 px-3 py-1 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              >
                {item.label}
              </a>
            ) : null,
          )}
        </div>
      </Container>
    </footer>
  )
}

export default Footer
