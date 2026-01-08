import type { ReactNode } from 'react'

export interface PopoverMenuGroupProps {
  children: ReactNode
}

export const PopoverMenuPanelGroup = ({ children }: PopoverMenuGroupProps) => {
  return <div className='flex flex-col'>{children}</div>
}
