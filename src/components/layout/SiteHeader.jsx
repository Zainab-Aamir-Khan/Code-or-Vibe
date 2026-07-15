import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import navItems from '../../data/navigation'

function SiteHeader() {
  return (
    <header className="border-b bg-white/90 p-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link to="/" className="text-xl font-semibold">
          BlogSite
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="text-sm font-medium text-slate-700 hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <button type="button" className="inline-flex items-center rounded-lg border px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 md:hidden">
          <Menu className="h-4 w-4" />
          <span className="ml-2">Menu</span>
        </button>
      </div>
    </header>
  )
}

export default SiteHeader
