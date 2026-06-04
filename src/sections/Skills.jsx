import Container from '../components/Container'
import { useI18n } from '../i18n'
import { skills } from '../data/skills'

function Skills() {
  const { messages } = useI18n()

  return (
    <section id="skills" className="scroll-mt-32 pt-24 sm:pt-32">
      <Container>
        <p className="ed-eyebrow">{messages.skills.eyebrow}</p>
        <h2 className="ed-display mt-3 text-3xl font-semibold sm:text-[2.5rem]">
          {messages.skills.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7" style={{ color: 'var(--ed-muted)' }}>
          {messages.skills.description}
        </p>

        <div className="mt-10">
          {skills.map((group) => (
            <div key={group.category} className="ed-block">
              <h3 className="ed-display text-xl font-semibold">{group.category}</h3>
              <p className="ed-skill-list">{group.items.join('   ·   ')}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
