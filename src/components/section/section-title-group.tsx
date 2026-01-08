import type { ReactNode } from 'react'

export interface SectionTitleGroupProps {
  children: ReactNode
}

export const SectionTitleGroup = ({ children }: SectionTitleGroupProps) => {
  return <div className='flex flex-col gap-2'>{children}</div>
}
