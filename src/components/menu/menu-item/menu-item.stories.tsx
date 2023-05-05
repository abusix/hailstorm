/* eslint-disable react/jsx-props-no-spreading */
import { Menu } from "@headlessui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { ChatIcon } from "../../../icons";

import { MenuItem } from "./menu-item";
import React from "react";

const meta: Meta<typeof MenuItem> = {
  title: "Menu/MenuItem",
  component: MenuItem,
  decorators: [
    (Story) => {
      return (
        <Menu>
          <Story />
        </Menu>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  argTypes: {
    isSelected: {
      type: "boolean",
      defaultValue: false,
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
    leftIcon: {
      type: "string",
      defaultValue: "",
    },
  },
  render: (args) => (
    <div className="w-52">
      <MenuItem LeftIcon={ChatIcon} {...args}>
        Label
      </MenuItem>
    </div>
  ),
};
