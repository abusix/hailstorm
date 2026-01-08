import type { ReactNode } from 'react'
import { NavigationDisclosure } from './navigation-disclosure'
import { NavigationGroup } from './navigation-group'
import { NavigationPopover } from './navigation-popover'

export interface NavigationLogoProps {
  children: ReactNode
}

const NavigationLogo = ({ children }: NavigationLogoProps) => {
  return <div className='px-4 py-3'>{children}</div>
}

export interface NavigationProps {
  children: ReactNode
}

const Navigation = ({ children }: NavigationProps) => {
  return (
    <div className='bg-primary-900 flex w-[180px] grow flex-col overflow-y-auto pt-3 pb-5'>
      {children}
    </div>
  )
}

Navigation.Logo = NavigationLogo
Navigation.Group = NavigationGroup
Navigation.Disclosure = NavigationDisclosure
Navigation.Popover = NavigationPopover

export { Navigation }
