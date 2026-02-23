import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { profile } from '../data/profile'
import { socials } from '../data/socials'
import { isUsableHref } from '../utils/link'

function Contact() {
  const emailHref = `mailto:${profile.email}`
  const hasEmail = isUsableHref(emailHref)

  return (
    <section id="contact" className="scroll-mt-28 py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s work together."
          description="You can reach me directly by email or through my social profiles."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Email
            </p>
            {hasEmail ? (
              <a
                href={emailHref}
                className="mt-1 inline-block text-sm text-cyan-700 transition hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-200"
              >
                {profile.email}
              </a>
            ) : (
              <span className="mt-1 inline-block text-sm text-slate-400 dark:text-slate-500">
                {profile.email}
              </span>
            )}

            <div className="mt-6 space-y-4">
              {socials.map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {item.label}
                  </p>
                  {isUsableHref(item.href) ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="mt-1 inline-block text-sm text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                    >
                      {item.href.replace('mailto:', '')}
                    </a>
                  ) : (
                    <span className="mt-1 inline-block text-sm text-slate-400 dark:text-slate-500">
                      {item.href}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </aside>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Quick intro template
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Merhaba {profile.name}, portfolyonu inceledim. Uygun olduğunda
              proje detaylarını konuşmak isterim.
            </p>
            {hasEmail ? (
              <a
                href={`${emailHref}?subject=Portfolio%20Inquiry`}
                className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
              >
                Send Email
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="mt-6 inline-flex cursor-not-allowed rounded-full bg-slate-300 px-6 py-3 text-sm font-semibold text-white dark:bg-slate-700"
              >
                Send Email
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
