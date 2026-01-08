import type { ReactNode } from 'react'

export interface SidebarHeaderProps {
  children: ReactNode
}

export const SidebarHeader = ({ children }: SidebarHeaderProps) => {
  return <h2 className='font-display pl-4 text-2xl font-bold'>{children}</h2>
}
