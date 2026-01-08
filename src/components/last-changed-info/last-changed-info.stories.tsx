import type { Meta, StoryObj } from '@storybook/react-vite'

import { LastChangedInfo } from './last-changed-info'

const meta: Meta<typeof LastChangedInfo> = {
  title: 'Last Changed Info',
  component: LastChangedInfo,
}

export default meta
type Story = StoryObj<typeof LastChangedInfo>

export const Default: Story = {
  render: (args) => <LastChangedInfo {...args} />,
  args: {
    changedDate: new Date(),
    changedBy: 'By_You',
    className: '',
  },
}
