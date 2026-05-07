import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import LanguageToggle from './LanguageToggle'
import Container from './Container'
import { useI18n } from '../i18n'
import { useScrollSpy } from '../utils/useScrollSpy'

function Navbar({ navItems, brand, brandHref = '#hero' }) {
  const { messages } = useI18n()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeSection = useScrollSpy(navItems.map(item => item.id).filter(Boolean), 150)

  // Close mobile menu on resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-line-soft)] bg-[rgba(5,5,5,0.88)] backdrop-blur-xl">
      <Container className="flex max-w-none flex-wrap items-center justify-between gap-3 py-4">
        <div className="flex items-center gap-3">
          <span className="eyebrow-tag hidden sm:inline-flex">{messages.ui.portfolioNode}</span>
          <a
            href={brandHref}
            className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-[0.26em] text-[color:var(--color-text)] no-underline sm:text-base"
          >
            {brand}
          </a>
        </div>

        <nav className="hidden items-center gap-3 xl:gap-5 lg:flex text-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id ?? item.href}
                href={item.href ?? `#${item.id}`}
                className={`nav-link ${isActive ? 'text-[color:var(--color-accent-soft)]' : ''}`}
                style={isActive ? { transform: 'translateX(2px)' } : {}}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <LanguageToggle />
          <button
            className="lg:hidden text-[color:var(--color-text)] hover:text-[color:var(--color-accent-soft)] transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-[color:var(--color-line-soft)] py-4 lg:hidden bg-[rgba(5,5,5,0.95)]">
          <Container className="max-w-none">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id ?? item.href}
                    href={item.href ?? `#${item.id}`}
                    className={`mobile-nav-link ${isActive ? 'border-[rgba(240,100,42,0.66)] bg-[rgba(240,100,42,0.1)] text-[color:var(--color-accent-soft)]' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}

export default Navbar
