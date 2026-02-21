import { Link, useParams } from 'react-router-dom'

import { ClientBadge } from '../components/ClientBadge'
import { SiteHeader } from '../components/SiteHeader'
import { projects } from '../data/projects'
import { getTranslated } from '../i18n/helpers'
import { useI18n } from '../i18n/I18nProvider'

export function ProjectDetails() {
  const { locale, labels } = useI18n()
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <div className="space-y-12">
        <SiteHeader />
        <section className="py-8">
          <h1 className="text-2xl font-semibold text-slate-900">{labels.states.projectNotFoundTitle}</h1>
          <p className="mt-3 text-slate-600">{labels.states.projectNotFoundDescription}</p>
          <Link to="/" className="mt-6 inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100">
            {labels.buttons.backToProjects}
          </Link>
        </section>
      </div>
    )
  }

  const productName = getTranslated(project.productName, locale)
  const clientName = getTranslated(project.clientName, locale)
  const subtitle = project.subtitle ? getTranslated(project.subtitle, locale) : undefined
  const excerpt = getTranslated(project.excerpt, locale)
  const highlights = getTranslated(project.highlights, locale).slice(0, 3)
  const problem = getTranslated(project.caseStudy.problem, locale)
  const solution = getTranslated(project.caseStudy.solution, locale)
  const results = getTranslated(project.caseStudy.results, locale)

  const architectureCards = [
    { label: labels.sections.frontend, items: project.caseStudy.architecture.frontend ? getTranslated(project.caseStudy.architecture.frontend, locale).slice(0, 4) : undefined },
    { label: labels.sections.backend, items: project.caseStudy.architecture.backend ? getTranslated(project.caseStudy.architecture.backend, locale).slice(0, 4) : undefined },
    { label: labels.sections.worker, items: project.caseStudy.architecture.worker ? getTranslated(project.caseStudy.architecture.worker, locale).slice(0, 4) : undefined },
    { label: labels.sections.infra, items: project.caseStudy.architecture.infra ? getTranslated(project.caseStudy.architecture.infra, locale).slice(0, 4) : undefined },
  ]

  return (
    <div className="space-y-12">
      <SiteHeader />
      <section className="py-2 sm:py-4">
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-10">
          <Link to="/" className="inline-flex text-sm font-medium text-slate-500 transition hover:text-slate-800">
            {'<-'} {labels.buttons.backToProjects}
          </Link>

          <article className="mt-6 max-w-4xl">
            <header className="border-b border-slate-200/80 pb-10">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{productName}</h1>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-700">
                <span className="font-medium text-slate-800">{project.year}</span>
                <ClientBadge clientName={clientName} />
                {project.links?.repo && (
                  <a href={project.links.repo} target="_blank" rel="noreferrer" className="font-medium text-slate-700 transition hover:text-slate-900">
                    {labels.buttons.repository}
                  </a>
                )}
                {project.links?.demo && (
                  <a href={project.links.demo} target="_blank" rel="noreferrer" className="font-medium text-slate-700 transition hover:text-slate-900">
                    {labels.buttons.demo}
                  </a>
                )}
              </div>
              {subtitle && <p className="mt-3 text-sm text-slate-700">{subtitle}</p>}
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-800">{excerpt}</p>
              <div className="mt-6 rounded-lg border border-slate-300/70 bg-white/45 p-5">
                <p className="text-sm font-semibold tracking-tight text-slate-900">TL;DR</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-800">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-slate-300 bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700">{item}</span>
                ))}
              </div>
            </header>

            <div className="space-y-10 pt-10">
              <section className="border-b border-slate-200/70 pb-10">
                <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-slate-900">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-slate-500/70" />
                  <span>{labels.sections.problem}</span>
                </h2>
                <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-slate-800">{problem}</p>
              </section>

              <section className="border-b border-slate-200/70 pb-10">
                <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-slate-900">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-slate-500/70" />
                  <span>{labels.sections.solution}</span>
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-800">{solution}</p>
              </section>

              <section className="border-b border-slate-200/70 pb-10">
                <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-slate-900">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-slate-500/70" />
                  <span>{labels.sections.architecture}</span>
                </h2>
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  {architectureCards.map((section) => {
                    if (!section.items || section.items.length === 0) return null
                    return (
                      <article key={section.label} className="rounded-lg border border-slate-300/70 bg-transparent p-5">
                        <h3 className="text-base font-semibold tracking-tight text-slate-900">{section.label}</h3>
                        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-800">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    )
                  })}
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-slate-900">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-slate-500/70" />
                  <span>{labels.sections.results}</span>
                </h2>
                <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-800">
                  {results.map((result) => (
                    <li key={result} className="flex items-start gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
