import { motion } from 'framer-motion'

import { hero } from '../data/hero'
import { getTranslated } from '../i18n/helpers'
import { useI18n } from '../i18n/I18nProvider'

export function HeroSection() {
  const { locale } = useI18n()
  const headline = getTranslated(hero.headline, locale)
  const subheadline = getTranslated(hero.subheadline, locale)
  const supportingLine = hero.supportingLine ? getTranslated(hero.supportingLine, locale) : undefined

  return (
    <section className="relative w-full py-12 sm:py-16 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-slate-200/60 after:content-['']">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: 'easeOut' }} className="max-w-4xl">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          {headline}
        </h1>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate-700">{subheadline}</p>
        {supportingLine && <p className="mt-5 text-sm font-medium text-slate-800">{supportingLine}</p>}
      </motion.div>
    </section>
  )
}
