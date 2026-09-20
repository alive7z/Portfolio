import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const VARIANTS = {
  primary: {
    base: 'inline-flex items-center justify-center gap-2 rounded-xl bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white shadow-blue-glow transition-colors hover:bg-accent-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600',
  },
  secondary: {
    base: 'inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 dark:border-[#303030] dark:bg-transparent dark:text-neutral-100 dark:hover:border-neutral-600 dark:hover:bg-neutral-900',
  },
  ghost: {
    base: 'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-ink-gray transition-colors hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400',
  },
}

export default function Button({
  variant = 'primary',
  href,
  icon: Icon,
  className = '',
  children,
  magnetic = false,
  target,
  rel,
  'aria-label': ariaLabel,
  onClick,
}) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 180, damping: 16, mass: 0.4 })
  const springY = useSpring(my, { stiffness: 180, damping: 16, mass: 0.4 })

  const onMove = (e) => {
    if (!magnetic || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    mx.set(dx * 0.18)
    my.set(dy * 0.18)
  }

  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  const classes = `${VARIANTS[variant].base} ${className}`
  const inner = (
    <>
      {children}
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
    </>
  )

  const motionProps = {
    ref,
    style: { x: springX, y: springY },
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    whileTap: { scale: 0.97 },
    rel,
  }

  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        target={target}
        aria-label={ariaLabel}
        onClick={onClick}
        className={classes}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.button
      {...motionProps}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={classes}
    >
      {inner}
    </motion.button>
  )
}