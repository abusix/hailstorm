import type { ReactNode } from 'react'
import { Combobox as HeadlessUiCombobox } from '@headlessui/react'
import { SingleComboboxCustomOption } from './single-combobox-custom-option'
import { SingleComboboxEmptyOption } from './single-combobox-empty-option'
import { SingleComboboxInput } from './single-combobox-input'
import { SingleComboboxOptions } from './single-combobox-options'
import { SingleComboboxResultInput } from './single-combobox-result-input'
import { SingleComboboxOption } from './single-combobox.option'

export interface SingleComboboxProps<TValue> {
  value?: TValue | null
  onChange: (value: TValue | null) => void
  children: ReactNode
  disabled?: boolean
}

const SingleCombobox = <TValue,>({
  value,
  onChange,
  children,
  disabled,
}: SingleComboboxProps<TValue>) => {
  return (
    <HeadlessUiCombobox value={value} onChange={onChange} disabled={disabled}>
      <div className='relative'>{children}</div>
    </HeadlessUiCombobox>
  )
}

SingleCombobox.Input = SingleComboboxInput
SingleCombobox.ResultInput = SingleComboboxResultInput
SingleCombobox.Options = SingleComboboxOptions
SingleCombobox.Option = SingleComboboxOption
SingleCombobox.EmptyOption = SingleComboboxEmptyOption
SingleCombobox.CustomOption = SingleComboboxCustomOption

export { SingleCombobox }
