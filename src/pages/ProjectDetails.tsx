import { Link, useParams } from 'react-router-dom'

import { projects } from '../data/projects'
import { getTranslated } from '../i18n/helpers'
import { useI18n } from '../i18n/I18nProvider'

export function ProjectDetails() {
  const { locale, labels } = useI18n()
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="py-8">
        <h1 className="text-2xl font-semibold text-slate-900">{labels.states.projectNotFoundTitle}</h1>
        <p className="mt-3 text-slate-600">{labels.states.projectNotFoundDescription}</p>
        <Link to="/" className="mt-6 inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100">
          {labels.buttons.backToProjects}
        </Link>
      </section>
    )
  }

  const title = getTranslated(project.title, locale)
  const subtitle = project.subtitle ? getTranslated(project.subtitle, locale) : undefined
  const excerpt = getTranslated(project.excerpt, locale)
  const problem = getTranslated(project.caseStudy.problem, locale)
  const solution = getTranslated(project.caseStudy.solution, locale)
  const results = getTranslated(project.caseStudy.results, locale)

  const architectureSections = [
    { label: labels.sections.webLayer, items: project.caseStudy.architecture.webLayer ? getTranslated(project.caseStudy.architecture.webLayer, locale) : undefined },
    { label: labels.sections.frontend, items: project.caseStudy.architecture.frontend ? getTranslated(project.caseStudy.architecture.frontend, locale) : undefined },
    { label: labels.sections.backend, items: project.caseStudy.architecture.backend ? getTranslated(project.caseStudy.architecture.backend, locale) : undefined },
    { label: labels.sections.frontendComponent, items: project.caseStudy.architecture.frontendComponent ? getTranslated(project.caseStudy.architecture.frontendComponent, locale) : undefined },
    { label: labels.sections.worker, items: project.caseStudy.architecture.worker ? getTranslated(project.caseStudy.architecture.worker, locale) : undefined },
    { label: labels.sections.infra, items: project.caseStudy.architecture.infra ? getTranslated(project.caseStudy.architecture.infra, locale) : undefined },
  ]

  return (
    <section className="py-2 sm:py-4">
      <Link to="/" className="text-sm text-slate-500 hover:text-slate-800">
        {'<-'} {labels.buttons.backToProjects}
      </Link>

      <article className="mt-6 max-w-4xl space-y-8">
        <header>
          <p className="text-sm text-slate-500">{project.year}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{title}</h1>
          {subtitle && <p className="mt-2 text-sm text-slate-500">{subtitle}</p>}
          <p className="mt-4 text-base leading-relaxed text-slate-700">{excerpt}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700">{item}</span>
            ))}
          </div>
        </header>

        <section className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{labels.sections.problem}</h2>
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">{problem}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{labels.sections.solution}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{solution}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{labels.sections.architecture}</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              {architectureSections.map((section) => {
                if (!section.items || section.items.length === 0) return null
                return (
                  <div key={section.label} className="space-y-2">
                    <h3 className="text-sm font-medium text-slate-900">{section.label}</h3>
                    <ul className="space-y-1.5 text-sm text-slate-700">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{labels.sections.results}</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
              {results.map((result) => (
                <li key={result} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {project.links && (project.links.repo || project.links.demo) && (
          <section className="flex flex-wrap gap-3">
            {project.links.repo && (
              <a href={project.links.repo} target="_blank" rel="noreferrer" className="inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100">
                {labels.buttons.repository}
              </a>
            )}
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100">
                {labels.buttons.demo}
              </a>
            )}
          </section>
        )}
      </article>
    </section>
  )
}
