import { useEffect, useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { createColumnHelper } from '@tanstack/react-table'
import { TableVirtualized, WithDragAndDrop } from './table-virtualized'
import { Button } from '../button'
import { IconButton } from '../icon-button'
import { TableUnvirtualized } from '../table-unvirtualized'
import { DividerLine } from '../divider-line'
import { TrashIcon } from '../../icons'

interface ExampleData {
  name: string
  description: string
  price: number
  action: string
}

function createExampleData(count = 20): ExampleData[] {
  const data: ExampleData[] = []

  for (let i = 0; i < count; i++) {
    const element: ExampleData = {
      name: `${i.toString()} name`,
      description: `${i.toString()} description`,
      price: i,
      action: `${i.toString()} action`,
    }
    data.push(element)
  }
  return data
}

const DefaultStory = ({
  rowCount,
  showDivider,
  expandableRows,
}: {
  rowCount: number
  showDivider: boolean
  expandableRows: boolean
}) => {
  const columnHelper = createColumnHelper<ExampleData>()
  const exampleData = useMemo(() => createExampleData(rowCount), [rowCount])
  const [data, setData] = useState<ExampleData[]>(exampleData)

  const columnDefs = [
    columnHelper.accessor('name', {
      header: 'Team Members',
      enableSorting: true,
    }),
    columnHelper.accessor('description', {
      header: 'Description',
      enableSorting: true,
    }),
  ]

  return (
    <>
      <div className='h-[500px]'>
        <TableVirtualized<ExampleData>
          data={data}
          columnDefs={columnDefs}
          isExpandableRowsEnabled={expandableRows}
          getExpandableContent={(row) => (
            <p className='paragraph-100'>{row.original.description}</p>
          )}
        />
      </div>

      {showDivider ?
        <DividerLine />
      : null}

      <p className='paragraph-300 mb-8'>
        Entries: {data.length.toLocaleString()}
      </p>

      <Button
        variant='primary'
        onClick={() => setData(createExampleData(rowCount))}
      >
        Recreate Data
      </Button>
    </>
  )
}

const meta: Meta<typeof DefaultStory> = {
  title: 'Table / Virtualized',
  component: DefaultStory,
  args: {
    rowCount: 20,
    showDivider: true,
    expandableRows: true,
  },
  argTypes: {
    rowCount: { control: { type: 'number', min: 0, max: 100, step: 1 } },
    showDivider: { control: 'boolean' },
    expandableRows: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof DefaultStory>

export const Default: Story = {
  render: (args) => <DefaultStory {...args} />,
}

export const Draggable = () => {
  const columnHelper = createColumnHelper<ExampleData>()
  const exampleData = useMemo(() => createExampleData(), [])
  const [data, setData] = useState<ExampleData[]>(exampleData)

  const columnDefs = [
    columnHelper.accessor('name', {
      header: 'Team Members',
      enableSorting: true,
      meta: {
        width: '200px',
      },
    }),
    columnHelper.accessor('description', {
      header: 'Description',
      enableSorting: true,
    }),
    columnHelper.accessor('action', {
      header: 'Action',
      enableSorting: false,
      meta: {
        textAlign: 'right',
        width: 80,
      },
      cell: (row) => (
        <IconButton
          onClick={() => row.getValue()}
          Icon={TrashIcon}
          variant='danger'
        />
      ),
    }),
  ]

  return (
    <>
      <WithDragAndDrop<ExampleData>
        isDraggableRowsEnabled
        data={data}
        columnDefs={columnDefs}
      />

      <DividerLine />

      <p className='paragraph-300 mb-8'>
        Entries: {data.length.toLocaleString()}
      </p>

      <Button variant='primary' onClick={() => setData(createExampleData())}>
        Recreate Data
      </Button>
    </>
  )
}

export const DraggableAndExpandable = () => {
  const columnHelper = createColumnHelper<ExampleData>()
  const exampleData = useMemo(() => createExampleData(), [])
  const [data, setData] = useState<ExampleData[]>(exampleData)

  const columnDefs = [
    columnHelper.accessor('name', {
      header: 'Team Members',
      enableSorting: true,
      meta: {
        width: '200px',
      },
    }),
    columnHelper.accessor('description', {
      header: 'Description',
      enableSorting: true,
    }),
  ]

  return (
    <>
      <WithDragAndDrop<ExampleData>
        isDraggableRowsEnabled
        isExpandableRowsEnabled
        // eslint-disable-next-line react/no-unstable-nested-components
        getExpandableContent={(row) => (
          <p className='paragraph-100'>{row.original.description}</p>
        )}
        data={data}
        columnDefs={columnDefs}
      />

      <DividerLine />

      <p className='paragraph-300 mb-8'>
        Entries: {data.length.toLocaleString()}
      </p>

      <Button variant='primary' onClick={() => setData(createExampleData())}>
        Recreate Data
      </Button>
    </>
  )
}

export const EmptyTable = () => {
  const columnHelper = createColumnHelper<ExampleData>()
  const exampleData: ExampleData[] = []

  const columnDefs = [
    columnHelper.accessor('name', {
      header: 'Team Members',
      enableSorting: true,
      meta: {
        width: '200px',
      },
    }),
    columnHelper.accessor('description', {
      header: 'Description',
      enableSorting: true,
    }),
  ]

  return (
    <WithDragAndDrop<ExampleData>
      isDraggableRowsEnabled
      data={exampleData}
      columnDefs={columnDefs}
      isExpandableRowsEnabled
      // eslint-disable-next-line react/no-unstable-nested-components
      getExpandableContent={(row) => (
        <p className='paragraph-100'>{row.original.description}</p>
      )}
      placeholder={
        <TableUnvirtualized.Body.EmptyPlaceholder
          title='Empty table'
          description='You have not added any items yet.'
          // +1 because of the additional drag column
          colSpan={columnDefs.length + 1}
        >
          <Button variant='secondary' onClick={() => alert('clicked')}>
            Add New Item
          </Button>
        </TableUnvirtualized.Body.EmptyPlaceholder>
      }
    />
  )
}

export const LoadingTable = () => {
  const columnHelper = createColumnHelper<ExampleData>()
  const [data, setData] = useState<ExampleData[]>([])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(createExampleData())
    }, 4000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const columnDefs = [
    columnHelper.accessor('name', {
      header: 'Team Members',
      enableSorting: true,
      meta: {
        width: '200px',
      },
    }),
    columnHelper.accessor('description', {
      header: 'Description',
      enableSorting: true,
    }),
  ]

  return (
    <div className='h-96 overflow-y-scroll'>
      <WithDragAndDrop<ExampleData>
        isDraggableRowsEnabled
        data={data}
        columnDefs={columnDefs}
        placeholder={
          <TableUnvirtualized.Body.LoadingIndicator
            // +1 because of the additional drag column
            colSpan={columnDefs.length + 1}
          />
        }
      />
    </div>
  )
}
