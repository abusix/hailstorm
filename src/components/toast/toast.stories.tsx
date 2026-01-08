import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toast } from './toast'

const meta: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
  args: {
    title: 'Title',
    isClosable: true,
  },
}

export default meta

type Story = StoryObj<typeof Toast>

export const Info: Story = {
  render: (args) => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: 'info',
    onClose: () => alert('You clicked me!'),
  },
}

export const Warning: Story = {
  render: (args) => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: 'warning',
  },
}

export const Success: Story = {
  render: (args) => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: 'success',
  },
}

export const Danger: Story = {
  render: (args) => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: 'danger',
  },
}
