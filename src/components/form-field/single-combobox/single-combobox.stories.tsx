import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tag } from '../../tag/tag'
import { FormField } from '../form-field'
import { SingleCombobox } from './single-combobox'

const meta: Meta<typeof SingleCombobox> = {
  title: 'Input/SingleCombobox',
  component: SingleCombobox,
  args: {
    placeholder: 'Select person...',
    width: 288,
  },
  argTypes: {
    placeholder: { control: 'text' },
    width: { control: { type: 'range', min: 200, max: 360, step: 16 } },
  },
}

export default meta
type Story = StoryObj<typeof SingleCombobox>

const people = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
]

const SingleComboboxWithHooks = ({ placeholder }: { placeholder: string }) => {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null)
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === '' ? people : (
      people.filter((person) => {
        return person.toLowerCase().includes(query.toLowerCase())
      })
    )

  return (
    <FormField.SingleCombobox
      value={selectedPerson}
      onChange={(value) => {
        setQuery('')
        setSelectedPerson(value)
      }}
    >
      <SingleCombobox.Input
        id='value'
        placeholder={placeholder}
        onChange={(event) => setQuery(event.target.value)}
      />
      <FormField.SingleCombobox.Options>
        {filteredPeople.length === 0 ?
          <FormField.SingleCombobox.EmptyOption>
            <p className='truncate'>
              No persons found for <em>{query}</em>
            </p>
          </FormField.SingleCombobox.EmptyOption>
        : null}
        {filteredPeople.map((person) => (
          <FormField.SingleCombobox.Option key={person} value={person}>
            <Tag>{person}</Tag>
          </FormField.SingleCombobox.Option>
        ))}
      </FormField.SingleCombobox.Options>
    </FormField.SingleCombobox>
  )
}

interface Person {
  id: number
  name: string
  short: string
}

const peopleObjects: Person[] = [
  { id: 1, name: 'Durward Reynolds', short: 'Durward' },
  { id: 2, name: 'Kenton Towne', short: 'Kenton' },
  { id: 3, name: 'Therese Wunsch', short: 'Therese' },
  { id: 4, name: 'Benedict Kessler', short: 'Benedict' },
  { id: 5, name: 'Katelyn Rohan', short: 'Katelyn' },
]

const SingleComboboxObjectValueWithHooks = ({
  placeholder,
}: {
  placeholder: string
}) => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null)
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === '' ? peopleObjects : (
      peopleObjects.filter((person) => {
        return person.name.toLowerCase().includes(query.toLowerCase())
      })
    )

  return (
    <FormField.SingleCombobox
      value={selectedPerson}
      onChange={(value) => {
        setQuery('')
        setSelectedPerson(value)
      }}
    >
      <SingleCombobox.Input
        id='value'
        placeholder={placeholder}
        displayValue={(person: Person) => person.name}
        onChange={(event) => setQuery(event.target.value)}
      />
      <FormField.SingleCombobox.Options>
        {filteredPeople.map((person) => (
          <FormField.SingleCombobox.Option key={person.id} value={person}>
            <Tag>{person.short}</Tag>
          </FormField.SingleCombobox.Option>
        ))}
      </FormField.SingleCombobox.Options>
    </FormField.SingleCombobox>
  )
}

const SingleComboboxCustomValueWithHooks = ({
  placeholder,
}: {
  placeholder: string
}) => {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null)
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === '' ? people : (
      people.filter((person) => {
        return person.toLowerCase().includes(query.toLowerCase())
      })
    )

  return (
    <FormField.SingleCombobox
      value={selectedPerson}
      onChange={(value) => {
        setQuery('')
        setSelectedPerson(value)
      }}
    >
      <SingleCombobox.Input
        id='value'
        placeholder={placeholder}
        onChange={(event) => setQuery(event.target.value)}
      />
      <FormField.SingleCombobox.Options>
        {query.length > 0 && people.indexOf(query) === -1 && (
          <FormField.SingleCombobox.CustomOption value={query}>
            Create tag: <Tag>{query}</Tag>
          </FormField.SingleCombobox.CustomOption>
        )}

        {filteredPeople.map((person) => (
          <FormField.SingleCombobox.Option key={person} value={person}>
            <Tag>{person}</Tag>
          </FormField.SingleCombobox.Option>
        ))}
      </FormField.SingleCombobox.Options>
    </FormField.SingleCombobox>
  )
}

export const Default: Story = {
  render: ({ placeholder, width }) => (
    <div style={{ width }}>
      <SingleComboboxWithHooks placeholder={placeholder} />
    </div>
  ),
}

export const ObjectValue: Story = {
  render: ({ placeholder, width }) => (
    <div style={{ width }}>
      <SingleComboboxObjectValueWithHooks placeholder={placeholder} />
    </div>
  ),
}

export const CustomValue: Story = {
  render: ({ placeholder, width }) => (
    <div style={{ width }}>
      <SingleComboboxCustomValueWithHooks placeholder={placeholder} />
    </div>
  ),
}
