import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BreadcrumbNavigation } from './breadcrumb-navigation'

describe('BreadcrumbNavigation', () => {
  it('renders items and separators', () => {
    const { container } = render(
      <BreadcrumbNavigation>
        <BreadcrumbNavigation.Item href='#'>Home</BreadcrumbNavigation.Item>
        <BreadcrumbNavigation.Arrow />
        <BreadcrumbNavigation.Item isActive>Settings</BreadcrumbNavigation.Item>
      </BreadcrumbNavigation>,
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
