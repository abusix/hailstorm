import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tab } from './tab'

describe('Tab', () => {
  it('renders tab labels and the active panel', () => {
    render(
      <Tab defaultIndex={0}>
        <Tab.List>
          <Tab.Button>Overview</Tab.Button>
          <Tab.Button>Settings</Tab.Button>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Overview panel</Tab.Panel>
          <Tab.Panel>Settings panel</Tab.Panel>
        </Tab.Panels>
      </Tab>,
    )

    expect(screen.getByText('Overview')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText('Overview panel')).toBeInTheDocument()
  })
})
