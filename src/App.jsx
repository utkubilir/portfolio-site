import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
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
  const isHomeRoute = location.pathname === '/'

  const navItems = isHomeRoute
    ? [
        { id: 'hero', label: 'Home', href: '#hero' },
        { id: 'about', label: 'About', href: '#about' },
        { id: 'projects', label: 'Projects', href: '#projects' },
        { id: 'experience', label: 'Experience', href: '#experience' },
        { id: 'education', label: 'Education', href: '#education' },
        { id: 'certificates', label: 'Certificates', href: '#certificates' },
        { id: 'activities', label: 'Activities', href: '#activities' },
        { id: 'skills', label: 'Skills', href: '#skills' },
        { id: 'languages', label: 'Languages', href: '#languages' },
        { id: 'contact', label: 'Contact', href: '#contact' },
      ]
    : [{ id: 'home', label: 'Home', href: '/' }]

  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
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
