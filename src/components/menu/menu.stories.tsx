import type { Meta, StoryObj } from '@storybook/react-vite'
import { Menu } from './menu'

type MenuStoryArgs = {
  buttonLabel: string
  menuTitle: string
  itemLabel: string
  itemCount: number
  disabledFirstItem: boolean
  containerWidth: number
}

const MenuStory = ({
  buttonLabel,
  menuTitle,
  itemLabel,
  itemCount,
  disabledFirstItem,
  containerWidth,
}: MenuStoryArgs) => (
  <div style={{ width: containerWidth }}>
    <Menu>
      <Menu.Button>{buttonLabel}</Menu.Button>
      <Menu.Items>
        <Menu.Title>{menuTitle}</Menu.Title>
        {Array.from({ length: itemCount }).map((_, index) => (
          <Menu.Item
            // eslint-disable-next-line react/no-array-index-key
            key={`${menuTitle}-${index}`}
            disabled={disabledFirstItem && index === 0}
          >
            {itemLabel}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  </div>
)

const meta: Meta<typeof MenuStory> = {
  title: 'Menu',
  component: MenuStory,
  args: {
    buttonLabel: 'Open Menu',
    menuTitle: 'TITLE',
    itemLabel: 'Label',
    itemCount: 3,
    disabledFirstItem: false,
    containerWidth: 208,
  },
  argTypes: {
    buttonLabel: { control: 'text' },
    menuTitle: { control: 'text' },
    itemLabel: { control: 'text' },
    itemCount: { control: { type: 'number', min: 1, max: 6, step: 1 } },
    disabledFirstItem: { control: 'boolean' },
    containerWidth: {
      control: { type: 'range', min: 120, max: 320, step: 8 },
    },
  },
}

export default meta
type Story = StoryObj<typeof MenuStory>

export const Default: Story = {
  render: (args) => <MenuStory {...args} />,
}
