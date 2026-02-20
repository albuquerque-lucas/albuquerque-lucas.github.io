import { DEFAULT_LOCALE, type Locale, type Translated } from './types'

export function getTranslated<T>(translated: Translated<T>, locale: Locale): T {
  return translated[locale] ?? translated[DEFAULT_LOCALE]
}
