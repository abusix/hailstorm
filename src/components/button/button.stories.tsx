import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, ButtonProps } from './button'
import { ChatIcon, DiagramTreeIcon, LockIcon } from '../../icons'
import { hiddenArgControl } from '../../util/storybook-utils'

const variants: ButtonProps['variant'][] = [
  'primary',
  'secondary',
  'minimal',
  'danger',
  'danger-secondary',
]
const icons = { undefined, ChatIcon, DiagramTreeIcon, LockIcon }
const iconArg = {
  description: 'Icon component',
  options: Object.keys(icons),
  mapping: icons,
}

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Badge Label',
    LeftIcon: undefined,
    RightIcon: undefined,
    loading: false,
  },
  argTypes: {
    onClick: hiddenArgControl,
    LeftIcon: iconArg,
    RightIcon: iconArg,
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Base: Story = {}
export const WithIcons: Story = {
  args: {
    LeftIcon: icons.ChatIcon,
    RightIcon: icons.LockIcon,
  },
}
export const Loading: Story = {
  args: { loading: true },
}
export const Disabled: Story = {
  args: { disabled: true },
}

export const Types: Story = {
  argTypes: { type: hiddenArgControl },
  render: ({ children, ...args }) => (
    <div className='flex flex-col gap-4'>
      {variants.map((variant) => (
        <Button key={variant} {...args} type='button' variant={variant}>
          {children}
        </Button>
      ))}
    </div>
  ),
}
