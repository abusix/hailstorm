import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Spinner } from './spinner'

describe('Spinner', () => {
  it('renders with size classes', () => {
    // ARRANGE
    const { container } = render(<Spinner size='small' />)

    // ASSERT
    const spinner = container.querySelector('svg')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('animate-spin')
    expect(spinner).toHaveClass('h-4')
    expect(spinner).toHaveClass('w-4')
  })
})
