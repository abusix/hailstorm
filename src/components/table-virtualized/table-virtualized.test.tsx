import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createColumnHelper } from '@tanstack/react-table'
import { TableVirtualized } from './table-virtualized'

interface RowData {
  name: string
  description: string
}

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('TableVirtualized', () => {
  it('renders headers and rows', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).ResizeObserver = ResizeObserverMock

    const columnHelper = createColumnHelper<RowData>()
    const columnDefs = [
      columnHelper.accessor('name', { header: 'Name' }),
      columnHelper.accessor('description', { header: 'Description' }),
    ]
    const data = [
      { name: 'Alpha', description: 'First' },
      { name: 'Beta', description: 'Second' },
    ]

    render(
      <div style={{ height: 300 }}>
        <TableVirtualized<RowData>
          data={data}
          columnDefs={columnDefs}
          virtualizerOptions={{
            observeElementRect: (_instance, callback) => {
              callback({ height: 300, width: 300 })
              return () => {}
            },
            observeElementOffset: (_instance, callback) => {
              callback(0)
              return () => {}
            },
          }}
        />
      </div>,
    )

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(await screen.findByText('Alpha')).toBeInTheDocument()
    expect(await screen.findByText('Second')).toBeInTheDocument()
  })
})
