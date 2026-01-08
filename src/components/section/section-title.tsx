import type { ReactNode } from 'react'

export interface SectionTitleProps {
  children: ReactNode
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return <h4 className='headline-500 text-neutral-900'>{children}</h4>
}
