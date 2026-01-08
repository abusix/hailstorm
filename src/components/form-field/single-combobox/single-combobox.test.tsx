import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FormField } from '../form-field'
import { SingleCombobox } from './single-combobox'

describe('SingleCombobox', () => {
  it('renders the input placeholder', () => {
    render(
      <FormField.SingleCombobox value={null} onChange={vi.fn()}>
        <SingleCombobox.Input
          id='person'
          placeholder='Select person...'
          onChange={() => {}}
        />
      </FormField.SingleCombobox>,
    )

    expect(screen.getByPlaceholderText('Select person...')).toBeInTheDocument()
  })
})
