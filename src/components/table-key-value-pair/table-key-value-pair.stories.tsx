import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { TableKeyValuePair } from './table-key-value-pair'
import { FormField } from '../form-field'

const meta: Meta<typeof TableKeyValuePair> = {
  title: 'Table / Key-Value Pairs',
  component: TableKeyValuePair,
  args: {
    header: 'Details',
    firstNameLabel: 'First Name',
    firstNameValue: 'John',
    ageLabel: 'Age',
    ageValue: '44',
    lastNameLabel: 'Last Name',
    lastNameValue: 'Doe',
    birthLabel: 'Birth',
    birthValue: '01.01.1970',
    linkLabel: 'Open Comments',
  },
  argTypes: {
    header: { control: 'text' },
    firstNameLabel: { control: 'text' },
    firstNameValue: { control: 'text' },
    ageLabel: { control: 'text' },
    ageValue: { control: 'text' },
    lastNameLabel: { control: 'text' },
    lastNameValue: { control: 'text' },
    birthLabel: { control: 'text' },
    birthValue: { control: 'text' },
    linkLabel: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof TableKeyValuePair>

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

const ExampleListbox = () => {
  const [selectedPerson, setSelectedPerson] = useState<null | Person>(null)

  return (
    <FormField>
      <FormField.Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <FormField.Listbox.Button>
          <FormField.Listbox.Button.TextValue
            value={selectedPerson?.name ?? null}
            placeholder='Select...'
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
  render: ({
    header,
    firstNameLabel,
    firstNameValue,
    ageLabel,
    ageValue,
    lastNameLabel,
    lastNameValue,
    birthLabel,
    birthValue,
    linkLabel,
  }) => (
    <div className='min-h-120'>
      <TableKeyValuePair>
        <TableKeyValuePair.Header colSpan={4}>
          {header}
        </TableKeyValuePair.Header>

        <TableKeyValuePair.Body>
          <TableKeyValuePair.Body.Row>
            <TableKeyValuePair.Body.Key>
              {firstNameLabel}
            </TableKeyValuePair.Body.Key>
            <TableKeyValuePair.Body.Value>
              {firstNameValue}
            </TableKeyValuePair.Body.Value>

            <TableKeyValuePair.Body.Key>{ageLabel}</TableKeyValuePair.Body.Key>
            <TableKeyValuePair.Body.Value>
              {ageValue}
            </TableKeyValuePair.Body.Value>
          </TableKeyValuePair.Body.Row>

          <TableKeyValuePair.Body.Row>
            <TableKeyValuePair.Body.Key>
              {lastNameLabel}
            </TableKeyValuePair.Body.Key>
            <TableKeyValuePair.Body.Value>
              {lastNameValue}
            </TableKeyValuePair.Body.Value>

            <TableKeyValuePair.Body.Key>
              {birthLabel}
            </TableKeyValuePair.Body.Key>
            <TableKeyValuePair.Body.Value>
              {birthValue}
            </TableKeyValuePair.Body.Value>
          </TableKeyValuePair.Body.Row>

          <TableKeyValuePair.Body.Row>
            <TableKeyValuePair.Body.Key>Status</TableKeyValuePair.Body.Key>
            <TableKeyValuePair.Body.Value>
              <ExampleListbox />
            </TableKeyValuePair.Body.Value>

            <TableKeyValuePair.Body.Value colSpan={2}>
              <a href='https://abusix.com' className='inline-link'>
                {linkLabel}
              </a>
            </TableKeyValuePair.Body.Value>
          </TableKeyValuePair.Body.Row>
        </TableKeyValuePair.Body>
      </TableKeyValuePair>
    </div>
  ),
}
