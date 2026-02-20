import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useI18n } from '../i18n/I18nProvider'

export function ProjectsSection() {
  const { labels } = useI18n()

  return (
    <section className="pb-4">
      <div className="mx-auto mb-8 flex w-full max-w-5xl items-end justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{labels.sections.projects}</h2>
        <p className="text-xs text-slate-500 sm:text-sm">{projects.length} {labels.sections.items}</p>
      </div>
      <div className="mx-auto flex w-full max-w-5xl flex-col">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
