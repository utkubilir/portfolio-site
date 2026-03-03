import ButtonLink from '../components/ButtonLink'
import Container from '../components/Container'
import ResumeButton from '../components/ResumeButton'
import { useI18n } from '../i18n'
import { education } from '../data/education'
import { profile } from '../data/profile'

function Hero() {
  const { messages } = useI18n()
  const primaryEducation = education[0]
  const educationLabel = primaryEducation?.degree ?? messages.hero.education
  const educationDetails = primaryEducation
    ? `${primaryEducation.institution} • ${primaryEducation.period}`
    : ''
  const educationSummary = educationDetails
    ? `${educationLabel} (${educationDetails})`
    : educationLabel

  const quickItems = [
    {
      label: messages.hero.currentlyBuildingLabel,
      value: messages.hero.currentlyBuilding,
    },
    {
      label: messages.hero.recentFocusLabel,
      value: messages.hero.recentFocus,
    },
    {
      label: messages.hero.workStyleLabel,
      value: messages.hero.workStyle,
    },
    {
      label: messages.hero.availability,
      value: messages.contact.availability,
    },
    {
      label: messages.hero.education,
      value: educationSummary,
    },
  ]

  return (
    <section id="hero" className="scroll-mt-28 py-12 sm:py-16">
      <Container>
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="min-w-0 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-400">
              {profile.location}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-zinc-100">
              {profile.name}
            </h1>
            <p className="max-w-2xl break-words text-lg leading-8 text-zinc-800 dark:text-zinc-200">
              {messages.hero.subtitle}
            </p>
            <p className="max-w-2xl break-words text-base leading-7 text-zinc-600 dark:text-zinc-300">
              {messages.hero.summary}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="#projects" variant="primary" className="w-full sm:w-auto">
                {messages.hero.cta.projects}
              </ButtonLink>
              <ButtonLink href="#contact" className="w-full sm:w-auto">
                {messages.hero.cta.contact}
              </ButtonLink>
              <ResumeButton className="w-full sm:w-auto" />
            </div>
          </div>

          <aside className="min-w-0 rounded-lg border border-zinc-200 bg-zinc-50/60 p-5 dark:border-zinc-800 dark:bg-zinc-900/30 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-400">
              {messages.hero.quickSnapshot}
            </p>
            <dl className="mt-4 divide-y divide-zinc-200 dark:divide-zinc-800">
              {quickItems.map((item) => (
                <div key={item.label} className="py-3 first:pt-0 last:pb-0">
                  <dt className="text-xs uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default Hero
