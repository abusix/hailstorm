import { useState, useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sidesheet, SidesheetProps } from './sidesheet'
import { Button } from '../button'

const meta: Meta<typeof Sidesheet> = {
  title: 'Sidesheet',
  component: Sidesheet,
}

export default meta
type Story = StoryObj<typeof Sidesheet>

const SidesheetWithHooks = ({ isOpen }: SidesheetProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false)

  useEffect(() => {
    setInternalIsOpen(isOpen)
  }, [isOpen])

  function handleCloseModal() {
    setInternalIsOpen(false)
  }

  function handleClickOpenModal() {
    setInternalIsOpen(true)
  }

  return (
    <div>
      <Button
        onClick={() => {
          handleClickOpenModal()
        }}
      >
        Open Sidesheet
      </Button>

      <Sidesheet isOpen={internalIsOpen} onClose={() => handleCloseModal()}>
        <Sidesheet.Panel>
          <Sidesheet.PanelHeader>
            <Sidesheet.PanelHeader.Title>
              Modal Title
            </Sidesheet.PanelHeader.Title>
            <Sidesheet.PanelHeader.ActionGroup>
              <Button onClick={() => null}>Button 1</Button>
            </Sidesheet.PanelHeader.ActionGroup>
          </Sidesheet.PanelHeader>
          <Sidesheet.PanelContent>
            <p>Sidesheet Content</p>
          </Sidesheet.PanelContent>
        </Sidesheet.Panel>
      </Sidesheet>
    </div>
  )
}

export const Default: Story = {
  render: (args) => (
    <SidesheetWithHooks {...args}>
      <p>Hello</p>
    </SidesheetWithHooks>
  ),
  args: {
    isOpen: false,
  },
  argTypes: {
    initialFocus: {
      control: {
        type: 'text',
      },
    },
  },
}
