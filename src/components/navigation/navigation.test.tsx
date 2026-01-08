import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Navigation } from './navigation'

describe('Navigation', () => {
  it('renders a logo and a group item', () => {
    render(
      <Navigation>
        <Navigation.Logo>
          <div>Brand</div>
        </Navigation.Logo>
        <Navigation.Group>
          <Navigation.Group.Item>Home</Navigation.Group.Item>
        </Navigation.Group>
      </Navigation>,
    )

    expect(screen.getByText('Brand')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('renders a disclosure panel item', () => {
    render(
      <Navigation>
        <Navigation.Disclosure>
          <Navigation.Disclosure.Button>Settings</Navigation.Disclosure.Button>
          <Navigation.Disclosure.Panel>
            <Navigation.Disclosure.Panel.Item>
              Profile
            </Navigation.Disclosure.Panel.Item>
          </Navigation.Disclosure.Panel>
        </Navigation.Disclosure>
      </Navigation>,
    )

    const trigger = screen.getByRole('button', { name: 'Settings' })
    fireEvent.click(trigger)
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })
})
