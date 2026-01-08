/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { MenuSeparator } from './menu-separator'

const meta: Meta<typeof MenuSeparator> = {
  title: 'Menu/MenuSeparator',
  component: MenuSeparator,
  args: {
    containerWidth: 208,
  },
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 120, max: 320, step: 8 },
    },
  },
}

export default meta
type Story = StoryObj<typeof MenuSeparator>

export const Default: Story = {
  render: ({ containerWidth }) => (
    <div style={{ width: containerWidth }}>
      <MenuSeparator />
    </div>
  ),
}
