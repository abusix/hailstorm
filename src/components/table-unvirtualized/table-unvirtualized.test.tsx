import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TableUnvirtualized } from './table-unvirtualized'

describe('TableUnvirtualized', () => {
  it('renders headers and body rows', () => {
    render(
      <TableUnvirtualized>
        <TableUnvirtualized.Header>
          <TableUnvirtualized.Header.Row>
            <TableUnvirtualized.Header.Cell>
              Name
            </TableUnvirtualized.Header.Cell>
            <TableUnvirtualized.Header.Cell>
              Description
            </TableUnvirtualized.Header.Cell>
          </TableUnvirtualized.Header.Row>
        </TableUnvirtualized.Header>
        <TableUnvirtualized.Body>
          <TableUnvirtualized.Body.Row>
            <TableUnvirtualized.Body.Cell>Alpha</TableUnvirtualized.Body.Cell>
            <TableUnvirtualized.Body.Cell>First</TableUnvirtualized.Body.Cell>
          </TableUnvirtualized.Body.Row>
        </TableUnvirtualized.Body>
      </TableUnvirtualized>,
    )

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(screen.getByText('Alpha')).toBeInTheDocument()
    expect(screen.getByText('First')).toBeInTheDocument()
  })
})
