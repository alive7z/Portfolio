import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Code2, GraduationCap } from 'lucide-react'
import profile from '../assets/profile.jpg'

export default function ProfileImage({ className = '' }) {
  const [parallaxEnabled, setParallaxEnabled] = useState(false)
  const ref = useRef(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 120, damping: 20 })
  const sy = useSpring(my, { stiffness: 120, damping: 20 })

  const rotateX = useTransform(sy, [-0.5, 0.5], [4, -4])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-4, 4])

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    const update = () => setParallaxEnabled(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const onMouseMove = (e) => {
    if (!parallaxEnabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(px)
    my.set(py)
  }

  const onMouseLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative ${className}`}
      style={{ perspective: 800 }}
    >
      {/* Blue accent shape behind the image */}
      <div
        aria-hidden="true"
        className="absolute -right-4 -top-4 hidden h-[85%] w-[85%] rounded-2xl bg-accent-500/15 sm:block"
        style={{ transform: 'rotate(3deg)' }}
      />
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card-hover dark:border-[#262626] dark:bg-surface-dark"
      >
        <img
          src={profile}
          alt="Portrait of Sumit Singh Bagdwal"
          width={640}
          height={800}
          loading="eager"
          className="aspect-[4/5] w-full select-none object-cover"
          draggable={false}
        />
        {/* Soft gradient overlay for depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
        />
      </motion.div>

      {/* Floating developer detail card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute -bottom-6 left-3 flex max-w-[calc(100%-1.5rem)] items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-card-hover dark:border-[#2a2a2a] dark:bg-surface-dark sm:-left-8 sm:max-w-none"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
          <Code2 className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-ink-900 dark:text-white">
            Software Developer
          </span>
          <span className="flex items-center gap-1 text-xs text-ink-gray dark:text-neutral-400">
            B.Tech CSE · GEHU Bhimtal
          </span>
        </span>
      </motion.div>

      {/* Graduation accent badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65, duration: 0.4 }}
        className="absolute right-3 top-3 hidden items-center gap-1.5 rounded-full border border-neutral-200 bg-white/90 px-3 py-1.5 text-xs font-medium text-ink-800 shadow-card backdrop-blur dark:border-[#2a2a2a] dark:bg-black/60 dark:text-neutral-200 sm:flex"
      >
        <GraduationCap className="h-3.5 w-3.5 text-accent-600 dark:text-accent-400" aria-hidden="true" />
        Class of 2028
      </motion.div>
    </div>
  )
}
