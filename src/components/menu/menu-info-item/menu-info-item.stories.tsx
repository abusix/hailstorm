/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { MenuInfoItem } from './menu-info-item'

const meta: Meta<typeof MenuInfoItem> = {
  title: 'Menu/MenuInfoItem',
  component: MenuInfoItem,
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    containerWidth: 208,
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    containerWidth: {
      control: { type: 'range', min: 120, max: 320, step: 8 },
    },
  },
}

export default meta
type Story = StoryObj<typeof MenuInfoItem>

export const Default: Story = {
  render: ({ title, subtitle, containerWidth }) => (
    <div style={{ width: containerWidth }}>
      <MenuInfoItem title={title} subtitle={subtitle} />
    </div>
  ),
}
