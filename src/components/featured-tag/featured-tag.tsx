import { ReactNode } from 'react'
import { classNames } from '../../util/class-names'

interface FeaturedTagProps {
  children: ReactNode
  className?: string
}

export const FeaturedTag = ({ children, className }: FeaturedTagProps) => {
  return (
    <span
      className={classNames(
        'border-primary-600 bg-primary-50 text-primary-600 absolute top-0 right-4 z-10 -translate-y-1/2 rounded-sm border px-1 text-xs font-medium tracking-wide uppercase',
        className,
      )}
    >
      {children}
    </span>
  )
}
