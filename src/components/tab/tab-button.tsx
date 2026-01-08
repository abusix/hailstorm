import type { ElementType, ComponentPropsWithoutRef } from 'react'
import { ReactNode } from 'react'
import {
  Tab as HeadlessUiTab,
  TabProps as HeadlessUiTabProps,
} from '@headlessui/react'
import { classNames } from '../../util/class-names'
import { TabType, useTabContext } from './tab-context'

export interface TabButtonProps<
  TTag extends ElementType,
> extends HeadlessUiTabProps<ElementType> {
  children: ReactNode
  as?: TTag
  hasIndicator?: boolean
}

const buttonVariants: Record<TabType, string> = {
  primary:
    'relative whitespace-nowrap focus:ring-2 ring:primary-200 hover:ui-not-selected:text-neutral-800 ui-not-selected:after:hidden ui-selected:after:absolute ui-selected:after:left-0 ui-selected:after:right-0 ui-selected:after:-bottom-2 ui-selected:after:block ui-selected:after:h-0.5 ui-selected:after:bg-primary-500 ui-selected:disabled:after:bg-primary-500 disabled:text-neutral-500',
  secondary:
    'px-4 py-2 ui-not-selected:bg-transparent hover:ui-not-selected:text-neutral-800 focus:ring-2 ring:primary-200 hover:ui-not-selected:bg-neutral-100 ui-selected:text-primary-500 ui-selected:bg-primary-100 disabled:text-neutral-500',
}

export const TabButton = <TTag extends ElementType>({
  children,
  hasIndicator = false,
  ...props
}: TabButtonProps<TTag> &
  Omit<ComponentPropsWithoutRef<TTag>, keyof TabButtonProps<TTag>>) => {
  const { type } = useTabContext()

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading, @typescript-eslint/no-explicit-any
    <HeadlessUiTab {...(props as any)} className='focus-visible:outline-hidden'>
      <div
        className={classNames(
          'ui-selected:text-primary-500 ui-not-selected:text-neutral-700 rounded-sm text-xs font-medium outline-hidden',
          buttonVariants[type],
        )}
      >
        <div className='flex items-center gap-2'>
          {children}
          {hasIndicator && (
            <div className='bg-danger-500 h-2 w-2 rounded-full' />
          )}
        </div>
      </div>
    </HeadlessUiTab>
  )
}
