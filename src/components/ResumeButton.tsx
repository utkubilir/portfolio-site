import { resume } from '../data/resume'

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
  const classes = [
    'inline-flex items-center justify-center gap-3 rounded-full border-2 border-zinc-900 bg-transparent px-6 py-3 text-base font-medium text-zinc-900 no-underline transition-colors hover:bg-zinc-900/5 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-100/10 dark:focus-visible:ring-offset-zinc-950',
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
      aria-label="Download resume"
      className={classes}
    >
      <DownloadIcon />
      <span>{resume.label}</span>
    </a>
  )
}

export default ResumeButton
