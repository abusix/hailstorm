import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Link } from './link'

describe('Link', () => {
  it('renders an anchor with href', () => {
    render(<Link href='/docs'>Read docs</Link>)

    const link = screen.getByRole('link', { name: 'Read docs' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/docs')
  })
})
