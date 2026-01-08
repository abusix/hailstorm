import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spinner } from './spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Spinner',
  component: Spinner,
}

export default meta

type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  render: (args) => <Spinner {...args} />,
  args: {
    size: 'small',
  },
}
