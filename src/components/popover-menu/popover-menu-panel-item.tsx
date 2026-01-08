import type { ComponentType } from 'react'
import { ReactNode } from 'react'
import { classNames } from '../../util/class-names'

const itemIntents = {
  neutral: 'text-neutral-700 fill-neutral-700 hover:bg-neutral-100',
  danger: 'text-danger-500 fill-danger-500 hover:bg-danger-50',
}

const selectedItemIntents = {
  neutral:
    'bg-primary-100 fill-primary-400 text-primary-400 before:bg-primary-400 hover:text-primary-400 hover:fill-primary-400 hover:bg-primary-100',
  danger:
    'bg-danger-100 fill-danger-700 text-danger-500 before:bg-danger-400 hover:text-danger-500 hover:fill-danger-400 hover:bg-danger-100',
}

export interface PopoverMenuPanelItemProps {
  children: ReactNode
  onClick?: () => void
  Icon?: ComponentType<{ className: string }>
  variant?: keyof typeof itemIntents
  selected?: boolean
  disabled?: boolean
}

export const PopoverMenuPanelItem = ({
  children,
  onClick,
  Icon,
  variant = 'neutral',
  selected,
  disabled,
}: PopoverMenuPanelItemProps) => {
  return (
    <div
      className={classNames(
        'focus:ring-primary-200 relative flex w-full cursor-pointer flex-row items-center gap-3 overflow-hidden px-4 py-2 text-sm font-normal focus:ring-2',
        itemIntents[variant],
        selected && selectedItemIntents[variant],
        selected &&
          'before:absolute before:top-0 before:left-0 before:h-full before:w-0.5 before:rounded-r-md',
        disabled &&
          'cursor-not-allowed bg-neutral-100 fill-neutral-400 text-neutral-500 hover:bg-neutral-100 hover:fill-neutral-400 hover:text-neutral-500 focus:ring-0',
      )}
      onClick={disabled ? undefined : onClick}
      onKeyDown={disabled ? undefined : onClick}
      role='menuitem'
      tabIndex={0}
    >
      {Icon && <Icon className={classNames('h-3.5 w-3.5')} />}
      {children}
    </div>
  )
}
