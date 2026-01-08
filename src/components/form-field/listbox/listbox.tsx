import type { ReactNode } from 'react'
import { Listbox as HeadlessListbox } from '@headlessui/react'
import { ListboxOptions } from './listbox-options'
import { ListboxOption } from './listbox-option'
import { ListboxButton } from './listbox-button'
import { classNames } from '../../../util/class-names'

const formFieldGroupStyles = classNames(
  // first element
  '[.group.form-field-group_&:first-child_button]:rounded-r-none [.group.form-field-group_&:first-child_button]:border-r-0',
  // elements in between
  '[.group.form-field-group_&:not(:first-child):not(:last-child)_button]:rounded-none [.group.form-field-group_&:not(:first-child):not(:last-child)_button]:border-r-0',
  // last element
  '[.group.form-field-group_&:last-child_button]:rounded-l-none',
)

export interface ListboxProps<TValue> {
  children: ReactNode
  value: TValue
  onChange: (value: TValue) => void
  multiple?: boolean
  className?: string
}

const Listbox = <TValue,>({
  children,
  value,
  onChange,
  multiple,
  className,
}: ListboxProps<TValue>) => {
  return (
    <HeadlessListbox value={value} onChange={onChange} multiple={multiple}>
      <div
        className={classNames(
          'relative w-full',
          formFieldGroupStyles,
          className,
        )}
      >
        {children}
      </div>
    </HeadlessListbox>
  )
}

Listbox.Button = ListboxButton
Listbox.Options = ListboxOptions
Listbox.Option = ListboxOption

export { Listbox }
