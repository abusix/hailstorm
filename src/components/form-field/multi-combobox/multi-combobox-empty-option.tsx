import type { ReactNode } from 'react'

export interface MultiComboboxEmptyOptionProps {
  children: ReactNode
}

export const MultiComboboxEmptyOption = ({
  children,
}: MultiComboboxEmptyOptionProps) => {
  return <div className='ui-selected:bg-primary-100 px-3 py-2'>{children}</div>
}
