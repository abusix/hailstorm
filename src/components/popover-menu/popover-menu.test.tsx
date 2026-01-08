import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopoverMenu } from './popover-menu'

describe('PopoverMenu', () => {
  it('renders the popover trigger', () => {
    render(
      <PopoverMenu>
        <PopoverMenu.Button variant='secondary'>
          Open Popover
        </PopoverMenu.Button>
      </PopoverMenu>,
    )

    expect(screen.getByText('Open Popover')).toBeInTheDocument()
  })
})
