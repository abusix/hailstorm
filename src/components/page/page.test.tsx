import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Page } from './page'

describe('Page', () => {
  it('renders title and description slots', () => {
    render(
      <Page>
        <Page.Title>Dashboard</Page.Title>
        <Page.Description>Overview</Page.Description>
      </Page>,
    )

    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Overview')).toBeInTheDocument()
  })
})
