import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AddIcon } from '../../icons'
import { IconButton } from './icon-button'

describe('IconButton', () => {
  it('renders a button with an icon', () => {
    render(<IconButton Icon={AddIcon} aria-label='Add item' />)

    const button = screen.getByRole('button', { name: 'Add item' })
    expect(button).toBeInTheDocument()
    expect(button.querySelector('svg')).toBeInTheDocument()
  })
})
