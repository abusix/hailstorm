import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { noControl, getStoryDescription } from "../../util/storybook-utils";
import { Tab } from "./tab";

const meta: Meta<typeof Tab> = {
  title: "Tab",
  component: Tab,
  parameters: getStoryDescription(
    "Tab component. For a detailed explanation on props, please visit the Headless UI [tab-group documentation](https://headlessui.com/react/tabs#tab-group)"
  ),
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Primary: Story = {
  render: (args) => (
    <Tab {...args}>
      <Tab.List>
        <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab>
  ),
  args: {
    type: "primary",
    vertical: false,
    manual: false,
    defaultIndex: 0,
  },
  argTypes: {
    as: noControl,
    refName: noControl,
    className: {
      control: {
        type: "text",
      },
    },
  },
};

export const Secondary: Story = {
  render: (args) => (
    <Tab type={args.type}>
      <Tab.List>
        <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab>
  ),
  args: {
    type: "secondary",
  },
};
