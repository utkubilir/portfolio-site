import { useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { contact } from '../data/contact'
import { profile } from '../data/profile'
import { isUsableHref } from '../utils/link'

function Contact() {
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
      id: 'email',
      icon: '@',
      label: 'Email',
      value: contact.email,
      href: emailHref,
      action: 'Write',
      copyValue: contact.email,
    },
    {
      id: 'phone',
      icon: 'PH',
      label: 'Phone',
      value: prettyPhone,
      href: phoneHref,
      action: 'Call',
      copyValue: contact.phone,
    },
    {
      id: 'linkedin',
      icon: 'IN',
      label: 'LinkedIn',
      value: contact.links.linkedin,
      href: contact.links.linkedin,
      action: 'Open',
    },
    {
      id: 'github',
      icon: 'GH',
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
    <section id="contact" className="scroll-mt-28 py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s work together."
          description={`${contact.availability} · ${contact.responseTime}`}
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactCards.map((item) => {
              const hasLink = isUsableHref(item.href)
              const isExternal = item.href.startsWith('http')

              return (
                <article
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {item.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-1 break-all text-sm font-medium text-slate-800 dark:text-slate-200">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {hasLink ? (
                      <a
                        href={item.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noreferrer' : undefined}
                        className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                      >
                        {item.action}
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="cursor-not-allowed rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-400 dark:border-slate-800 dark:text-slate-500"
                      >
                        {item.action}
                      </button>
                    )}

                    {item.copyValue ? (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(item.id, item.copyValue)}
                        className="rounded-full border border-cyan-300 px-3 py-1.5 text-xs font-semibold text-cyan-700 transition hover:bg-cyan-50 dark:border-cyan-500/50 dark:text-cyan-300 dark:hover:bg-cyan-500/10"
                      >
                        {copiedId === item.id ? 'Copied!' : 'Copy'}
                      </button>
                    ) : null}
                  </div>
                </article>
              )
            })}
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Ready to connect?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Hi {profile.name}, I reviewed your portfolio and would like to
              connect about an internship, project, or collaboration.
            </p>

            {hasEmail ? (
              <a
                href={ctaHref}
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
              >
                Email me
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="mt-6 inline-flex w-full cursor-not-allowed items-center justify-center rounded-2xl bg-slate-300 px-6 py-4 text-sm font-semibold text-white dark:bg-slate-700"
              >
                Email me
              </button>
            )}

            <div className="mt-6 space-y-3 border-t border-slate-200 pt-4 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">
              <p>
                <span className="font-semibold text-slate-800 dark:text-slate-100">
                  Location:
                </span>{' '}
                {contact.location}
              </p>
              <p>
                <span className="font-semibold text-slate-800 dark:text-slate-100">
                  Timezone:
                </span>{' '}
                {contact.timezone}
              </p>
              <p>
                <span className="font-semibold text-slate-800 dark:text-slate-100">
                  Languages:
                </span>{' '}
                {contact.languages.join(', ')}
              </p>
              <p>
                <span className="font-semibold text-slate-800 dark:text-slate-100">
                  Response:
                </span>{' '}
                {contact.responseTime}
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default Contact
