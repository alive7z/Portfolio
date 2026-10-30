import { useEffect, useRef } from 'react'

const dialogs = []
let previousOverflow = ''
const focusable = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex="0"]'

export function useDialog(open, onClose, containerRef, initialFocusRef) {
  const closeRef = useRef(onClose)
  closeRef.current = onClose

  useEffect(() => {
    if (!open) return
    const token = Symbol('dialog')
    const trigger = document.activeElement
    if (!dialogs.length) {
      previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    }
    dialogs.push(token)
    const frame = requestAnimationFrame(() => {
      const target = initialFocusRef?.current || containerRef.current?.querySelector(focusable)
      target?.focus({ preventScroll: true })
    })

    const onKey = (event) => {
      if (dialogs[dialogs.length - 1] !== token) return
      if (event.key === 'Escape') {
        event.preventDefault()
        closeRef.current()
      }
      if (event.key !== 'Tab') return
      const elements = [...(containerRef.current?.querySelectorAll(focusable) || [])]
        .filter((element) => element.tabIndex >= 0 && element.getClientRects().length)
      const first = elements[0]
      const last = elements[elements.length - 1]
      if (!first) { event.preventDefault(); return }
      const outside = !containerRef.current.contains(document.activeElement)
      if (event.shiftKey && (document.activeElement === first || outside)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (document.activeElement === last || outside)) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('keydown', onKey)
      const wasTop = dialogs[dialogs.length - 1] === token
      dialogs.splice(dialogs.indexOf(token), 1)
      if (!dialogs.length) document.body.style.overflow = previousOverflow
      if (wasTop && trigger?.isConnected) trigger.focus({ preventScroll: true })
    }
  }, [open, containerRef, initialFocusRef])
}
