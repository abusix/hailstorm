import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Checkbox } from './checkbox'

describe('Checkbox', () => {
  it('renders a labeled checkbox and triggers onChange', () => {
    const onChange = vi.fn()
    // ARRANGE
    render(
      <Checkbox
        id='checkbox'
        label='Accept terms'
        checked={false}
        onChange={onChange}
      />,
    )

    // ASSERT
    const checkbox = screen.getByRole('checkbox', { name: 'Accept terms' })
    expect(checkbox).not.toBeChecked()
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('renders a disabled checkbox with muted label', () => {
    // ARRANGE
    render(
      <Checkbox
        id='checkbox-disabled'
        label='Disabled'
        checked={false}
        disabled
      />,
    )

    // ASSERT
    const checkbox = screen.getByRole('checkbox', { name: 'Disabled' })
    expect(checkbox).toBeDisabled()
    expect(screen.getByText('Disabled')).toHaveClass('text-neutral-600')
  })
})
