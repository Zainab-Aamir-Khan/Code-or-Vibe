import { Quote } from 'lucide-react'

function QuoteBlock({
  children,
  author,
  role,
  variant = 'info',
}) {
  const variantStyles = {
    info: 'border-blue-500/20 bg-blue-500/10 text-blue-100',
    warning: 'border-amber-500/20 bg-amber-500/10 text-amber-100',
    success: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-100',
    tip: 'border-violet-500/20 bg-violet-500/10 text-violet-100',
  }

  return (
    <figure className={`rounded-[2rem] border p-7 shadow-soft ${variantStyles[variant] || variantStyles.info}`}>
      <div className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.26em] text-muted">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-current shadow-elevated">
          <Quote className="h-5 w-5" />
        </span>
        <span>{variant.charAt(0).toUpperCase() + variant.slice(1)} quote</span>
      </div>
      <blockquote className="space-y-5 text-lg leading-8 text-current">
        <p className="font-semibold tracking-[-0.025em]">{children}</p>
      </blockquote>
      {author && (
        <figcaption className="mt-6 text-sm leading-6 text-muted">
          <span className="block font-semibold text-current">{author}</span>
          {role && <span>{role}</span>}
        </figcaption>
      )}
    </figure>
  )
}

export default QuoteBlock
