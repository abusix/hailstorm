import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { useRef } from 'react'
import { classNames } from '../../../util/class-names'

const targetAttachmentIdentifier = 'target-field'

// note: these strings need to be static,
// template literals aren’t recognized by tailwind,
// so we can’t use ${targetAttachmentIdentifier} here
const formFieldGroupStyles = classNames(
  // first element
  `[.group.form-field-group_&:first-child_.target-field]:rounded-r-none [.group.form-field-group_&:first-child_.target-field]:border-r-0`,
  // elements in between
  `[.group.form-field-group_&:not(:first-child):not(:last-child)_.target-field]:rounded-none [.group.form-field-group_&:not(:first-child):not(:last-child)_.target-field]:border-r-0`,
  // last element
  `[.group.form-field-group_&:last-child_.target-field]:border-l [.group.form-field-group_&:last-child_.target-field]:rounded-l-none`,
)

export interface TextInputProps extends ComponentPropsWithoutRef<'input'> {
  type?: 'text' | 'password' | 'email' | 'date' | 'datetime-local'
  autoSelect?: boolean
  ariaDescribedBy?: string
  LeftIcon?: ElementType
  error?: boolean
}

export const TextInput = ({
  ariaDescribedBy,
  type = 'text',
  LeftIcon,
  readOnly,
  autoSelect,
  error,
  disabled,
  className,
  ...props
}: TextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAutoSelection = () => {
    if (autoSelect && inputRef.current) {
      inputRef.current.select()
    }
  }

  return (
    <div className={classNames('relative w-full', formFieldGroupStyles)}>
      {LeftIcon ?
        <div
          className='pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-3'
          aria-hidden='true'
        >
          <LeftIcon className='h-3.5 w-3.5 fill-neutral-600 text-gray-400' />
        </div>
      : null}

      <input
        ref={inputRef}
        aria-describedby={ariaDescribedBy}
        onMouseOver={handleAutoSelection}
        onFocus={handleAutoSelection}
        onClick={handleAutoSelection}
        type={type}
        className={classNames(
          targetAttachmentIdentifier,
          'paragraph-100 relative block h-8 w-full rounded-sm border border-neutral-400 py-2 pr-2 pl-3 text-neutral-800 placeholder:text-neutral-600 focus:outline-hidden',
          LeftIcon && 'pl-9',
          readOnly && 'bg-primary-50',
          disabled && 'cursor-not-allowed bg-neutral-100 text-neutral-600',
          !error &&
            !disabled &&
            'focus:border-primary-400 focus:ring-primary-200 hover:border-neutral-600 focus:ring-2',
          error && !disabled && 'border-danger-500',
          className,
        )}
        readOnly={readOnly}
        disabled={disabled}
        {...props}
      />
    </div>
  )
}
