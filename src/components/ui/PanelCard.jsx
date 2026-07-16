function PanelCard({ children, variant = 'base', className = '' }) {
  const base = 'rounded-[2rem] border border-white/10 p-6 shadow-soft'
  const variantStyles = {
    base: 'bg-card/90',
    surface: 'bg-background/95',
  }

  return <div className={`${base} ${variantStyles[variant]} ${className}`}>{children}</div>
}

export default PanelCard
