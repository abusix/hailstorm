import type { ReactNode } from 'react'

export interface PageDescriptionProps {
  children: ReactNode
}

export const PageDescription = ({ children }: PageDescriptionProps) => {
  return <p className='paragraph-200 text-neutral-800'>{children}</p>
}
