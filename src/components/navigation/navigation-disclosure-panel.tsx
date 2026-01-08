import type { ComponentPropsWithoutRef } from 'react'
import { ReactNode } from 'react'
import { DisclosurePanel as HeadlessUiDisclosurePanel } from '@headlessui/react'
import { classNames } from '../../util/class-names'

export interface NavigationDisclosurePanelItemProps extends ComponentPropsWithoutRef<'div'> {
  isActive?: boolean
  /**
   * Give this navigation item extra indentation of width consistent with the `LeftIcon` of a `NavigationGroup`.
   * This should be used if the parent has an icon and the child item does not to make the margins consistent.
   * i.e. the child item intents on the text of the parent item, not the icon.
   */
  isIndented?: boolean
}

const NavigationDisclosurePanelItem = ({
  children,
  isActive,
  isIndented,
  ...props
}: NavigationDisclosurePanelItemProps) => {
  return (
    <div
      className={classNames(
        'text-neutral-0 hover:bg-primary-900-plus-10 relative w-full cursor-pointer py-3 pr-1 pl-8 text-left text-sm',
        isIndented && 'pl-14',
        isActive &&
          'bg-primary-900-plus-20 hover:bg-primary-900-plus-20 font-semibold',
      )}
      {...props}
    >
      {children}
      {isActive && (
        <div className='bg-neutral-0 absolute top-0 bottom-0 left-0 h-full w-0.5 rounded-r-sm' />
      )}
    </div>
  )
}

export interface NavigationDisclosurePanelProps {
  children: ReactNode
}

const NavigationDisclosurePanel = ({
  children,
}: NavigationDisclosurePanelProps) => {
  return <HeadlessUiDisclosurePanel>{children}</HeadlessUiDisclosurePanel>
}

NavigationDisclosurePanel.Item = NavigationDisclosurePanelItem

export { NavigationDisclosurePanel }
