function SectionHeading({ eyebrow, title, description, titleAs: Title = 'h2', className = '' }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {eyebrow && <p className="text-sm uppercase tracking-[0.3em] text-primary">{eyebrow}</p>}
      {Title && <Title className="text-4xl font-black tracking-[-0.04em] text-text sm:text-5xl">{title}</Title>}
      {description && <p className="text-lg leading-8 text-muted">{description}</p>}
    </div>
  )
}

export default SectionHeading
