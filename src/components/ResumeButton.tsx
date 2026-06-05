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
  const classes = ['site-resume-button', className].filter(Boolean).join(' ')

  if (!resume.href) {
    return (
      <button type="button" disabled className={`${classes} cursor-not-allowed opacity-60`}>
        <DownloadIcon />
        <span>{messages.hero.cta.resume}</span>
      </button>
    )
  }

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
