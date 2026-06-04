import Container from '../components/Container'
import { education } from '../data/education'
import { experience } from '../data/experience'
import { useI18n } from '../i18n'

function ExperienceEducation() {
  const { messages } = useI18n()

  const groups = [
    {
      id: 'experience',
      label: messages.experienceEducation.sections.experience,
      items: experience.map((item) => ({
        id: `${item.org}-${item.role}`,
        period: item.period,
        title: item.role,
        org: item.org,
        subtitle: item.type,
        bullets: item.bullets,
      })),
    },
    {
      id: 'education',
      label: messages.experienceEducation.sections.education,
      items: education.map((item) => ({
        id: `${item.institution}-${item.degree}`,
        period: item.period,
        title: item.degree,
        org: item.institution,
        subtitle: item.details,
        bullets: messages.experienceEducation.educationBullets,
      })),
    },
  ]

  return (
    <section id="experience" className="scroll-mt-32 pt-24 sm:pt-32">
      <Container>
        <p className="ed-eyebrow">{messages.experienceEducation.eyebrow}</p>
        <h2 className="ed-display mt-3 text-3xl font-semibold sm:text-[2.5rem]">
          {messages.experienceEducation.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7" style={{ color: 'var(--ed-muted)' }}>
          {messages.experienceEducation.description}
        </p>

        <div className="mt-12 space-y-14">
          {groups.map((group) => (
            <div key={group.id}>
              {group.id === 'education' ? <div id="education" className="scroll-mt-32" /> : null}

              <div className="flex items-center gap-4">
                <span className="ed-meta whitespace-nowrap">{group.label}</span>
                <span className="ed-rule" />
              </div>

              <div className="mt-1">
                {group.items.map((entry) => (
                  <article key={entry.id} className="ed-block">
                    <div className="ed-meta lg:pt-1.5">{entry.period}</div>
                    <div className="min-w-0">
                      <h3 className="ed-display text-2xl font-semibold leading-tight sm:text-[1.75rem]">
                        {entry.title}
                      </h3>
                      <p className="mt-1.5 text-base font-medium">{entry.org}</p>
                      {entry.subtitle ? <p className="ed-meta mt-2">{entry.subtitle}</p> : null}
                      <ul className="ed-bullets mt-4 space-y-2.5">
                        {entry.bullets.map((bullet) => (
                          <li key={`${entry.id}-${bullet}`}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ExperienceEducation
