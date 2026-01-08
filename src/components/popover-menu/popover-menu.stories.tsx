import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChatIcon, DeleteIcon, EditIcon } from '../../icons'
import { PopoverMenu } from './popover-menu'

type PopoverMenuStoryArgs = {
  buttonLabel: string
  title: string
  itemLabel: string
  supportLabel: string
  dangerTitle: string
  dangerButtonLabel: string
  initialSelected: boolean
}

const PopoverMenuStory = ({
  buttonLabel,
  title,
  itemLabel,
  supportLabel,
  dangerTitle,
  dangerButtonLabel,
  initialSelected,
}: PopoverMenuStoryArgs) => {
  const [isActive, setIsActive] = useState(initialSelected)

  useEffect(() => {
    setIsActive(initialSelected)
  }, [initialSelected])

  return (
    <div className='relative flex min-h-screen min-w-[736px] flex-col'>
      <PopoverMenu>
        <PopoverMenu.Button variant='secondary'>
          {buttonLabel}
        </PopoverMenu.Button>

        <PopoverMenu.Overlay />

        <PopoverMenu.Panel>
          <PopoverMenu.Panel.Title>{title}</PopoverMenu.Panel.Title>

          <PopoverMenu.Panel.Item
            Icon={EditIcon}
            selected={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            {itemLabel}
          </PopoverMenu.Panel.Item>

          <PopoverMenu.Panel.Item Icon={ChatIcon} disabled>
            {supportLabel}
          </PopoverMenu.Panel.Item>

          <PopoverMenu.Panel.Divider />

          <PopoverMenu.Panel.Group>
            <PopoverMenu.Panel.Title>{dangerTitle}</PopoverMenu.Panel.Title>

            <PopoverMenu.Panel.Button Icon={DeleteIcon} variant='danger'>
              {dangerButtonLabel}
            </PopoverMenu.Panel.Button>
          </PopoverMenu.Panel.Group>
        </PopoverMenu.Panel>
      </PopoverMenu>
    </div>
  )
}

const meta: Meta<typeof PopoverMenuStory> = {
  title: 'Popover Menu',
  component: PopoverMenuStory,
  args: {
    buttonLabel: 'Open Popover Menu',
    title: 'You',
    itemLabel: 'Activate Mfa',
    supportLabel: 'Support',
    dangerTitle: 'Danger Zone',
    dangerButtonLabel: 'Close Dialog',
    initialSelected: false,
  },
  argTypes: {
    buttonLabel: { control: 'text' },
    title: { control: 'text' },
    itemLabel: { control: 'text' },
    supportLabel: { control: 'text' },
    dangerTitle: { control: 'text' },
    dangerButtonLabel: { control: 'text' },
    initialSelected: { control: 'boolean' },
  },
  parameters: {
    options: {
      showPanel: false,
    },
  },
}

export default meta

type Story = StoryObj<typeof PopoverMenuStory>

export const Default: Story = {
  render: (args) => <PopoverMenuStory {...args} />,
}
