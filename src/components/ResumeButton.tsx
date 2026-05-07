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

type ResumeButtonProps = {
  className?: string
  variant?: 'primary' | 'secondary'
}

function ResumeButton({ className = '', variant = 'secondary' }: ResumeButtonProps) {
  const { messages } = useI18n()

  const classes = [
    'control-button',
    variant === 'primary' ? 'control-button-primary' : '',
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
      <span aria-hidden="true" className="button-serial">
        CV
      </span>
    </a>
  )
}

export default ResumeButton
