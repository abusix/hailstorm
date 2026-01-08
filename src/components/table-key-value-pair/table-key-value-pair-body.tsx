import type { TableHTMLAttributes } from 'react'
import { TableKeyValuePairBodyRow } from './table-key-value-pair-body-row'
import { TableKeyValuePairBodyValueCell } from './table-key-value-pair-body-value-cell'
import { TableKeyValuePairBodyKeyCell } from './table-key-value-pair-body-key-cell'

export type TableKeyValuePairBodyProps =
  TableHTMLAttributes<HTMLTableSectionElement>

const TableKeyValuePairBody = ({
  children,
  ...props
}: TableKeyValuePairBodyProps) => {
  return <tbody {...props}>{children}</tbody>
}

TableKeyValuePairBody.Row = TableKeyValuePairBodyRow
TableKeyValuePairBody.Key = TableKeyValuePairBodyKeyCell
TableKeyValuePairBody.Value = TableKeyValuePairBodyValueCell

export { TableKeyValuePairBody }
