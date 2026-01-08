import type { Meta, StoryObj } from '@storybook/react-vite'

import { Alert, AlertProps } from './alert'
import {
  getStoryDescription,
  hiddenArgControl,
} from '../../util/storybook-utils'

const intents: AlertProps['intent'][] = ['info', 'success', 'warning', 'danger']

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  parameters: {
    layout: 'fullscreen',
    ...getStoryDescription(
      'Wide and big alert bar to inform user about important things',
    ),
  },
  args: {
    title: 'Alert Title',
    children: 'Alert content',
    intent: 'info',
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Basic: Story = {}

export const Intents: Story = {
  argTypes: { intent: hiddenArgControl },
  render: ({ children, ...args }) => (
    <div className='flex flex-col gap-4'>
      {intents.map((intent) => (
        <Alert key={intent} {...args} intent={intent}>
          {children}
        </Alert>
      ))}
    </div>
  ),
}

export const OnlyTitles: Story = {
  ...Intents,
  args: { children: undefined },
  argTypes: { ...Intents.argTypes, children: hiddenArgControl },
}
