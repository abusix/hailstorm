import type { ElementType, ComponentPropsWithoutRef } from 'react'
import { ReactNode } from 'react'
import { classNames } from '../../util/class-names'
import {
  ErrorIcon,
  InfoSignIcon,
  TickCircleIcon,
  WarningSignIcon,
} from '../../icons'

export type AlertIntent = 'success' | 'info' | 'warning' | 'danger'

const alertVariants: Record<AlertIntent, string> = {
  info: 'border-primary-400 bg-primary-50 text-primary-600',
  danger: 'border-danger-400 bg-danger-50 text-danger-500',
  warning: 'border-warning-500 bg-warning-50 text-warning-600',
  success: 'border-success-400 bg-success-50 text-success-500',
}

const iconVariants: Record<AlertIntent, string> = {
  info: 'fill-primary-500',
  danger: 'fill-danger-400',
  success: 'fill-success-400',
  warning: 'fill-warning-500',
}

const iconNames: Record<AlertIntent, ElementType> = {
  info: InfoSignIcon,
  success: TickCircleIcon,
  warning: WarningSignIcon,
  danger: ErrorIcon,
}

export interface AlertProps extends ComponentPropsWithoutRef<'div'> {
  title: string
  intent: AlertIntent
  children?: ReactNode
}

export const Alert = ({
  title,
  children,
  intent,
  className,
  ...props
}: AlertProps) => {
  const Icon = iconNames[intent]

  return (
    <div
      role='alert'
      className={classNames(
        'flex flex-row gap-4 rounded-lg border px-4 py-3 text-neutral-800',
        alertVariants[intent],
        className,
      )}
      {...props}
    >
      <Icon className={classNames('h-4 w-4 shrink-0', iconVariants[intent])} />
      <div className='grow'>
        <div className='text-sm font-medium'>{title}</div>
        {children && (
          <div className='pt-1 text-sm text-neutral-800'>{children}</div>
        )}
      </div>
    </div>
  )
}
