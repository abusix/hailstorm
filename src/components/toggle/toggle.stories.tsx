import { useState, useEffect } from 'react'
/* eslint-disable react/jsx-props-no-spreading */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Toggle } from './toggle'

const meta: Meta<typeof Toggle> = {
  title: 'Toggle',
  component: Toggle,
}

export default meta

type ToggleWithHookProps = {
  checked: boolean
  disabled: boolean
}

type Story = StoryObj<ToggleWithHookProps>

const useControlledToggle = (checked: boolean) => {
  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const handleOnChange = () => setIsChecked((prev) => !prev)

  return { isChecked, handleOnChange }
}

const ToggleWithLabelStory = ({ checked, disabled }: ToggleWithHookProps) => {
  const { isChecked, handleOnChange } = useControlledToggle(checked)

  return (
    <Toggle>
      <Toggle.Switch
        checked={isChecked}
        disabled={disabled}
        onChange={handleOnChange}
        ariaLabel='Enable notifications'
      />
      <Toggle.Label>notifications</Toggle.Label>
    </Toggle>
  )
}

const ToggleWithoutLabelStory = ({
  checked,
  disabled,
}: ToggleWithHookProps) => {
  const { isChecked, handleOnChange } = useControlledToggle(checked)

  return (
    <Toggle.Switch
      checked={isChecked}
      disabled={disabled}
      onChange={handleOnChange}
      ariaLabel='Enable notifications'
    />
  )
}

export const Default: Story = {
  render: (args) => {
    return <ToggleWithLabelStory {...args} />
  },
  args: {
    checked: false,
    disabled: false,
  },
}

export const WithoutLabel: Story = {
  render: (args) => {
    return <ToggleWithoutLabelStory {...args} />
  },
  args: {
    ...Default.args,
  },
}
