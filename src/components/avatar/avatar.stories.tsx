/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from "@storybook/react";
import type { AvatarProps } from "./avatar";
import { Avatar } from "./avatar";
import React from "react";
import { getStoryDescription } from "../../util/storybook-utils";

const colors: AvatarProps["color"][] = [
  "primary",
  "success",
  "neutral",
  "warning",
  "danger",
];

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  parameters: getStoryDescription(
    "Circular user icon. It displays first 2 characters from the passed children text "
  ),
  args: {
    children: "Name Lastname",
    color: colors[0],
  },
  argTypes: {
    color: { options: colors },
    onClick: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const Colors: Story = {
  argTypes: {
    color: { table: { disable: true } },
  },
  render: ({ children, ...args }) => (
    <div className="flex flex-col gap-4">
      {colors.map((color) => (
        <Avatar {...args} color={color}>
          {children}
        </Avatar>
      ))}
    </div>
  ),
};
