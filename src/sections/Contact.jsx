import { useEffect, useRef, useState } from 'react'
import ButtonLink from '../components/ButtonLink'
import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'
import { contact } from '../data/contact'
import { isUsableHref } from '../utils/link'

function Contact() {
  const { messages } = useI18n()
  const [copiedId, setCopiedId] = useState('')
  const copyTimerRef = useRef(null)

  const emailHref = `mailto:${contact.email}`
  const phoneHref = `tel:${contact.phone}`
  const hasEmail = isUsableHref(emailHref)
  const ctaHref = `${emailHref}?subject=${encodeURIComponent(contact.cta.subject)}&body=${contact.cta.body}`

  const prettyPhone = contact.phone.replace(
    /^(\+90)(\d{3})(\d{3})(\d{2})(\d{2})$/,
    '$1 $2 $3 $4 $5',
  )

  const contactCards = [
    {
      id: 'email-primary',
      label: 'Primary Email',
      value: contact.email,
      href: emailHref,
      action: 'Write',
      copyValue: contact.email,
    },
    ...(contact.secondaryEmail
      ? [
          {
            id: 'email-academic',
            label: 'Academic Email',
            value: contact.secondaryEmail,
            href: `mailto:${contact.secondaryEmail}`,
            action: 'Write',
            copyValue: contact.secondaryEmail,
          },
        ]
      : []),
    {
      id: 'phone',
      label: 'Phone',
      value: prettyPhone,
      href: phoneHref,
      action: 'Call',
      copyValue: contact.phone,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: contact.links.linkedin,
      href: contact.links.linkedin,
      action: 'Open',
    },
    {
      id: 'github',
      label: 'GitHub',
      value: contact.links.github,
      href: contact.links.github,
      action: 'Open',
    },
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

  return (
    <section id="contact" className="scroll-mt-28 py-12 sm:py-16">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow={messages.contact.eyebrow}
          title={messages.contact.title}
          description={`${contact.availability} · ${contact.responseTime}`}
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactCards.map((item) => {
              const hasLink = isUsableHref(item.href)
              const isExternal = item.href.startsWith('http')

              return (
                <Card key={item.id} className="p-5" hover>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                    {item.label}
                  </p>
                  <p className="mt-2 break-all text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {item.value}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {hasLink ? (
                      <ButtonLink
                        href={item.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noreferrer' : undefined}
                        className="px-3 py-1.5 text-xs"
                      >
                        {item.action}
                      </ButtonLink>
                    ) : (
                      <ButtonLink
                        as="button"
                        type="button"
                        variant="muted"
                        disabled
                        className="px-3 py-1.5 text-xs"
                      >
                        {item.action}
                      </ButtonLink>
                    )}

                    {item.copyValue ? (
                      <ButtonLink
                        as="button"
                        type="button"
                        onClick={() => copyToClipboard(item.id, item.copyValue)}
                        className="px-3 py-1.5 text-xs"
                      >
                        {copiedId === item.id ? 'Copied' : 'Copy'}
                      </ButtonLink>
                    ) : null}
                  </div>
                </Card>
              )
            })}
          </div>

          <Card as="aside" hover>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {messages.contact.ready}
            </h3>
            <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
              {messages.contact.cta}
            </p>

            {hasEmail ? (
              <ButtonLink href={ctaHref} variant="primary" className="mt-6 w-full">
                Email me
              </ButtonLink>
            ) : (
              <ButtonLink
                as="button"
                type="button"
                variant="muted"
                disabled
                className="mt-6 w-full"
              >
                Email me
              </ButtonLink>
            )}

            <div className="mt-6 space-y-3 border-t border-zinc-200 pt-4 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
              <p>
                <span className="font-semibold text-zinc-800 dark:text-zinc-100">
                  {messages.contact.locationLabel}
                </span>{' '}
                {contact.location}
              </p>
              <p>
                <span className="font-semibold text-zinc-800 dark:text-zinc-100">
                  {messages.contact.timezoneLabel}
                </span>{' '}
                {contact.timezone}
              </p>
              <p>
                <span className="font-semibold text-zinc-800 dark:text-zinc-100">
                  {messages.contact.languagesLabel}
                </span>{' '}
                {contact.languages.join(', ')}
              </p>
              <p>
                <span className="font-semibold text-zinc-800 dark:text-zinc-100">
                  {messages.contact.responseLabel}
                </span>{' '}
                {contact.responseTime}
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default Contact
