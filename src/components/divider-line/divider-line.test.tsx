import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { DividerLine } from './divider-line'

describe('DividerLine', () => {
  it('renders a horizontal rule', () => {
    const { container } = render(<DividerLine />)
    const divider = container.querySelector('hr')

    expect(divider).toBeInTheDocument()
    expect(divider).toHaveClass('bg-neutral-300')
  })
})
