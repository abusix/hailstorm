import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { TextInput } from './text-input'

describe('TextInput', () => {
  it('renders a text input and responds to changes', () => {
    const handleChange = vi.fn()

    render(
      <TextInput
        id='name'
        ariaDescribedBy='name-description'
        placeholder='Enter name'
        value=''
        onChange={handleChange}
      />,
    )

    const input = screen.getByPlaceholderText('Enter name')
    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'Alice' } })
    expect(handleChange).toHaveBeenCalled()
  })

  it('honors disabled and error states', () => {
    render(
      <TextInput id='status' value='Disabled' onChange={() => {}} disabled />,
    )

    const input = screen.getByDisplayValue('Disabled')
    expect(input).toBeDisabled()
    expect(input).toHaveClass('cursor-not-allowed')
  })

  it('shows error styling when enabled', () => {
    render(<TextInput id='status' value='Invalid' onChange={() => {}} error />)

    const input = screen.getByDisplayValue('Invalid')
    expect(input).toHaveClass('border-danger-500')
  })
})
