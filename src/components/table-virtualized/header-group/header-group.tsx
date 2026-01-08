import { HeaderGroup } from '@tanstack/react-table'
import { HeaderCell } from '../header-cell/header-cell'
import { TableUnvirtualized } from '../../table-unvirtualized/table-unvirtualized'

export interface VirtualizedHeaderGroupProps<TableData> {
  group: HeaderGroup<TableData>
  isDraggableColumnEnabled?: boolean
  isExpandableColumnEnabled?: boolean
}

export const VirtualizedHeaderGroup = <TableData,>({
  group,
  isDraggableColumnEnabled,
  isExpandableColumnEnabled,
}: VirtualizedHeaderGroupProps<TableData>) => {
  return (
    <TableUnvirtualized.Header.Row key={group.id}>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      {isDraggableColumnEnabled ?
        <th className='w-16 bg-neutral-50' />
      : null}

      {group.headers.map((header) => (
        <HeaderCell<TableData> key={header.id} header={header} />
      ))}

      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      {isExpandableColumnEnabled ?
        <th className='w-16 bg-neutral-50' />
      : null}
    </TableUnvirtualized.Header.Row>
  )
}
