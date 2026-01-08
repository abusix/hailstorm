import { useEffect, useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { TableUnvirtualized } from './table-unvirtualized'
import { Button } from '../button/button'

interface ExampleData {
  id: string
  name: string
  description: string
  price: number
}

function createExampleData(count = 20): ExampleData[] {
  const data: ExampleData[] = []

  for (let i = 0; i < count; i++) {
    const element: ExampleData = {
      id: i.toString(),
      name: `${i.toString()} name`,
      description: `${i.toString()} description`,
      price: i,
    }
    data.push(element)
  }
  return data
}

const DefaultStory = ({
  rowCount,
  headerName,
  headerDescription,
  headerPrice,
}: {
  rowCount: number
  headerName: string
  headerDescription: string
  headerPrice: string
}) => {
  const exampleData = useMemo(() => createExampleData(rowCount), [rowCount])

  return (
    <TableUnvirtualized>
      <TableUnvirtualized.Header>
        <TableUnvirtualized.Header.Row>
          <TableUnvirtualized.Header.Cell className='w-40'>
            {headerName}
          </TableUnvirtualized.Header.Cell>

          <TableUnvirtualized.Header.Cell>
            {headerDescription}
          </TableUnvirtualized.Header.Cell>

          <TableUnvirtualized.Header.Cell align='right'>
            {headerPrice}
          </TableUnvirtualized.Header.Cell>
        </TableUnvirtualized.Header.Row>
      </TableUnvirtualized.Header>

      <TableUnvirtualized.Body>
        {exampleData.map((item) => (
          <TableUnvirtualized.Body.Row key={item.id}>
            <TableUnvirtualized.Body.Cell>
              {item.name}
            </TableUnvirtualized.Body.Cell>

            <TableUnvirtualized.Body.Cell>
              {item.description}
            </TableUnvirtualized.Body.Cell>

            <TableUnvirtualized.Body.Cell align='right'>
              <span className='font-mono whitespace-nowrap'>
                $ {item.price.toFixed(2)}
              </span>
            </TableUnvirtualized.Body.Cell>
          </TableUnvirtualized.Body.Row>
        ))}
      </TableUnvirtualized.Body>
    </TableUnvirtualized>
  )
}

const meta: Meta<typeof DefaultStory> = {
  title: 'Table / Unvirtualized',
  component: DefaultStory,
  args: {
    rowCount: 20,
    headerName: 'Name',
    headerDescription: 'Description',
    headerPrice: 'Price',
  },
  argTypes: {
    rowCount: { control: { type: 'number', min: 0, max: 100, step: 1 } },
    headerName: { control: 'text' },
    headerDescription: { control: 'text' },
    headerPrice: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof DefaultStory>

export const Default: Story = {
  render: (args) => <DefaultStory {...args} />,
}

export const EmptyTable = () => {
  return (
    <TableUnvirtualized>
      <TableUnvirtualized.Header>
        <TableUnvirtualized.Header.Row>
          <TableUnvirtualized.Header.Cell className='w-40'>
            Name
          </TableUnvirtualized.Header.Cell>

          <TableUnvirtualized.Header.Cell>
            Description
          </TableUnvirtualized.Header.Cell>

          <TableUnvirtualized.Header.Cell align='right'>
            Price
          </TableUnvirtualized.Header.Cell>
        </TableUnvirtualized.Header.Row>
      </TableUnvirtualized.Header>

      <TableUnvirtualized.Body>
        <TableUnvirtualized.Body.EmptyPlaceholder
          title='Empty table'
          description='You have not added any items yet.'
          colSpan={3}
        >
          <Button variant='secondary' onClick={() => alert('clicked')}>
            Add New Item
          </Button>
        </TableUnvirtualized.Body.EmptyPlaceholder>
      </TableUnvirtualized.Body>
    </TableUnvirtualized>
  )
}

export const LoadingTable = () => {
  const [data, setData] = useState<ExampleData[]>([])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(createExampleData())
    }, 4000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <TableUnvirtualized>
      <TableUnvirtualized.Header>
        <TableUnvirtualized.Header.Row>
          <TableUnvirtualized.Header.Cell className='w-40'>
            Name
          </TableUnvirtualized.Header.Cell>

          <TableUnvirtualized.Header.Cell>
            Description
          </TableUnvirtualized.Header.Cell>

          <TableUnvirtualized.Header.Cell align='right'>
            Price
          </TableUnvirtualized.Header.Cell>
        </TableUnvirtualized.Header.Row>
      </TableUnvirtualized.Header>

      <TableUnvirtualized.Body>
        {data.length ?
          data.map((row) => (
            <TableUnvirtualized.Body.Row key={row.name}>
              <TableUnvirtualized.Body.Cell>
                {row.name}
              </TableUnvirtualized.Body.Cell>
              <TableUnvirtualized.Body.Cell>
                {row.description}
              </TableUnvirtualized.Body.Cell>
              <TableUnvirtualized.Body.Cell align='right'>
                <span className='font-mono whitespace-nowrap'>
                  $ {row.price.toFixed(2)}
                </span>
              </TableUnvirtualized.Body.Cell>
            </TableUnvirtualized.Body.Row>
          ))
        : <TableUnvirtualized.Body.LoadingIndicator colSpan={3} />}
      </TableUnvirtualized.Body>
    </TableUnvirtualized>
  )
}
