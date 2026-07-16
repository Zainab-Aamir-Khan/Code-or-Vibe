import { Compass, Layers, Sparkles, Users } from 'lucide-react'
import PanelCard from '../components/ui/PanelCard'
import SectionHeading from '../components/ui/SectionHeading'

function AboutPage() {
  return (
    <main className="bg-background text-text">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(133,57,83,0.14),_transparent_25%)] py-24">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(97,45,83,0.14),_transparent_25%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_0.7fr] lg:items-end">
            <SectionHeading
            eyebrow="About"
            title="Crafting premium developer stories with clarity and purpose."
            description="Our mission is to make technical content feel modern, focused, and inspiring for teams building the future of software."
            titleAs="h1"
            className="space-y-6"
          />
            <PanelCard className="space-y-4 shadow-elevated">
              <p className="text-sm uppercase tracking-[0.28em] text-primary">Quick focus</p>
              <div className="rounded-[1.75rem] bg-background/95 p-6 shadow-soft">
                <p className="text-sm leading-7 text-muted">
                  Premium blog experiences combine thoughtful structure, beautiful typography, and meaningful stories that support every stage of the developer journey.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Premium tone', value: 'Clear and confident' },
                  { label: 'Audience', value: 'Developers & teams' },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-muted">
                    <p className="font-semibold text-text">{item.label}</p>
                    <p className="mt-2">{item.value}</p>
                  </div>
                ))}
              </div>
            </PanelCard>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <PanelCard className="space-y-10 shadow-elevated">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" /> Mission & Vision
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <PanelCard variant="surface" className="p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-primary">Mission</p>
                  <p className="mt-4 text-lg leading-8 text-text">
                    To elevate developer learning and storytelling through elegant, intelligent content that empowers teams to build with confidence.
                  </p>
                </PanelCard>
                <PanelCard variant="surface" className="p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-primary">Vision</p>
                  <p className="mt-4 text-lg leading-8 text-text">
                    To become the go-to resource for premium engineering narratives, blending thoughtful strategy, practical insight, and modern design.
                  </p>
                </PanelCard>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Our story</p>
              <PanelCard variant="surface" className="p-8 shadow-soft">
                <p className="text-lg leading-8 text-text">
                  Founded at the intersection of craftsmanship and emerging AI workflows, our blog grew from a desire to document engineering work in a way that feels premium and practical. Each story is designed for developers who care deeply about both code quality and user experience.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  We believe technical content should be easy to scan, delightful to read, and grounded in real-world value. That’s why every section, example, and layout is built for clarity.
                </p>
              </PanelCard>
            </div>

            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Timeline</p>
              <div className="space-y-5">
                {[
                  { year: '2024', title: 'Launch', description: 'Started as a small collection of developer essays and tutorials.' },
                  { year: '2025', title: 'Growth', description: 'Expanded into premium series focused on AI workflows and design systems.' },
                  { year: '2026', title: 'Premium', description: 'Refined the brand with a rich visual system, polished articles, and a bespoke reader experience.' },
                ].map((event) => (
                  <div key={event.year} className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-background/95 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-primary/30">
                    <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-primary/20 transition-all duration-300 group-hover:w-2" />
                    <div className="ml-4 space-y-2">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{event.year}</p>
                      <h3 className="text-xl font-semibold text-text">{event.title}</h3>
                      <p className="text-sm leading-7 text-muted">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PanelCard>

          <aside className="space-y-8">
            <PanelCard className="p-8 shadow-elevated">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Core Values</p>
              <div className="mt-6 space-y-4">
                {[
                  { icon: Compass, title: 'Intentional Clarity', description: 'Every sentence and section has a purpose.' },
                  { icon: Layers, title: 'Design Discipline', description: 'Structure and style work together to support focus.' },
                  { icon: Users, title: 'Community First', description: 'Content for developers who value collaboration and growth.' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-4 rounded-[1.75rem] border border-white/10 bg-background/95 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-text">{item.title}</p>
                        <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </PanelCard>

            <PanelCard variant="surface" className="p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Author</p>
              <PanelCard className="mt-6 flex flex-col gap-5 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <span className="text-xl font-black">Z</span>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-text">Zainab Aamir</p>
                    <p className="text-sm text-muted">Creator & Editor</p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-muted">
                  Zainab brings premium editorial direction to technical storytelling, weaving together AI, product design, and developer craftsmanship in every post.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/5 p-4 text-sm">
                    <p className="font-semibold text-text">Focus</p>
                    <p className="mt-2 text-muted">Modern dev workflows</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-4 text-sm">
                    <p className="font-semibold text-text">Approach</p>
                    <p className="mt-2 text-muted">Intentional clarity</p>
                  </div>
                </div>
              </PanelCard>
            </PanelCard>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
