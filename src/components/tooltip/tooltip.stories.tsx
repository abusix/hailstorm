import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { getStoryDescription } from '../../util/storybook-utils'
import { Tooltip } from './tooltip'
import { Button } from '../button'

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    ...getStoryDescription(
      'Tooltip component. By default displays a tooltip on hover, but it can be controlled with the `open` prop as well.',
    ),
  },
  args: {
    position: 'right',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    className: '',
  },
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const UncontrolledTooltip: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <div className='rounded border border-neutral-50 p-2 text-sm hover:bg-neutral-100'>
        Hover to toggle
      </div>
    </Tooltip>
  ),
}

const ControlledTooltipExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <Tooltip
      position='right'
      title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      open={open}
    >
      <Button
        variant='minimal'
        className='rounded border p-2 text-sm hover:bg-neutral-100'
        onClick={() => setOpen(!open)}
      >
        Click to toggle
      </Button>
    </Tooltip>
  )
}

export const ControlledTooltip: Story = {
  render: () => <ControlledTooltipExample />,
}
