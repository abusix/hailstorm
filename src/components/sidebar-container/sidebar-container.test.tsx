import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SidebarContainer } from './sidebar-container'

describe('SidebarContainer', () => {
  it('renders sidebar and page content areas', () => {
    render(
      <SidebarContainer
        sidebarContent={<aside>Sidebar</aside>}
        pageContent={<main>Page content</main>}
      />,
    )

    expect(screen.getByText('Sidebar')).toBeInTheDocument()
    expect(screen.getByText('Page content')).toBeInTheDocument()
  })
})
