import type { ElementType } from 'react'
import { ReactNode } from 'react'
import { classNames } from '../../util/class-names'
import {
  ErrorIcon,
  InfoSignIcon,
  TickCircleIcon,
  WarningSignIcon,
} from '../../icons'

export type InlineAlertIntent = 'success' | 'info' | 'warning' | 'danger'

const titleVariants: Record<InlineAlertIntent, string> = {
  info: 'text-primary-600',
  danger: 'text-danger-500',
  success: 'text-success-500',
  warning: 'text-warning-600',
}

const iconVariants: Record<InlineAlertIntent, string> = {
  info: 'fill-primary-400',
  danger: 'fill-danger-400',
  success: 'fill-success-400',
  warning: 'fill-warning-500',
}

const iconNames: Record<InlineAlertIntent, ElementType> = {
  info: InfoSignIcon,
  success: TickCircleIcon,
  warning: WarningSignIcon,
  danger: ErrorIcon,
}

export interface InlineAlertProps {
  title: string
  className?: string
  intent: InlineAlertIntent
  children?: ReactNode
}

export const InlineAlert = ({
  title,
  className,
  children,
  intent = 'info',
}: InlineAlertProps) => {
  const Icon = iconNames[intent]
  const titleColor = titleVariants[intent]
  const iconColor = iconVariants[intent]

  return (
    <div className={classNames('flex w-full text-sm', className)}>
      <div className='mr-4 w-4 grow-0 pt-0.5'>
        <Icon className={iconColor} />
      </div>
      <div className='w-full'>
        <h1 className={classNames('font-medium', titleColor)}>{title}</h1>
        {children ?
          <div className='mt-2'>{children}</div>
        : null}
      </div>
    </div>
  )
}
