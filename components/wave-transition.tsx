import { cn } from '@/lib/utils'

type WaveTransitionProps = {
  /** Direction of the wave: white → sea-blue or sea-blue → white */
  from: 'white' | 'sea'
  className?: string
}

/**
 * Smooth SVG wave transition between white and sea-blue sections.
 * Uses negative margin to overlap the preceding section so there's
 * no gap or sharp border between them.
 */
export function WaveTransition({ from, className }: WaveTransitionProps) {
  const topColor = from === 'white' ? '#ffffff' : '#C8E6F5'
  const bottomColor = from === 'white' ? '#C8E6F5' : '#ffffff'

  return (
    <div
      className={cn('relative -mt-px w-full overflow-hidden leading-none', className)}
      style={{ backgroundColor: bottomColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block h-14 w-full sm:h-16 lg:h-20"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
          fill={topColor}
        />
      </svg>
    </div>
  )
}
