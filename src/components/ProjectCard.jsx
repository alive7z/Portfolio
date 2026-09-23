import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronRight, Github } from 'lucide-react'
import TechBadge from './TechBadge'
import MetricCard from './MetricCard'
import { fadeUp, viewportOnce } from '../lib/motion'

function BrowserFrame({ image, darkImage, alt, displayUrl }) {
  const imageClassName =
    'h-full w-full object-contain object-top transition-transform duration-500 ease-out group-hover/img:scale-[1.015]'

  return (
    <div className="group/img relative w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-card-hover dark:border-[#262626] dark:bg-surface-dark">
      {/* Browser chrome */}
      <div className="flex h-10 items-center gap-1.5 border-b border-neutral-200 bg-neutral-50 px-4 dark:border-[#262626] dark:bg-neutral-900">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" aria-hidden="true" />
        <span className="ml-3 hidden min-w-0 flex-1 truncate rounded-md bg-neutral-200/70 px-3 py-1 text-center text-[11px] font-medium leading-5 text-neutral-400 sm:block dark:bg-neutral-800 dark:text-neutral-500">
          {displayUrl}
        </span>
      </div>
      <div className="flex aspect-[16/10] items-start justify-center overflow-hidden bg-neutral-100 dark:bg-black">
        {darkImage ? (
          <>
            <motion.img
              src={image}
              alt={alt}
              loading="lazy"
              width={1800}
              height={1050}
              className={`${imageClassName} dark:hidden`}
            />
            <motion.img
              src={darkImage}
              alt={alt}
              loading="lazy"
              width={1800}
              height={1050}
              className={`${imageClassName} hidden dark:block`}
            />
          </>
        ) : (
          <motion.img
            src={image}
            alt={alt}
            loading="lazy"
            width={1800}
            height={1050}
            className={imageClassName}
          />
        )}
      </div>
    </div>
  )
}

export default function ProjectCard({ project, index, onOpenDetails }) {
  const reverse = index % 2 === 1

  return (
    <motion.article
      variants={fadeUp}
      viewport={viewportOnce}
      className="grid min-w-0 items-start gap-8 lg:grid-cols-2 lg:gap-12"
    >
      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`min-w-0 lg:sticky lg:top-28 ${reverse ? 'lg:order-last' : ''}`}
      >
        <BrowserFrame
          image={project.image}
          darkImage={project.darkImage}
          alt={project.imageAlt || `Screenshot of ${project.title}`}
          displayUrl={project.displayUrl}
        />
      </motion.div>

      {/* Content */}
      <div className={`flex min-w-0 flex-col ${reverse ? 'lg:order-first' : ''}`}>
        <p className="mb-2 text-sm font-semibold text-accent-600 dark:text-accent-400">
          {project.role}
        </p>
        <h3 className="text-2xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-ink-gray dark:text-neutral-400">
          {project.subtitle}
        </p>

        <p className="mt-5 leading-relaxed text-ink-gray dark:text-neutral-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 7).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        {project.metrics ? (
          <div className="mt-7">
            <div className="grid grid-cols-2 items-stretch gap-3 sm:grid-cols-4">
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
          </div>
        ) : null}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {project.live ? (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-600 px-4 py-2.5 text-sm font-semibold text-white shadow-blue-glow transition-colors hover:bg-accent-700 sm:w-auto"
            >
              View Live
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                aria-hidden="true"
              />
            </motion.a>
          ) : null}

          {project.github ? (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${project.live ? 'border border-neutral-200 bg-white text-ink-900 shadow-none hover:border-accent-300 hover:bg-white dark:border-[#303030] dark:bg-transparent dark:text-neutral-100 dark:hover:border-accent-600/50' : 'bg-accent-600 text-white shadow-blue-glow hover:bg-accent-700'} group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors sm:w-auto`}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              View GitHub
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                aria-hidden="true"
              />
            </motion.a>
          ) : null}

          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="group/explore inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:border-accent-300 hover:text-accent-700 dark:border-[#303030] dark:bg-transparent dark:text-neutral-100 dark:hover:border-accent-600/50 dark:hover:text-accent-300 sm:w-auto"
          >
            {project.slug === 'ibvap' ? 'Explore Project' : 'Project Details'}
            <ChevronRight
              className="h-4 w-4 text-accent-600 transition-transform duration-200 group-hover/explore:translate-x-0.5 dark:text-accent-400"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </motion.article>
  )
}
