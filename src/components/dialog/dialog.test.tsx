import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Dialog } from './dialog'

describe('Dialog', () => {
  it('renders content and triggers onClose from the close button', async () => {
    const onClose = vi.fn()
    const { container } = render(
      <Dialog isShown title='Confirm action' onClose={onClose}>
        Dialog content
      </Dialog>,
    )

    expect(await screen.findByText('Confirm action')).toBeInTheDocument()
    expect(screen.getByText('Dialog content')).toBeInTheDocument()

    const closeButton = await screen.findByRole('button')
    fireEvent.click(closeButton)

    expect(onClose).toHaveBeenCalledWith(false)
  })
})
