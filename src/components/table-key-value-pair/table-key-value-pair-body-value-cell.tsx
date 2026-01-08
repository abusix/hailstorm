import type { DetailedHTMLProps, TdHTMLAttributes } from 'react'
import { classNames } from '../../util/class-names'

export type TableKeyValuePairBodyValueProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>

export const TableKeyValuePairBodyValueCell = ({
  children,
  className,
  ...props
}: TableKeyValuePairBodyValueProps) => {
  return (
    <td
      className={classNames(
        'bg-neutral-0 border-r border-b border-neutral-300 px-2.5 text-neutral-900',
        className,
      )}
      {...props}
    >
      {children}
    </td>
  )
}
