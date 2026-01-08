import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FormField } from '../form-field'

describe('Listbox', () => {
  it('renders the placeholder text', () => {
    render(
      <FormField.Listbox value={null} onChange={vi.fn()}>
        <FormField.Listbox.Button>
          <FormField.Listbox.Button.TextValue
            value={null}
            placeholder='Select...'
          />
        </FormField.Listbox.Button>
      </FormField.Listbox>,
    )

    expect(screen.getByText('Select...')).toBeInTheDocument()
  })
})
