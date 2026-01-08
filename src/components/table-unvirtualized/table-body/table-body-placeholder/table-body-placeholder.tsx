import type { ReactNode } from 'react'
import { TableBodyCell } from '../table-body-cell/table-body-cell'
import { TableBodyRow } from '../table-body-row/table-body-row'

export interface EmptyPlaceholderProps {
  title: string
  description: string
  colSpan: number
  children?: ReactNode
}

export const TableEmptyPlaceholder = ({
  title,
  description,
  colSpan,
  children,
}: EmptyPlaceholderProps) => {
  return (
    <TableBodyRow aria-label='No data available in this table'>
      <TableBodyCell colSpan={colSpan} className='h-80'>
        <div className='flex min-h-96 flex-col items-center justify-center'>
          <h5 className='headline-300 mb-1'>{title}</h5>

          <p className='paragraph-100 mb-2'>{description}</p>

          {children}
        </div>
      </TableBodyCell>
    </TableBodyRow>
  )
}
