import { socialLinks } from '../data/socialLinks'

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.15.08 1.76 1.19 1.76 1.19 1.04 1.76 2.72 1.25 3.39.95.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.68 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.17 1.17a11.1 11.1 0 0 1 5.77 0c2.2-1.48 3.16-1.17 3.16-1.17.64 1.57.24 2.73.12 3.02.74.8 1.19 1.82 1.19 3.07 0 4.41-2.7 5.39-5.28 5.67.42.36.79 1.06.79 2.15v3.18c0 .31.2.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const railItemClass =
  'group inline-flex h-12 w-12 items-center justify-center text-zinc-900/90 opacity-90 transition-opacity hover:opacity-70 motion-reduce:transition-none dark:text-zinc-100/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950'

function SocialRail({ className = '' }: { className?: string }) {
  const classes = [
    'fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-10 lg:flex',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <nav aria-label="Social links" className={classes}>
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className={railItemClass}
      >
        <GitHubIcon />
      </a>

      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className={railItemClass}
      >
        <span className="font-semibold text-3xl leading-none tracking-tight">in</span>
      </a>

      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className={railItemClass}
      >
        <InstagramIcon />
      </a>
    </nav>
  )
}

export default SocialRail
