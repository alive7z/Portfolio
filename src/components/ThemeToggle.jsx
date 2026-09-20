import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle({ theme, onToggle, size = 'md' }) {
  const isDark = theme === 'dark'
  const dims = size === 'md' ? 'h-9 w-9' : 'h-8 w-8'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex ${dims} items-center justify-center rounded-xl border border-neutral-200 bg-white text-ink-800 transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-[#303030] dark:bg-surface-dark dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ opacity: 0, rotate: -60, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 60, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          className="flex"
        >
          {isDark ? (
            <Moon className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Sun className="h-4 w-4" aria-hidden="true" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}