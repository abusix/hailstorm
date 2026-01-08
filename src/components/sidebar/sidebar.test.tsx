import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sidebar } from './sidebar'

describe('Sidebar', () => {
  it('renders header and menu content', () => {
    render(
      <Sidebar>
        <Sidebar.Header>Navigation</Sidebar.Header>
        <Sidebar.Menu>
          <Sidebar.MenuHeader>General</Sidebar.MenuHeader>
          <Sidebar.MenuLink>Dashboard</Sidebar.MenuLink>
        </Sidebar.Menu>
      </Sidebar>,
    )

    expect(screen.getByText('Navigation')).toBeInTheDocument()
    expect(screen.getByText('General')).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })
})
