import { Link } from 'react-router-dom'
import { ArrowRight, Home, Search } from 'lucide-react'

function NotFoundPage() {
  return (
    <main className="min-h-screen bg-background text-text">
      <section className="relative overflow-hidden py-24">
        <div className="absolute right-6 top-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8 text-center lg:text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Page not found</p>
              <h1 className="text-6xl font-black tracking-[-0.05em] text-text sm:text-7xl">
                404 — This page took a detour.
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-muted sm:mx-0">
                The link you tried may be outdated or the page has moved. Use the buttons below to return home or continue browsing the latest blog stories.
              </p>
              <div className="mx-auto grid max-w-sm gap-4 sm:max-w-none sm:grid-cols-2">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-text transition hover:bg-secondary"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-text transition hover:border-primary/30 hover:bg-white/10"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Browse Blog
                </Link>
              </div>
            </div>

            <div className="relative mx-auto flex max-w-xl justify-center">
              <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-card/90 p-10 shadow-elevated">
                <div className="absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 blur-3xl" aria-hidden="true" />
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-background/95 p-6 shadow-soft">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-primary">Lost in space?</p>
                      <p className="mt-3 text-lg font-semibold text-text">Find your way back with a fresh story.</p>
                    </div>
                    <div className="rounded-3xl bg-primary/10 p-4 text-primary">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.75rem] bg-white/5 p-5 text-center">
                      <p className="text-5xl font-black text-text">404</p>
                      <p className="mt-3 text-sm text-muted">Page missing</p>
                    </div>
                    <div className="rounded-[1.75rem] bg-white/5 p-5 text-center">
                      <p className="text-5xl font-black text-primary">∞</p>
                      <p className="mt-3 text-sm text-muted">Stories await</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage
