import type { Meta, StoryObj } from '@storybook/react-vite'
import { Page } from './page'

const meta: Meta<typeof Page> = {
  title: 'Page',
  component: Page,
  args: {
    title: 'Page Title',
    description: 'Description',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Page>

export const Default: Story = {
  render: ({ title, description }) => (
    <Page>
      <Page.Title>{title}</Page.Title>
      <Page.Description>{description}</Page.Description>
    </Page>
  ),
}
