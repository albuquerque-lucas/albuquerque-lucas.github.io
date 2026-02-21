import { motion } from 'framer-motion'

import { hero } from '../data/hero'
import { getTranslated } from '../i18n/helpers'
import { useI18n } from '../i18n/I18nProvider'

export function HeroSection() {
  const { locale } = useI18n()
  const kickerLines = getTranslated(hero.kickerLines, locale)
  const headlineLines = getTranslated(hero.headlineLines, locale)
  const subheadlineLines = getTranslated(hero.subheadlineLines, locale)

  return (
    <section className="relative w-full py-12 sm:py-16 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-slate-200/60 after:content-['']">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: 'easeOut' }} className="max-w-4xl">
        <p className="text-sm font-medium tracking-[0.08em] text-slate-500">
          {kickerLines.map((line) => (
            <span key={line} className="block">{line}</span>
          ))}
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          {headlineLines.map((line) => (
            <span key={line} className="block">{line}</span>
          ))}
        </h1>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate-600">
          {subheadlineLines.map((line) => (
            <span key={line} className="block">{line}</span>
          ))}
        </p>
      </motion.div>
    </section>
  )
}
