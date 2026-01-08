import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconButton, IconButtonProps } from './icon-button'
import { WalkIcon } from '../../icons'

const VariantTypes: IconButtonProps['variant'][] = [
  'primary',
  'secondary',
  'minimal',
  'danger',
  'danger-secondary',
]

const meta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
  args: {
    variant: 'primary',
    disabled: false,
    Icon: WalkIcon,
  },
  argTypes: {
    variant: { options: VariantTypes },
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Default: Story = {}
