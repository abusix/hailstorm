import { ReactNode } from 'react'

export interface TableHeaderRowProps {
  children: ReactNode
}

export const TableHeaderRow = ({ children }: TableHeaderRowProps) => {
  return <tr>{children}</tr>
}
