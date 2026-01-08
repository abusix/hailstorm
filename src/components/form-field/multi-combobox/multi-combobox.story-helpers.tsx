import { useState } from 'react'
import { FormField } from '../form-field'
import { Badge } from '../../badge/badge'
import { Tag } from '../../tag/tag'

export type MultiComboboxStoryArgs = {
  label: string
  description: string
  placeholder: string
  width: number
}

export const multiComboboxArgs: MultiComboboxStoryArgs = {
  label: 'Label',
  description: 'Description',
  placeholder: 'Select person...',
  width: 288,
}

export const multiComboboxArgTypes = {
  label: { control: 'text' },
  description: { control: 'text' },
  placeholder: { control: 'text' },
  width: { control: { type: 'range', min: 200, max: 360, step: 16 } },
}

const people = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
]

export const MultiComboboxTextStory = ({
  label,
  description,
  placeholder,
}: Pick<MultiComboboxStoryArgs, 'label' | 'description' | 'placeholder'>) => {
  const [selectedPersons, setSelectedPersons] = useState<string[]>([])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === '' ? people : (
      people.filter((person) => {
        return person.toLowerCase().includes(query.toLowerCase())
      })
    )

  return (
    <FormField>
      <FormField.LabelGroup>
        <FormField.Label htmlFor='value'>{label}</FormField.Label>
        <FormField.Description id='value-description'>
          {description}
        </FormField.Description>
      </FormField.LabelGroup>
      <FormField.MultiCombobox
        value={selectedPersons}
        onChange={(value) => setSelectedPersons(value)}
      >
        <FormField.MultiCombobox.Input
          id='value'
          displayValue={query}
          placeholder={placeholder}
          onChange={(event) => setQuery(event.target.value)}
        />
        <FormField.MultiCombobox.Options>
          {filteredPeople.length === 0 ?
            <FormField.MultiCombobox.EmptyOption>
              <p className='truncate'>
                No persons found for <em>{query}</em>
              </p>
            </FormField.MultiCombobox.EmptyOption>
          : null}
          {filteredPeople.map((person) => (
            <FormField.MultiCombobox.Option key={person} value={person}>
              {person}
            </FormField.MultiCombobox.Option>
          ))}
        </FormField.MultiCombobox.Options>
        {selectedPersons.length > 0 ?
          <FormField.MultiCombobox.Results>
            <FormField.MultiCombobox.Results.Label>
              Selected values:
            </FormField.MultiCombobox.Results.Label>
            <FormField.MultiCombobox.Results.Text>
              {selectedPersons.map((person) => person).join(', ')}
            </FormField.MultiCombobox.Results.Text>
          </FormField.MultiCombobox.Results>
        : null}
      </FormField.MultiCombobox>
    </FormField>
  )
}

export const MultiComboboxBadgeStory = ({
  label,
  description,
  placeholder,
}: Pick<MultiComboboxStoryArgs, 'label' | 'description' | 'placeholder'>) => {
  const [selectedPersons, setSelectedPersons] = useState<string[]>([])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === '' ? people : (
      people.filter((person) => {
        return person.toLowerCase().includes(query.toLowerCase())
      })
    )

  return (
    <FormField>
      <FormField.LabelGroup>
        <FormField.Label htmlFor='value'>{label}</FormField.Label>
        <FormField.Description id='value-description'>
          {description}
        </FormField.Description>
      </FormField.LabelGroup>
      <FormField.MultiCombobox
        value={selectedPersons}
        onChange={(value) => setSelectedPersons(value)}
      >
        <FormField.MultiCombobox.Input
          id='value'
          displayValue={query}
          placeholder={placeholder}
          onChange={(event) => setQuery(event.target.value)}
        />
        <FormField.MultiCombobox.Options>
          {filteredPeople.length === 0 ?
            <FormField.MultiCombobox.EmptyOption>
              <p className='truncate'>
                No persons found for <em>{query}</em>
              </p>
            </FormField.MultiCombobox.EmptyOption>
          : null}
          {filteredPeople.map((person) => (
            <FormField.MultiCombobox.Option key={person} value={person}>
              <Badge>{person}</Badge>
            </FormField.MultiCombobox.Option>
          ))}
        </FormField.MultiCombobox.Options>
        {selectedPersons.length > 0 ?
          <FormField.MultiCombobox.Results>
            <FormField.MultiCombobox.Results.Label>
              Selected values:
            </FormField.MultiCombobox.Results.Label>
            <FormField.MultiCombobox.Results.Badges>
              {selectedPersons.map((person) => {
                return <Badge key={person}>{person}</Badge>
              })}
            </FormField.MultiCombobox.Results.Badges>
          </FormField.MultiCombobox.Results>
        : null}
      </FormField.MultiCombobox>
    </FormField>
  )
}

