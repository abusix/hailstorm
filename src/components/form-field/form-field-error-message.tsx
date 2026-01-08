import type { ReactNode } from 'react'
import { WarningSignIcon } from '../../icons'

export interface FormFieldErrorMessageProps {
  children: ReactNode
}

export const FormFieldErrorMessage = ({
  children,
}: FormFieldErrorMessageProps) => {
  return (
    <div className='mt-0.5 flex items-center gap-1'>
      <WarningSignIcon className='fill-danger-500 h-3 w-3' />
      <p className='paragraph-100 text-danger-500'>{children}</p>
    </div>
  )
}
