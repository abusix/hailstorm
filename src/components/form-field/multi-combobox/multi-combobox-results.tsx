import type { ReactNode } from 'react'
import { MultiComboboxResultsBadges } from './multi-combobox-results-badges'
import { MultiComboboxResultsLabel } from './multi-combobox-results-label'
import { MultiComboboxResultsTags } from './multi-combobox-results-tags'
import { MultiComboboxResultsText } from './multi-combobox-results-text'

export interface MultiComboboxResultsProps {
  children: ReactNode
}

const MultiComboboxResults = ({ children }: MultiComboboxResultsProps) => {
  return <div className='flex flex-col gap-2'>{children}</div>
}

MultiComboboxResults.Label = MultiComboboxResultsLabel
MultiComboboxResults.Text = MultiComboboxResultsText
MultiComboboxResults.Badges = MultiComboboxResultsBadges
MultiComboboxResults.Tags = MultiComboboxResultsTags

export { MultiComboboxResults }
