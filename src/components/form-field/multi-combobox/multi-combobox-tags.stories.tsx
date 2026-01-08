import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormField } from '../form-field'
import { hiddenArgControl } from '../../../util/storybook-utils'
import {
  MultiComboboxTagStory,
  multiComboboxArgTypes,
  multiComboboxArgs,
} from './multi-combobox.story-helpers'

const meta: Meta = {
  title: 'Input/MultiCombobox/Tags',
  component: FormField.MultiCombobox,
  args: multiComboboxArgs,
  argTypes: {
    ...multiComboboxArgTypes,
    value: hiddenArgControl,
    onChange: hiddenArgControl,
    className: hiddenArgControl,
  },
  parameters: {
    controls: {
      exclude: ['value', 'onChange', 'className'],
    },
  },
}

export default meta

type Story = StoryObj<typeof FormField.MultiCombobox>

export const Tags: Story = {
  render: ({ label, description, placeholder, width }) => (
    <div style={{ width }}>
      <MultiComboboxTagStory
        label={label as string}
        description={description as string}
        placeholder={placeholder as string}
      />
    </div>
  ),
}
