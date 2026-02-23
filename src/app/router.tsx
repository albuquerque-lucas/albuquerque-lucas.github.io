import { Route, Routes } from 'react-router-dom'

import { AppLayout } from './layout/AppLayout'
import { AboutPage } from '../pages/AboutPage'
import { Home } from '../pages/Home'
import { ProjectDetails } from '../pages/ProjectDetails'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects/:slug" element={<ProjectDetails />} />
      </Route>
    </Routes>
  )
}
