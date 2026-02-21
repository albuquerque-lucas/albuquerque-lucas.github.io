import { motion } from 'framer-motion'

import { profile } from '../data/profile'
import { useI18n } from '../i18n/I18nProvider'
import { LocaleToggle } from './LocaleToggle'

export function SiteHeader() {
  const { labels } = useI18n()
  const contentStartClass = 'lg:px-[calc(8.333333%+1rem)]'

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="w-full border-b border-slate-200 py-6 sm:py-8"
    >
      <div className={`flex w-full items-center justify-between gap-4 ${contentStartClass}`}>
        <p className="text-lg font-medium tracking-tight text-slate-900">{profile.name}</p>
        <nav className="flex items-center gap-3 text-xs text-slate-600 sm:gap-4 sm:text-sm">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-slate-900">
            {labels.nav.github}
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900">
            {labels.nav.linkedin}
          </a>
          <a href={profile.links.email} className="hover:text-slate-900">
            {labels.nav.email}
          </a>
          <LocaleToggle />
        </nav>
      </div>
    </motion.header>
  )
}
