import type { ReactNode } from 'react'

export interface MultiComboboxResultsBadgesProps {
  children: ReactNode
}

export const MultiComboboxResultsBadges = ({
  children,
}: MultiComboboxResultsBadgesProps) => {
  return <div className='flex flex-wrap gap-2'>{children}</div>
}
