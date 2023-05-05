/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./badge";
import React from "react";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  argTypes: {
    type: {
      control: "select",
      options: [
        "primary",
        "violet",
        "green",
        "neutral",
        "yellow",
        "teal",
        "orange",
        "pink",
        "red",
      ],
      defaultValue: "primary",
    },
    shape: {
      control: "select",
      options: ["default", "rounded"],
      defaultValue: "rounded",
    },
  },
  render: (args) => (
    <Badge {...args} onClick={() => alert("Clicked")}>
      Label
    </Badge>
  ),
};
