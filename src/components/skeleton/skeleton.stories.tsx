import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton } from './skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Skeleton',
  component: Skeleton,
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: (args) => <Skeleton {...args} />,
  args: {
    className: 'w-96 h-8',
    isAnimated: false,
  },
}
