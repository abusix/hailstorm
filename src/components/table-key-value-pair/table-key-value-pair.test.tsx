import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TableKeyValuePair } from './table-key-value-pair'

describe('TableKeyValuePair', () => {
  it('renders header and body content', () => {
    render(
      <TableKeyValuePair>
        <TableKeyValuePair.Header>Details</TableKeyValuePair.Header>
        <TableKeyValuePair.Body>
          <TableKeyValuePair.Body.Row>
            <TableKeyValuePair.Body.Key>Key</TableKeyValuePair.Body.Key>
            <TableKeyValuePair.Body.Value>Value</TableKeyValuePair.Body.Value>
          </TableKeyValuePair.Body.Row>
        </TableKeyValuePair.Body>
      </TableKeyValuePair>,
    )

    expect(screen.getByText('Details')).toBeInTheDocument()
    expect(screen.getByText('Key')).toBeInTheDocument()
    expect(screen.getByText('Value')).toBeInTheDocument()
  })
})
