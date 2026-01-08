import { CSSProperties, ReactNode } from 'react'
import { classNames } from '../../../../util/class-names'

type TableCellAlign = 'left' | 'center' | 'right'

export interface TableHeaderCellProps {
  children: ReactNode
  align?: TableCellAlign
  className?: string
  colSpan?: number
  style?: CSSProperties
}

const cellAlign: Record<TableCellAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

export const TableHeaderCell = ({
  children,
  align = 'left',
  colSpan,
  style,
  className,
}: TableHeaderCellProps) => {
  return (
    <th
      scope='col'
      colSpan={colSpan}
      style={style}
      className={classNames(
        `headline-100 bg-neutral-50 py-4 pr-6 text-neutral-700 uppercase first:pl-6`,
        cellAlign[align],
        className,
      )}
    >
      {children}
    </th>
  )
}
