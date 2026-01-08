import type { Meta, StoryObj } from '@storybook/react-vite'
import { Disclosure } from './disclosure'

const meta: Meta<typeof Disclosure> = {
  title: 'Disclosure',
  component: Disclosure,
  args: {
    buttonLabel: 'Disclosure Button',
    panelContent: 'Disclosure Content',
  },
  argTypes: {
    buttonLabel: { control: 'text' },
    panelContent: { control: 'text' },
  },
  parameters: {
    options: {
      showPanel: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof Disclosure>

export const Default: Story = {
  render: ({ buttonLabel, panelContent }) => (
    <div className='w-96'>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
    </div>
  ),
}

export const Stacked: Story = {
  render: ({ buttonLabel, panelContent }) => (
    <div className='w-96'>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
    </div>
  ),
}

export const DefaultOpen: Story = {
  render: ({ buttonLabel, panelContent }) => (
    <div className='w-96'>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
      <Disclosure defaultOpen>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
    </div>
  ),
}
