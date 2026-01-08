import type { ReactNode } from 'react'

export interface MultiComboboxResultsLabelProps {
  children: ReactNode
}

export const MultiComboboxResultsLabel = ({
  children,
}: MultiComboboxResultsLabelProps) => {
  return <div className='paragraph-100 mt-2 text-neutral-900'>{children}</div>
}
