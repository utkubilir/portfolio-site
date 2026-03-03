import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'

function About() {
  const { messages } = useI18n()
  const sidePanels = [
    {
      title: messages.about.currentlyBuildingTitle,
      items: messages.about.currentlyBuilding,
      className:
        'rounded-lg border border-zinc-200 bg-zinc-50/60 p-5 dark:border-zinc-800 dark:bg-zinc-900/30',
    },
    {
      title: messages.about.recentFocusTitle,
      items: messages.about.recentFocus,
      className:
        'border-l-2 border-zinc-300 pl-4 dark:border-zinc-700 sm:pl-5',
    },
    {
      title: messages.about.careTitle,
      items: messages.about.care,
      className:
        'rounded-lg border border-zinc-200 p-5 dark:border-zinc-800',
    },
  ]

  return (
    <section id="about" className="scroll-mt-28 py-12 sm:py-16">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="min-w-0">
            <SectionTitle eyebrow={messages.about.eyebrow} title={messages.about.title} />
            <div className="mt-5 space-y-4">
              {messages.about.body.map((paragraph) => (
                <p key={paragraph} className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            {sidePanels.map((panel) => (
              <section key={panel.title} className={panel.className}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-700 dark:text-zinc-200">
                  {panel.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {panel.items.map((item) => (
                    <li key={item} className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default About
