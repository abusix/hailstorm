import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChatIcon } from '../../../icons'

import { Menu } from '../menu'
import { MenuItem } from './menu-item'

const meta: Meta<typeof MenuItem> = {
  title: 'Menu/MenuItem',
  component: MenuItem,
}

export default meta
type Story = StoryObj<typeof MenuItem>

export const Default: Story = {
  argTypes: {
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
  },
  render: (args) => (
    <div className='w-52'>
      <Menu>
        <MenuItem LeftIcon={ChatIcon} {...args}>
          Label
        </MenuItem>
      </Menu>
    </div>
  ),
}
