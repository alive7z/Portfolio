export default function TechBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-ink-gray transition-colors dark:border-[#2a2a2a] dark:bg-neutral-900 dark:text-neutral-300">
      {children}
    </span>
  )
}