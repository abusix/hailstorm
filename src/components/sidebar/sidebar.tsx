import type { ReactNode } from 'react'
import { SidebarHeader } from './sidebar-header/sidebar-header'
import { SidebarMenu } from './sidebar-menu/sidebar-menu'
import { SidebarMenuHeader } from './sidebar-menu/sidebar-menu-header/sidebar-menu-header'
import { SidebarMenuLink } from './sidebar-menu/sidebar-menu-link/sidebar-menu-link'

interface SidebarProps {
  children: ReactNode
}
const Sidebar = ({ children }: SidebarProps) => {
  return <div className='flex min-w-52 flex-col gap-5 py-5'>{children}</div>
}

Sidebar.Header = SidebarHeader
Sidebar.Menu = SidebarMenu
Sidebar.MenuHeader = SidebarMenuHeader
Sidebar.MenuLink = SidebarMenuLink

export { Sidebar }
