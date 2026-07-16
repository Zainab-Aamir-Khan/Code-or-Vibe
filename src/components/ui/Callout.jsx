import { AlertTriangle, Info, CheckCircle2, Sparkles } from 'lucide-react'

const variants = {
  info: {
    label: 'Info',
    icon: Info,
    wrapper: 'border-blue-500/20 bg-blue-500/10 text-blue-100',
  },
  warning: {
    label: 'Warning',
    icon: AlertTriangle,
    wrapper: 'border-amber-500/20 bg-amber-500/10 text-amber-100',
  },
  success: {
    label: 'Success',
    icon: CheckCircle2,
    wrapper: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-100',
  },
  tip: {
    label: 'Tip',
    icon: Sparkles,
    wrapper: 'border-violet-500/20 bg-violet-500/10 text-violet-100',
  },
}

function Callout({ title, children, variant = 'info' }) {
  const variantData = variants[variant] || variants.info
  const Icon = variantData.icon

  return (
    <div className={`rounded-[2rem] border p-6 shadow-soft ${variantData.wrapper}`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-current shadow-elevated">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-current">
              {variantData.label}
            </p>
            {title && <p className="mt-1 text-xl font-semibold text-current">{title}</p>}
          </div>
        </div>
      </div>

      <div className="mt-5 text-sm leading-7 text-current">
        {children}
      </div>
    </div>
  )
}

export default Callout
