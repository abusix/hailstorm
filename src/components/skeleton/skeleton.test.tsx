import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Skeleton } from './skeleton'

describe('Skeleton', () => {
  it('renders with optional animation', () => {
    const { container, rerender } = render(<Skeleton />)
    const skeleton = container.querySelector('span')

    expect(skeleton).toBeInTheDocument()
    expect(skeleton).not.toHaveClass('animate-pulse')

    rerender(<Skeleton isAnimated />)
    expect(container.querySelector('span')).toHaveClass('animate-pulse')
  })
})
