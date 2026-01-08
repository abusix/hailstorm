/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useState } from 'react'
import { FormField } from '../form-field'

const meta: Meta<typeof FormField.SearchInput> = {
  title: 'Input/SearchInput',
  component: FormField.SearchInput,
  args: {
    error: false,
    disabled: false,
    readOnly: false,
    value: '',
    label: 'Label',
    description: 'Description',
  },
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    value: { control: 'text' },
    label: { control: 'text' },
    description: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof FormField.SearchInput>

const SearchInputWithHooks = ({
  error = false,
  disabled = false,
  readOnly = false,
  value,
  label = 'Label',
  description = 'Description',
}: {
  error?: boolean
  disabled?: boolean
  readOnly?: boolean
  value?: string
  label?: string
  description?: string
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
      <FormField.SearchInput
        id='value'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ariaDescribedBy='value-description'
        error={error}
        disabled={disabled}
        readOnly={readOnly}
        onClear={() => {
          setInputValue('')
        }}
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
      <SearchInputWithHooks {...args} />
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className='w-72'>
      <SearchInputWithHooks error />
    </div>
  ),
}

export const ReadOnly: Story = {
  render: () => (
    <div className='w-72'>
      <SearchInputWithHooks readOnly value='Readonly text' />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className='w-72'>
      <SearchInputWithHooks disabled />
    </div>
  ),
}
