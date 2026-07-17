import { BookOpen, Code2, Cpu, Layers, MessageSquare, Sparkles } from 'lucide-react'
import CategoryCard from '../components/ui/CategoryCard'
import SectionHeading from '../components/ui/SectionHeading'

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
          <SectionHeading
            eyebrow="Categories"
            title="Explore every category in the collection."
            description="Browse curated topic hubs for tutorials, case studies, comparisons, opinion pieces, and AI-powered developer content."
            className="mb-12 max-w-2xl"
          />

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                count={category.count}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default CategoriesPage
