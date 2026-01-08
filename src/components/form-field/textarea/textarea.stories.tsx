/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useState } from 'react'
import { FormField } from '../form-field'

const meta: Meta<typeof FormField.Textarea> = {
  title: 'Input/Textarea',
  component: FormField.Textarea,
  args: {
    error: false,
    disabled: false,
    label: 'Label',
    description: 'Description',
    placeholder: 'Placeholder',
    value: '',
  },
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    description: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof FormField.Textarea>

const TextareaWithHooks = ({
  error = false,
  disabled = false,
  label = 'Label',
  description = 'Description',
  placeholder = 'Placeholder',
  value = '',
}: {
  error?: boolean
  disabled?: boolean
  label?: string
  description?: string
  placeholder?: string
  value?: string
}) => {
  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <FormField>
      <FormField.LabelGroup>
        <FormField.Label htmlFor='value'>{label}</FormField.Label>
        <FormField.Description id='value-description'>
          {description}
        </FormField.Description>
      </FormField.LabelGroup>
      <FormField.Textarea
        id='value'
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => setInputValue(e.target.value)}
        ariaDescribedBy='value-description'
        error={error}
        disabled={disabled}
      />
      {error ?
        <FormField.ErrorMessage>Error message.</FormField.ErrorMessage>
      : null}
    </FormField>
  )
}

export const Default: Story = {
  render: (args) => (
    <div className='w-72'>
      <TextareaWithHooks {...args} />
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className='w-72'>
      <TextareaWithHooks error />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className='w-72'>
      <TextareaWithHooks disabled />
    </div>
  ),
}
