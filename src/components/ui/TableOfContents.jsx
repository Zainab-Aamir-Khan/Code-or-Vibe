function TableOfContents({ items }) {
  return (
    <div className="sticky top-24">
      <div className="rounded-[2rem] border border-white/10 bg-card/90 p-6 shadow-elevated">
        <p className="text-sm uppercase tracking-[0.24em] text-primary">Table of contents</p>
        <div className="mt-6 space-y-4 text-sm leading-7 text-muted">
          <p className="text-base font-semibold text-text">Jump to sections</p>
          <ol className="space-y-3">
            {items.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="block rounded-2xl px-4 py-3 text-sm text-text transition hover:bg-white/5 hover:text-primary">
                  <span className="font-semibold">{item.title}</span>
                  {item.subtitle && <span className="mt-1 block text-xs text-muted">{item.subtitle}</span>}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default TableOfContents
