import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { ReactNode } from 'react'
import { classNames } from '../../util/class-names'
import { NavigationGroupItemTag } from './navigation-group-item-tag'

export interface NavigationGroupItemProps extends ComponentPropsWithoutRef<'div'> {
  isActive?: boolean
  LeftIcon?: ElementType
  tag?: string
}

const NavigationGroupItem = ({
  children,
  isActive,
  LeftIcon,
  tag,
  ...props
}: NavigationGroupItemProps) => {
  return (
    <div
      className={classNames(
        'text-neutral-0 hover:bg-primary-900-plus-10 relative flex cursor-pointer items-center gap-x-2 px-4 py-3 text-sm',
        isActive &&
          'bg-primary-900-plus-20 hover:bg-primary-900-plus-20 font-semibold',
      )}
      {...props}
    >
      {LeftIcon ?
        <LeftIcon className='h-4 w-4' />
      : null}
      {children}
      {tag ?
        <NavigationGroupItemTag>{tag}</NavigationGroupItemTag>
      : null}
      {isActive && (
        <div className='bg-neutral-0 absolute top-0 bottom-0 left-0 h-full w-0.5 rounded-r-sm' />
      )}
    </div>
  )
}

const NavigationGroup = ({ children }: { children: ReactNode }) => {
  return <div className='pt-4'>{children}</div>
}

NavigationGroup.Item = NavigationGroupItem

export { NavigationGroup }
