import type { ReactNode } from 'react'

export interface SidebarMenuProps {
  children: ReactNode
}

export const SidebarMenu = ({ children }: SidebarMenuProps) => {
  return <div className='flex flex-col'>{children}</div>
}
