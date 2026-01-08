import type { Meta, StoryObj } from '@storybook/react-vite'
import { TopBar } from './top-bar'
import { Menu } from '../menu/menu'
import { ArrowTopRightIcon } from '../../icons'

type TopBarStoryArgs = {
  logoSrc: string
  activeLabel: string
  avatarLabel: string
}

const TopBarStory = ({
  logoSrc,
  activeLabel,
  avatarLabel,
}: TopBarStoryArgs) => (
  <TopBar>
    <TopBar.Logo src={logoSrc} />
    <TopBar.NavLinks>
      {['Dashboard', 'Cases', 'Events', 'Statistics', 'Mailbox'].map((item) => (
        <TopBar.NavLink key={item} isActive={item === activeLabel}>
          {item}
        </TopBar.NavLink>
      ))}
    </TopBar.NavLinks>
    <Menu>
      <TopBar.AvatarButton>{avatarLabel}</TopBar.AvatarButton>
      <Menu.Items>
        <Menu.InfoItem title='Abusix' subtitle='john.doe@abusix.com' />
        <Menu.Separator />
        <Menu.Item LeftIcon={ArrowTopRightIcon}>Portal</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Account Settings</Menu.Item>
        <Menu.Item>Plans & billing</Menu.Item>
        <Menu.Item>Team members</Menu.Item>
        <Menu.Item>My profile</Menu.Item>
        <Menu.Separator />
        <Menu.Item>User Settings</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Sign out</Menu.Item>
      </Menu.Items>
    </Menu>
  </TopBar>
)

const meta: Meta<typeof TopBarStory> = {
  title: 'TopBar',
  component: TopBarStory,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof TopBarStory>

export const Default: Story = {
  args: {
    logoSrc: 'https://placecats.com/80/80',
    activeLabel: 'Dashboard',
    avatarLabel: 'DS',
  },
  argTypes: {
    logoSrc: { control: 'text' },
    activeLabel: {
      control: 'select',
      options: ['Dashboard', 'Cases', 'Events', 'Statistics', 'Mailbox'],
    },
    avatarLabel: { control: 'text' },
  },
  render: (args) => <TopBarStory {...args} />,
}
