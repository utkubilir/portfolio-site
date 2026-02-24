import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { profile } from '../data/profile'

function About() {
  const aboutCopy =
    'I study Computer Engineering at Izmir University of Economics. My main work is UAV autonomy with ROS 2, PX4 SITL, and Gazebo test loops. I also build Java and React applications in team projects. I am looking for internship roles in autonomy or product engineering.'

  return (
    <section id="about" className="scroll-mt-28 py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="About"
          title="About"
          description={aboutCopy}
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
