import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LastChangedInfo } from './last-changed-info'

describe('LastChangedInfo', () => {
  it('renders the formatted change message', () => {
    render(
      <LastChangedInfo
        changedDate={new Date(2024, 0, 15, 9, 45)}
        changedBy='Jane Doe'
      />,
    )

    const message = screen.getByText(/Last changed on/i)
    expect(message).toHaveTextContent('by Jane Doe')
  })
})
