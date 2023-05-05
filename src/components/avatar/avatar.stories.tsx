/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./avatar";
import React from "react";

const meta: Meta<typeof Avatar> = {
  title: "Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (args) => <Avatar color="primary">Label</Avatar>,
};
