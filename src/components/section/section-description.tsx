import type { ReactNode } from 'react'

export interface DescriptionProps {
  children: ReactNode
}

export const SectionDescription = ({ children }: DescriptionProps) => {
  return <p className='paragraph-200 text-neutral-800'>{children}</p>
}
