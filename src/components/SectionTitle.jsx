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
      className="section-heading"
    >
      {eyebrow ? (
        <p className="eyebrow mb-4">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold leading-[1.15] tracking-[-0.035em] text-ink-900 dark:text-white sm:text-[2.5rem]">
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
