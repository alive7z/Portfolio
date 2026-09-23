import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Github, Linkedin, Menu, X, SquareTerminal } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import Button from './Button'

const LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar({ theme, onToggleTheme, onOpenCommand }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const scrollTo = (id) => {
    setMobileOpen(false)
    document.body.style.overflow = ''
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="h-0.5 origin-left bg-accent-600 dark:bg-accent-500"
        aria-hidden="true"
      />

      <nav
        aria-label="Primary"
        className={`transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'border-b border-neutral-200/80 bg-white/80 backdrop-blur-lg dark:border-[#262626] dark:bg-black/70'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('home')
            }}
            className="flex items-center gap-2 rounded-lg font-bold tracking-tight text-ink-900 dark:text-white"
            aria-label="Sumit Singh Bagdwal — Home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600 text-sm font-bold text-white">
              SSB
            </span>
            <span className="hidden text-[15px] sm:inline">Sumit Singh Bagdwal</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(link.id)
                  }}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active === link.id
                      ? 'text-accent-600 dark:text-accent-400'
                      : 'text-ink-gray hover:text-ink-900 dark:text-neutral-400 dark:hover:text-white'
                  }`}
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {link.label}
                  {active === link.id ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent-600 dark:bg-accent-400"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  ) : null}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/alive7z"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hidden h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-white text-ink-gray transition-colors hover:border-neutral-300 hover:text-ink-900 dark:border-[#303030] dark:bg-surface-dark dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-white sm:flex"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/sumit-singh-bagdwal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hidden h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-white text-ink-gray transition-colors hover:border-neutral-300 hover:text-ink-900 dark:border-[#303030] dark:bg-surface-dark dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-white sm:flex"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>

            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <Button
              variant="primary"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden px-4 py-2 md:inline-flex"
            >
              Resume
              <span aria-hidden="true">↗</span>
            </Button>

            {/* Command palette trigger */}
            <button
              type="button"
              onClick={onOpenCommand}
              aria-label="Open command palette"
              className="hidden h-9 items-center gap-1.5 rounded-xl border border-neutral-200 bg-white px-2.5 text-ink-gray transition-colors hover:border-neutral-300 hover:text-ink-900 dark:border-[#303030] dark:bg-surface-dark dark:text-neutral-500 dark:hover:border-neutral-600 dark:hover:text-neutral-200 lg:flex"
            >
              <SquareTerminal className="h-4 w-4" aria-hidden="true" />
              <kbd className="text-[11px] font-medium">⌘K</kbd>
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-white text-ink-900 dark:border-[#303030] dark:bg-surface-dark dark:text-white lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden border-t border-neutral-200/80 dark:border-[#262626] lg:hidden"
            >
              <ul className="space-y-1 px-5 py-4">
                {LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollTo(link.id)
                      }}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        active === link.id
                          ? 'bg-accent-50 text-accent-700 dark:bg-accent-500/10 dark:text-accent-300'
                          : 'text-ink-gray hover:bg-neutral-50 dark:text-neutral-300 dark:hover:bg-neutral-900'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-3 px-4 pt-3">
                  <a
                    href="https://github.com/alive7z"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-ink-gray hover:text-ink-900 dark:text-neutral-400 dark:hover:text-white"
                  >
                    <Github className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sumit-singh-bagdwal"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-ink-gray hover:text-ink-900 dark:text-neutral-400 dark:hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1 rounded-xl bg-accent-600 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-700"
                  >
                    Resume <span aria-hidden="true">↗</span>
                  </a>
                </li>
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  )
}
