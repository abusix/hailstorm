import type { ComponentPropsWithoutRef } from 'react'
import { ReactNode } from 'react'
import { classNames } from '../../util/class-names'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode
  type: 'button' | 'submit' | 'reset'
  isActive?: boolean
}

const Button = ({ children, type, isActive, ...props }: ButtonProps) => {
  return (
    <button
      data-slot='group-button'
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classNames(
        'bg-neutral-0 focus:outline-primary-200 disabled:bg-neutral-0 relative -ml-px inline-flex px-4 py-2 font-medium text-neutral-700 ring-1 ring-neutral-400 ring-inset hover:bg-neutral-100 hover:text-neutral-800 focus:z-10 focus:outline-2 focus:outline-offset-0 focus:outline-solid active:bg-neutral-200 disabled:text-neutral-500',
        isActive &&
          'bg-primary-50 text-primary-500 hover:bg-primary-50 hover:text-primary-500 active:bg-primary-50 disabled:bg-neutral-100 disabled:text-neutral-500',
      )}
      {...props}
    >
      {children}
    </button>
  )
}

interface ButtonGroupProps {
  children?: ReactNode
}

const ButtonGroup = ({ children }: ButtonGroupProps) => {
  return (
    <div className='isolate inline-flex [&>[data-slot=group-button]:first-of-type]:ml-0 [&>[data-slot=group-button]:first-of-type]:rounded-l [&>[data-slot=group-button]:last-of-type]:rounded-r'>
      {children}
    </div>
  )
}

ButtonGroup.Button = Button

export { ButtonGroup }
