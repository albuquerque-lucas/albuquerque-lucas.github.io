import { Link, useParams } from 'react-router-dom'

import { ClientBadge } from '../components/ClientBadge'
import { SiteHeader } from '../components/SiteHeader'
import { projects } from '../data/projects'
import { getTranslated } from '../i18n/helpers'
import { useI18n } from '../i18n/I18nProvider'

export function ProjectDetails() {
  const { locale, labels } = useI18n()
  const contentStartClass = 'lg:px-[calc(8.333333%+1rem)]'
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <div className="space-y-12">
        <SiteHeader />
        <section className="py-8">
          <h1 className="text-2xl font-semibold text-slate-900">
            {labels.states.projectNotFoundTitle}
          </h1>
          <p className="mt-3 text-slate-600">{labels.states.projectNotFoundDescription}</p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
          >
            {labels.buttons.backToProjects}
          </Link>
        </section>
      </div>
    )
  }

  const productName = getTranslated(project.productName, locale)
  const contextLabel = getTranslated(project.contextLabel, locale)
  const role = getTranslated(project.role, locale)
  const year = getTranslated(project.year, locale)
  const excerpt = getTranslated(project.excerpt, locale)
  const highlights = getTranslated(project.highlights, locale)
  const context = getTranslated(project.caseStudy.context, locale)
  const participation = getTranslated(project.caseStudy.participation, locale)
  const features = getTranslated(project.caseStudy.features, locale)

  const architectureCards = [
    {
      label: labels.sections.frontend,
      items: project.caseStudy.architecture.frontend
        ? getTranslated(project.caseStudy.architecture.frontend, locale)
        : undefined,
    },
    {
      label: labels.sections.backend,
      items: project.caseStudy.architecture.backend
        ? getTranslated(project.caseStudy.architecture.backend, locale)
        : undefined,
    },
    {
      label: labels.sections.worker,
      items: project.caseStudy.architecture.worker
        ? getTranslated(project.caseStudy.architecture.worker, locale)
        : undefined,
    },
    {
      label: labels.sections.infra,
      items: project.caseStudy.architecture.infra
        ? getTranslated(project.caseStudy.architecture.infra, locale)
        : undefined,
    },
  ]

  const publicLinks = [
    {
      href: project.links?.repository,
      label: labels.buttons.repository,
    },
    {
      href: project.links?.backendRepository,
      label: labels.buttons.backendRepository,
    },
    {
      href: project.links?.frontendRepository,
      label: labels.buttons.frontendRepository,
    },
    {
      href: project.links?.demo,
      label: labels.buttons.demo,
    },
  ].filter((item): item is { href: string; label: string } => Boolean(item.href))

  return (
    <div className="space-y-12">
      <SiteHeader />
      <section className="py-2 sm:py-4">
        <div className={`w-full px-3 sm:px-4 ${contentStartClass}`}>
          <Link
            to="/"
            className="inline-flex text-sm font-medium text-slate-500 transition hover:text-slate-800"
          >
            {'<-'} {labels.buttons.backToProjects}
          </Link>

          <article className="mt-6 max-w-4xl">
            <header className="border-b border-slate-200/80 pb-10">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                {productName}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-700">
                <span className="font-medium text-slate-800">{year}</span>
                <ClientBadge clientName={contextLabel} />
                {publicLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-slate-700 transition hover:text-slate-900"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-slate-700">{role}</p>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-800">{excerpt}</p>

              <div className="mt-6 rounded-lg border border-slate-300/70 bg-white/45 p-5">
                <p className="text-sm font-semibold tracking-tight text-slate-900">
                  {labels.sections.summary}
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-800">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-300 bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </header>

            <div className="space-y-10 pt-10">
              <section className="border-b border-slate-200/70 pb-10">
                <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-slate-900">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-slate-500/70" />
                  <span>{labels.sections.context}</span>
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-800">
                  {context.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section className="border-b border-slate-200/70 pb-10">
                <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-slate-900">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-slate-500/70" />
                  <span>{labels.sections.participation}</span>
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-800">
                  {participation.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section className="border-b border-slate-200/70 pb-10">
                <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-slate-900">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-slate-500/70" />
                  <span>{labels.sections.features}</span>
                </h2>
                <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-800">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-slate-900">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-slate-500/70" />
                  <span>{labels.sections.technologyStructure}</span>
                </h2>
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  {architectureCards.map((section) => {
                    if (!section.items || section.items.length === 0) return null

                    return (
                      <article
                        key={section.label}
                        className="rounded-lg border border-slate-300/70 bg-transparent p-5"
                      >
                        <h3 className="text-base font-semibold tracking-tight text-slate-900">
                          {section.label}
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-800">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    )
                  })}
                </div>
              </section>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
