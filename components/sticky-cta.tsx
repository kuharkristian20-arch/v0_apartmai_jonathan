'use client'

import { useEffect, useState } from 'react'
import { BookButton } from '@/components/book-button'

/**
 * Mobile-only sticky booking bar. Appears after the user scrolls past the hero.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.9)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 p-4 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <BookButton location="sticky" size="lg" className="w-full" />
    </div>
  )
}
