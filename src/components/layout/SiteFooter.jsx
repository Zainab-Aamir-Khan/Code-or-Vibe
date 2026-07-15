import { Link } from 'react-router-dom'
import { GitBranch, MessageCircle, Share2 } from 'lucide-react'

function SiteFooter() {
  return (
    <footer className="bg-background border-t border-white/10 text-text">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-xl font-black tracking-tight text-text">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary text-text shadow-elevated">
                B
              </div>
              <span>Code or Vibe</span>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted">
              A premium destination for developers who want to master traditional coding and AI-assisted development in one place.
            </p>
            <div className="flex items-center gap-3 text-muted">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-primary">
                <GitBranch className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="transition hover:text-primary">
                <Share2 className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-primary">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-primary">Quick Links</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link to="/" className="transition hover:text-text">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="transition hover:text-text">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/categories" className="transition hover:text-text">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-text">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-text">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-primary">Categories</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>Vibe Coding</li>
              <li>Traditional Coding</li>
              <li>Comparisons</li>
              <li>Tutorials</li>
              <li>Case Studies</li>
              <li>Opinions</li>
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-card/90 p-6 shadow-soft">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">Newsletter</h3>
            <p className="mb-6 text-sm leading-7 text-muted">
              Subscribe for curated posts and premium Dev updates.
            </p>
            <form className="space-y-4">
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="input w-full rounded-full border-white/10 bg-white/5 px-5 py-4 text-sm text-text placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
              <button type="button" className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-text transition hover:bg-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-muted sm:text-left">
          © {new Date().getFullYear()} Code or Vibe. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
