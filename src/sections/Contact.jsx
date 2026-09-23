import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Check, ArrowRight, Copy } from 'lucide-react'
import Button from '../components/Button'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const EMAIL = 'sumitsbagdwal@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch (e) {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent-50/40 to-transparent dark:via-accent-500/[0.03]"
      />
      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold text-accent-600 dark:text-accent-400"
          >
            What's Next?
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 dark:text-white sm:text-5xl"
          >
            Let's build something meaningful.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-gray dark:text-neutral-400 sm:text-lg"
          >
            I'm currently open to software engineering internships,
            collaborative projects, and conversations about technology.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button className="w-full sm:w-auto" href={`mailto:${EMAIL}`} icon={ArrowRight} magnetic>
              Say Hello
            </Button>
            <Button
              variant="secondary"
              href="https://www.linkedin.com/in/sumit-singh-bagdwal"
              target="_blank"
              rel="noopener noreferrer"
              icon={Linkedin}
              className="w-full sm:w-auto"
            >
              LinkedIn
            </Button>
            <Button
              variant="secondary"
              href="https://github.com/alive7z"
              target="_blank"
              rel="noopener noreferrer"
              icon={Github}
              className="w-full sm:w-auto"
            >
              GitHub
            </Button>
          </motion.div>

          {/* Copy email */}
          <motion.div variants={fadeUp} className="mt-8">
            <button
              type="button"
              onClick={copyEmail}
              aria-live="polite"
              className="group inline-flex max-w-full items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-ink-gray transition-all hover:border-accent-300 hover:text-ink-900 dark:border-[#303030] dark:bg-surface-dark dark:text-neutral-400 dark:hover:border-accent-600/50 dark:hover:text-white sm:px-5"
            >
              <Mail className="h-4 w-4 text-accent-600 dark:text-accent-400" aria-hidden="true" />
              {EMAIL}
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-md transition-colors ${
                  copied
                    ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                    : 'text-ink-gray group-hover:text-accent-600 dark:text-neutral-500 dark:group-hover:text-accent-400'
                }`}
                aria-hidden="true"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </span>
              <span className="sr-only">{copied ? 'Email copied' : 'Copy email address'}</span>
            </button>
            <p
              className={`mt-2 text-xs font-medium transition-opacity duration-200 ${
                copied ? 'opacity-100' : 'opacity-0'
              } text-emerald-600 dark:text-emerald-400`}
              role="status"
            >
              Email copied ✓
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
