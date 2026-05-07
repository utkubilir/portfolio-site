import { useEffect, useRef, useState } from 'react'
import ButtonLink from '../components/ButtonLink'
import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'
import { contact } from '../data/contact'
import { resume } from '../data/resume'
import { isUsableHref } from '../utils/link'

function Contact() {
  const { messages } = useI18n()
  const [copiedId, setCopiedId] = useState('')
  const copyTimerRef = useRef(null)

  const emailHref = `mailto:${contact.email}`
  const phoneHref = `tel:${contact.phone}`
  const hasEmail = isUsableHref(emailHref)
  const hasCalendly = isUsableHref(contact.links.calendly)
  const ctaHref = `${emailHref}?subject=${encodeURIComponent(contact.cta.subject)}&body=${contact.cta.body}`

  const prettyPhone = contact.phone.replace(
    /^(\+90)(\d{3})(\d{3})(\d{2})(\d{2})$/,
    '$1 $2 $3 $4 $5',
  )

  const socialActions = [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      description: messages.contact.social.linkedin,
      href: contact.links.linkedin,
      serial: 'IN',
    },
    {
      id: 'github',
      label: 'GitHub',
      description: messages.contact.social.github,
      href: contact.links.github,
      serial: 'GH',
    },
  ]

  const secondaryChannels = [
    ...(contact.secondaryEmail
      ? [
          {
            id: 'academicEmail',
            label: messages.contact.cards.academicEmail,
            value: contact.secondaryEmail,
            href: `mailto:${contact.secondaryEmail}`,
            action: messages.contact.actions.write,
            copyValue: contact.secondaryEmail,
          },
        ]
      : []),
    {
      id: 'phone',
      label: messages.contact.cards.phone,
      value: prettyPhone,
      href: phoneHref,
      action: messages.contact.actions.call,
      copyValue: contact.phone,
    },
  ]

  const profileDetails = [
    { label: messages.contact.locationLabel, value: messages.hero.location },
    { label: messages.contact.timezoneLabel, value: contact.timezone },
    {
      label: messages.contact.languagesLabel,
      value: contact.languages
        .map((languageName) => messages.languagesSection.names?.[languageName] ?? languageName)
        .join(', '),
    },
    { label: messages.contact.responseLabel, value: messages.contact.responseTime },
  ]

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        window.clearTimeout(copyTimerRef.current)
      }
    }
  }, [])

  const copyToClipboard = async (id, value) => {
    if (!value || typeof navigator === 'undefined' || !navigator.clipboard) {
      return
    }

    try {
      await navigator.clipboard.writeText(value)
      setCopiedId(id)

      if (copyTimerRef.current) {
        window.clearTimeout(copyTimerRef.current)
      }
      copyTimerRef.current = window.setTimeout(() => {
        setCopiedId('')
      }, 1500)
    } catch {
      setCopiedId('')
    }
  }

  const copyStatus = copiedId
    ? (messages.contact.copyStatus[copiedId] ?? messages.contact.copyStatus.default)
    : messages.contact.copyHint

  return (
    <section id="contact" className="scroll-mt-32 py-16 sm:py-20 lg:py-24">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow={messages.contact.eyebrow}
          title={messages.contact.title}
          description={messages.contact.description}
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            <Card as="article" className="p-6 sm:p-7" hover>
              <p className="eyebrow-tag">{messages.contact.primaryLabel}</p>
              <h3 className="terminal-title mt-5">{messages.contact.primaryTitle}</h3>
              <p className="copy-lead mt-4 text-base">{messages.contact.cta}</p>

              <div className="mt-6 border border-[color:var(--color-line-soft)] bg-[rgba(10,10,10,0.48)] p-4">
                <p className="font-['Space_Grotesk'] text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--color-sand)]">
                  {messages.contact.cards.primaryEmail}
                </p>
                <a
                  href={emailHref}
                  className="mt-3 block break-all font-['Space_Grotesk'] text-xl font-semibold tracking-[0.03em] text-[color:var(--color-text)] sm:text-2xl"
                >
                  {contact.email}
                </a>
                <p className="mt-3 text-sm leading-7 text-[color:rgba(232,228,217,0.68)]">
                  {messages.contact.emailNote}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {hasEmail ? (
                  <ButtonLink href={ctaHref} variant="primary" serial="MAIL" className="w-full sm:w-auto">
                    {messages.contact.emailCta}
                  </ButtonLink>
                ) : (
                  <ButtonLink
                    as="button"
                    type="button"
                    variant="muted"
                    disabled
                    serial="OFF"
                    className="w-full sm:w-auto"
                  >
                    {messages.contact.emailCta}
                  </ButtonLink>
                )}

                <ButtonLink
                  as="button"
                  type="button"
                  onClick={() => copyToClipboard('primaryEmail', contact.email)}
                  serial="COPY"
                  className="w-full sm:w-auto"
                >
                  {copiedId === 'primaryEmail'
                    ? messages.contact.actions.copied
                    : messages.contact.actions.copy}
                </ButtonLink>

                <ButtonLink
                  href={resume.href}
                  download={resume.fileName}
                  target="_blank"
                  rel="noreferrer"
                  serial="CV"
                  className="w-full sm:w-auto"
                >
                  {messages.contact.resumeCta}
                </ButtonLink>

                {hasCalendly ? (
                  <ButtonLink
                    href={contact.links.calendly}
                    target="_blank"
                    rel="noreferrer"
                    serial="CAL"
                    className="w-full sm:w-auto"
                  >
                    {messages.contact.scheduleCta}
                  </ButtonLink>
                ) : null}
              </div>

              <p
                aria-live="polite"
                role="status"
                className="mt-4 min-h-6 text-sm text-[color:var(--color-accent-soft)]"
              >
                {copyStatus}
              </p>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              {socialActions.map((item) => {
                const hasLink = isUsableHref(item.href)

                return (
                  <Card key={item.id} className="p-5" hover>
                    <p className="font-['Space_Grotesk'] text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                      {item.label}
                    </p>
                    <p className="mt-3 min-h-14 text-sm leading-7 text-[color:rgba(232,228,217,0.72)]">
                      {item.description}
                    </p>
                    {hasLink ? (
                      <ButtonLink
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        serial={item.serial}
                        className="mt-4 w-full px-3 py-1.5 text-xs"
                      >
                        {messages.contact.actions.open}
                      </ButtonLink>
                    ) : (
                      <ButtonLink
                        as="button"
                        type="button"
                        variant="muted"
                        disabled
                        serial="OFF"
                        className="mt-4 w-full px-3 py-1.5 text-xs"
                      >
                        {messages.contact.actions.open}
                      </ButtonLink>
                    )}
                  </Card>
                )
              })}
            </div>
          </div>

          <Card as="aside" hover className="lg:sticky lg:top-28">
            <p className="eyebrow-tag">{messages.contact.ready}</p>
            <h3 className="terminal-title mt-4">{messages.contact.summaryTitle}</h3>
            <p className="copy-lead mt-4 text-base">{messages.contact.summary}</p>

            <div className="mt-6 space-y-3 border-t border-[color:var(--color-line-soft)] pt-4">
              {profileDetails.map((item) => (
                <p
                  key={item.label}
                  className="grid gap-1 text-sm text-[color:rgba(232,228,217,0.74)] sm:grid-cols-[8rem_1fr] sm:gap-3"
                >
                  <span className="font-['Space_Grotesk'] text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[color:var(--color-sand)]">
                    {item.label}
                  </span>
                  <span>{item.value}</span>
                </p>
              ))}
            </div>

            <div className="mt-6 border-t border-[color:var(--color-line-soft)] pt-4">
              <h4 className="font-['Space_Grotesk'] text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                {messages.contact.secondaryTitle}
              </h4>

              <div className="mt-4 space-y-4">
                {secondaryChannels.map((item) => {
                  const hasLink = isUsableHref(item.href)

                  return (
                    <div
                      key={item.id}
                      className="border border-[color:var(--color-line-soft)] bg-[rgba(7,9,11,0.34)] p-4"
                    >
                      <p className="font-['Space_Grotesk'] text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[color:var(--color-sand)]">
                        {item.label}
                      </p>
                      <p className="mt-2 break-all text-sm font-medium text-[color:var(--color-text)]">
                        {item.value}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {hasLink ? (
                          <ButtonLink
                            href={item.href}
                            serial={item.id === 'phone' ? 'TEL' : 'ALT'}
                            className="px-3 py-1.5 text-xs"
                          >
                            {item.action}
                          </ButtonLink>
                        ) : null}

                        <ButtonLink
                          as="button"
                          type="button"
                          onClick={() => copyToClipboard(item.id, item.copyValue)}
                          serial="COPY"
                          className="px-3 py-1.5 text-xs"
                        >
                          {copiedId === item.id
                            ? messages.contact.actions.copied
                            : messages.contact.actions.copy}
                        </ButtonLink>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default Contact
