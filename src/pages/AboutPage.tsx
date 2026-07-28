import { Link } from 'react-router-dom'

import { ReadingLayout } from '../components/layout/ReadingLayout'
import { SiteHeader } from '../components/SiteHeader'
import { aboutContent } from '../content/about'
import { getTranslated } from '../i18n/helpers'
import { useI18n } from '../i18n/I18nProvider'

export function AboutPage() {
  const { locale, labels } = useI18n()
  const heroHeadline = getTranslated(aboutContent.hero.headline, locale)
  const heroSubheadline = getTranslated(aboutContent.hero.subheadline, locale)
  const profileTitle = getTranslated(aboutContent.profile.title, locale)
  const profileParagraphs = getTranslated(aboutContent.profile.paragraphs, locale)
  const technologiesTitle = getTranslated(aboutContent.technologies.title, locale)
  const technologies = getTranslated(aboutContent.technologies.items, locale)
  const educationTitle = getTranslated(aboutContent.education.title, locale)
  const educationParagraphs = getTranslated(aboutContent.education.paragraphs, locale)

  return (
    <div className="space-y-12">
      <SiteHeader />

      <ReadingLayout>
        <section className="w-full py-12 sm:py-16">
          <div className="max-w-4xl border-b border-slate-200/70 pb-12">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {heroHeadline}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700">
              {heroSubheadline}
            </p>
          </div>
        </section>

        <section className="max-w-4xl border-b border-slate-200/70 py-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{profileTitle}</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-800">
            {profileParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            to="/experiencia"
            className="mt-6 inline-flex text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            {labels.buttons.viewExperience} {'->'}
          </Link>
        </section>

        <section className="max-w-4xl border-b border-slate-200/70 py-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            {technologiesTitle}
          </h2>
          <ul className="mt-5 space-y-2 text-base leading-relaxed text-slate-800">
            {technologies.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-4xl py-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            {educationTitle}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-800">
            {educationParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </ReadingLayout>
    </div>
  )
}
