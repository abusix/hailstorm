import type { TableHTMLAttributes } from 'react'
import { classNames } from '../../util/class-names'

export type TableKeyValuePairBodyProps =
  TableHTMLAttributes<HTMLTableRowElement>

export const TableKeyValuePairBodyRow = ({
  children,
  className,
  ...props
}: TableKeyValuePairBodyProps) => {
  return (
    <tr
      className={classNames(
        'h-12 [&:last-child_>_td:first-child]:rounded-bl-md [&:last-child_>_td:first-child]:border-l [&:last-child_>_td:first-child]:border-neutral-300 [&:last-child_>_td:last-child]:rounded-br-md',
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  )
}
