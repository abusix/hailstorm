import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { SearchInput } from './search-input'

describe('SearchInput', () => {
  it('renders a clear button when value is set', () => {
    const onClear = vi.fn()

    render(<SearchInput value='query' onClear={onClear} onChange={() => {}} />)

    const clearButton = screen.getByRole('button', {
      name: 'Clear search input',
    })
    expect(clearButton).toBeInTheDocument()

    fireEvent.click(clearButton)
    expect(onClear).toHaveBeenCalledTimes(1)
  })
})
