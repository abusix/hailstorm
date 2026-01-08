import type { ReactNode } from 'react'
import { classNames } from '../../../util/class-names'

export interface TopBarNavLinkProps {
  isActive?: boolean
  children: ReactNode
}

export const TopBarNavLink = ({
  isActive = false,
  children,
}: TopBarNavLinkProps) => {
  return (
    <div>
      <div className='group group-focus:ring-primary-200 rounded-sm px-4 py-1 group-focus:ring-2 hover:bg-neutral-800'>
        <div
          className={classNames(
            'text-neutral-0 relative font-sans text-sm',
            isActive &&
              'after:bg-neutral-0 after:absolute after:top-7 after:right-0 after:left-0 after:block after:h-0.5',
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
