import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Panel } from './panel'

describe('Panel', () => {
  it('renders panel content', () => {
    const { container } = render(<Panel>Panel body</Panel>)

    const content = screen.getByText('Panel body')
    const panel = container.firstElementChild

    expect(content).toBeInTheDocument()
    expect(panel).toHaveClass('bg-neutral-0')
  })
})
