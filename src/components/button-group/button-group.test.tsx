import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ButtonGroup } from './button-group'

describe('ButtonGroup', () => {
  it('renders grouped buttons and highlights active state', () => {
    const { container } = render(
      <ButtonGroup>
        <ButtonGroup.Button type='button'>Alpha</ButtonGroup.Button>
        <ButtonGroup.Button type='button' isActive>
          Beta
        </ButtonGroup.Button>
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
    expect(buttons[1]).toHaveClass('bg-primary-50')

    const group = container.firstElementChild
    expect(group).toHaveClass('isolate')
  })
})
