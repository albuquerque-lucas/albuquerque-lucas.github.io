import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ClientBadge } from './ClientBadge'
import type { Project } from '../data/projects'
import { getTranslated } from '../i18n/helpers'
import { useI18n } from '../i18n/I18nProvider'

type ProjectCardProps = { project: Project }

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale, labels } = useI18n()
  const productName = getTranslated(project.productName, locale)
  const clientName = getTranslated(project.clientName, locale)
  const excerpt = getTranslated(project.excerpt, locale)
  const highlights = getTranslated(project.highlights, locale).slice(0, 3)

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative border-l-2 border-l-brand-500/25 py-8 pl-6 transition duration-200 hover:-translate-y-0.5 hover:border-l-brand-500/60 hover:bg-brand-500/5 focus-within:border-l-brand-500 focus-within:bg-brand-500/5 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[85%] after:-translate-x-1/2 after:bg-slate-200/60 after:content-[''] last:after:hidden"
    >
      <Link
        to={`/projects/${project.slug}`}
        aria-label={`${labels.a11y.openProject}: ${productName}`}
        className="block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
      >
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{project.year}</p>
        <div className="mt-3 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-brand-600 group-focus-within:text-brand-600">
                {productName}
              </h3>
              <ArrowUpRight aria-hidden className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-slate-700 md:hidden" />
            </div>
            <div className="mt-2">
              <ClientBadge clientName={clientName} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{excerpt}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-start justify-start gap-2 md:max-w-[14rem] md:justify-self-end">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{item}</span>
            ))}
            <ArrowUpRight aria-hidden className="mt-1 hidden h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-slate-700 md:block" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
