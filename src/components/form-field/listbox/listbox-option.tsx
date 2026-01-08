import { ListboxOption as HeadlessUiListboxOption } from '@headlessui/react'
import { Fragment } from 'react'
import type { ReactNode } from 'react'
import { classNames } from '../../../util/class-names'
import { ListboxBadgeOption } from './listbox-badge-option'
import { ListboxTextOption } from './listbox-text-option'

const listboxOptionStyles = {
  base: 'relative cursor-pointer px-3 py-2 ',
  selected:
    'bg-primary-100 text-primary-500 before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-[2px] before:rounded-r-md before:bg-primary-400',
  active: 'bg-neutral-50 bg-primary-100',
  disabled: 'cursor-not-allowed bg-neutral-50 text-neutral-400',
}

export interface ListboxOptionProps<TValue> {
  value: TValue
  children: ReactNode
  disabled?: boolean
}

const ListboxOption = <TValue,>({
  value,
  disabled,
  children,
}: ListboxOptionProps<TValue>) => {
  return (
    <HeadlessUiListboxOption value={value} as={Fragment} disabled={disabled}>
      {({ active, selected }) => (
        <li
          className={classNames(
            listboxOptionStyles.base,
            active && listboxOptionStyles.active,
            selected && listboxOptionStyles.selected,
            disabled && listboxOptionStyles.disabled,
          )}
        >
          {children}
        </li>
      )}
    </HeadlessUiListboxOption>
  )
}

ListboxOption.BadgeOption = ListboxBadgeOption
ListboxOption.TextOption = ListboxTextOption

export { ListboxOption }
