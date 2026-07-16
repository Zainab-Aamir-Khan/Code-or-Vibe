import { Outlet } from 'react-router-dom'
import SiteHeader from '../components/layout/SiteHeader'
import SiteFooter from '../components/layout/SiteFooter'

function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-text">
      <SiteHeader />
      <main className="container mx-auto pb-12 pt-24 sm:pt-28">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

export default MainLayout
