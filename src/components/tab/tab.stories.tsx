import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './tab';
import { TabType } from './tab-context';

const meta: Meta<typeof Tab> = {
  title: 'Tab',
  component: Tab,
};

export default meta;

type Story = StoryObj<typeof Tab>;

const TabsExample = ({ type = 'primary' }: { type?: TabType }) => {
  return (
    <Tab type={type}>
      <Tab.List>
        <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
      </Tab.List>
      
      <Tab.Panels>
        <Tab.Panel>
          <p className={'pt-2 paragraph-200'}>
            Content 1
          </p>
        </Tab.Panel>
        
        <Tab.Panel>
          <p className={'pt-2 paragraph-200'}>
            Content 2
          </p>
        </Tab.Panel>
        
        <Tab.Panel>
          <p className={'pt-2 paragraph-200'}>
            Content 3
          </p>
        </Tab.Panel>
      </Tab.Panels>
    </Tab>
  )
}

export const Primary: Story = {
  render: () => (
    <TabsExample/>
  ),
};

export const Seconday: Story = {
  render: () => (
    <TabsExample type="secondary"/>
  ),
};

export const NestedTabs: Story = {
  render: () => (
    <Tab>
      <Tab.List>
        <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
      </Tab.List>
      
      <Tab.Panels>
        <Tab.Panel>
          <div className="pt-2">
            <TabsExample/>
          </div>
        </Tab.Panel>
        
        <Tab.Panel>
          <div className="pt-2">
            <TabsExample/>
          </div>
        </Tab.Panel>
        
        <Tab.Panel>
          <div className="pt-2">
            <TabsExample/>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab>
  ),
};
