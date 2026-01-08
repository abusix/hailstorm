import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sidesheet } from './sidesheet'

describe('Sidesheet', () => {
  it('renders the sidesheet content when open', () => {
    render(
      <Sidesheet isOpen onClose={vi.fn()}>
        <div>Panel content</div>
      </Sidesheet>,
    )

    expect(screen.getByText('Panel content')).toBeInTheDocument()
  })
})
