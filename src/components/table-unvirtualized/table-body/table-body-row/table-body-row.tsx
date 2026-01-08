import { forwardRef, HTMLProps, ReactNode } from 'react'
import { classNames } from '../../../../util/class-names'

export interface RowProps extends HTMLProps<HTMLTableRowElement> {
  children: ReactNode
  className?: string
  isExpanded?: boolean
}

const TableBodyRow = forwardRef<HTMLTableRowElement, RowProps>(
  ({ children, className, isExpanded, style, ...props }, ref) => {
    return (
      <tr
        className={classNames(
          className,
          isExpanded ? 'bg-primary-50' : 'border-b border-b-neutral-300',
        )}
        ref={ref}
        style={style}
        {...props}
      >
        {children}
      </tr>
    )
  },
)

export { TableBodyRow }
