import { motion } from 'framer-motion'
import { CalendarRange, Users, Presentation, Code2, GraduationCap, Zap } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const ACTIVITIES = [
  {
    icon: Presentation,
    title: 'Technical Sessions',
    text: 'Hands-on sessions on development, cloud, and problem solving.',
  },
  {
    icon: Code2,
    title: 'Coding Initiatives',
    text: 'Peer-driven competitive programming and practice groups.',
  },
  {
    icon: GraduationCap,
    title: 'Student Workshops',
    text: 'Workshops introducing students to modern software tooling.',
  },
  {
    icon: Zap,
    title: 'Tech-Focused Campus Events',
    text: 'Organizing technology-focused events and activities on campus.',
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="section-pad py-20 md:py-28">
      <div className="container-x">
        <SectionTitle
          eyebrow="Leadership"
          title="Leadership"
          description="Building technical communities and learning culture on campus."
        />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Main leadership card */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="card-surface relative overflow-hidden rounded-2xl p-7 sm:p-9"
          >
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-100/50 blur-2xl dark:bg-accent-500/10"
            />
            <div className="relative">
              <span className="mb-5 inline-flex items-center gap-2 rounded-lg bg-accent-600 px-3 py-1.5 text-xs font-semibold text-white">
                <Users className="h-3.5 w-3.5" aria-hidden="true" />
                Leadership
              </span>
              <h3 className="text-xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-2xl">
                Lead — AWS Student Builder Group
              </h3>
              <p className="mt-1.5 text-sm font-medium text-ink-gray dark:text-neutral-400">
                Graphic Era Hill University, Bhimtal
              </p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-accent-600 dark:text-accent-400">
                <CalendarRange className="h-4 w-4" aria-hidden="true" />
                2026 — Present
              </p>
              <p className="mt-5 leading-relaxed text-ink-gray dark:text-neutral-400">
                Leading technical learning initiatives and peer activities focused
                on software development, cloud computing, and problem solving.
              </p>
            </div>
          </motion.article>

          {/* Activities */}
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative space-y-4 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-neutral-200 dark:before:bg-[#262626]"
          >
            {ACTIVITIES.map((activity, index) => (
              <motion.li key={activity.title} variants={fadeUp} className="relative flex gap-5 pl-0">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white text-accent-600 shadow-card dark:border-[#262626] dark:bg-surface-dark dark:text-accent-400">
                  <activity.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <div className="card-surface flex-1 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-300 dark:hover:border-accent-600/40">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                    Activity 0{index + 1}
                  </p>
                  <h4 className="mt-1 text-sm font-semibold text-ink-900 dark:text-white">
                    {activity.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink-gray dark:text-neutral-400">
                    {activity.text}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}