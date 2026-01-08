import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Tag } from './tag'

describe('Tag', () => {
  it('renders a removable tag when onClick is provided', () => {
    const onClick = vi.fn()
    // ARRANGE
    render(<Tag onClick={onClick}>Label</Tag>)

    // ASSERT
    const tag = screen.getByText('Label').parentElement
    const removeButton = within(tag as HTMLElement).getByRole('button', {
      name: 'Remove tag',
    })
    fireEvent.click(removeButton)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('disables the remove button when disabled', () => {
    // ARRANGE
    render(
      <Tag onClick={() => null} disabled>
        Label
      </Tag>,
    )

    // ASSERT
    const tag = screen.getByText('Label').parentElement
    const removeButton = within(tag as HTMLElement).getByRole('button', {
      name: 'Remove tag',
    })
    expect(removeButton).toBeDisabled()
  })
})
