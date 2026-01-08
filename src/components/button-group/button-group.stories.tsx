import type { Meta, StoryObj } from '@storybook/react-vite'
import { ButtonGroup } from './button-group'

const meta: Meta<typeof ButtonGroup> = {
  title: 'ButtonGroup',
  component: ButtonGroup,
  args: {
    normalLabel: 'Normal',
    disabledLabel: 'Disabled',
    activeLabel: 'Active',
    activeDisabledLabel: 'Active & Disabled',
    extraLabel: 'Button 1',
  },
  argTypes: {
    normalLabel: { control: 'text' },
    disabledLabel: { control: 'text' },
    activeLabel: { control: 'text' },
    activeDisabledLabel: { control: 'text' },
    extraLabel: { control: 'text' },
  },
  parameters: {
    options: {
      showPanel: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {
  render: ({
    normalLabel,
    disabledLabel,
    activeLabel,
    activeDisabledLabel,
    extraLabel,
  }) => (
    <ButtonGroup>
      <ButtonGroup.Button type='button'>{normalLabel}</ButtonGroup.Button>
      <ButtonGroup.Button type='button' disabled>
        {disabledLabel}
      </ButtonGroup.Button>
      <ButtonGroup.Button type='button' isActive>
        {activeLabel}
      </ButtonGroup.Button>
      <ButtonGroup.Button type='button' isActive disabled>
        {activeDisabledLabel}
      </ButtonGroup.Button>
      <ButtonGroup.Button type='button'>{extraLabel}</ButtonGroup.Button>
    </ButtonGroup>
  ),
}
