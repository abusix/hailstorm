import type { Meta, StoryObj } from '@storybook/react-vite'
import { BreadcrumbNavigation } from './breadcrumb-navigation'

const meta: Meta<typeof BreadcrumbNavigation> = {
  title: 'Breadcrumb Navigation',
  component: BreadcrumbNavigation,
  args: {},
}

export default meta

type Story = StoryObj<typeof BreadcrumbNavigation>

export const Base: Story = {
  render: () => (
    <div className='p-4'>
      <BreadcrumbNavigation>
        <BreadcrumbNavigation.Item href='/'>Home</BreadcrumbNavigation.Item>

        <BreadcrumbNavigation.Arrow />

        <BreadcrumbNavigation.Item href='/'>Library</BreadcrumbNavigation.Item>

        <BreadcrumbNavigation.Arrow />

        <BreadcrumbNavigation.Item asChild isActive>
          <a href='/'>Book</a>
        </BreadcrumbNavigation.Item>
      </BreadcrumbNavigation>
    </div>
  ),
}
