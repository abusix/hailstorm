import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tag } from './tag'

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
}

export default meta

type Story = StoryObj<typeof Tag>

export const Default: Story = {
  render: (args) => (
    <div className='flex'>
      <Tag {...args}>Label</Tag>
    </div>
  ),
  args: {
    disabled: false,
  },
}

export const Interactive: Story = {
  argTypes: {
    ...Default.argTypes,
  },
  render: () => (
    <div className='flex'>
      <Tag onClick={() => alert('You clicked me!')}>Label</Tag>
    </div>
  ),
}
