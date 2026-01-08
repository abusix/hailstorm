import type { Ref, RefCallback, ReactNode } from 'react'
import { Fragment } from 'react'
import { DragSourceMonitor, useDrag, useDrop } from 'react-dnd'
import { Row as RowType } from '@tanstack/table-core'
import { flexRender } from '@tanstack/react-table'
import { TableUnvirtualized } from '../../table-unvirtualized'
import { ExpandableButtonCell } from '../expandable-button-cell/expandable-button-cell'
import { DragHandleVerticalIcon } from '../../../icons'

export interface DraggableAndExpandableRow<TableData> {
  getExpandableContent?: (row: RowType<TableData>, index: number) => ReactNode
}

export interface DraggableRowProps<
  TableData,
> extends DraggableAndExpandableRow<TableData> {
  row: RowType<TableData>
  reorderRow: (draggedRowIndex: number, targetRowIndex: number) => void
  virtualMeasureRef?: Ref<HTMLTableCellElement>
}

export const DraggableRow = <TableData,>({
  row,
  reorderRow,
  virtualMeasureRef,
  getExpandableContent,
}: DraggableRowProps<TableData>) => {
  const [, dropRef] = useDrop({
    accept: 'row',
    drop: (draggedRow: RowType<TableData>) => {
      return reorderRow(draggedRow.index, row.index)
    },
  })

  const isExpanded = row.getIsExpanded()
  const isExpandableRowsEnabled = row.getCanExpand()

  const [{ isDragging }, dragRef, previewRef] = useDrag({
    collect: (monitor: DragSourceMonitor<RowType<TableData>>) => ({
      isDragging: monitor.isDragging(),
    }),
    item: () => row,
    type: 'row',
    isDragging: () => {
      if (row.getIsExpanded()) {
        row.toggleExpanded()
      }
      return true
    },
  })

  const previewRefCallback: RefCallback<HTMLTableRowElement> = (node) => {
    previewRef(node)
  }
  const dropRefCallback: RefCallback<HTMLTableCellElement> = (node) => {
    dropRef(node)
  }
  const dragRefCallback: RefCallback<HTMLButtonElement> = (node) => {
    dragRef(node)
  }

  const [firstCell, ...restVisibleCells] = row.getVisibleCells()

  return (
    <Fragment key={row.id}>
      <TableUnvirtualized.Body.Row
        ref={previewRefCallback}
        isExpanded={isExpanded}
        className={isDragging ? 'bg-neutral-100' : undefined}
      >
        <TableUnvirtualized.Body.Cell ref={dropRefCallback}>
          <button aria-label='Drag row' type='button' ref={dragRefCallback}>
            <DragHandleVerticalIcon />
          </button>
        </TableUnvirtualized.Body.Cell>

        <TableUnvirtualized.Body.Cell
          key={firstCell.id}
          ref={virtualMeasureRef}
        >
          {flexRender(firstCell.column.columnDef.cell, firstCell.getContext())}
        </TableUnvirtualized.Body.Cell>

        {restVisibleCells.map((cell) => (
          <TableUnvirtualized.Body.Cell
            key={cell.id}
            style={cell.column.columnDef.meta}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableUnvirtualized.Body.Cell>
        ))}

        {isExpandableRowsEnabled && (
          <ExpandableButtonCell
            key={`${row.id}-expandable-icon`}
            onClick={() => row.toggleExpanded()}
            expanded={isExpanded}
          />
        )}
      </TableUnvirtualized.Body.Row>

      {isExpandableRowsEnabled && isExpanded && getExpandableContent ?
        <TableUnvirtualized.Body.Row key={`${row.id}-expandable-content`}>
          <TableUnvirtualized.Body.Cell />
          <TableUnvirtualized.Body.Cell
            isTextContent={false}
            colSpan={row.getVisibleCells().length + 1}
          >
            {getExpandableContent(row, row.index)}
          </TableUnvirtualized.Body.Cell>
        </TableUnvirtualized.Body.Row>
      : null}
    </Fragment>
  )
}
