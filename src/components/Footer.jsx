import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-[#1e1e1e]">
      <div className="container-x section-pad flex flex-col items-center justify-between gap-5 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-ink-gray dark:text-neutral-500">
          Designed &amp; Built by{' '}
          <span className="font-semibold text-ink-900 dark:text-neutral-300">
            Sumit Singh Bagdwal
          </span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
          <div className="flex items-center gap-1.5">
            <a
              href="https://github.com/alive7z"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-gray transition-colors hover:text-accent-600 dark:text-neutral-500 dark:hover:text-accent-400"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/sumit-singh-bagdwal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-gray transition-colors hover:text-accent-600 dark:text-neutral-500 dark:hover:text-accent-400"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="mailto:sumitsbagdwal@gmail.com"
              aria-label="Email"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-gray transition-colors hover:text-accent-600 dark:text-neutral-500 dark:hover:text-accent-400"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <span className="h-4 w-px bg-neutral-200 dark:bg-[#262626]" aria-hidden="true" />

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-gray transition-colors hover:text-accent-600 dark:text-neutral-500 dark:hover:text-accent-400"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
