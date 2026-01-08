import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { SpinnerOverlay } from './spinner-overlay'

describe('SpinnerOverlay', () => {
  it('renders an overlay with a spinner', () => {
    const { container } = render(<SpinnerOverlay size='small' opacity={0.8} />)
    const overlay = container.firstElementChild as HTMLElement | null
    const spinner = container.querySelector('svg')

    expect(overlay).toBeInTheDocument()
    expect(overlay?.style.opacity).toBe('0.8')
    expect(spinner).toBeInTheDocument()
  })
})
