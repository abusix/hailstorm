import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './tab';
import { getStoryDescription, noControl } from '../../util/storybook-utils';
import { TabType } from './tab-context';

const meta: Meta<typeof Tab> = {
    title: 'Tab',
    component: Tab,
    parameters: getStoryDescription(
        'Tab component. For a detailed explanation on props, please visit the Headless UI [tab-group documentation](https://headlessui.com/react/tabs#tab-group)'
    ),
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
                    <p className="paragraph-200 pt-2">Content 1</p>
                </Tab.Panel>

                <Tab.Panel>
                    <p className="paragraph-200 pt-2">Content 2</p>
                </Tab.Panel>

                <Tab.Panel>
                    <p className="paragraph-200 pt-2">Content 3</p>
                </Tab.Panel>
            </Tab.Panels>
        </Tab>
    );
};

export const Primary: Story = {
    render: () => <TabsExample />,
};

export const Secondary: Story = {
    render: (args) => <TabsExample {...args} />,
    args: {
        type: 'secondary',
    },
};

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
                    <div className="pt-2">
                        <TabsExample />
                    </div>
                </Tab.Panel>

                <Tab.Panel>
                    <div className="pt-2">
                        <TabsExample />
                    </div>
                </Tab.Panel>

                <Tab.Panel>
                    <div className="pt-2">
                        <TabsExample />
                    </div>
                </Tab.Panel>
            </Tab.Panels>
        </Tab>
    ),
    args: {
        type: 'primary',
        vertical: false,
        manual: false,
        defaultIndex: 0,
    },
    argTypes: {
        as: noControl,
        refName: noControl,
        className: {
            control: {
                type: 'text',
            },
        },
    },
};
