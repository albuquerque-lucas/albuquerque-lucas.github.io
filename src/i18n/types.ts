export const locales = ['pt-BR', 'en-US'] as const

export type Locale = (typeof locales)[number]

export type Translated<T> = Record<Locale, T>

export const DEFAULT_LOCALE: Locale = 'pt-BR'
export const LOCALE_STORAGE_KEY = 'portfolio.locale'

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}
