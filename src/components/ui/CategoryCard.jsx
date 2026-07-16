function CategoryCard({ title, description, count, icon: Icon }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-card/90 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/5">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary/15">
          <Icon className="h-6 w-6" />
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted transition-colors duration-300 group-hover:border-primary/30 group-hover:text-primary">
          {count}
        </span>
      </div>
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-text transition-colors duration-300 group-hover:text-white">{title}</h2>
        <p className="text-sm leading-7 text-muted">{description}</p>
      </div>
    </article>
  )
}

export default CategoryCard
