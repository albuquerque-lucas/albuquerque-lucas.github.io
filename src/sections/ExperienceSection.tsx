import { Link } from 'react-router-dom'

import { experiences } from '../data/experience'
import { getTranslated } from '../i18n/helpers'
import { useI18n } from '../i18n/I18nProvider'

export function ExperienceSection() {
  const { locale, labels } = useI18n()

  return (
    <section className="border-b border-slate-200/70 py-10">
      <div className="mb-8 flex w-full items-end justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          {labels.sections.experience}
        </h2>
        <Link
          to="/experiencia"
          className="text-xs font-medium text-slate-600 transition hover:text-slate-900 sm:text-sm"
        >
          {labels.buttons.viewExperience} {'->'}
        </Link>
      </div>

      <div className="space-y-8">
        {experiences.map((experience) => (
          <article key={experience.id} className="border-l-[3px] border-l-blue-600/45 pl-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
              {getTranslated(experience.period, locale)} · {getTranslated(experience.workMode, locale)}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">
              {experience.company}
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-700">
              {getTranslated(experience.role, locale)}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              {getTranslated(experience.summary, locale)}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
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
        ))}
      </div>
    </section>
  )
}
