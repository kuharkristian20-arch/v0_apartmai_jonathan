import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4169E1]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-[#1a2234] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-lg font-light leading-relaxed text-[#475569]">
          {description}
        </p>
      )}
    </div>
  )
}
