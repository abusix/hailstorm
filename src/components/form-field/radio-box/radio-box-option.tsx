import { Radio as HeadlessUiRadio } from '@headlessui/react'
import { Fragment } from 'react'
import type { ReactNode } from 'react'
import { classNames } from '../../../util/class-names'

export interface RadioBoxOptionProps {
  children: ReactNode
  value: string
  disabled?: boolean
  className?: string
}

const radioBoxContainerStyles = {
  base: 'group relative flex items-center gap-3 rounded-lg bg-neutral-0 border p-4 border-neutral-300 hover:border-primary-600 hover:bg-primary-50 cursor-pointer focus:outline-hidden data-focus:outline-2 data-focus:outline-primary-200',
  checked:
    'border-primary-600 bg-primary-600 hover:bg-primary-600 hover:text-neutral-0',
  disabled:
    'bg-neutral-100 group-hover:border-neutral-300 group-hover:bg-neutral-100 hover:border-neutral-300 hover:bg-neutral-100 cursor-not-allowed',
}

const radioBoxCircleStyles = {
  base: 'relative inline-block h-4 w-4 shrink-0 rounded-full bg-neutral-0 border border-neutral-300',
  unchecked: 'group-hover:border-primary-600 group-hover:bg-neutral-0',
  checked: 'border-transparent',
  disabled:
    'bg-neutral-200 border-neutral-200 group-hover:border-neutral-200 group-hover:bg-neutral-200',
}

const Title = ({ children }: { children: ReactNode }) => (
  <h2 className='headline-500 group-[.is-checked]:text-neutral-0 text-neutral-900 group-[.is-disabled]:text-neutral-500'>
    {children}
  </h2>
)

const Description = ({ children }: { children: ReactNode }) => (
  <p className='paragraph-200 group-[.is-checked]:text-neutral-0 text-neutral-800 group-[.is-disabled]:text-neutral-500'>
    {children}
  </p>
)

export const RadioBoxOption = ({
  children,
  value,
  disabled,
  className,
}: RadioBoxOptionProps) => {
  return (
    <HeadlessUiRadio value={value} disabled={disabled} as={Fragment}>
      {({ checked, disabled: optionDisabled }) => (
        <div
          className={classNames(
            radioBoxContainerStyles.base,
            checked &&
              classNames('is-checked', radioBoxContainerStyles.checked),
            optionDisabled &&
              classNames('is-disabled', radioBoxContainerStyles.disabled),
          )}
        >
          <div
            className={classNames(
              radioBoxCircleStyles.base,
              !checked && radioBoxCircleStyles.unchecked,
              checked && radioBoxCircleStyles.checked,
              optionDisabled && radioBoxCircleStyles.disabled,
            )}
          >
            {checked && (
              <div
                className={classNames(
                  'bg-primary-600 absolute inset-0 m-auto block h-2 w-2 rounded-full',
                  optionDisabled && 'bg-neutral-500',
                )}
              />
            )}
          </div>

          <div className={classNames('flex flex-col', className)}>
            {children}
          </div>
        </div>
      )}
    </HeadlessUiRadio>
  )
}

RadioBoxOption.Title = Title
RadioBoxOption.Description = Description
