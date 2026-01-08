import type { ReactNode } from 'react'
import { Radio as HeadlessUiRadio } from '@headlessui/react'
import { classNames } from '../../../util/class-names'

export interface RadioInputOptionProps {
  children: ReactNode
  value: string
  disabled?: boolean
}

export const RadioInputOption = ({
  children,
  value,
  disabled,
}: RadioInputOptionProps) => {
  return (
    <HeadlessUiRadio
      value={value}
      className='max-w-fit cursor-pointer focus:outline-hidden'
      disabled={disabled}
    >
      {({ checked, disabled: optionDisabled }) => (
        <div className='flex items-center gap-3'>
          {checked ?
            <span
              className={classNames(
                'bg-primary-400 hover:bg-primary-500 active:bg-primary-600 relative inline-block h-4 w-4 rounded-full',
                optionDisabled &&
                  'bg-neutral-100 hover:bg-neutral-100 active:bg-neutral-100',
              )}
            >
              <span
                className={classNames(
                  'bg-neutral-0 absolute inset-0 m-auto block h-2 w-2 rounded-full',
                  optionDisabled && 'bg-neutral-500',
                )}
              />
            </span>
          : <span
              className={classNames(
                'inline-block h-4 w-4 rounded-full border border-neutral-400 hover:border-neutral-600 active:border-neutral-500 active:bg-neutral-100',
                optionDisabled && 'border-0 bg-neutral-100',
              )}
            />
          }
          <p
            className={classNames(
              'paragraph-200',
              optionDisabled && 'text-neutral-600',
            )}
          >
            {children}
          </p>
        </div>
      )}
    </HeadlessUiRadio>
  )
}
