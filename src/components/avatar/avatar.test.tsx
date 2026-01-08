import { describe, expect, it } from 'vitest'
import { getByText, render, screen } from '@testing-library/react'
import { Avatar } from './avatar'

describe('Avatar', () => {
  it('renders an avatar with substring of child', () => {
    const text = 'Test User'
    // ARRANGE
    render(<Avatar color='primary'>{text}</Avatar>)

    // ASSERT
    const alert = screen.getByRole('button')
    expect(alert).toBeInTheDocument()
    expect(getByText(alert, 'Te')).toBeInTheDocument()
  })
})
