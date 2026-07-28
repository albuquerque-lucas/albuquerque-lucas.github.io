import { Navigate, Route, Routes } from 'react-router-dom'

import { AppLayout } from './layout/AppLayout'
import { AboutPage } from '../pages/AboutPage'
import { ExperiencePage } from '../pages/ExperiencePage'
import { Home } from '../pages/Home'
import { ProjectDetails } from '../pages/ProjectDetails'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="experiencia" element={<ExperiencePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects/testello-spa" element={<Navigate replace to="/projects/testello" />} />
        <Route
          path="projects/assinando-digital-signature-platform"
          element={<Navigate replace to="/experiencia#docteka" />}
        />
        <Route
          path="projects/docteka-structured-data-import-system"
          element={<Navigate replace to="/experiencia#docteka" />}
        />
        <Route path="projects/:slug" element={<ProjectDetails />} />
      </Route>
    </Routes>
  )
}
