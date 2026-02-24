import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { skills } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-12 sm:py-16">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Skills"
          title="Tooling and technical strengths"
          description="Core technologies used in autonomy, backend/frontend, and team projects."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <Card key={group.category} hover>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
