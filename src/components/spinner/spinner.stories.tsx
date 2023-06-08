import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "./spinner";
import React from "react";

const meta: Meta<typeof Spinner> = {
  title: "Spinner",
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: (args) => <Spinner {...args} />,
  args: {
    size: "small",
  },
};
