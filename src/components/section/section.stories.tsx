import type { Meta, StoryObj } from '@storybook/react-vite'
import { Section } from './section'
import { Button } from '../button/button'

const meta: Meta<typeof Section> = {
  title: 'Section',
  component: Section,
  args: {
    title: 'Section Title',
    description: 'Description',
    panelText: 'Place panel content here',
    actionLabel: 'Button',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    panelText: { control: 'text' },
    actionLabel: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Section>

export const Default: Story = {
  render: ({ title, description, panelText }) => (
    <Section>
      <Section.TitleGroup>
        <Section.Title>{title}</Section.Title>
        <Section.Description>{description}</Section.Description>
      </Section.TitleGroup>
      <Section.Panel>{panelText}</Section.Panel>
    </Section>
  ),
}

export const SectionWithAction: Story = {
  render: ({ title, description, panelText, actionLabel }) => (
    <Section>
      <Section.TitleGroup>
        <Section.Title>{title}</Section.Title>
        <div className='mb-4 flex w-full justify-between gap-4'>
          <Section.Description>{description}</Section.Description>
          <Button variant='primary' onClick={() => alert('clicked')}>
            {actionLabel}
          </Button>
        </div>
      </Section.TitleGroup>
      <Section.Panel>{panelText}</Section.Panel>
    </Section>
  ),
}
