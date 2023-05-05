import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./tag";

const meta: Meta<typeof Tag> = {
  title: "Tag",
  component: Tag,
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: () => (
    <div className="flex">
      <Tag>Label</Tag>
    </div>
  ),
};

export const Interactive: Story = {
  argTypes: {
    ...Default.argTypes,
  },
  render: () => (
    <div className="flex">
      <Tag onClick={() => alert("You clicked me!")}>Label</Tag>
    </div>
  ),
};
