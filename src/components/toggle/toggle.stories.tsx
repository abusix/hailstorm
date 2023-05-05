/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "./toggle";

const meta: Meta<typeof Toggle> = {
  title: "Toggle",
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

const ToggleWithHook = ({ disabled }: { disabled?: boolean }) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Toggle
      checked={checked}
      disabled={disabled}
      onChange={() => setChecked(!checked)}
      ariaLabel="Enable notifications"
    />
  );
};

export const Default: Story = {
  argTypes: {
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
  render: (args) => <ToggleWithHook {...args} />,
};
