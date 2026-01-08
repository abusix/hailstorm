import type { ReactNode } from 'react'
import { Combobox as HeadlessUiCombobox } from '@headlessui/react'
import { MultiComboboxCustomOption } from './multi-combobox-custom-option'
import { MultiComboboxEmptyOption } from './multi-combobox-empty-option'
import { MultiComboboxInput } from './multi-combobox-input'
import { MultiComboboxOption } from './multi-combobox-option'
import { MultiComboboxOptions } from './multi-combobox-options'
import { MultiComboboxResults } from './multi-combobox-results'

export interface MultiComboboxProps<TValue> {
  value: TValue[]
  onChange: (value: TValue[]) => void
  children: ReactNode
}

const MultiCombobox = <TValue,>({
  value,
  onChange,
  children,
}: MultiComboboxProps<TValue>) => {
  return (
    <HeadlessUiCombobox multiple value={value} onChange={onChange}>
      <div className='relative'>{children}</div>
    </HeadlessUiCombobox>
  )
}

MultiCombobox.Input = MultiComboboxInput
MultiCombobox.Options = MultiComboboxOptions
MultiCombobox.Option = MultiComboboxOption
MultiCombobox.CustomOption = MultiComboboxCustomOption
MultiCombobox.EmptyOption = MultiComboboxEmptyOption
MultiCombobox.Results = MultiComboboxResults

export { MultiCombobox }
