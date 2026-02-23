import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { profile } from './data/profile'
import Activities from './sections/Activities'
import About from './sections/About'
import Certificates from './sections/Certificates'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Languages from './sections/Languages'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'activities', label: 'Activities' },
  { id: 'skills', label: 'Skills' },
  { id: 'languages', label: 'Languages' },
  { id: 'contact', label: 'Contact' },
]

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return false
  }

  const savedTheme = window.localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    return true
  }
  if (savedTheme === 'light') {
    return false
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function App() {
  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-44 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-600/20" />
        <div className="absolute right-[-120px] top-[45%] h-80 w-80 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/20" />
      </div>

      <Navbar
        navItems={navItems}
        isDark={isDark}
        onToggleTheme={() => setIsDark((previous) => !previous)}
        brand={profile.name}
      />

      <main className="relative pb-16">
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
      </main>

      <Footer name={profile.name} />
    </div>
  )
}

export default App
