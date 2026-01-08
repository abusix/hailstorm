import { Spinner } from '../../../spinner/spinner'
import { TableBodyRow } from '../table-body-row/table-body-row'
import { TableBodyCell } from '../table-body-cell/table-body-cell'

export interface TableBodyLoadingIndicatorProps {
  colSpan: number
}

export const TableBodyLoadingIndicator = ({
  colSpan,
}: TableBodyLoadingIndicatorProps) => {
  return (
    <TableBodyRow>
      <TableBodyCell className='h-80 text-center' colSpan={colSpan}>
        <div className='flex items-center justify-center'>
          <Spinner />
        </div>
      </TableBodyCell>
    </TableBodyRow>
  )
}
