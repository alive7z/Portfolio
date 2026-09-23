import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { skills } from '../data/skills'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-pad py-20 md:py-28"
    >
      <div className="container-x">
        <SectionTitle
          eyebrow="Skills"
          title="Technical Skills"
          description="The languages and tools I use to design, build, and ship software end to end."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              className="card-surface group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-card-hover hover:dark:border-accent-600/40"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-600 group-hover:text-white dark:bg-accent-500/10 dark:text-accent-400 dark:group-hover:bg-accent-600 dark:group-hover:text-white">
                  <group.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-ink-900 dark:text-white">
                  {group.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-sm font-medium text-ink-800 transition-colors hover:border-accent-300 hover:text-accent-700 dark:border-[#242424] dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-accent-600/50 dark:hover:text-accent-300"
                  >
                    <item.icon className="h-3.5 w-3.5 text-accent-500" aria-hidden="true" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
