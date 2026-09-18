'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li'
}

/**
 * Fades/rises content into view on scroll.
 * Honors prefers-reduced-motion by rendering content immediately with no transform.
 */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    if (mq.matches) {
      setVisible(true)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Comp = as

  return (
    <Comp
      // @ts-expect-error — ref type varies by element, safe at runtime
      ref={ref}
      className={cn(
        !reduced && 'transition-all duration-700 ease-out will-change-transform',
        !reduced && !visible && 'translate-y-6 opacity-0',
        !reduced && visible && 'translate-y-0 opacity-100',
        className,
      )}
      style={!reduced ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Comp>
  )
}
