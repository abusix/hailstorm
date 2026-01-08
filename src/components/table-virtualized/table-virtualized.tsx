import { Fragment, useState, useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  HeaderGroup,
  PartialKeys,
  Row as RowType,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { useVirtualizer, VirtualizerOptions } from '@tanstack/react-virtual'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { classNames } from '../../util/class-names'
import { TableUnvirtualized } from '../table-unvirtualized'
import { DraggableRow } from './draggable-row/draggable-row'
import { ExpandableButtonCell } from './expandable-button-cell/expandable-button-cell'
import { VirtualizedHeaderGroup } from './header-group/header-group'

export interface TableVirtualizedProps<TableData, TableValue = unknown> {
  data: TableData[]
  columnDefs: ColumnDef<TableData, TableValue>[]
  showPlaceholder?: boolean
  placeholder?: ReactNode
  isDraggableRowsEnabled?: boolean
  isExpandableRowsEnabled?: boolean
  getExpandableContent?: (row: RowType<TableData>, index: number) => ReactNode
  virtualizerOptions?: PartialKeys<
    VirtualizerOptions<HTMLDivElement, Element>,
    | 'observeElementRect'
    | 'observeElementOffset'
    | 'scrollToFn'
    | 'count'
    | 'getScrollElement'
    | 'estimateSize'
  >
}

export const TableVirtualized = <TableData,>({
  isDraggableRowsEnabled = false,
  isExpandableRowsEnabled = false,
  getExpandableContent,
  data,
  showPlaceholder = false,
  placeholder,
  columnDefs,
  virtualizerOptions = {},
}: TableVirtualizedProps<TableData>) => {
  const virtualContainerRef = useRef<HTMLDivElement>(null)
  const [tableData, setTableData] = useState([...data])
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data: tableData,
    columns: columnDefs,
    state: {
      sorting,
    },
    getRowCanExpand: () => isExpandableRowsEnabled,
    onSortingChange: setSorting,
    getExpandedRowModel:
      isExpandableRowsEnabled ? getExpandedRowModel() : undefined,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  useEffect(() => {
    setTableData(data)
  }, [data])

  const { rows } = table.getRowModel()

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => virtualContainerRef.current,
    estimateSize: () => 64,
    overscan: 10,
    ...virtualizerOptions,
  })

  const virtualRows = rowVirtualizer.getVirtualItems()
  const rowsLength = virtualRows.length
  const totalSize = rows.length

  const paddingTop = rowsLength > 0 ? virtualRows[0].start || 0 : 0
  const paddingBottom =
    rowsLength > 0 ? totalSize - (virtualRows[rowsLength - 1].end || 0) : 0

  const reorderRow = (draggedRowIndex: number, targetRowIndex: number) => {
    tableData.splice(
      targetRowIndex,
      0,
      tableData.splice(draggedRowIndex, 1)[0] as TableData,
    )
    setTableData([...tableData])
  }

  const tableHeader = table
    .getHeaderGroups()
    .map((group: HeaderGroup<TableData>) => (
      <VirtualizedHeaderGroup<TableData>
        key={group.id}
        group={group}
        isDraggableColumnEnabled={isDraggableRowsEnabled}
        isExpandableColumnEnabled={isExpandableRowsEnabled}
      />
    ))

  const tableBody = virtualRows.map((virtualRow) => {
    const row = rows[virtualRow.index] as RowType<TableData>
    const isExpanded = row.getIsExpanded()

    if (isDraggableRowsEnabled) {
      return (
        <DraggableRow<TableData>
          key={row.id}
          row={row}
          virtualMeasureRef={rowVirtualizer.measureElement}
          reorderRow={reorderRow}
          getExpandableContent={getExpandableContent}
        />
      )
    }

    return (
      <Fragment key={row.id}>
        <TableUnvirtualized.Body.Row key={row.id} isExpanded={isExpanded}>
          {row.getVisibleCells().map((cell) => (
            <TableUnvirtualized.Body.Cell
              key={cell.id}
              style={cell.column.columnDef.meta}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableUnvirtualized.Body.Cell>
          ))}

          {isExpandableRowsEnabled ?
            <ExpandableButtonCell
              key={`${row.id}-expandable-icon`}
              onClick={() => row.toggleExpanded()}
              expanded={isExpanded}
            />
          : null}
        </TableUnvirtualized.Body.Row>

        {isExpanded && getExpandableContent ?
          <TableUnvirtualized.Body.Row key={`${row.id}-expandable-content`}>
            <TableUnvirtualized.Body.Cell colSpan={columnDefs.length}>
              {getExpandableContent(row, virtualRow.index)}
            </TableUnvirtualized.Body.Cell>
          </TableUnvirtualized.Body.Row>
        : null}
      </Fragment>
    )
  })

  return (
    <div
      ref={virtualContainerRef}
      className={classNames(
        'bg-neutral-0 h-full overflow-y-auto rounded-lg border border-neutral-300',
      )}
    >
      <TableUnvirtualized
        isContainerBordersShown={false}
        height={data.length ? rowVirtualizer.getTotalSize() : undefined}
        hasFixedTableLayout
      >
        <TableUnvirtualized.Header>{tableHeader}</TableUnvirtualized.Header>

        <TableUnvirtualized.Body>
          {data.length && !showPlaceholder ?
            <>
              {paddingTop > 0 ?
                <tr>
                  <TableUnvirtualized.Body.Cell
                    style={{
                      height: `${paddingTop}px`,
                    }}
                  />
                </tr>
              : null}

              {tableBody}

              {paddingBottom > 0 ?
                <tr>
                  <td
                    aria-hidden='true'
                    style={{
                      height: `${paddingBottom}px`,
                    }}
                  />
                </tr>
              : null}
            </>
          : placeholder}
        </TableUnvirtualized.Body>
      </TableUnvirtualized>
    </div>
  )
}

export const WithDragAndDrop = <TableData,>({
  ...props
}: TableVirtualizedProps<TableData>) => {
  return (
    <DndProvider backend={HTML5Backend}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <TableVirtualized<TableData> isDraggableRowsEnabled {...props} />
    </DndProvider>
  )
}
