import Container from './Container'
import { socials } from '../data/socials'
import { isUsableHref } from '../utils/link'

function Footer({ name }) {
  const footerLinks = socials.filter((item) =>
    ['GitHub', 'LinkedIn', 'Email'].includes(item.label),
  )

  return (
    <footer className="border-t border-zinc-200 py-6 dark:border-zinc-800">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
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
                className="rounded-lg border border-zinc-300 px-3 py-1 text-zinc-600 no-underline transition-colors hover:bg-zinc-50 hover:text-blue-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900/40 dark:hover:text-blue-400"
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
