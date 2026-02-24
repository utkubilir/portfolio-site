import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SocialRail from './components/SocialRail'
import { useI18n } from './i18n'
import { profile } from './data/profile'
import HomePage from './pages/HomePage'
import TeknofestPage from './pages/TeknofestPage'

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
  const location = useLocation()
  const { messages } = useI18n()
  const isHomeRoute = location.pathname === '/'

  const navItems = isHomeRoute
    ? [
        { id: 'hero', label: messages.nav.home, href: '#hero' },
        { id: 'about', label: messages.nav.about, href: '#about' },
        { id: 'projects', label: messages.nav.projects, href: '#projects' },
        { id: 'experience', label: messages.nav.experience, href: '#experience' },
        { id: 'education', label: messages.nav.education, href: '#education' },
        { id: 'certificates', label: messages.nav.certificates, href: '#certificates' },
        { id: 'activities', label: messages.nav.activities, href: '#activities' },
        { id: 'skills', label: messages.nav.skills, href: '#skills' },
        { id: 'languages', label: messages.nav.languages, href: '#languages' },
        { id: 'contact', label: messages.nav.contact, href: '#contact' },
      ]
    : [{ id: 'home', label: messages.nav.home, href: '/' }]

  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <SocialRail />

      <Navbar
        navItems={navItems}
        isDark={isDark}
        onToggleTheme={() => setIsDark((previous) => !previous)}
        brand={profile.name}
        brandHref={isHomeRoute ? '#hero' : '/'}
      />

      <main className="pb-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teknofest" element={<TeknofestPage />} />
        </Routes>
      </main>

      <Footer name={profile.name} />
    </div>
  )
}

export default App
