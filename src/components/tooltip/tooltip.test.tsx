import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tooltip } from './tooltip'

describe('Tooltip', () => {
  it('renders tooltip content when open', () => {
    render(
      <Tooltip title='More info' open strategy='portal'>
        <button type='button'>Trigger</button>
      </Tooltip>,
    )

    expect(screen.getByText('More info')).toBeInTheDocument()
  })
})
