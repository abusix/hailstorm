/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormFieldGroup } from './form-field-group'
import { FormField } from './form-field'

type FormFieldGroupStoryArgs = {
  error: boolean
  disabled: boolean
  groupWidth: number
}

const meta: Meta<FormFieldGroupStoryArgs> = {
  title: 'Input / Combined Fields',
  args: {
    error: false,
    disabled: false,
    groupWidth: 480,
  },
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    groupWidth: { control: { type: 'range', min: 320, max: 720, step: 20 } },
  },
}

export default meta

type Story = StoryObj<FormFieldGroupStoryArgs>

const TextInputFields = ({
  error = false,
  disabled = false,
}: {
  error?: boolean
  disabled?: boolean
}) => {
  return (
    <div className='flex flex-col gap-5'>
      <FormField>
        <FormField.LabelGroup>
          <FormField.Label htmlFor='value'>Textfields Only</FormField.Label>
          <FormField.Description id='value-description'>
            A group with only textfields
          </FormField.Description>
        </FormField.LabelGroup>

        <FormField.Group>
          <FormField.TextInput
            id='value'
            value='I'
            placeholder='Placeholder'
            onChange={() => {}}
            ariaDescribedBy='value-description'
            error={error}
            disabled={disabled}
          />

          <FormField.TextInput
            id='value'
            value='Love'
            placeholder='Placeholder'
            onChange={() => {}}
            ariaDescribedBy='value-description'
            error={error}
            disabled={disabled}
          />

          <FormField.TextInput
            id='value'
            value='Abusix'
            placeholder='Placeholder'
            onChange={() => {}}
            ariaDescribedBy='value-description'
            error={error}
            disabled={disabled}
          />
        </FormField.Group>
      </FormField>

      <FormField>
        <FormField.LabelGroup>
          <FormField.Label htmlFor='value'>Mixed Fields</FormField.Label>
          <FormField.Description id='value-description'>
            A group with mixed fields (textfields and listboxes)
          </FormField.Description>
        </FormField.LabelGroup>

        <FormField.Group>
          <FormField.TextInput
            id='value'
            value='I'
            placeholder='Placeholder'
            onChange={() => {}}
            ariaDescribedBy='value-description'
            error={error}
            disabled={disabled}
          />

          <FormField.TextInput
            id='value'
            value='Love'
            placeholder='Placeholder'
            onChange={() => {}}
            ariaDescribedBy='value-description'
            error={error}
            disabled={disabled}
          />

          <FormField.TextInput
            id='value'
            value='Abusix'
            placeholder='Placeholder'
            onChange={() => {}}
            ariaDescribedBy='value-description'
            error={error}
            disabled={disabled}
          />

          <FormField.Listbox value='' onChange={() => {}}>
            <FormField.Listbox.Button>
              <FormField.Listbox.Button.TextValue
                value=''
                placeholder='Listbox'
              />
            </FormField.Listbox.Button>

            <div className='relative z-10'>
              <FormField.Listbox.Options>
                <FormField.Listbox.Option value='Option 1'>
                  <FormField.Listbox.Option.TextOption>
                    Option 1
                  </FormField.Listbox.Option.TextOption>
                </FormField.Listbox.Option>

                <FormField.Listbox.Option value='Option 2'>
                  <FormField.Listbox.Option.TextOption>
                    Option 2
                  </FormField.Listbox.Option.TextOption>
                </FormField.Listbox.Option>
              </FormField.Listbox.Options>
            </div>
          </FormField.Listbox>
        </FormField.Group>
      </FormField>
    </div>
  )
}

export const Default: Story = {
  render: ({ error, disabled, groupWidth }) => (
    <div style={{ width: groupWidth }}>
      <TextInputFields error={error} disabled={disabled} />
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className='w-120'>
      <TextInputFields error />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className='w-120'>
      <TextInputFields disabled />
    </div>
  ),
}
