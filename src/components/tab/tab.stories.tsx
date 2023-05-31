import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "./tab";

const meta: Meta<typeof Tab> = {
  title: "Tab",
  component: Tab,
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Primary: Story = {
  render: () => (
    <Tab>
      <Tab.List>
        <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Tab.List>
            <Tab.Button onClick={() => null}>Tab 1.1</Tab.Button>
            <Tab.Button onClick={() => null}>Tab 1.2</Tab.Button>
            <Tab.Button onClick={() => null}>Tab 1.3</Tab.Button>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>Content 1.1</Tab.Panel>
            <Tab.Panel>Content 1.2</Tab.Panel>
            <Tab.Panel>Content 1.3</Tab.Panel>
          </Tab.Panels>
        </Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab>
  ),
};

export const Seconday: Story = {
  render: () => (
    <Tab type="secondary">
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
};
