import type { ReactNode } from 'react'
import { ListboxButton as HeadlessUiListboxButton } from '@headlessui/react'
import { CaretDownIcon } from '../../../icons'
import { classNames } from '../../../util/class-names'
import { ListboxButtonBadgeValue } from './listbox-button-badge-value'
import { ListboxButtonTextValue } from './listbox-button-text-value'

export interface ListboxButtonProps {
  children: ReactNode
  disabled?: boolean
}

const ListboxButton = ({ children, disabled }: ListboxButtonProps) => {
  return (
    <HeadlessUiListboxButton
      disabled={disabled}
      className={classNames(
        'group bg-neutral-0 focus:border-primary-400 focus:ring-primary-200 flex h-8 w-full cursor-pointer items-center rounded-sm border border-neutral-400 py-2 pr-8 pl-3 outline-hidden hover:border-neutral-600 focus:ring-2',
        disabled &&
          'cursor-not-allowed border-neutral-300 bg-neutral-100 text-neutral-600 hover:border-neutral-300',
      )}
    >
      {children}

      <div className='absolute inset-y-0 right-0 flex items-center px-1.5'>
        <div className='flex h-5 w-5 items-center justify-center rounded-sm rounded-r-md bg-neutral-100 focus:outline-hidden'>
          <CaretDownIcon
            className='h-3 w-3 fill-neutral-600'
            aria-hidden='true'
          />
        </div>
      </div>
    </HeadlessUiListboxButton>
  )
}

ListboxButton.BadgeValue = ListboxButtonBadgeValue
ListboxButton.TextValue = ListboxButtonTextValue

export { ListboxButton }
