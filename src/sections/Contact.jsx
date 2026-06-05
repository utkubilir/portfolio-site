import { useMemo, useState } from 'react'
import Container from '../components/Container'
import { useI18n } from '../i18n'
import { contact } from '../data/contact'
import { socials } from '../data/socials'
import { isUsableHref } from '../utils/link'

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || contact.web3formsKey
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

const emptyForm = { name: '', email: '', message: '', botcheck: false }

function Contact() {
  const { messages } = useI18n()
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [copied, setCopied] = useState(false)

  const contactLinks = useMemo(() => socials.filter((item) => isUsableHref(item.href)), [])

  const contactMeta = useMemo(
    () => [
      `${messages.contact.locationLabel} ${contact.location}`,
      `${messages.contact.timezoneLabel} ${contact.timezone}`,
      `${messages.contact.languagesLabel} ${contact.languages.join(', ')}`,
    ],
    [messages],
  )

  const updateField = (field) => (event) => {
    const value = event.target.value
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
    if (status === 'success' || status === 'error') {
      setStatus('idle')
    }
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = messages.contact.validation.name
    }
    if (!form.email.trim()) {
      nextErrors.email = messages.contact.validation.email
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = messages.contact.validation.invalidEmail
    }
    if (!form.message.trim()) {
      nextErrors.message = messages.contact.validation.message
    }

    return nextErrors
  }

  const sendViaMailto = (subject, body) => {
    if (typeof window === 'undefined') return
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()
    const subject = `${messages.contact.subject} — ${name}`
    const body = [
      `${messages.contact.fields.name}: ${name}`,
      `${messages.contact.fields.email}: ${email}`,
      '',
      message,
    ].join('\n')

    // No form service configured → fall back to opening a prefilled email draft.
    if (!WEB3FORMS_ACCESS_KEY) {
      sendViaMailto(subject, body)
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject,
          from_name: name,
          name,
          email,
          replyto: email,
          message,
          botcheck: form.botcheck,
        }),
      })
      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setForm(emptyForm)
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleCopyEmail = async () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — ignore */
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <section id="contact" className="scroll-mt-32 pt-24 sm:pt-32">
      <Container>
        <p className="ed-eyebrow">{messages.contact.eyebrow}</p>
        <h2 className="ed-display mt-3 text-3xl font-semibold sm:text-[2.5rem]">
          {messages.contact.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7" style={{ color: 'var(--ed-muted)' }}>
          {messages.contact.cta}
        </p>

        <div className="mt-12 grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <form className="space-y-7" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-7 md:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="ed-fact-label mb-2 block">
                  {messages.contact.fields.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={updateField('name')}
                  aria-invalid={errors.name ? 'true' : undefined}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  className={`ed-field ${errors.name ? 'ed-field-error' : ''}`}
                />
                {errors.name ? (
                  <p id="contact-name-error" role="alert" className="ed-error">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-email" className="ed-fact-label mb-2 block">
                  {messages.contact.fields.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={updateField('email')}
                  aria-invalid={errors.email ? 'true' : undefined}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  className={`ed-field ${errors.email ? 'ed-field-error' : ''}`}
                />
                {errors.email ? (
                  <p id="contact-email-error" role="alert" className="ed-error">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="ed-fact-label mb-2 block">
                {messages.contact.fields.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                value={form.message}
                onChange={updateField('message')}
                aria-invalid={errors.message ? 'true' : undefined}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                className={`ed-field min-h-[9rem] resize-y ${errors.message ? 'ed-field-error' : ''}`}
              />
              {errors.message ? (
                <p id="contact-message-error" role="alert" className="ed-error">
                  {errors.message}
                </p>
              ) : null}
            </div>

            {/* Honeypot — hidden from humans, catches bots */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              checked={form.botcheck}
              onChange={(event) => setForm((current) => ({ ...current, botcheck: event.target.checked }))}
            />

            <div className="space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="ed-cta w-full justify-center transition-opacity disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? messages.contact.status.sending : messages.contact.submit}
              </button>

              {status === 'success' ? (
                <p className="text-sm" role="status" style={{ color: '#3f9b6b' }}>
                  {messages.contact.status.success}
                </p>
              ) : null}
              {status === 'error' ? (
                <p className="text-sm" role="alert" style={{ color: '#c0392b' }}>
                  {messages.contact.status.error}{' '}
                  <a className="ed-link" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </p>
              ) : null}
            </div>
          </form>

          <aside className="lg:border-l lg:pl-10" style={{ borderColor: 'var(--ed-line)' }}>
            <p className="ed-display text-xl font-semibold">{messages.contact.ready}</p>
            <p className="mt-3 text-sm leading-7" style={{ color: 'var(--ed-muted)' }}>
              {messages.contact.helper}
            </p>
            <div className="mt-5 space-y-1.5 text-sm" style={{ color: 'var(--ed-muted)' }}>
              {contactMeta.map((item) => (
                <p key={item}>{item}</p>
              ))}
              <p>
                {messages.contact.responseLabel} {messages.contact.responseTime}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="ed-link"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-5">
              <button type="button" onClick={handleCopyEmail} className="ed-link">
                {copied ? messages.contact.copied : messages.contact.copyEmail}
              </button>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default Contact
