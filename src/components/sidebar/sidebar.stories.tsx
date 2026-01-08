import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sidebar } from './sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'Sidebar',
  component: Sidebar,
  args: {
    label: 'Example',
  },
  argTypes: {
    label: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Header: Story = {
  render: ({ label }) => <Sidebar.Header> {label} </Sidebar.Header>,
}
export const Menu: Story = {
  render: ({ label }) => <Sidebar.Menu> {label} </Sidebar.Menu>,
}
export const MenuHeader: Story = {
  render: ({ label }) => <Sidebar.MenuHeader> {label} </Sidebar.MenuHeader>,
}
