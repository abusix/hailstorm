import type { ButtonHTMLAttributes, ElementType } from 'react'
import { classNames } from '../../util/class-names'

const iconButtonVariants = {
  primary:
    'bg-primary-500 text-neutral-0 hover:bg-primary-600 active:bg-primary-600 focus:ring-2 focus:ring-primary-200 focus:bg-primary-600 disabled:bg-primary-200 fill-neutral-0',
  secondary:
    'bg-neutral-0 text-neutral-600 border border-neutral-400 hover:border-neutral-600 hover:text-neutral-700 active:bg-neutral-100 active:text-neutral-700 focus:ring-2 focus:ring-primary-200 disabled:border-neutral-300 disabled:text-neutral-400 disabled:bg-neutral-0 fill-neutral-600',

  minimal:
    'text-neutral-600 hover:text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 active:text-neutral-700 focus:ring-2 focus:ring-primary-200 focus:bg-neutral-50 disabled:text-neutral-400 disabled:bg-transparent fill-neutral-600',

  danger:
    'bg-danger-500 text-neutral-0 hover:bg-danger-600 active:bg-danger-700 focus:ring-2 focus:ring-danger-100 focus:bg-danger-600 disabled:bg-danger-100 fill-neutral-0',

  'danger-secondary':
    'bg-neutral-0 text-danger-500 border border-danger-500 hover:bg-danger-50 hover:text-danger-600 active:border-danger-700 active:text-danger-700 active:bg-danger-100 focus:ring-2 focus:ring-danger-100 focus:text-danger-600 disabled:border-danger-100 disabled:text-danger-100 disabled:bg-neutral-0 fill-danger-600',
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: ElementType
  variant?: keyof typeof iconButtonVariants
}

export const IconButton = ({
  Icon,
  variant = 'primary',
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type='button'
      className={classNames(
        `inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm focus:outline-hidden`,
        iconButtonVariants[variant],
        className,
      )}
      {...props}
    >
      <Icon className='h-3 w-3' />
    </button>
  )
}
