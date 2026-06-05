import { Suspense, lazy, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useI18n } from './i18n'
import { useScrollSpy } from './hooks/useScrollSpy'
import { profile } from './data/profile'
import HomePage from './pages/HomePage'

const TeknofestPage = lazy(() => import('./pages/Teknofest'))

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

function upsertMetaTag(attribute, key, content) {
  const selector = `meta[${attribute}="${key}"]`
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function upsertCanonicalLink(href) {
  let element = document.head.querySelector('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

function App() {
  const location = useLocation()
  const { language, messages } = useI18n()
  const isHomeRoute = location.pathname === '/'
  const isTeknofestRoute = location.pathname === '/teknofest'

  const navItems = isHomeRoute
    ? [
        { id: 'hero', label: messages.nav.home, href: '#hero' },
        { id: 'projects', label: messages.nav.projects, href: '#projects' },
        { id: 'experience', label: messages.nav.experience, href: '#experience' },
        { id: 'education', label: messages.nav.education, href: '#education' },
        { id: 'skills', label: messages.nav.skills, href: '#skills' },
        { id: 'contact', label: messages.nav.contact, href: '#contact' },
      ]
    : [{ id: 'home', label: messages.nav.home, href: '/' }]

  const spyIds = isHomeRoute ? navItems.map((item) => item.id) : []
  const activeSectionId = useScrollSpy(spyIds)

  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
    upsertMetaTag('name', 'theme-color', isDark ? '#0b0f16' : '#f3efe8')
  }, [isDark])

  useEffect(() => {
    const title = isTeknofestRoute ? messages.meta.teknofestTitle : messages.meta.homeTitle
    const description = isTeknofestRoute
      ? messages.meta.teknofestDescription
      : messages.meta.homeDescription
    const canonicalUrl = new URL(location.pathname, window.location.origin).toString()

    document.title = title
    upsertMetaTag('name', 'description', description)
    upsertMetaTag('property', 'og:type', 'website')
    upsertMetaTag('property', 'og:title', title)
    upsertMetaTag('property', 'og:description', description)
    upsertMetaTag('property', 'og:url', canonicalUrl)
    upsertMetaTag('property', 'og:locale', language === 'tr' ? 'tr_TR' : 'en_US')
    upsertCanonicalLink(canonicalUrl)
  }, [isTeknofestRoute, language, location.pathname, messages])

  return (
    <div className="site-shell min-h-screen overflow-x-clip bg-[color:var(--page-bg)] text-[color:var(--page-text)]">
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-md bg-[color:var(--page-text)] px-4 py-2 text-sm text-[color:var(--page-bg)] no-underline focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {messages.ui.skipToContent}
      </a>

      <Navbar
        navItems={navItems}
        activeId={activeSectionId}
        isDark={isDark}
        onToggleTheme={() => setIsDark((previous) => !previous)}
        brand="Utku Bilir"
        brandHref={isHomeRoute ? '#hero' : '/'}
      />

      <main id="main-content" className="pb-12 sm:pb-16">
        <Suspense
          fallback={
            <p className="mx-auto max-w-6xl px-4 pt-10 text-sm text-[color:var(--page-muted)] sm:px-6 lg:px-8">
              {messages.ui.loading}
            </p>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teknofest" element={<TeknofestPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer name={profile.name} className={isTeknofestRoute ? 'pt-4' : ''} />
    </div>
  )
}

export default App
