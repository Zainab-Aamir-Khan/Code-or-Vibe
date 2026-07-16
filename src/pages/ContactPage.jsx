import { Camera, ExternalLink, Link, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'
import PanelCard from '../components/ui/PanelCard'
import SectionHeading from '../components/ui/SectionHeading'

const faqs = [
  {
    question: 'How do I get in touch for a collaboration?',
    answer: 'Use the contact form or email us directly. We typically reply within one business day.',
  },
  {
    question: 'Is there support for branded content or sponsorships?',
    answer: 'Yes. Send a message with your request and we’ll share available options and collaboration guidelines.',
  },
  {
    question: 'Can I contribute an article?',
    answer: 'We welcome thoughtful contributors. Please include your topic idea and relevant background.',
  },
]

const socialLinks = [
  { label: 'Website', icon: ExternalLink, href: '#', color: 'text-[#0A66C2]' },
  { label: 'Social', icon: Camera, href: '#', color: 'text-[#E1306C]' },
  { label: 'Blog', icon: Link, href: '#', color: 'text-[#1877F2]' },
]

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
    window.setTimeout(() => setSubmitted(false), 2500)
  }

  return (
    <main className="bg-background text-text">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(133,57,83,0.14),_transparent_25%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_0.6fr] lg:items-end">
            <SectionHeading
            eyebrow="Contact"
            title="Connect with the team behind the premium developer blog."
            description="Have a question, partnership idea, or feedback? Send a message below, and we’ll get back to you soon."
            titleAs="h1"
            className="space-y-6"
          />
            <PanelCard className="space-y-4 p-8 shadow-elevated">
              <div className="flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Mail className="h-4 w-4" /> Contact details
              </div>
              <div className="space-y-3 text-sm text-muted">
                <p>hello@premiumblog.dev</p>
                <p>Mon–Fri, 9am–6pm</p>
                <p>Remote-first studio</p>
              </div>
            </PanelCard>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">
          <PanelCard className="space-y-8 p-10 shadow-elevated">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Send a message</p>
              <h2 className="text-3xl font-black text-text">Let’s start the conversation.</h2>
              <p className="text-muted leading-8">
                Use the form to share project details, collaboration ideas, or article proposals. This is a frontend-only demo — no backend submission is required.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                <span>Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us about your project or question"
                  className="input w-full rounded-[1.5rem] border border-white/10 bg-background/90 px-4 py-4 text-sm text-text placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted">Frontend only — form resets locally on submit.</p>
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-text transition hover:bg-secondary">
                  {submitted ? 'Message sent' : 'Send message'}
                </button>
              </div>
            </form>
          </PanelCard>

          <aside className="space-y-8">
            <PanelCard className="p-8 shadow-elevated">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">FAQ</p>
              <div className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group rounded-[1.75rem] border border-white/10 bg-card/90 p-5 transition hover:border-primary/30">
                    <summary className="cursor-pointer text-sm font-semibold text-text">{faq.question}</summary>
                    <p className="mt-4 text-sm leading-7 text-muted">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </PanelCard>

            <PanelCard className="p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Social links</p>
              <div className="mt-6 grid gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 rounded-3xl border border-white/10 bg-background/95 px-4 py-4 text-sm text-text transition hover:border-primary/30 hover:bg-white/5"
                    >
                      <span className={`inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-white/5 ${item.color}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>{item.label}</span>
                    </a>
                  )
                })}
              </div>
            </PanelCard>

            <PanelCard variant="surface" className="p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Office location</p>
              <PanelCard className="mt-6 space-y-4 p-6 shadow-soft">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Remote-first, US-based team</span>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-background/95 p-6 text-sm text-muted">
                  <div className="mb-3 flex items-center gap-3 text-sm text-muted">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>Phone: (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <span>Email: hello@premiumblog.dev</span>
                  </div>
                </div>
              </PanelCard>
            </PanelCard>
          </aside>
        </div>

        <PanelCard className="mt-10 grid gap-6 p-8 shadow-elevated sm:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Map placeholder</p>
            <PanelCard variant="surface" className="h-80 p-6 text-muted">
              <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] border-2 border-dashed border-white/10 bg-white/5 text-center text-sm text-muted">
                <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </span>
                <p className="max-w-xs">Google Maps placeholder area. Replace with an embedded map or external map component later.</p>
              </div>
            </PanelCard>
          </div>
          </PanelCard>
          <div>
          <PanelCard variant="surface" className="space-y-6 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Need help?</p>
            <p className="text-lg font-semibold text-text">Reach out for media requests, sponsorships, or editorial questions.</p>
            <p className="text-sm leading-7 text-muted">This frontend demo includes the complete contact interface, FAQs, and social links without backend submission.</p>
          </PanelCard>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
