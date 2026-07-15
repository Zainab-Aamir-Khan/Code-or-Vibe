import { Link } from 'react-router-dom'
import { BookOpen, Code2, Cpu, Layers, MessageSquare, Sparkles, ArrowRight } from 'lucide-react'
import ArticleCard from '../components/ui/ArticleCard'
import featuredArticles from '../data/featuredArticles'
import latestArticles from '../data/latestArticles'
import popularArticles from '../data/popularArticles'

function HomePage() {
  const categoryCards = [
    {
      label: 'Vibe Coding',
      description: 'Creative AI-integrated tutorials and hands-on experiments.',
      count: '82 articles',
      icon: Code2,
    },
    {
      label: 'Traditional Coding',
      description: 'Classic engineering patterns, algorithms, and best practices.',
      count: '64 articles',
      icon: Cpu,
    },
    {
      label: 'Comparisons',
      description: 'Head-to-head reviews of frameworks, tools, and AI platforms.',
      count: '39 articles',
      icon: Layers,
    },
    {
      label: 'Tutorials',
      description: 'Step-by-step walkthroughs for modern web applications.',
      count: '91 articles',
      icon: BookOpen,
    },
    {
      label: 'Case Studies',
      description: 'Real projects that show engineering decisions and outcomes.',
      count: '45 articles',
      icon: MessageSquare,
    },
    {
      label: 'Opinions',
      description: 'Thought leadership on the future of coding and AI.',
      count: '29 articles',
      icon: Sparkles,
    },
  ]

  return (
    <main>
      <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(133,57,83,0.16),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(97,45,83,0.18),_transparent_20%)]" aria-hidden="true" />
      <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted shadow-soft backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              Premium developer learning for modern teams
            </div>

            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-text sm:text-6xl">
                Code or Vibe
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                Traditional Coding. AI-Assisted Development. Learn Both.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link to="/blog" className="btn btn-primary">
                Explore the blog
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn about our approach
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { label: '250+', value: 'Guides & tutorials', icon: Code2 },
                { label: '1.8k', value: 'Developers onboarded', icon: Cpu },
                { label: '4.9/5', value: 'Average satisfaction', icon: Sparkles },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="card card-plain card-body border border-white/10 bg-card/90">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-primary shadow-soft">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-2xl font-semibold text-text">{item.label}</p>
                        <p className="text-sm text-muted">{item.value}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/90 p-6 shadow-elevated">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/20 to-transparent" aria-hidden="true" />
              <div className="relative grid gap-6 rounded-[1.75rem] border border-white/10 bg-background/95 p-6">
                <div className="flex items-center justify-between rounded-3xl bg-white/5 p-4 text-sm text-muted">
                  <span className="font-medium text-text">Dev Session</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Live</span>
                </div>
                <div className="space-y-5">
                  <div className="rounded-[1.5rem] bg-white/5 p-5 text-text shadow-soft">
                    <div className="mb-5 flex items-center justify-between text-sm text-muted">
                      <span>AI Pairing</span>
                      <span className="text-primary">Active</span>
                    </div>
                    <div className="grid gap-3">
                      {['const theme = "dark";', 'function buildApp() {', '  return <App />', '}'].map((line) => (
                        <div key={line} className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-muted">
                          <code className="block text-[0.95rem] text-text">{line}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white/5 p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-muted">Assistant</p>
                      <p className="mt-3 text-lg font-semibold text-text">CodePilot</p>
                    </div>
                    <div className="rounded-3xl bg-white/5 p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-muted">Next run</p>
                      <p className="mt-3 text-lg font-semibold text-text">10 mins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-10 top-8 h-24 w-24 rounded-full bg-secondary/20 blur-3xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-background/95 py-20">
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(133,57,83,0.12),_transparent_20%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Popular Articles</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-text sm:text-5xl">
            The most-read stories right now.
          </h2>
          <p className="text-lg leading-8 text-muted">
            These featured reads have been hand-selected for their premium insight and popularity.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {popularArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-background/95 py-20">
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(133,57,83,0.12),_transparent_20%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Categories</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-text sm:text-5xl">
            Discover the topics shaping modern development.
          </h2>
          <p className="text-lg leading-8 text-muted">
            Explore focused categories for code, AI, comparison guides, tutorials, case studies, and opinion pieces.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {categoryCards.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.label}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-card/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/5"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xl font-semibold text-text">{category.label}</p>
                    <p className="text-sm text-muted">{category.count}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-muted">{category.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-background/95 py-20">
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(133,57,83,0.12),_transparent_20%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Latest Articles</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-text sm:text-5xl">
            Stay ahead with the newest stories.
          </h2>
          <p className="text-lg leading-8 text-muted">
            Fresh articles covering AI development, design systems, tooling, and productivity for developers.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  </main>
  )
}

export default HomePage
