import { Link, useParams } from 'react-router-dom'
import posts from '../data/posts'
import ArticleCard from '../components/ui/ArticleCard'
import ReadingProgress from '../components/ui/ReadingProgress'
import TableOfContents from '../components/ui/TableOfContents'

function PostPage() {
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug)
  const relatedPosts = posts.filter((item) => item.slug !== slug).slice(0, 3)

  if (!post) {
    return (
      <main className="bg-background text-text">
        <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">Blog post not found</p>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.05em] text-text sm:text-5xl">
            We couldn’t locate that story.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Return to the blog listing to find another premium post.
          </p>
          <div className="mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-text transition hover:bg-secondary"
            >
              Back to blog
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="bg-background text-text">
      <ReadingProgress />
      <section className="relative overflow-hidden pb-24 pt-16">
        <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(134,57,83,0.14),_transparent_25%)]" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted shadow-soft backdrop-blur-sm">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">{post.category}</span>
                <span>{post.readingTime}</span>
              </div>
              <div className="space-y-6">
                <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-text sm:text-6xl">
                  {post.title}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                  {post.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
                <span className="font-medium text-text">{post.author}</span>
                <span className="inline-flex items-center gap-2">•</span>
                <span>{post.date}</span>
                <span className="inline-flex items-center gap-2">•</span>
                <span>{post.readingTime}</span>
              </div>
            </div>

            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-card/90 p-6 shadow-elevated sm:p-8">
              <img src={post.image} alt={post.title} className="h-72 w-full rounded-[1.75rem] object-cover shadow-soft sm:h-[28rem]" />
              <div className="rounded-[1.75rem] border border-white/10 bg-background/95 p-6 text-sm text-muted">
                <p className="font-semibold uppercase tracking-[0.24em] text-primary">Feature highlight</p>
                <p className="mt-3 leading-7">
                  A beautifully crafted page for thoughtful developer content, designed to make long-form reading feel premium and focused.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <article className="space-y-10 rounded-[2rem] border border-white/10 bg-card/90 p-8 shadow-elevated sm:p-10">
            <div className="space-y-8 text-lg leading-8 text-muted">
              <p>
                In this article, we explore the blend of AI and craftsmanship that helps developers build smarter products faster, while keeping design and engineering aligned.
              </p>
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold tracking-[-0.03em] text-text">A modern reading experience</h2>
                <p>
                  The best technical content pairs clear storytelling with actionable insight. This layout highlights key ideas, supports easy scanning, and keeps the reader engaged across desktop and mobile.
                </p>
                <blockquote className="rounded-[1.5rem] border-l-4 border-primary/70 bg-white/5 px-6 py-5 text-base italic text-text shadow-soft">
                  “Designing developer content for modern teams means blending clarity, practicality, and the right visual rhythm.”
                </blockquote>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[1.5rem] bg-background/95 p-6 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.24em] text-primary">What you’ll learn</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                    <li>How to frame a premium article experience</li>
                    <li>Why metadata and structure matter for clarity</li>
                    <li>How to make long-form content feel fresh and readable</li>
                  </ul>
                </div>
                <div className="rounded-[1.5rem] bg-background/95 p-6 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.24em] text-primary">Why it works</p>
                  <p className="mt-4 leading-7">
                    Readers stay longer when content feels well-organized, the typography is clean, and the visual language supports focus without distraction.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-text">Guidance for engineering teams</h3>
                <p>
                  Use this layout as a foundation for your blog posts, case studies, or product announcements. It works especially well for articles that need to communicate technical depth with an elegant, modern presentation.
                </p>
                <p>
                  The responsive layout shifts cleanly from a two-column hero into a strong single-column reading experience on smaller devices, while preserving spacing and premium polish.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-background/95 p-8 shadow-elevated">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-primary">Related posts</p>
                  <h2 className="mt-3 text-3xl font-black text-text">More articles to explore</h2>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map((related) => (
                  <ArticleCard key={related.id} {...related} />
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <TableOfContents
              items={[
                { id: 'modern-reading-experience', title: 'A modern reading experience', subtitle: 'Storytelling & insight' },
                { id: 'what-youll-learn', title: 'What you’ll learn', subtitle: 'Outcomes & value' },
                { id: 'why-it-works', title: 'Why it works', subtitle: 'Structure & focus' },
                { id: 'engineering-guidance', title: 'Guidance for engineering teams', subtitle: 'Best practices' },
              ]}
            />

            <div className="rounded-[2rem] border border-white/10 bg-card/90 p-6 shadow-elevated">
              <p className="text-sm uppercase tracking-[0.24em] text-primary">Article details</p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-muted">
                <div>
                  <p className="font-semibold text-text">Category</p>
                  <p>{post.category}</p>
                </div>
                <div>
                  <p className="font-semibold text-text">Author</p>
                  <p>{post.author}</p>
                </div>
                <div>
                  <p className="font-semibold text-text">Date</p>
                  <p>{post.date}</p>
                </div>
                <div>
                  <p className="font-semibold text-text">Reading time</p>
                  <p>{post.readingTime}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-background/95 p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.24em] text-primary">Continue the journey</p>
              <p className="mt-4 leading-7 text-muted">
                Discover more stories about AI workflows, tooling, and premium developer experiences in the blog.
              </p>
              <Link
                to="/blog"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-text transition hover:bg-secondary"
              >
                Back to blog
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default PostPage
