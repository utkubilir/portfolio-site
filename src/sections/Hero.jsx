import ButtonLink from '../components/ButtonLink'
import Card from '../components/Card'
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

  return (
    <section id="hero" className="scroll-mt-28 py-12 sm:py-16">
      <Container>
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="min-w-0 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              {profile.location}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
              {profile.name}
            </h1>
            <p className="max-w-2xl break-words text-base font-medium leading-7 text-zinc-700 dark:text-zinc-200">
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

          <Card as="aside" className="min-w-0 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              {messages.hero.quickSnapshot}
            </p>
            <div className="space-y-3">
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                  {messages.hero.availability}
                </p>
                <p className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {messages.contact.availability}
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                  {messages.hero.education}
                </p>
                <p className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {educationLabel}
                </p>
                {educationDetails ? (
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{educationDetails}</p>
                ) : null}
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default Hero
