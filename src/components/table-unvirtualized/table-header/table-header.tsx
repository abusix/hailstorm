import { ForwardedRef, forwardRef, ReactNode } from 'react'
import { TableHeaderCell } from './table-header-cell/table-header-cell'
import { TableHeaderRow } from './table-header-row/table-header-row'
import { classNames } from '../../../util/class-names'

export interface TableHeaderProps {
  children: ReactNode
}

const TableHeader = forwardRef(
  (
    { children }: TableHeaderProps,
    ref: ForwardedRef<HTMLTableSectionElement>,
  ) => {
    return (
      <thead
        ref={ref}
        className={classNames(
          'sticky top-0 overflow-hidden rounded-lg bg-neutral-100',
          'after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-neutral-300',
        )}
      >
        {children}
      </thead>
    )
  },
)

TableHeader.displayName = 'TableHeader'

const TableHeaderNamespace = Object.assign(TableHeader, {
  Cell: TableHeaderCell,
  Row: TableHeaderRow,
})

export { TableHeaderNamespace as TableHeader }
