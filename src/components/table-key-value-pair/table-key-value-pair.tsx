import type { DetailedHTMLProps, TableHTMLAttributes } from 'react'
import { classNames } from '../../util/class-names'
import { TableKeyValuePairHeader } from './table-key-value-pair-header'
import { TableKeyValuePairBody } from './table-key-value-pair-body'

export type TableKeyValuePairProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>

const TableKeyValuePair = ({
  children,
  className,
  ...props
}: TableKeyValuePairProps) => {
  return (
    <table
      className={classNames(
        'w-full table-fixed border-separate border-spacing-0 text-sm',
        className,
      )}
      {...props}
    >
      {children}
    </table>
  )
}

TableKeyValuePair.Header = TableKeyValuePairHeader
TableKeyValuePair.Body = TableKeyValuePairBody

export { TableKeyValuePair }
