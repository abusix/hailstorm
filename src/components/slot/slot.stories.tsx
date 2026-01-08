import type { Meta, StoryObj } from '@storybook/react-vite'
import { Slot } from './slot'

const meta: Meta<typeof Slot> = {
  title: 'Slot',
  component: Slot,
  args: {
    label: 'Slotted link',
    href: '/',
    className: 'text-primary-500 underline',
  },
  argTypes: {
    label: { control: 'text' },
    href: { control: 'text' },
    className: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof Slot>

export const Default: Story = {
  render: ({ label, href, className }) => (
    <Slot className={className}>
      <a href={href}>{label}</a>
    </Slot>
  ),
}

export const WithStyles: Story = {
  render: () => (
    <Slot
      className='rounded-sm bg-neutral-100 px-2 py-1'
      style={{ fontWeight: 600 }}
    >
      <button type='button'>Slotted button</button>
    </Slot>
  ),
}
