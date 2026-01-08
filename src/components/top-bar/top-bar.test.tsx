import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './top-bar'

describe('TopBar', () => {
  it('renders logo and navigation links', () => {
    render(
      <TopBar>
        <TopBar.Logo src='logo.png' />
        <TopBar.NavLinks>
          <TopBar.NavLink>Home</TopBar.NavLink>
        </TopBar.NavLinks>
      </TopBar>,
    )

    expect(screen.getByAltText('logo')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
