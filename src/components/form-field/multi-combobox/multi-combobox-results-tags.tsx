import type { ReactNode } from 'react'

export interface MultiComboboxResultsTagsProps {
  children: ReactNode
}

export const MultiComboboxResultsTags = ({
  children,
}: MultiComboboxResultsTagsProps) => {
  return <div className='flex flex-wrap gap-2'>{children}</div>
}
