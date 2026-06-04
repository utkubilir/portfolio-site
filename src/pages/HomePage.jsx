import Contact from '../sections/Contact'
import ExperienceEducation from '../sections/ExperienceEducation'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'

function HomePage() {
  return (
    <div className="ed-root min-h-screen pb-24 pt-10 sm:pt-12">
      <Hero />
      <Projects />
      <ExperienceEducation />
      <Skills />
      <Contact />
    </div>
  )
}

export default HomePage
