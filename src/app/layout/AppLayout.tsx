import { Outlet } from 'react-router-dom'

import { Container } from '../../components/Container'
import { profile } from '../../data/profile'
import { useI18n } from '../../i18n/I18nProvider'

export function AppLayout() {
  const { labels } = useI18n()

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <main className="flex-1 py-10 sm:py-12">
        <Container>
          <Outlet />
        </Container>
      </main>

      <footer className="border-t border-slate-200/70 bg-white">
        <Container className="py-3 text-sm text-slate-500">
          <p>
            {new Date().getFullYear()} {profile.name}. {labels.footer.rightsReserved}
          </p>
        </Container>
      </footer>
    </div>
  )
}
