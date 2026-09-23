import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ArrowUpRight, CheckCircle2, Compass, Lightbulb, Boxes, Cpu } from 'lucide-react'
import TechBadge from './TechBadge'
import MetricCard from './MetricCard'

const SECTIONS = [
  { key: 'problem', label: 'Problem', icon: Compass },
  { key: 'solution', label: 'Solution', icon: Lightbulb },
  { key: 'architecture', label: 'Architecture', icon: Boxes },
]

export default function ProjectDetailsModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[70] flex items-end justify-center bg-ink-900/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} project details`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-neutral-200 bg-white shadow-card-hover dark:border-[#2a2a2a] dark:bg-[#0D0D0D] sm:rounded-2xl"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-neutral-200 px-6 py-5 sm:px-8 dark:border-[#262626]">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-0.5 text-sm text-ink-gray dark:text-neutral-400">
                {project.subtitle} · {project.role}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-neutral-200 text-ink-gray transition-colors hover:border-neutral-300 hover:text-ink-900 dark:border-[#303030] dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* Scrollable body */}
          <div className="overflow-y-auto px-6 py-6 sm:px-8">
            <p className="mb-6 leading-relaxed text-ink-gray dark:text-neutral-400">
              {project.tagline}
            </p>

            <div className="space-y-6">
              {SECTIONS.map((section) => (
                <div key={section.key} className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
                    <section.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="mb-1.5 text-sm font-semibold text-ink-900 dark:text-white">
                      {section.label}
                    </h4>
                    <p className="text-sm leading-relaxed text-ink-gray dark:text-neutral-400">
                      {project[section.key]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <h4 className="mb-3 mt-8 flex items-center gap-2 text-sm font-semibold text-ink-900 dark:text-white">
              <Cpu className="h-4 w-4 text-accent-600 dark:text-accent-400" aria-hidden="true" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </div>

            {/* Key features */}
            <h4 className="mb-3 mt-8 flex items-center gap-2 text-sm font-semibold text-ink-900 dark:text-white">
              <CheckCircle2 className="h-4 w-4 text-accent-600 dark:text-accent-400" aria-hidden="true" />
              Key Features
            </h4>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-ink-gray dark:text-neutral-400"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Metrics */}
            {project.metrics ? (
              <>
                <h4 className="mb-3 mt-8 text-sm font-semibold text-ink-900 dark:text-white">
                  Engineering Metrics
                </h4>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {project.metrics.map((metric, i) => (
                    <MetricCard
                      key={metric.label}
                      value={metric.value}
                      suffix={metric.suffix}
                      label={metric.label}
                      index={i}
                    />
                  ))}
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-ink-gray dark:text-neutral-500">
                  {project.metricNote}
                </p>
              </>
            ) : null}
          </div>

          {/* Footer */}
          <div className="flex flex-wrap items-center gap-3 border-t border-neutral-200 px-6 py-4 sm:px-8 dark:border-[#262626]">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white shadow-blue-glow transition-colors hover:bg-accent-700 sm:w-auto"
              >
                View Live <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 px-5 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:border-accent-300 dark:border-[#303030] dark:text-white dark:hover:border-accent-600/50 sm:w-auto"
              >
                <Github className="h-4 w-4" aria-hidden="true" /> GitHub
              </a>
            ) : null}
            <button
              type="button"
              onClick={onClose}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-ink-gray transition-colors hover:text-ink-900 dark:text-neutral-400 dark:hover:text-white sm:ml-auto sm:w-auto"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
