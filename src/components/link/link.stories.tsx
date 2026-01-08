import type { Meta, StoryObj } from '@storybook/react-vite'
import { Link } from './link'
import { ChatIcon, DiagramTreeIcon, LockIcon } from '../../icons'
import { hiddenArgControl } from '../../util/storybook-utils'

const icons = { undefined, ChatIcon, DiagramTreeIcon, LockIcon }
const iconArg = {
  description: 'Icon component',
  options: Object.keys(icons),
  mapping: icons,
}

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  args: {
    children: 'Link Label',
    LeftIcon: undefined,
    RightIcon: undefined,
  },
  argTypes: {
    LeftIcon: iconArg,
    RightIcon: iconArg,
    asChild: hiddenArgControl,
  },
}

export default meta

type Story = StoryObj<typeof Link>

export const Default: Story = {
  render: (args) => (
    <Link href='https://www.google.de/' {...args} asChild={false}>
      {args.children}
    </Link>
  ),
}

export const AsChild: Story = {
  render: (args) => (
    <Link {...args} asChild>
      <a href='https://www.google.de/'>{args.children}</a>
    </Link>
  ),
}

export const WithChilds: Story = {
  argTypes: {
    children: hiddenArgControl,
  },
  render: (args) => (
    <Link href='https://www.google.de/' {...args} asChild={false}>
      <div>
        <span>Nested</span>
        <span>Elements</span>
      </div>
    </Link>
  ),
}
