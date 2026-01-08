import { classNames } from '../../util/class-names'
import { Spinner } from '../spinner/spinner'

interface SpinnerOverlayProps {
  size?: 'small' | 'medium' | 'large'
  opacity?: number
  className?: string
}

export const SpinnerOverlay = ({
  size = 'medium',
  opacity = 0.5,
  className,
}: SpinnerOverlayProps) => {
  return (
    <div
      className={classNames(
        'bg-neutral-0 absolute top-0 right-0 bottom-0 left-0 z-10 flex items-center justify-center',
        className,
      )}
      style={{ opacity }}
    >
      <Spinner size={size} />
    </div>
  )
}
