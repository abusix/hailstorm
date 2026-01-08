import type { Meta, StoryObj } from '@storybook/react-vite'
import { getStoryDescription } from '../../util/storybook-utils'
import { Tab } from './tab'
import { TabType } from './tab-context'

const meta: Meta<typeof Tab> = {
  title: 'Tab',
  component: Tab,
  parameters: {
    ...getStoryDescription(
      'Tab component. For a detailed explanation on props, please visit the Headless UI [tab-group documentation](https://headlessui.com/react-vite/tabs#tab-group)',
    ),
    docs: { source: { type: 'auto' } },
  },
}

export default meta

type Story = StoryObj<typeof Tab>

export const Primary: Story = {
  render: (args) => (
    <Tab {...args}>
      <Tab.List>
        <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel>
          <p className='paragraph-200 pt-2'>Content 1</p>
        </Tab.Panel>

        <Tab.Panel>
          <p className='paragraph-200 pt-2'>Content 2</p>
        </Tab.Panel>

        <Tab.Panel>
          <p className='paragraph-200 pt-2'>Content 3</p>
        </Tab.Panel>
      </Tab.Panels>
    </Tab>
  ),
  args: { type: 'primary' as TabType },
}

export const Secondary: Story = {
  render: (args) => (
    <Tab {...args}>
      <Tab.List>
        <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel>
          <p className='paragraph-200 pt-2'>Content 1</p>
        </Tab.Panel>

        <Tab.Panel>
          <p className='paragraph-200 pt-2'>Content 2</p>
        </Tab.Panel>

        <Tab.Panel>
          <p className='paragraph-200 pt-2'>Content 3</p>
        </Tab.Panel>
      </Tab.Panels>
    </Tab>
  ),
  args: { type: 'secondary' as TabType },
}

export const NestedTabs: Story = {
  render: (args) => (
    <Tab {...args}>
      <Tab.List>
        <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel>
          <div className='pt-2'>
            <Tab type='primary'>
              <Tab.List>
                <Tab.Button onClick={() => null}>Nested Tab 1</Tab.Button>
                <Tab.Button onClick={() => null}>Nested Tab 2</Tab.Button>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <p className='paragraph-200 pt-2'>Nested Content 1</p>
                </Tab.Panel>
                <Tab.Panel>
                  <p className='paragraph-200 pt-2'>Nested Content 2</p>
                </Tab.Panel>
              </Tab.Panels>
            </Tab>
          </div>
        </Tab.Panel>

        <Tab.Panel>
          <div className='pt-2'>
            <Tab type='primary'>
              <Tab.List>
                <Tab.Button onClick={() => null}>Nested Tab A</Tab.Button>
                <Tab.Button onClick={() => null}>Nested Tab B</Tab.Button>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <p className='paragraph-200 pt-2'>Nested Content A</p>
                </Tab.Panel>
                <Tab.Panel>
                  <p className='paragraph-200 pt-2'>Nested Content B</p>
                </Tab.Panel>
              </Tab.Panels>
            </Tab>
          </div>
        </Tab.Panel>

        <Tab.Panel>
          <div className='pt-2'>
            <Tab type='primary'>
              <Tab.List>
                <Tab.Button onClick={() => null}>Nested Tab X</Tab.Button>
                <Tab.Button onClick={() => null}>Nested Tab Y</Tab.Button>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <p className='paragraph-200 pt-2'>Nested Content X</p>
                </Tab.Panel>
                <Tab.Panel>
                  <p className='paragraph-200 pt-2'>Nested Content Y</p>
                </Tab.Panel>
              </Tab.Panels>
            </Tab>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab>
  ),
  args: { type: 'primary', vertical: false, manual: false, defaultIndex: 0 },
  argTypes: { className: { control: { type: 'text' } } },
}

export const WithIndicator: Story = {
  render: (args) => (
    <Tab {...args}>
      <Tab.List>
        <Tab.Button onClick={() => null}>All</Tab.Button>
        <Tab.Button onClick={() => null} hasIndicator>
          With Indicator
        </Tab.Button>
        <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel>
          <p className='paragraph-200 pt-2'>All content</p>
        </Tab.Panel>

        <Tab.Panel>
          <p className='paragraph-200 pt-2'>Decision needed content</p>
        </Tab.Panel>

        <Tab.Panel>
          <p className='paragraph-200 pt-2'>Content 3</p>
        </Tab.Panel>
      </Tab.Panels>
    </Tab>
  ),
  args: { type: 'primary' as TabType },
}
