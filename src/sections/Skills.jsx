import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'
import { skills } from '../data/skills'

function Skills() {
  const { messages } = useI18n()

  return (
    <section id="skills" className="scroll-mt-32 py-16 sm:py-20 lg:py-24">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow={messages.skills.eyebrow}
          title={messages.skills.title}
          description={messages.skills.description}
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => {
            const categoryLabel = messages.skills.categories?.[group.category] ?? group.category

            return (
              <Card key={group.category} hover className="compact-card">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold uppercase tracking-[0.08em] text-[color:var(--color-text)]">
                    {categoryLabel}
                  </h3>
                  <span className="hud-chip hud-chip-quiet">{group.items.length}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="hud-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Skills
