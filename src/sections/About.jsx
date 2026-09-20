import { motion } from 'framer-motion'
import { GraduationCap, Target } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function About() {
  return (
    <section id="about" className="section-pad py-20 md:py-28">
      <div className="container-x">
        <SectionTitle eyebrow="About" title="About Me" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — about text */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.p variants={fadeUp} className="text-base leading-relaxed text-ink-gray dark:text-neutral-400 sm:text-lg">
              I'm a{' '}
              <span className="font-semibold text-ink-900 dark:text-white">
                Computer Science and Engineering undergraduate
              </span>{' '}
              at Graphic Era Hill University, Bhimtal, interested in software
              development, full-stack engineering, problem solving, and building
              technology that solves practical problems.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-ink-gray dark:text-neutral-400 sm:text-lg">
              Most of my energy goes into hands-on projects — from real-time
              AI-powered platforms to civic tech apps — where I own the whole
              stack, from database schema to the UI. I enjoy turning messy,
              real-world problems into clean, reliable software.
            </motion.p>
          </motion.div>

          {/* Right — info cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            <motion.div variants={fadeUp} className="card-surface rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-ink-900 dark:text-white">
                  Education
                </h3>
              </div>
              <dl className="space-y-2 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="font-medium text-ink-900 dark:text-neutral-200">
                    B.Tech — Computer Science &amp; Engineering
                  </dt>
                  <dd className="shrink-0 rounded-lg bg-accent-50 px-2 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-500/10 dark:text-accent-300">
                    2024–2028
                  </dd>
                </div>
                <dd className="text-ink-gray dark:text-neutral-400">
                  Graphic Era Hill University
                </dd>
                <dd className="pt-1 text-ink-gray dark:text-neutral-400">
                  CGPA:{' '}
                  <span className="font-semibold text-ink-900 dark:text-white">8.26/10</span>
                </dd>
              </dl>
            </motion.div>

            <motion.div variants={fadeUp} className="card-surface rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
                  <Target className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-ink-900 dark:text-white">
                  Current Focus
                </h3>
              </div>
              <ul className="grid grid-cols-1 gap-2.5 text-sm text-ink-gray sm:grid-cols-2 dark:text-neutral-400">
                {[
                  'Data Structures & Algorithms',
                  'Full-Stack Development',
                  'Backend Engineering',
                  'System Design',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}