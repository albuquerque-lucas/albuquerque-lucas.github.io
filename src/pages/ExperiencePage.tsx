import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { ReadingLayout } from '../components/layout/ReadingLayout'
import { SiteHeader } from '../components/SiteHeader'
import { experiences } from '../data/experience'
import { getTranslated } from '../i18n/helpers'
import { useI18n } from '../i18n/I18nProvider'

export function ExperiencePage() {
  const { locale, labels } = useI18n()
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return (
    <div className="space-y-12">
      <SiteHeader />

      <ReadingLayout>
        <section className="w-full py-12 sm:py-16">
          <div className="max-w-4xl border-b border-slate-200/70 pb-12">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {labels.sections.professionalExperience}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700">
              {labels.sections.experienceIntroduction}
            </p>
          </div>
        </section>

        {experiences.map((experience) => {
          const relatedWork = experience.relatedWork

          return (
            <article
              id={experience.id}
              key={experience.id}
              className="max-w-4xl scroll-mt-8 border-b border-slate-200/70 py-10 last:border-b-0"
            >
              <header>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                  {getTranslated(experience.period, locale)} · {getTranslated(experience.workMode, locale)}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                  {experience.company}
                </h2>
                <p className="mt-2 text-base font-medium text-slate-700">
                  {getTranslated(experience.role, locale)}
                </p>
                <p className="mt-5 text-base leading-relaxed text-slate-800">
                  {getTranslated(experience.companyContext, locale)}
                </p>
              </header>

              <div className="mt-8 space-y-8">
                {experience.areas.map((area) => (
                  <section key={getTranslated(area.title, locale)}>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                      {getTranslated(area.title, locale)}
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-800">
                      {getTranslated(area.items, locale).map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              {relatedWork && (
                <section className="mt-8">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                    {labels.sections.relatedWork}
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {relatedWork.map((work) => (
                      <article
                        key={getTranslated(work.title, locale)}
                        className="rounded-lg border border-slate-300/70 p-5"
                      >
                        <h4 className="font-semibold text-slate-900">
                          {getTranslated(work.title, locale)}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700">
                          {getTranslated(work.description, locale)}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              <div className="mt-8 flex flex-wrap gap-2">
                {experience.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-300 bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </ReadingLayout>
    </div>
  )
}
