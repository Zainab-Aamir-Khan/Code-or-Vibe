function SiteFooter() {
  return (
    <footer className="border-t bg-slate-50 p-4 text-center text-sm text-slate-500">
      <div className="mx-auto max-w-6xl">
        © {new Date().getFullYear()} BlogSite. Built with React, Vite, Tailwind CSS, and Lucide.
      </div>
    </footer>
  )
}

export default SiteFooter
