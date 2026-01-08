import type { ReactNode } from 'react'

export interface TitleProps {
  children: ReactNode
}

export const PageTitle = ({ children }: TitleProps) => {
  return <h3 className='headline-700 text-black'>{children}</h3>
}
