import type { Meta, StoryObj } from '@storybook/react-vite'
import type { AvatarProps } from './avatar'
import { Avatar } from './avatar'
import {
  getStoryDescription,
  hiddenArgControl,
} from '../../util/storybook-utils'

const colors: AvatarProps['color'][] = [
  'primary',
  'success',
  'neutral',
  'warning',
  'danger',
]

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  parameters: getStoryDescription(
    'Circular user icon. It displays first 2 characters from the passed children text ',
  ),
  args: {
    children: 'Name Lastname',
    color: colors[0],
  },
  argTypes: {
    color: { options: colors },
    onClick: hiddenArgControl,
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {}

export const Colors: Story = {
  argTypes: {
    color: hiddenArgControl,
  },
  render: ({ children, ...args }) => (
    <div className='flex flex-col gap-4'>
      {colors.map((color) => (
        <Avatar key={color} {...args} color={color}>
          {children}
        </Avatar>
      ))}
    </div>
  ),
}
