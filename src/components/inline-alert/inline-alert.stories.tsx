import type { Meta, StoryObj } from '@storybook/react-vite'

import { InlineAlert, InlineAlertProps } from './inline-alert'
import { getStoryDescription } from '../../util/storybook-utils'

const intents: InlineAlertProps['intent'][] = [
  'info',
  'success',
  'warning',
  'danger',
]

const meta: Meta<typeof InlineAlert> = {
  component: InlineAlert,
  title: 'Inline Alert',
  parameters: getStoryDescription(
    'Inline alert text to inform user about contextual things',
  ),
  args: {
    title: 'Alert title',
    children: 'Alert text',
  },
}

export default meta

type Story = StoryObj<typeof InlineAlert>

export const Basic: Story = {}

export const Intents: Story = {
  argTypes: {
    intent: { table: { disable: true } },
  },
  render: ({ children, ...args }) => (
    <div className='flex flex-col gap-4'>
      {intents.map((intent) => (
        <InlineAlert key={intent} {...args} intent={intent}>
          {children}
        </InlineAlert>
      ))}
    </div>
  ),
}

export const OnlyTitles: Story = {
  ...Intents,
  args: { children: undefined },
}
