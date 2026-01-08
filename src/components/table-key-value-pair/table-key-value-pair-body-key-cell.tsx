import type { DetailedHTMLProps, TdHTMLAttributes } from 'react'
import { classNames } from '../../util/class-names'

export type TableKeyValuePairBodyKeyProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>

export const TableKeyValuePairBodyKeyCell = ({
  children,
  className,
  ...props
}: TableKeyValuePairBodyKeyProps) => {
  return (
    <td
      className={classNames(
        'headline-400 bg-neutral-0 border-r border-b border-neutral-300 px-2.5 text-neutral-900 first:border-l',
        className,
      )}
      {...props}
    >
      {children}
    </td>
  )
}
