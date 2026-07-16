import { BookOpen, Code2, Cpu, Layers, MessageSquare, Sparkles } from 'lucide-react'

const categories = [
  {
    title: 'Vibe Coding',
    description: 'Creative AI-integrated tutorials and hands-on experiments.',
    count: '82 articles',
    icon: Code2,
  },
  {
    title: 'Traditional Coding',
    description: 'Classic engineering patterns, algorithms, and best practices.',
    count: '64 articles',
    icon: Cpu,
  },
  {
    title: 'Comparisons',
    description: 'Head-to-head reviews of frameworks, tools, and AI platforms.',
    count: '39 articles',
    icon: Layers,
  },
  {
    title: 'Tutorials',
    description: 'Step-by-step walkthroughs for modern web applications.',
    count: '91 articles',
    icon: BookOpen,
  },
  {
    title: 'Case Studies',
    description: 'Real projects that show engineering decisions and outcomes.',
    count: '45 articles',
    icon: MessageSquare,
  },
  {
    title: 'Opinions',
    description: 'Thought leadership on the future of coding and AI.',
    count: '29 articles',
    icon: Sparkles,
  },
]

function CategoriesPage() {
  return (
    <main className="bg-background text-text">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(133,57,83,0.16),_transparent_25%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Categories</p>
            <h1 className="text-4xl font-black tracking-[-0.04em] text-text sm:text-5xl">
              Explore every category in the collection.
            </h1>
            <p className="text-lg leading-8 text-muted">
              Browse curated topic hubs for tutorials, case studies, comparisons, opinion pieces, and AI-powered developer content.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.title}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-card/90 p-6 shadow-soft transition duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:bg-white/5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary/15">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted transition-colors duration-300 group-hover:border-primary/30 group-hover:text-primary">
                      {category.count}
                    </span>
                  </div>

                  <div className="mt-8 space-y-4">
                    <h2 className="text-2xl font-semibold text-text transition-colors duration-300 group-hover:text-white">
                      {category.title}
                    </h2>
                    <p className="text-sm leading-7 text-muted">{category.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default CategoriesPage
