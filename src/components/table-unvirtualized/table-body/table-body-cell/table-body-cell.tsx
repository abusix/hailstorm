import { CSSProperties, forwardRef, ReactNode } from 'react'
import { classNames } from '../../../../util/class-names'

export interface CellProps {
  // cells can be children-less (for e.g. placeholder columns)
  children?: ReactNode
  style?: CSSProperties
  colSpan?: number
  className?: string
  align?: CellAlignment
  isTextContent?: boolean
}

type CellAlignment = 'left' | 'center' | 'right'

const cellAlignStyles: Record<CellAlignment, string> = {
  left: '',
  center: 'flex justify-center items-center',
  right: 'flex justify-end items-end',
}

const TableBodyCell = forwardRef<HTMLTableCellElement, CellProps>(
  (
    {
      children,
      align = 'left',
      isTextContent = true,
      className,
      colSpan,
      style,
    },
    ref,
  ) => {
    return (
      <td
        className={classNames('h-16 pr-6 first:pl-6', className)}
        ref={ref}
        style={style}
        colSpan={colSpan}
      >
        {isTextContent ?
          <div className={classNames('paragraph-100', cellAlignStyles[align])}>
            {children}
          </div>
        : children}
      </td>
    )
  },
)

export { TableBodyCell }
