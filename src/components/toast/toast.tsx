import type { ElementType } from 'react'
import { ReactNode } from 'react'
import {
  CrossIcon,
  ErrorIcon,
  InfoSignIcon,
  TickCircleIcon,
  WarningSignIcon,
} from '../../icons'
import { classNames } from '../../util/class-names'

const toastVariants = {
  info: 'border-primary-400 bg-primary-50 text-primary-600',
  danger: 'border-danger-400 bg-danger-50 text-danger-500',
  warning: 'border-warning-500 bg-warning-50 text-warning-600',
  success: 'border-success-400 bg-success-50 text-success-500',
}

export type ToastIntent = keyof typeof toastVariants

const iconNames: Record<ToastIntent, ElementType> = {
  info: InfoSignIcon,
  success: TickCircleIcon,
  warning: WarningSignIcon,
  danger: ErrorIcon,
}

const iconVariants: Record<ToastIntent, string> = {
  info: 'fill-primary-500',
  danger: 'fill-danger-400',
  success: 'fill-success-400',
  warning: 'fill-warning-500',
}

const closeButtonVariants: Record<ToastIntent, string> = {
  info: 'hover:bg-primary-200 active:bg-primary-300 fill-primary-500',
  danger: 'hover:bg-danger-100 active:bg-danger-200 fill-danger-500',
  success: 'hover:bg-success-200 active:bg-success-300 fill-success-500',
  warning: 'hover:bg-warning-100 active:bg-warning-200 fill-warning-500',
}

export interface ToastProps {
  title: string
  intent: ToastIntent
  isClosable?: boolean
  children: ReactNode
  onClose: () => void
}

export const Toast = ({
  title,
  intent,
  children,
  onClose,
  isClosable = true,
}: ToastProps) => {
  const Icon = iconNames[intent]

  return (
    <div
      role='alert'
      className={classNames(
        'relative flex flex-row gap-4 rounded-lg border px-4 py-3 pt-4.5 text-neutral-800',
        isClosable && 'pr-14',
        toastVariants[intent],
      )}
    >
      <div className='pt-0.5'>
        <Icon className={classNames(iconVariants[intent], 'h-3 w-3')} />
      </div>

      {isClosable ?
        <div className='absolute top-0 right-0 pt-2 pr-4 sm:block'>
          <button
            type='button'
            className={classNames(
              'rounded-sm p-1',
              closeButtonVariants[intent],
            )}
            onClick={onClose}
          >
            <CrossIcon name='cross' aria-label='close' className='h-3 w-3' />
          </button>
        </div>
      : null}

      <div>
        <div className='text-sm font-medium'>{title}</div>

        {children ?
          <div className='w-full pt-1 text-sm text-neutral-800'>{children}</div>
        : null}
      </div>
    </div>
  )
}
