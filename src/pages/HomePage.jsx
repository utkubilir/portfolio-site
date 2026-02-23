import About from '../sections/About'
import Activities from '../sections/Activities'
import Certificates from '../sections/Certificates'
import Contact from '../sections/Contact'
import Education from '../sections/Education'
import Experience from '../sections/Experience'
import Hero from '../sections/Hero'
import Languages from '../sections/Languages'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Activities />
      <Skills />
      <Languages />
      <Contact />
    </>
  )
}

export default HomePage
