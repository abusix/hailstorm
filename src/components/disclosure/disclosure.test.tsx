import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Disclosure } from './disclosure'

describe('Disclosure', () => {
  it('renders panel content when open', () => {
    render(
      <Disclosure defaultOpen>
        <Disclosure.Button>Details</Disclosure.Button>
        <Disclosure.Panel>Panel content</Disclosure.Panel>
      </Disclosure>,
    )

    expect(screen.getByText('Details')).toBeInTheDocument()
    expect(screen.getByText('Panel content')).toBeInTheDocument()
  })
})
