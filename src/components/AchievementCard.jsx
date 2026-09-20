import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

export default function AchievementCard({ achievement, index }) {
  return (
    <motion.article
      variants={fadeUp}
      transition={{ delay: index * 0.06 }}
      className="card-surface group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-card-hover dark:hover:border-accent-600/40"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-600 group-hover:text-white dark:bg-accent-500/10 dark:text-accent-400 dark:group-hover:bg-accent-600 dark:group-hover:text-white">
          <achievement.icon className="h-5 w-5" aria-hidden="true" />
        </span>
        {achievement.badge ? (
          <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
            {achievement.badge}
          </span>
        ) : null}
      </div>
      <h3 className="text-base font-semibold text-ink-900 dark:text-white">
        {achievement.title}
      </h3>
      <p className="mt-1.5 text-sm text-ink-gray dark:text-neutral-400">
        {achievement.description}
      </p>
    </motion.article>
  )
}