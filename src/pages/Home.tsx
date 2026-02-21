import { ReadingLayout } from '../components/layout/ReadingLayout'
import { SiteHeader } from '../components/SiteHeader'
import { HeroSection } from '../sections/HeroSection'
import { ProjectsSection } from '../sections/ProjectsSection'

export function Home() {
  return (
    <div className="space-y-12">
      <SiteHeader />

      <ReadingLayout>
        <HeroSection />
        <ProjectsSection />
      </ReadingLayout>
    </div>
  )
}
