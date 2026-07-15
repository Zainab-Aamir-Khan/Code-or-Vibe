import { Link } from 'react-router-dom'

function ArticleCard({ image, category, title, description, author, readingTime, date, rank }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-card/90 shadow-elevated transition duration-300 hover:-translate-y-1 hover:border-primary/30">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-primary/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-text shadow-soft">
          {category}
        </span>
        {rank && (
          <span className="absolute right-4 top-4 rounded-full bg-secondary/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-text shadow-soft">
            #{rank}
          </span>
        )}
      </div>
      <div className="space-y-5 p-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-text transition group-hover:text-primary">{title}</h3>
          <p className="text-sm leading-7 text-muted">{description}</p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-sm text-muted">
          <span className="font-medium text-text">{author}</span>
          <span>{readingTime}</span>
          <span>{date}</span>
        </div>
        <Link
          to="/blog"
          className="inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-3 text-sm font-semibold text-text transition hover:bg-primary/90 hover:text-white"
        >
          Read More
        </Link>
      </div>
    </article>
  )
}

export default ArticleCard
