import type { HTMLAttributes } from 'react'
import { classNames } from '../../util/class-names'

export interface TableKeyValuePairHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  colSpan?: number
}

export const TableKeyValuePairHeader = ({
  children,
  className,
  colSpan,
  ...props
}: TableKeyValuePairHeaderProps) => {
  return (
    <thead className={classNames(className)} {...props}>
      <tr>
        <th
          className='headline-400 rounded-t-md border border-neutral-300 bg-neutral-50 px-2.5 py-4 text-left text-neutral-900'
          colSpan={colSpan}
        >
          {children}
        </th>
      </tr>
    </thead>
  )
}
