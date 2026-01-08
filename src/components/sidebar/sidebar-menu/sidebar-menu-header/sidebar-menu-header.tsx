import type { ReactNode } from 'react'

export interface SidebarMenuHeaderProps {
  children: ReactNode
}

export const SidebarMenuHeader = ({ children }: SidebarMenuHeaderProps) => {
  return (
    <h3 className='px-4 py-2 text-[0.7rem] font-semibold text-neutral-700 uppercase'>
      {children}
    </h3>
  )
}
