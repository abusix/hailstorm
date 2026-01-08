import type { ReactNode } from 'react'
import { TableBodyRow } from './table-body-row/table-body-row'
import { TableBodyCell } from './table-body-cell/table-body-cell'
import { TableEmptyPlaceholder } from './table-body-placeholder/table-body-placeholder'
import { TableBodyLoadingIndicator } from './table-body-loading-indicator/table-body-loading-indicator'

export interface TableBodyProps {
  children: ReactNode
}

const TableBody = ({ children }: TableBodyProps) => {
  return <tbody className='bg-neutral-0'>{children}</tbody>
}

TableBody.LoadingIndicator = TableBodyLoadingIndicator
TableBody.EmptyPlaceholder = TableEmptyPlaceholder
TableBody.Row = TableBodyRow
TableBody.Cell = TableBodyCell

export { TableBody }
