import { useState } from 'react'
import { MessageCircle, CornerUpLeft } from 'lucide-react'

const mockComments = [
  {
    id: 'c1',
    name: 'Leila Morgan',
    date: 'Aug 1, 2026',
    role: 'Senior Frontend Engineer',
    comment: 'This article nails the balance between practical guidance and premium presentation. A great reference for team docs.',
  },
  {
    id: 'c2',
    name: 'Jordan Smith',
    date: 'Jul 28, 2026',
    role: 'Product Designer',
    comment: 'The layout feels modern and readable — the callouts and TOC really help me scan the key ideas quickly.',
  },
  {
    id: 'c3',
    name: 'Mina Patel',
    date: 'Jul 25, 2026',
    role: 'AI Researcher',
    comment: 'I appreciate the clean UI of the comments section itself. This would be ideal for thoughtful technical discussion.',
  },
]

function CommentsSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    window.setTimeout(() => setSent(false), 2000)
  }

  return (
    <section className="space-y-8 rounded-[2rem] border border-white/10 bg-background/95 p-8 shadow-elevated">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-primary">Comments</p>
          <h2 className="mt-3 text-3xl font-black text-text">Join the discussion</h2>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-3 text-sm text-muted">
          <MessageCircle className="h-4 w-4 text-primary" />
          {mockComments.length} comments
        </div>
      </div>

      <div className="space-y-4">
        {mockComments.map((item) => (
          <article key={item.id} className="rounded-[1.75rem] border border-white/10 bg-card/90 p-6 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                {item.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                  <span className="font-semibold text-text">{item.name}</span>
                  <span>•</span>
                  <span>{item.role}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">{item.comment}</p>
                <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-text transition hover:border-primary/30 hover:bg-white/10">
                  <CornerUpLeft className="h-4 w-4" />
                  Reply
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 rounded-[1.75rem] border border-white/10 bg-card/90 p-6 shadow-soft">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.24em] text-primary">Leave a reply</p>
          <p className="text-sm leading-6 text-muted">Share your thoughts on this post. Your comment will appear once submitted.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-text">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="input h-14 w-full rounded-full border border-white/10 bg-background/90 px-4 text-sm text-text placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </label>
          <label className="space-y-2 text-sm text-text">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="input h-14 w-full rounded-full border border-white/10 bg-background/90 px-4 text-sm text-text placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </label>
        </div>

        <label className="space-y-2 text-sm text-text">
          <span>Comment</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Write your comment..."
            className="input w-full rounded-[1.5rem] border border-white/10 bg-background/90 px-4 py-4 text-sm text-text placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">Frontend-only comment form — no server submission.</p>
          <button type="submit" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-text transition hover:bg-secondary">
            {sent ? 'Comment sent' : 'Post comment'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default CommentsSection
