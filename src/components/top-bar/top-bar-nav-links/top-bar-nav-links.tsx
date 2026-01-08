import type { ReactNode } from 'react'

export interface TopBarNavLinksProps {
  children: ReactNode
}

export const TopBarNavLinks = ({ children }: TopBarNavLinksProps) => {
  return <div className='flex grow gap-12 pr-6 pl-20'>{children}</div>
}
