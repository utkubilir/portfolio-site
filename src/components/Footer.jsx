import Container from './Container'
import { socials } from '../data/socials'
import { isUsableHref } from '../utils/link'

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.15.08 1.76 1.19 1.76 1.19 1.04 1.76 2.72 1.25 3.39.95.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.68 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.17 1.17a11.1 11.1 0 0 1 5.77 0c2.2-1.48 3.16-1.17 3.16-1.17.64 1.57.24 2.73.12 3.02.74.8 1.19 1.82 1.19 3.07 0 4.41-2.7 5.39-5.28 5.67.42.36.79 1.06.79 2.15v3.18c0 .31.2.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}

function LinkedInIcon() {
  return <span className="text-lg font-semibold leading-none tracking-tight">in</span>
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  )
}

const iconMap = {
  GitHub: <GitHubIcon />,
  LinkedIn: <LinkedInIcon />,
  Email: <MailIcon />,
}

function Footer({ name, className = '' }) {
  const footerLinks = socials.filter((item) => ['GitHub', 'LinkedIn', 'Email'].includes(item.label))

  return (
    <footer className={['pt-2', className].filter(Boolean).join(' ')}>
      <Container className="flex flex-col items-center gap-5 border-t border-[color:var(--ui-border)] py-8 text-center sm:py-10">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {footerLinks.map((item) =>
            isUsableHref(item.href) ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="footer-link"
              >
                <span aria-hidden="true">{iconMap[item.label]}</span>
                <span>{item.label}</span>
              </a>
            ) : null,
          )}
        </div>

        <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--page-muted)]">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
