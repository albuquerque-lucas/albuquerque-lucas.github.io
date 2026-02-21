import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useI18n } from '../i18n/I18nProvider'

export function ProjectsSection() {
  const { labels } = useI18n()

  return (
    <section className="pb-4">
      <div className="mb-8 flex w-full items-end justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{labels.sections.projects}</h2>
        <p className="text-xs font-medium text-slate-700 sm:text-sm">{projects.length} {labels.sections.items}</p>
      </div>
      <div className="relative flex w-full flex-col lg:before:absolute lg:before:bottom-0 lg:before:left-[-0.92rem] lg:before:top-0 lg:before:w-px lg:before:bg-blue-600/35 lg:before:content-['']">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
