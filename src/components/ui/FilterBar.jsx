import { ChevronDown } from 'lucide-react'

function FilterBar({
  category,
  categories,
  onCategoryChange,
  tags,
  selectedTags,
  onToggleTag,
  sort,
  sortOptions,
  onSortChange,
  onReset,
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-card/90 p-6 shadow-elevated">
      <div className="grid gap-4 xl:grid-cols-[1fr_1fr_1.5fr]">
        <div>
          <label htmlFor="category-filter" className="mb-3 block text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Category
          </label>
          <div className="relative">
            <select
              id="category-filter"
              value={category}
              onChange={(event) => onCategoryChange(event.target.value)}
              className="input h-14 w-full appearance-none rounded-full border border-white/10 bg-background/90 px-5 pr-12 text-sm text-text focus:border-primary focus:ring-4 focus:ring-primary/10"
            >
              {categories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          </div>
        </div>

        <div>
          <label htmlFor="sort-filter" className="mb-3 block text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Sort by
          </label>
          <div className="relative">
            <select
              id="sort-filter"
              value={sort}
              onChange={(event) => onSortChange(event.target.value)}
              className="input h-14 w-full appearance-none rounded-full border border-white/10 bg-background/90 px-5 pr-12 text-sm text-text focus:border-primary focus:ring-4 focus:ring-primary/10"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          </div>
        </div>

        <div>
          <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Tag filters
          </label>
          <details className="group relative rounded-[1.75rem] border border-white/10 bg-background/90 p-4 transition duration-300 hover:border-primary/30 focus-within:border-primary/30">
            <summary className="flex cursor-pointer items-center justify-between rounded-full px-4 py-3 text-sm font-medium text-text transition hover:bg-white/5">
              <span>{selectedTags.length > 0 ? `${selectedTags.length} selected` : 'Choose tags'}</span>
              <ChevronDown className="h-4 w-4 text-muted transition duration-300 group-open:-rotate-180" />
            </summary>
            <div className="mt-3 grid gap-3 p-2 sm:grid-cols-2">
              {tags.map((tag) => {
                const active = selectedTags.includes(tag)
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => onToggleTag(tag)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      active
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-white/10 bg-white/5 text-text hover:border-primary/30 hover:bg-white/10'
                    }`}
                  >
                    {tag}
                  </button>
                )
              })}
            </div>
          </details>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">Fine-tune results with premium filters.</p>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-text transition hover:bg-secondary"
        >
          Reset filters
        </button>
      </div>
    </div>
  )
}

export default FilterBar
