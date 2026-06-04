import { useMemo, useState } from 'react'
import Container from '../components/Container'
import { useI18n } from '../i18n'
import { contact } from '../data/contact'
import { socials } from '../data/socials'

function Contact() {
  const { messages } = useI18n()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const contactMeta = useMemo(
    () => [
      `${messages.contact.locationLabel} ${contact.location}`,
      `${messages.contact.timezoneLabel} ${contact.timezone}`,
      `${messages.contact.languagesLabel} ${contact.languages.join(', ')}`,
    ],
    [messages],
  )

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

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0 || typeof window === 'undefined') {
      return
    }

    const subject = `${contact.cta.subject} - ${form.name.trim()}`
    const body = [
      `${messages.contact.fields.name}: ${form.name.trim()}`,
      `${messages.contact.fields.email}: ${form.email.trim()}`,
      '',
      form.message.trim(),
    ].join('\n')

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

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
                <label htmlFor="contact-name" className="sr-only">
                  {messages.contact.fields.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  placeholder={messages.contact.placeholders.name}
                  className={`ed-field ${errors.name ? 'ed-field-error' : ''}`}
                />
                {errors.name ? <p className="ed-error">{errors.name}</p> : null}
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">
                  {messages.contact.fields.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  placeholder={messages.contact.placeholders.email}
                  className={`ed-field ${errors.email ? 'ed-field-error' : ''}`}
                />
                {errors.email ? <p className="ed-error">{errors.email}</p> : null}
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="sr-only">
                {messages.contact.fields.message}
              </label>
              <textarea
                id="contact-message"
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                placeholder={messages.contact.placeholders.message}
                className={`ed-field min-h-[9rem] resize-y ${errors.message ? 'ed-field-error' : ''}`}
              />
              {errors.message ? <p className="ed-error">{errors.message}</p> : null}
            </div>

            <button type="submit" className="ed-cta w-full justify-center sm:w-auto">
              {messages.contact.submit}
            </button>
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
              {socials.map((item) => (
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
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default Contact