export const MultiComboboxTagStory = ({
  label,
  description,
  placeholder,
}: Pick<MultiComboboxStoryArgs, 'label' | 'description' | 'placeholder'>) => {
  const [selectedPersons, setSelectedPersons] = useState<string[]>([])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === '' ? people : (
      people.filter((person) => {
        return person.toLowerCase().includes(query.toLowerCase())
      })
    )

  return (
    <FormField>
      <FormField.LabelGroup>
        <FormField.Label htmlFor='value'>{label}</FormField.Label>
        <FormField.Description id='value-description'>
          {description}
        </FormField.Description>
      </FormField.LabelGroup>
      <FormField.MultiCombobox
        value={selectedPersons}
        onChange={(value) => setSelectedPersons(value)}
      >
        <FormField.MultiCombobox.Input
          id='value'
          displayValue={query}
          placeholder={placeholder}
          onChange={(event) => setQuery(event.target.value)}
        />
        <FormField.MultiCombobox.Options>
          {filteredPeople.length === 0 ?
            <FormField.MultiCombobox.EmptyOption>
              <p className='truncate'>
                No persons found for <em>{query}</em>
              </p>
            </FormField.MultiCombobox.EmptyOption>
          : null}
          {filteredPeople.map((person) => (
            <FormField.MultiCombobox.Option key={person} value={person}>
              <Tag>{person}</Tag>
            </FormField.MultiCombobox.Option>
          ))}
        </FormField.MultiCombobox.Options>
        {selectedPersons.length > 0 ?
          <FormField.MultiCombobox.Results>
            <FormField.MultiCombobox.Results.Label>
              Selected values:
            </FormField.MultiCombobox.Results.Label>
            <FormField.MultiCombobox.Results.Tags>
              {selectedPersons.map((person) => {
                return (
                  <Tag
                    key={person}
                    onClick={() => {
                      setSelectedPersons(
                        selectedPersons.filter((p) => p !== person),
                      )
                    }}
                  >
                    {person}
                  </Tag>
                )
              })}
            </FormField.MultiCombobox.Results.Tags>
          </FormField.MultiCombobox.Results>
        : null}
      </FormField.MultiCombobox>
    </FormField>
  )
}

export const MultiComboboxCustomValueStory = ({
  label,
  description,
  placeholder,
}: Pick<MultiComboboxStoryArgs, 'label' | 'description' | 'placeholder'>) => {
  const [selectedPersons, setSelectedPersons] = useState<string[]>([])
  const [query, setQuery] = useState('')
  const [peopleCopy, setPeopleCopy] = useState(people)

  const handleSelectedPeopleChange = (value: string[]) => {
    const uniqueCustomValue = value.filter((valueItem) => {
      return peopleCopy.indexOf(valueItem) === -1
    })
    setQuery('')
    setPeopleCopy([...uniqueCustomValue, ...peopleCopy])
    setSelectedPersons(value)
  }

  const filteredPeople =
    query === '' ? peopleCopy : (
      peopleCopy.filter((person) => {
        return person.toLowerCase().includes(query.toLowerCase())
      })
    )

  return (
    <FormField>
      <FormField.LabelGroup>
        <FormField.Label htmlFor='value'>{label}</FormField.Label>
        <FormField.Description id='value-description'>
          {description}
        </FormField.Description>
      </FormField.LabelGroup>
      <FormField.MultiCombobox
        value={selectedPersons}
        onChange={handleSelectedPeopleChange}
      >
        <FormField.MultiCombobox.Input
          id='value'
          displayValue={query}
          placeholder={placeholder}
          onChange={(event) => setQuery(event.target.value)}
        />
        <FormField.MultiCombobox.Options>
          {query.length > 0 && peopleCopy.indexOf(query) === -1 && (
            <FormField.MultiCombobox.CustomOption value={query}>
              Create tag: <Tag>{query}</Tag>
            </FormField.MultiCombobox.CustomOption>
          )}
          {filteredPeople.map((person) => (
            <FormField.MultiCombobox.Option key={person} value={person}>
              <Tag>{person}</Tag>
            </FormField.MultiCombobox.Option>
          ))}
        </FormField.MultiCombobox.Options>
        {selectedPersons.length > 0 ?
          <FormField.MultiCombobox.Results>
            <FormField.MultiCombobox.Results.Label>
              Selected values:
            </FormField.MultiCombobox.Results.Label>
            <FormField.MultiCombobox.Results.Tags>
              {selectedPersons.map((person) => {
                return (
                  <Tag
                    key={person}
                    onClick={() => {
                      setSelectedPersons(
                        selectedPersons.filter((p) => p !== person),
                      )
                    }}
                  >
                    {person}
                  </Tag>
                )
              })}
            </FormField.MultiCombobox.Results.Tags>
          </FormField.MultiCombobox.Results>
        : null}
      </FormField.MultiCombobox>
    </FormField>
  )
}
