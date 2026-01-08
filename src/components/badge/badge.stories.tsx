import type { Meta, StoryObj } from '@storybook/react-vite'

import { hiddenArgControl } from '../../util/storybook-utils'
import { Badge, BadgeProps } from './badge'

const types: BadgeProps['type'][] = [
  'primary',
  'violet',
  'green',
  'neutral',
  'yellow',
  'teal',
  'orange',
  'pink',
  'red',
  'purple',
]
const shapes: BadgeProps['shape'][] = ['default', 'rounded']

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  args: { children: 'Badge Label' },
  argTypes: { onClick: hiddenArgControl },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {}

export const TypesAndShapes: Story = {
  args: {
    onClick: undefined,
  },
  argTypes: {
    type: hiddenArgControl,
    shape: hiddenArgControl,
  },
  render: ({ children, ...args }) => (
    <div className='container grid grid-cols-2 gap-4'>
      {shapes.map((shape) => (
        <div key={shape} className='grid gap-4'>
          <header>{shape}</header>
          {types.map((type) => (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            <Badge key={shape! + type} {...args} shape={shape} type={type}>
              {children}
            </Badge>
          ))}
        </div>
      ))}
    </div>
  ),
}

export const CustomClassName: Story = {
  render: ({ children }) => (
    <Badge className='text-neutral-0 bg-neutral-600'>{children}</Badge>
  ),
}
