import type { Meta, StoryObj } from '@storybook/react-vite'
import { SpinnerOverlay } from './spinner-overlay'

const meta: Meta<typeof SpinnerOverlay> = {
  title: 'SpinnerOverlay',
  component: SpinnerOverlay,
  args: {
    size: 'medium',
    opacity: 0.5,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    opacity: {
      control: { type: 'range', min: 0.1, max: 1, step: 0.1 },
    },
  },
}

export default meta

type Story = StoryObj<typeof SpinnerOverlay>

export const Default: Story = {
  render: (args) => (
    <div className='relative h-48 w-48'>
      <SpinnerOverlay {...args} />
    </div>
  ),
}
