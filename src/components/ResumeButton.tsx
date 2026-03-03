import { resume } from '../data/resume'
import { useI18n } from '../i18n'

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M12 3v11" />
      <path d="m7 10 5 5 5-5" />
      <path d="M4 17h16v4H4z" />
    </svg>
  )
}

function ResumeButton({ className = '' }) {
  const { messages } = useI18n()

  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-transparent px-4 py-2 text-sm font-medium text-zinc-700 no-underline transition-colors hover:bg-zinc-50 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900/40 dark:focus-visible:ring-offset-zinc-950',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      href={resume.href}
      download={resume.fileName}
      target="_blank"
      rel="noreferrer"
      aria-label={messages.hero.cta.resume}
      className={classes}
    >
      <DownloadIcon />
      <span>{messages.hero.cta.resume}</span>
    </a>
  )
}

export default ResumeButton
