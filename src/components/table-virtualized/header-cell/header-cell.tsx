import { flexRender } from '@tanstack/react-table'
import type { Header } from '@tanstack/react-table'
import {
  SortIndicator,
  SortDirection,
} from '../header-sort-indicator/header-sort-indicator'
import { TableUnvirtualized } from '../../table-unvirtualized/table-unvirtualized'
import { classNames } from '../../../util/class-names'

export interface VirtualizedHeaderCellProps<TableData> {
  header: Header<TableData, unknown>
}

export const HeaderCell = <TableData,>({
  header,
}: VirtualizedHeaderCellProps<TableData>) => {
  const canSort = header.column.getCanSort()
  const toggleSortHandler =
    canSort ? header.column.getToggleSortingHandler() : undefined

  const sortDirection = header.column.getIsSorted() as SortDirection

  return (
    <TableUnvirtualized.Header.Cell
      key={header.id}
      colSpan={header.colSpan}
      style={header.column.columnDef.meta}
    >
      {header.isPlaceholder ? null : (
        <div
          role='button'
          tabIndex={-1}
          className={classNames(
            'inline-flex',
            header.column.getCanSort() ? 'cursor-pointer select-none' : '',
          )}
          style={{ textAlign: 'inherit' }}
          onKeyDown={toggleSortHandler}
          onClick={toggleSortHandler}
        >
          {flexRender(header.column.columnDef.header, header.getContext())}

          {canSort && sortDirection ?
            <SortIndicator direction={sortDirection} />
          : null}
        </div>
      )}
    </TableUnvirtualized.Header.Cell>
  )
}
