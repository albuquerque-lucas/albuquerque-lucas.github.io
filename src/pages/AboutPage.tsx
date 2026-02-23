import { ReadingLayout } from '../components/layout/ReadingLayout'
import { SiteHeader } from '../components/SiteHeader'
import { aboutContent } from '../content/about'
import { getTranslated } from '../i18n/helpers'
import { useI18n } from '../i18n/I18nProvider'

export function AboutPage() {
  const { locale } = useI18n()
  const heroHeadline = getTranslated(aboutContent.hero.headline, locale)
  const heroSubheadline = getTranslated(aboutContent.hero.subheadline, locale)
  const mindsetTitle = getTranslated(aboutContent.mindset.title, locale)
  const mindsetParagraphs = getTranslated(aboutContent.mindset.paragraphs, locale)
  const principlesTitle = getTranslated(aboutContent.principles.title, locale)
  const principles = getTranslated(aboutContent.principles.items, locale)
  const trajectoryTitle = getTranslated(aboutContent.trajectory.title, locale)
  const trajectoryParagraphs = getTranslated(aboutContent.trajectory.paragraphs, locale)
  const currentTitle = getTranslated(aboutContent.current.title, locale)
  const currentParagraphs = getTranslated(aboutContent.current.paragraphs, locale)

  return (
    <div className="space-y-12">
      <SiteHeader />

      <ReadingLayout>
        <section className="w-full py-12 sm:py-16">
          <div className="max-w-4xl border-b border-slate-200/70 pb-12">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">{heroHeadline}</h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700">{heroSubheadline}</p>
          </div>
        </section>

        <section className="max-w-4xl border-b border-slate-200/70 py-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{mindsetTitle}</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-800">
            {mindsetParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="max-w-4xl border-b border-slate-200/70 py-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{principlesTitle}</h2>
          <ul className="mt-5 space-y-2 text-base leading-relaxed text-slate-800">
            {principles.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-4xl border-b border-slate-200/70 py-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{trajectoryTitle}</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-800">
            {trajectoryParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="max-w-4xl py-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{currentTitle}</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-800">
            {currentParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </ReadingLayout>
    </div>
  )
}
