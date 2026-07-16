import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react'
import navItems from '../../data/navigation'

function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/95 shadow-soft backdrop-blur-xl transition duration-300">
      <div className="container mx-auto flex items-center justify-between gap-4 py-4">
        <Link to="/" className="flex items-center gap-3 text-xl font-semibold tracking-tight text-text">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary shadow-elevated">
            <span className="text-base font-black">B</span>
          </div>
          <span>BlogStudio</span>
        </Link>

        <nav className="hidden items-center justify-between gap-8 lg:flex" aria-label="Primary navigation">
          <div className="flex items-center gap-1.5 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative inline-flex items-center px-1.5 py-2 transition ${
                    isActive
                      ? 'text-text before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-full before:rounded-full before:bg-primary'
                      : 'text-muted hover:text-text focus-visible:text-text'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button type="button" className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm text-text transition hover:border-primary hover:bg-white/10">
            <Search className="mr-2 h-4 w-4" />
            Search
          </button>
          <Link
            to="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-text shadow-elevated transition hover:scale-[1.01] hover:bg-secondary"
          >
            Subscribe
          </Link>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-controls="mobile-menu"
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text transition hover:bg-white/10 lg:hidden focus-visible:ring-4 focus-visible:ring-primary/20"
          aria-label="Toggle menu"
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          role="menu"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-background/98 px-4 pb-6 text-text shadow-soft lg:hidden"
        >
          <div className="space-y-2 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 text-base font-medium transition ${
                    isActive ? 'bg-white/10 text-text' : 'text-muted hover:bg-white/5 hover:text-text focus-visible:bg-white/10 focus-visible:text-text'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button type="button" className="inline-flex w-full items-center justify-center rounded-full bg-white/5 px-4 py-3 text-sm font-medium text-text transition hover:bg-white/10">
              <Search className="mr-2 h-4 w-4" />
              Search
            </button>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-text transition hover:bg-secondary"
            >
              Subscribe
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default SiteHeader
