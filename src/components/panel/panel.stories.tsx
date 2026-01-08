import type { Meta, StoryObj } from '@storybook/react-vite'
import { Panel } from './panel'
import { Button } from '../button/button'
import { getStoryDescription } from '../../util/storybook-utils'
import { Toggle } from '../toggle'

const meta: Meta<typeof Panel> = {
  title: 'Panel',
  parameters: {
    ...getStoryDescription(
      'Simple container used to group and organize elements in the UI.',
    ),
    backgrounds: {
      default: 'light',
    },
  },
  component: Panel,
  args: {
    className: '',
    children: 'Panel with text content',
  },
}

export default meta
type Story = StoryObj<typeof Panel>

export const Default: Story = {}

const noop = () => undefined
export const WithComponents: Story = {
  args: {
    children: (
      <>
        <Button variant='primary' onClick={noop}>
          Button A
        </Button>
        <Toggle.Switch checked ariaLabel='test' onChange={noop} />
        <Button variant='secondary' onClick={noop}>
          Button B
        </Button>
        <p> Paragraph content</p>
      </>
    ),
  },
}
