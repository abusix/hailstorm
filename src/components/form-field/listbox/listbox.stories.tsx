/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { FC, useState } from 'react'
import { FormField } from '../form-field'

type ListboxStoryArgs = {
  label: string
  description: string
  placeholder: string
  width: number
  disabled: boolean
}

const meta: Meta<ListboxStoryArgs> = {
  title: 'Input/Listbox',
  args: {
    label: 'Label',
    description: 'Description',
    placeholder: 'Select...',
    width: 288,
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    placeholder: { control: 'text' },
    width: { control: { type: 'range', min: 200, max: 360, step: 16 } },
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<ListboxStoryArgs>

interface Person {
  id: number
  name: string
  isDead?: boolean
}

const people: Person[] = [
  { id: 1, name: 'John Lennon', isDead: true },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

const ListboxTextWithHooks = ({
  label,
  description,
  placeholder,
}: {
  label: string
  description: string
  placeholder: string
}) => {
  const [selectedPerson, setSelectedPerson] = useState<null | Person>(null)

  return (
    <FormField>
      <FormField.LabelGroup>
        <FormField.Label htmlFor='value'>{label}</FormField.Label>
        <FormField.Description id='value-description'>
          {description}
        </FormField.Description>
      </FormField.LabelGroup>
      <FormField.Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <FormField.Listbox.Button>
          <FormField.Listbox.Button.TextValue
            value={selectedPerson?.name ?? null}
            placeholder={placeholder}
          />
        </FormField.Listbox.Button>
        <FormField.Listbox.Options>
          {people.map((person) => (
            <FormField.Listbox.Option
              value={person}
              key={person.id}
              disabled={person.isDead}
            >
              <FormField.Listbox.Option.TextOption>
                {person.name}
              </FormField.Listbox.Option.TextOption>
            </FormField.Listbox.Option>
          ))}
        </FormField.Listbox.Options>
      </FormField.Listbox>
    </FormField>
  )
}

const ListboxBadgeWithHooks: FC<{
  disabled?: boolean
  label: string
  description: string
  placeholder: string
}> = ({ disabled, label, description, placeholder }) => {
  const [selectedPerson, setSelectedPerson] = useState<null | Person>(null)

  return (
    <FormField>
      <FormField.LabelGroup>
        <FormField.Label htmlFor='value'>{label}</FormField.Label>
        <FormField.Description id='value-description'>
          {description}
        </FormField.Description>
      </FormField.LabelGroup>

      <FormField.Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <FormField.Listbox.Button disabled={disabled}>
          <FormField.Listbox.Button.BadgeValue
            value={selectedPerson?.name ?? null}
            placeholder={placeholder}
          />
        </FormField.Listbox.Button>

        <FormField.Listbox.Options>
          {people.map((person) => (
            <FormField.Listbox.Option value={person} key={person.id}>
              <FormField.Listbox.Option.BadgeOption>
                {person.name}
              </FormField.Listbox.Option.BadgeOption>
            </FormField.Listbox.Option>
          ))}
        </FormField.Listbox.Options>
      </FormField.Listbox>
    </FormField>
  )
}

const ListboxMultiWithHooks = ({
  label,
  description,
  placeholder,
}: {
  label: string
  description: string
  placeholder: string
}) => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
  const selectedLabels = selectedPeople.map((person) => person.name).join(', ')

  return (
    <FormField>
      <FormField.LabelGroup>
        <FormField.Label htmlFor='value'>{label}</FormField.Label>
        <FormField.Description id='value-description'>
          {description}
        </FormField.Description>
      </FormField.LabelGroup>
      <FormField.Listbox
        value={selectedPeople}
        onChange={setSelectedPeople}
        multiple
      >
        <FormField.Listbox.Button>
          <FormField.Listbox.Button.TextValue
            value={selectedLabels || null}
            placeholder={placeholder}
          />
        </FormField.Listbox.Button>
        <FormField.Listbox.Options>
          {people.map((person) => (
            <FormField.Listbox.Option
              value={person}
              key={person.id}
              disabled={person.isDead}
            >
              <FormField.Listbox.Option.TextOption>
                {person.name}
              </FormField.Listbox.Option.TextOption>
            </FormField.Listbox.Option>
          ))}
        </FormField.Listbox.Options>
      </FormField.Listbox>
    </FormField>
  )
}

export const Default: Story = {
  render: ({ label, description, placeholder, width }) => (
    <div style={{ width }}>
      <ListboxTextWithHooks
        label={label}
        description={description}
        placeholder={placeholder}
      />
    </div>
  ),
}

export const Badge: Story = {
  render: ({ label, description, placeholder, width, disabled }) => (
    <div style={{ width }}>
      <ListboxBadgeWithHooks
        label={label}
        description={description}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  ),
}

export const Disabled: Story = {
  render: ({ label, description, placeholder, width }) => (
    <div style={{ width }}>
      <ListboxBadgeWithHooks
        label={label}
        description={description}
        placeholder={placeholder}
        disabled
      />
    </div>
  ),
}

export const Multiple: Story = {
  render: ({ label, description, placeholder, width }) => (
    <div style={{ width }}>
      <ListboxMultiWithHooks
        label={label}
        description={description}
        placeholder={placeholder}
      />
    </div>
  ),
}
