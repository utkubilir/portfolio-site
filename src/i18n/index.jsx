/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import en from './en'
import tr from './tr'

const STORAGE_KEY = 'language'
const dictionaries = { en, tr }

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'tr') {
    return saved
  }

  return window.navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en'
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // ignore storage write errors
    }
  }, [language])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(() => {
    const messages = dictionaries[language] ?? en

    return {
      language,
      messages,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === 'en' ? 'tr' : 'en')),
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useI18n must be used within LanguageProvider')
  }

  return context
}
