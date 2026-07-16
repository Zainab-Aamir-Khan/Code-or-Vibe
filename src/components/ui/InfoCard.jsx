function InfoCard({ icon: Icon, label, value, description }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-primary shadow-soft">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-2xl font-semibold text-text">{label}</p>
          <p className="text-sm text-muted">{value}</p>
        </div>
      </div>
      {description && <p className="mt-4 text-sm leading-7 text-muted">{description}</p>}
    </div>
  )
}

export default InfoCard
