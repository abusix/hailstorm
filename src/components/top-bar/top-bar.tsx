import type { ReactNode } from 'react'
import { TopBarLogo } from './top-bar-logo/top-bar-logo'
import { TopBarNavLinks } from './top-bar-nav-links/top-bar-nav-links'
import { TopBarNavLink } from './top-bar-nav-links/top-bar-nav-link'
import { TopBarAvatarButton } from './top-bar-avatar-button/top-bar-avatar-button'
import { TrayButtons } from './top-bar-tray-buttons/top-bar-try-buttons'
import { TrayButton } from './top-bar-tray-buttons/top-bar-tray-button'
import { TopBarHelpButton } from './top-bar-help-button/top-bar-help-button'

interface TopBarProps {
  children: ReactNode
}

const TopBar = ({ children }: TopBarProps) => {
  return (
    <div className='bg-abusix-dusk flex h-12 min-w-[1024px] items-center justify-between px-4'>
      {children}
    </div>
  )
}

TopBar.TrayButtons = TrayButtons
TopBar.TrayButton = TrayButton
TopBar.Logo = TopBarLogo
TopBar.NavLinks = TopBarNavLinks
TopBar.NavLink = TopBarNavLink
TopBar.AvatarButton = TopBarAvatarButton
TopBar.HelpButton = TopBarHelpButton

export { TopBar }
