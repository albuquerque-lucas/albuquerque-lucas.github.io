import type { PropsWithChildren } from 'react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { labels, type Labels } from './labels'
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, type Locale, isLocale } from './types'

type I18nContextValue = { locale: Locale; setLocale: (locale: Locale) => void; labels: Labels }

const I18nContext = createContext<I18nContextValue | null>(null)

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY)
  if (saved && isLocale(saved)) return saved
  return DEFAULT_LOCALE
}

export function I18nProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale, labels: labels[locale] }), [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within I18nProvider')
  return context
}
