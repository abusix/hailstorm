import type { ReactNode } from 'react'

export interface MultiComboboxResultsTextProps {
  children: ReactNode
}

export const MultiComboboxResultsText = ({
  children,
}: MultiComboboxResultsTextProps) => {
  return <div className='paragraph-100'>{children}</div>
}
