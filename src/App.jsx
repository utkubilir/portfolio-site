import { Suspense, lazy, useCallback, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SocialRail from './components/SocialRail'
import SplashScreen from './components/SplashScreen'
import { useI18n } from './i18n'
import { profile } from './data/profile'
import HomePage from './pages/HomePage'

const TeknofestPage = lazy(() => import('./pages/Teknofest'))

function getInitialSplashState() {
  if (typeof window === 'undefined') {
    return false
  }

  try {
    return window.sessionStorage.getItem('splash_seen') !== '1'
  } catch {
    return true
  }
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
        { id: 'skills', label: messages.nav.skills, href: '#skills' },
        { id: 'experience', label: messages.nav.experience, href: '#experience' },
        { id: 'education', label: messages.nav.education, href: '#education' },
        { id: 'certificates', label: messages.nav.certificates, href: '#certificates' },
        { id: 'about', label: messages.nav.about, href: '#about' },
        { id: 'activities', label: messages.nav.activities, href: '#activities' },
        { id: 'languages', label: messages.nav.languages, href: '#languages' },
        { id: 'contact', label: messages.nav.contact, href: '#contact' },
      ]
    : [{ id: 'home', label: messages.nav.home, href: '/' }]

  const [showSplash, setShowSplash] = useState(getInitialSplashState)

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

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

  const handleSplashDone = useCallback(() => {
    if (typeof window !== 'undefined') {
      try {
        window.sessionStorage.setItem('splash_seen', '1')
      } catch {
        // ignore storage write errors
      }
    }

    setShowSplash(false)
  }, [])

  return (
    <div className="min-h-screen overflow-x-clip bg-transparent text-[color:var(--color-text)]">
      <div aria-hidden={showSplash ? 'true' : undefined}>
        <SocialRail className={isTeknofestRoute ? 'hidden md:flex' : ''} />

        <Navbar navItems={navItems} brand="Utku Bilir" brandHref={isHomeRoute ? '#hero' : '/'} />

        <main className="pb-24">
          <Suspense
            fallback={
              <p className="mx-auto max-w-7xl px-5 pt-10 font-['Space_Grotesk'] text-xs uppercase tracking-[0.22em] text-[color:var(--color-muted)] sm:px-8 xl:px-10">
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

        <Footer name={profile.name} />
      </div>

      {showSplash ? <SplashScreen onDone={handleSplashDone} /> : null}
    </div>
  )
}

export default App
