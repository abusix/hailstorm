import type { MouseEventHandler, ReactNode } from 'react'
import { classNames } from '../../util/class-names'
import { SmallCrossIcon } from '../../icons'

interface TagProps {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

export const Tag = ({ children, onClick, disabled }: TagProps) => {
  return (
    <div
      className={classNames(
        'flex items-center rounded-sm bg-neutral-200 px-2 py-1 text-neutral-800',
        disabled && 'bg-neutral-100 text-neutral-500',
      )}
    >
      <div className='paragraph-100'>{children}</div>
      {onClick ?
        <button
          type='button'
          aria-label='Remove tag'
          onClick={onClick}
          disabled={disabled}
        >
          <SmallCrossIcon
            className={classNames(
              'h-3 w-3 fill-neutral-800',
              disabled && 'fill-neutral-500',
            )}
          />
        </button>
      : null}
    </div>
  )
}
