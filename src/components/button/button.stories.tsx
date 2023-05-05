/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => (
    <Button
      onClick={() => {
        return null;
      }}
      {...args}
    >
      Label
    </Button>
  ),
};
