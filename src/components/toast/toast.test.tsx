import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Toast } from './toast'

describe('Toast', () => {
  it('renders a closable toast and calls onClose', () => {
    const onClose = vi.fn()
    render(
      <Toast title='Saved' intent='success' onClose={onClose}>
        Settings updated.
      </Toast>,
    )

    expect(screen.getByText('Saved')).toBeInTheDocument()
    expect(screen.getByText('Settings updated.')).toBeInTheDocument()

    const closeButton = screen.getByRole('button')
    fireEvent.click(closeButton)
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
