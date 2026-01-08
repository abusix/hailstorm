import type { Meta, StoryObj } from '@storybook/react-vite'

import { DividerLine } from './divider-line'

const meta: Meta<typeof DividerLine> = {
  title: 'DividerLine',
  component: DividerLine,
  args: {
    padding: 8,
    showIcons: true,
  },
  argTypes: {
    padding: { control: { type: 'range', min: 0, max: 32, step: 2 } },
    showIcons: { control: 'boolean' },
  },
  parameters: { layout: 'fullscreen' },
  render: ({ padding, showIcons }) => (
    <div style={{ padding }}>
      {showIcons ?
        <span>🌞</span>
      : null}
      <DividerLine />
      {showIcons ?
        <span>🌙</span>
      : null}
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof DividerLine>

export const Default: Story = {}
