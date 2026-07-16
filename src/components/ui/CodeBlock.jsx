import { useMemo, useState } from 'react'
import { Clipboard, Check } from 'lucide-react'

const defaultCode = `function greet(name) {
  const message = \\`Hello, \\${name}!\\`
  console.log(message)
}

greet('developer')`

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function highlightCode(value) {
  const escaped = escapeHtml(value)
  return escaped
    .replace(/(\/\/.*)/g, '<span class="text-muted">$1</span>')
    .replace(/(\\`[^\\`]*\\`|"[^\"]*"|'[^']*')/g, '<span class="text-emerald-300">$1</span>')
    .replace(/\b(const|let|var|function|return|if|else|for|while|switch|case|break|continue|import|export|default|class|extends|new)\b/g, '<span class="text-primary">$1</span>')
    .replace(/\b(\d+)\b/g, '<span class="text-secondary">$1</span>')
}

function CodeBlock({ code = defaultCode, language = 'javascript' }) {
  const [copied, setCopied] = useState(false)

  const lines = useMemo(() => code.split('\n'), [code])
  const formattedCode = useMemo(() => highlightCode(code), [code])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-elevated">
      <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">{language}</span>
          <span className="rounded-full bg-white/5 px-3 py-1">Dark theme</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-text transition hover:border-primary/30 hover:bg-primary/10"
        >
          {copied ? <Check className="h-4 w-4 text-primary" /> : <Clipboard className="h-4 w-4" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className="overflow-x-auto px-5 py-5">
        <div className="min-w-[28rem]">
          <div className="grid gap-4 md:grid-cols-[auto_1fr]">
            <div className="hidden flex-col gap-2 pr-4 text-right text-xs leading-6 text-muted md:flex">
              {lines.map((_, index) => (
                <span key={index} className="block">{index + 1}</span>
              ))}
            </div>
            <pre className="min-w-full overflow-x-auto text-sm leading-6 text-white">
              <code className="block whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: formattedCode }} />
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeBlock
