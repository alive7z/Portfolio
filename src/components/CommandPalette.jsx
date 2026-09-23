import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  House,
  User,
  FolderGit2,
  Wrench,
  Github,
  Linkedin,
  Mail,
  FileText,
  SunMoon,
  CornerDownLeft,
  Search,
} from 'lucide-react'

const ITEMS = [
  { id: 'home', label: 'Home', hint: 'Go to home', icon: House, action: 'scroll' },
  { id: 'about', label: 'About', hint: 'Go to about', icon: User, action: 'scroll' },
  { id: 'skills', label: 'Skills', hint: 'Go to skills', icon: Wrench, action: 'scroll' },
  { id: 'projects', label: 'Projects', hint: 'Go to projects', icon: FolderGit2, action: 'scroll' },
  { id: 'github', label: 'GitHub', hint: 'Open GitHub profile', icon: Github, action: 'external', url: 'https://github.com/alive7z' },
  { id: 'linkedin', label: 'LinkedIn', hint: 'Open LinkedIn profile', icon: Linkedin, action: 'external', url: 'https://www.linkedin.com/in/sumit-singh-bagdwal' },
  { id: 'email', label: 'Email', hint: 'Open email', icon: Mail, action: 'external', url: 'mailto:sumitsbagdwal@gmail.com' },
  { id: 'resume', label: 'Resume', hint: 'Open resume (PDF)', icon: FileText, action: 'external', url: '/resume.pdf' },
  { id: 'theme', label: 'Toggle Theme', hint: 'Switch light / dark mode', icon: SunMoon, action: 'theme' },
]

export default function CommandPalette({ open, onClose, onToggleTheme }) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const listRef = useRef(null)
  const inputRef = useRef(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return ITEMS
    return ITEMS.filter(
      (item) =>
        item.label.toLowerCase().includes(q) || item.hint.toLowerCase().includes(q),
    )
  }, [query])

  useEffect(() => {
    if (open) {
      setQuery('')
      setActiveIndex(0)
      setTimeout(() => inputRef.current?.focus(), 40)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => setActiveIndex(0), [query])

  const runAction = (item) => {
    if (item.action === 'scroll') {
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
    } else if (item.action === 'theme') {
      onToggleTheme()
    } else {
      window.open(item.url, item.url.startsWith('mailto') ? '_self' : '_blank', 'noopener,noreferrer')
    }
    onClose()
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => (i + 1) % filtered.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length)
    } else if (e.key === 'Enter' && filtered[activeIndex]) {
      e.preventDefault()
      runAction(filtered[activeIndex])
    }
  }

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${activeIndex}"]`)
      ?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex, filtered])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[80] flex items-start justify-center bg-ink-900/50 px-4 pt-[16vh] backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card-hover dark:border-[#2a2a2a] dark:bg-[#0D0D0D]"
          >
            <div className="flex items-center gap-3 border-b border-neutral-200 px-4 dark:border-[#262626]">
              <Search className="h-4 w-4 shrink-0 text-ink-gray dark:text-neutral-500" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Type a command or search…"
                aria-label="Search commands"
                className="h-12 w-full bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-lightgray dark:text-white dark:placeholder:text-neutral-600"
              />
              <kbd className="shrink-0 rounded-md border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-[10px] font-medium text-ink-gray dark:border-[#303030] dark:bg-neutral-900 dark:text-neutral-500">
                ESC
              </kbd>
            </div>

            <ul ref={listRef} className="max-h-[38vh] overflow-y-auto p-2" role="listbox" aria-label="Commands">
              {filtered.length ? (
                filtered.map((item, index) => (
                  <li key={item.id} role="option" aria-selected={index === activeIndex}>
                    <button
                      type="button"
                      data-index={index}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => runAction(item)}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                        index === activeIndex
                          ? 'bg-accent-50 text-accent-700 dark:bg-accent-500/10 dark:text-accent-200'
                          : 'text-ink-800 dark:text-neutral-300'
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                          index === activeIndex
                            ? 'bg-accent-600 text-white'
                            : 'bg-neutral-100 text-ink-gray dark:bg-neutral-900 dark:text-neutral-400'
                        }`}
                      >
                        <item.icon className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span className="font-medium">{item.label}</span>
                      <span className="ml-auto hidden text-xs text-ink-gray sm:block dark:text-neutral-500">
                        {item.hint}
                      </span>
                      {index === activeIndex ? (
                        <CornerDownLeft className="h-3.5 w-3.5 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                      ) : null}
                    </button>
                  </li>
                ))
              ) : (
                <li className="px-3 py-8 text-center text-sm text-ink-gray dark:text-neutral-500">
                  No results for “{query}”
                </li>
              )}
            </ul>

            <div className="flex items-center gap-4 border-t border-neutral-200 px-4 py-2.5 text-[11px] text-ink-gray dark:border-[#262626] dark:text-neutral-500">
              <span className="flex items-center gap-1">
                <kbd className="rounded border border-neutral-200 px-1 dark:border-[#303030]">↑↓</kbd>{' '}
                navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border border-neutral-200 px-1 dark:border-[#303030]">↵</kbd>{' '}
                select
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
