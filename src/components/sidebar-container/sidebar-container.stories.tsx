import type { Meta, StoryObj } from '@storybook/react-vite'
import { SidebarContainer } from './sidebar-container'

const meta: Meta<typeof SidebarContainer> = {
  title: 'SidebarContainer',
  component: SidebarContainer,
  args: {
    sidebarLabel: 'Sidebar Content',
    pageLabel: 'Page Content',
  },
  argTypes: {
    sidebarLabel: { control: 'text' },
    pageLabel: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof SidebarContainer>

export const Header: Story = {
  render: ({ sidebarLabel, pageLabel }) => (
    <SidebarContainer
      sidebarContent={<div>{sidebarLabel}</div>}
      pageContent={<div>{pageLabel}</div>}
    />
  ),
}
