'use client'

import { useEffect, useState } from 'react'
import { BookButton } from '@/components/book-button'

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
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-slate-100 bg-white/95 p-3 shadow-lg backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <BookButton location="sticky" size="lg" className="w-full" showIcon={false} />
    </div>
  )
}
