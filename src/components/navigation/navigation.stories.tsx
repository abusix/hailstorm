import type { Meta, StoryObj } from '@storybook/react-vite'
import { CogIcon, HelpIcon, InfoSignIcon } from '../../icons'
import { Navigation } from './navigation'

type NavigationStoryArgs = {
  logoText: string
  activeItemLabel: string
  activeItemTag: string
  supportLabel: string
  containerWidth: number
}

const NavigationStory = ({
  logoText,
  activeItemLabel,
  activeItemTag,
  supportLabel,
  containerWidth,
}: NavigationStoryArgs) => (
  <div
    className='relative flex min-h-screen flex-col'
    style={{ width: containerWidth }}
  >
    <Navigation>
      <Navigation.Logo>
        <div className='text-neutral-0'>{logoText}</div>
      </Navigation.Logo>
      <nav className='flex flex-1 flex-col'>
        <Navigation.Group>
          <Navigation.Group.Item>Home</Navigation.Group.Item>
          <Navigation.Group.Item>Dashboard</Navigation.Group.Item>
          <Navigation.Group.Item isActive tag={activeItemTag}>
            {activeItemLabel}
          </Navigation.Group.Item>
        </Navigation.Group>
        <Navigation.Group>
          <Navigation.Group.Item>Lookup & Delist</Navigation.Group.Item>
          <Navigation.Group.Item>Mail Intelligence</Navigation.Group.Item>
          <Navigation.Disclosure>
            <Navigation.Disclosure.Button tag='Beta'>
              AbuseHQ
            </Navigation.Disclosure.Button>
            <Navigation.Disclosure.Panel>
              <Navigation.Disclosure.Panel.Item>
                Cases
              </Navigation.Disclosure.Panel.Item>
              <Navigation.Disclosure.Panel.Item isActive>
                Event Inbox
              </Navigation.Disclosure.Panel.Item>
              <Navigation.Disclosure.Panel.Item>
                Mailbox
              </Navigation.Disclosure.Panel.Item>
              <Navigation.Disclosure.Panel.Item>
                Dashboard
              </Navigation.Disclosure.Panel.Item>
              <Navigation.Disclosure.Panel.Item>
                Statistics
              </Navigation.Disclosure.Panel.Item>
              <Navigation.Disclosure.Panel.Item>
                Settings
              </Navigation.Disclosure.Panel.Item>
            </Navigation.Disclosure.Panel>
          </Navigation.Disclosure>
        </Navigation.Group>
        <Navigation.Group>
          <Navigation.Group.Item>Networks</Navigation.Group.Item>
          <Navigation.Group.Item>Data Channels</Navigation.Group.Item>
        </Navigation.Group>
        <div className='mt-auto'>
          <Navigation.Popover>
            <Navigation.Popover.Button LeftIcon={HelpIcon}>
              {supportLabel}
            </Navigation.Popover.Button>
            <Navigation.Popover.Overlay />
            <Navigation.Popover.Panel>
              <Navigation.Popover.Panel.Item>
                Documentation
              </Navigation.Popover.Panel.Item>
              <Navigation.Popover.Panel.Item>
                Support request
              </Navigation.Popover.Panel.Item>
              <Navigation.Popover.Panel.Item>
                System status
              </Navigation.Popover.Panel.Item>
              <Navigation.Popover.Panel.Item>
                Blog posts
              </Navigation.Popover.Panel.Item>
            </Navigation.Popover.Panel>
          </Navigation.Popover>
          <Navigation.Disclosure>
            <Navigation.Disclosure.Button LeftIcon={InfoSignIcon}>
              Plans & Billing
            </Navigation.Disclosure.Button>
            <Navigation.Disclosure.Panel>
              <Navigation.Disclosure.Panel.Item isIndented>
                Subscriptions
              </Navigation.Disclosure.Panel.Item>
              <Navigation.Disclosure.Panel.Item isIndented>
                Billing
              </Navigation.Disclosure.Panel.Item>
              <Navigation.Disclosure.Panel.Item isIndented>
                Invoices
              </Navigation.Disclosure.Panel.Item>
            </Navigation.Disclosure.Panel>
          </Navigation.Disclosure>
          <Navigation.Disclosure>
            <Navigation.Disclosure.Button LeftIcon={CogIcon}>
              Settings
            </Navigation.Disclosure.Button>
            <Navigation.Disclosure.Panel>
              <Navigation.Disclosure.Panel.Item isIndented>
                Profile
              </Navigation.Disclosure.Panel.Item>
              <Navigation.Disclosure.Panel.Item isIndented>
                Team
              </Navigation.Disclosure.Panel.Item>
              <Navigation.Disclosure.Panel.Item isIndented>
                Sign out
              </Navigation.Disclosure.Panel.Item>
            </Navigation.Disclosure.Panel>
          </Navigation.Disclosure>
        </div>
      </nav>
    </Navigation>
  </div>
)

const meta: Meta<typeof NavigationStory> = {
  title: 'Navigation',
  component: NavigationStory,
  args: {
    logoText: 'Abusix',
    activeItemLabel: 'long text for this navigation menu option',
    activeItemTag: 'Beta',
    supportLabel: 'Support',
    containerWidth: 384,
  },
  argTypes: {
    logoText: { control: 'text' },
    activeItemLabel: { control: 'text' },
    activeItemTag: { control: 'text' },
    supportLabel: { control: 'text' },
    containerWidth: {
      control: { type: 'range', min: 240, max: 520, step: 16 },
    },
  },
  parameters: {
    options: {
      showPanel: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof NavigationStory>

export const Default: Story = {
  render: (args) => <NavigationStory {...args} />,
}
