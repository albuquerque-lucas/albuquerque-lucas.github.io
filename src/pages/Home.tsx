import { motion } from 'framer-motion'

import { LocaleToggle } from '../components/LocaleToggle'
import { profile } from '../data/profile'
import { useI18n } from '../i18n/I18nProvider'
import { HeroSection } from '../sections/HeroSection'
import { ProjectsSection } from '../sections/ProjectsSection'

export function Home() {
  const { labels } = useI18n()

  return (
    <div className="space-y-12">
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 border-b border-slate-200 py-6 sm:py-8"
      >
        <p className="text-sm font-semibold tracking-wide text-slate-900">{profile.name}</p>
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
      </motion.header>
      <HeroSection />
      <ProjectsSection />
    </div>
  )
}
