import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

export default function SectionTitle({ eyebrow, title, description, id }) {
  return (
    <motion.div
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mb-12 max-w-2xl md:mb-14"
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold text-accent-600 dark:text-accent-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-gray dark:text-neutral-400">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
