import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'
import { profile } from '../data/profile'

function About() {
  const { messages } = useI18n()

  return (
    <section id="about" className="scroll-mt-28 py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow={messages.about.eyebrow}
          title={messages.about.title}
          description={messages.about.body.join(' ')}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {profile.highlights.map((item) => (
            <Card key={item.label} hover>
              <p className="text-xs uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {item.value}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default About
