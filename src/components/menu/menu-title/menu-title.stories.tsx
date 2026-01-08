/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { MenuTitle } from './menu-title'

const meta: Meta<typeof MenuTitle> = {
  title: 'Menu/MenuTitle',
  component: MenuTitle,
  args: {
    title: 'Title',
    containerWidth: 208,
  },
  argTypes: {
    title: { control: 'text' },
    containerWidth: {
      control: { type: 'range', min: 120, max: 320, step: 8 },
    },
  },
}

export default meta
type Story = StoryObj<typeof MenuTitle>

export const Default: Story = {
  render: ({ title, containerWidth }) => (
    <div style={{ width: containerWidth }}>
      <MenuTitle>{title}</MenuTitle>
    </div>
  ),
}
