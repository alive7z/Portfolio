import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Github, Linkedin, Menu, X, Search } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import Button from './Button'
import logo from '../assets/logo.svg'
import { useDialog } from '../hooks/useDialog'
import { scrollToSection } from '../lib/scroll'

const LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Leadership', id: 'leadership' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar({ theme, onToggleTheme, onOpenCommand }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const pendingSection = useRef(null)
  useDialog(mobileOpen, () => setMobileOpen(false), navRef, menuRef)

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
    const desktop = window.matchMedia('(min-width: 1280px)')
    const closeOnDesktop = () => { if (desktop.matches) setMobileOpen(false) }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  const scrollTo = (id) => {
    if (mobileOpen) {
      pendingSection.current = id
      setMobileOpen(false)
    } else {
      scrollToSection(id)
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-accent-600 dark:bg-accent-500"
        aria-hidden="true"
      />

      <nav
        ref={navRef}
        aria-label="Primary"
        className={`container-x overflow-hidden rounded-2xl border bg-white/95 backdrop-blur-xl transition-[box-shadow,border-color] duration-300 dark:bg-[#0F0F0F]/95 ${
          scrolled || mobileOpen
            ? 'border-neutral-200 shadow-card-hover dark:border-[#303030]'
            : 'border-neutral-200/70 shadow-card dark:border-[#262626]'
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-5">
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
            <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-neutral-700">
              <img
                src={logo}
                alt=""
                width={32}
                height={32}
                className="h-full w-full object-cover"
                aria-hidden="true"
              />
            </span>
            <span className="hidden text-[15px] sm:inline">Sumit Singh Bagdwal</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 xl:flex">
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
                      ? 'bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400'
                      : 'text-ink-gray hover:text-ink-900 dark:text-neutral-400 dark:hover:text-white'
                  }`}
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
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
              aria-label="Search portfolio"
              aria-keyshortcuts="Meta+K Control+K"
              className="hidden h-11 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-2.5 text-ink-gray transition-colors hover:border-neutral-300 hover:text-ink-900 dark:border-[#303030] dark:bg-surface-dark dark:text-neutral-500 dark:hover:border-neutral-600 dark:hover:text-neutral-200 xl:flex"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
              <kbd className="text-[11px] font-medium">⌘K</kbd>
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              ref={menuRef}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className="icon-button xl:hidden"
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
        <AnimatePresence onExitComplete={() => {
          if (pendingSection.current) {
            scrollToSection(pendingSection.current)
            pendingSection.current = null
          }
        }}>
          {mobileOpen ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              id="mobile-navigation"
              className="max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain border-t border-neutral-200/80 dark:border-[#262626] xl:hidden"
            >
              <ul className="space-y-1 px-5 py-4">
                {LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      aria-current={active === link.id ? 'true' : undefined}
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
                    className="icon-button"
                  >
                    <Github className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sumit-singh-bagdwal"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="icon-button"
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
