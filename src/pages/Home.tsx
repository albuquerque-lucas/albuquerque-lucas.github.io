import { ReadingLayout } from '../components/layout/ReadingLayout'
import { SiteHeader } from '../components/SiteHeader'
import { ExperienceSection } from '../sections/ExperienceSection'
import { HeroSection } from '../sections/HeroSection'
import { ProjectsSection } from '../sections/ProjectsSection'

export function Home() {
  return (
    <div className="space-y-12">
      <SiteHeader />

      <ReadingLayout>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
      </ReadingLayout>
    </div>
  )
}
