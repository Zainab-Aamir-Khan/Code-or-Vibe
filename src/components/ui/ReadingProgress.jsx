import { useEffect, useMemo, useState } from 'react'

function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  const animate = useMemo(() => {
    let frame = null
    return (value) => {
      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setProgress(value)
      })
    }
  }, [])

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || window.pageYOffset
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const newProgress = documentHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / documentHeight) * 100)) : 0
      animate(newProgress)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [animate])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-white/10">
      <div
        className="h-full origin-left bg-primary transition-all duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ReadingProgress
