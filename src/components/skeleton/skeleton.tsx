import { classNames } from '../../util/class-names'

export interface SkeletonProps {
  className?: string
  isAnimated?: boolean
}

export const Skeleton = ({ className, isAnimated = false }: SkeletonProps) => {
  return (
    <span
      className={classNames(
        'block rounded-xs bg-neutral-100',
        isAnimated && 'animate-pulse',
        className,
      )}
    />
  )
}
