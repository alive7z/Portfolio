import { motion } from 'framer-motion'
import { scaleIn } from '../lib/motion'

export default function MetricCard({ value, suffix = '', label, index = 0 }) {
  return (
    <motion.div
      variants={scaleIn}
      transition={{ delay: 0.08 * index }}
      className="card-surface flex flex-col items-center justify-center rounded-2xl px-4 py-5 text-center"
    >
      <span className="text-2xl font-bold tracking-tight text-accent-600 dark:text-accent-400">
        {value}
        {suffix}
      </span>
      <span className="mt-1 text-xs font-medium text-ink-gray dark:text-neutral-400">
        {label}
      </span>
    </motion.div>
  )
}