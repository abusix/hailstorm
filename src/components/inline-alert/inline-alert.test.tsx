import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InlineAlert } from './inline-alert'

describe('InlineAlert', () => {
  it('renders the title and content', () => {
    render(
      <InlineAlert title='Attention' intent='warning'>
        Follow instructions.
      </InlineAlert>,
    )

    expect(screen.getByText('Attention')).toBeInTheDocument()
    expect(screen.getByText('Follow instructions.')).toBeInTheDocument()
  })
})
