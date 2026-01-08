import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Toggle } from './toggle'

describe('Toggle', () => {
  it('renders a switch with an accessible label and calls onChange', () => {
    const onChange = vi.fn()
    // ARRANGE
    render(
      <Toggle>
        <Toggle.Switch
          checked={false}
          ariaLabel='Enable feature'
          onChange={onChange}
        />
      </Toggle>,
    )

    // ASSERT
    const toggle = screen.getByRole('switch', { name: 'Enable feature' })
    expect(toggle).toHaveAttribute('aria-checked', 'false')
    fireEvent.click(toggle)
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
