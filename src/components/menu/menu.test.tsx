import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Menu } from './menu'

describe('Menu', () => {
  it('renders the menu trigger', () => {
    render(
      <Menu>
        <Menu.Button>Open Menu</Menu.Button>
      </Menu>,
    )

    expect(screen.getByText('Open Menu')).toBeInTheDocument()
  })
})
