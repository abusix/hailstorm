import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useState } from 'react'
import { FormField } from '../form-field'

const meta: Meta<typeof FormField.RadioInput> = {
  title: 'Input/RadioInput',
  component: FormField.RadioInput,
  args: {
    label: 'Label',
    description: 'Description',
    optionOneLabel: 'Value 1',
    optionTwoLabel: 'Value 2',
    optionThreeLabel: 'Value 3',
    defaultValue: 'value_1',
    disableThirdOption: true,
  },
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    optionOneLabel: { control: 'text' },
    optionTwoLabel: { control: 'text' },
    optionThreeLabel: { control: 'text' },
    defaultValue: {
      control: 'select',
      options: ['value_1', 'value_2', 'value_3'],
    },
    disableThirdOption: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof FormField.RadioInput>

const RadioInputWithHooks = ({
  label,
  description,
  optionOneLabel,
  optionTwoLabel,
  optionThreeLabel,
  defaultValue,
  disableThirdOption,
}: {
  label: string
  description: string
  optionOneLabel: string
  optionTwoLabel: string
  optionThreeLabel: string
  defaultValue: string
  disableThirdOption: boolean
}) => {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  return (
    <FormField>
      <FormField.LabelGroup>
        <FormField.Label htmlFor='value'>{label}</FormField.Label>
        <FormField.Description id='value-description'>
          {description}
        </FormField.Description>
      </FormField.LabelGroup>
      <FormField.RadioInput id='value' value={value} onChange={setValue}>
        <FormField.RadioInput.Option value='value_1'>
          {optionOneLabel}
        </FormField.RadioInput.Option>
        <FormField.RadioInput.Option value='value_2'>
          {optionTwoLabel}
        </FormField.RadioInput.Option>
        <FormField.RadioInput.Option
          value='value_3'
          disabled={disableThirdOption}
        >
          {optionThreeLabel}
        </FormField.RadioInput.Option>
      </FormField.RadioInput>
    </FormField>
  )
}

export const Default: Story = {
  render: (args) => (
    <div className='w-72'>
      <RadioInputWithHooks {...args} />
    </div>
  ),
}
