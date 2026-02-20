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
      className="group relative border-l-[3px] border-l-blue-600/45 py-8 pl-6 transition duration-200 hover:-translate-y-0.5 hover:border-l-blue-600/80 hover:bg-blue-50/60 focus-within:border-l-blue-700 focus-within:bg-blue-50/60 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[85%] after:-translate-x-1/2 after:bg-slate-300/90 after:content-[''] last:after:hidden"
    >
      <Link
        to={`/projects/${project.slug}`}
        aria-label={`${labels.a11y.openProject}: ${productName}`}
        className="block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">{project.year}</p>
        <div className="mt-3 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-blue-700 group-focus-within:text-blue-700">
                {productName}
              </h3>
              <ArrowUpRight aria-hidden className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:text-slate-800 md:hidden" />
            </div>
            <div className="mt-2">
              <ClientBadge clientName={clientName} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{excerpt}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-start justify-start gap-2 md:max-w-[14rem] md:justify-self-end">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-slate-300 bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700">{item}</span>
            ))}
            <ArrowUpRight aria-hidden className="mt-1 hidden h-4 w-4 shrink-0 text-slate-500 transition group-hover:text-slate-800 md:block" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
