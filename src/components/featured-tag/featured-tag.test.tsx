import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedTag } from './featured-tag'

describe('FeaturedTag', () => {
  it('renders featured tag content', () => {
    render(<FeaturedTag>Featured</FeaturedTag>)

    const tag = screen.getByText('Featured')
    expect(tag).toBeInTheDocument()
    expect(tag).toHaveClass('border-primary-600')
  })
})
