import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FormFieldGroup } from './form-field-group'

describe('FormFieldGroup', () => {
  it('renders children inside the group container', () => {
    render(
      <FormFieldGroup>
        <span>First</span>
        <span>Second</span>
      </FormFieldGroup>,
    )

    const first = screen.getByText('First')
    const group = first.closest('div')

    expect(first).toBeInTheDocument()
    expect(group).toHaveClass('form-field-group')
  })
})
