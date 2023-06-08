/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Toggle, ToggleProps } from "./toggle";

const meta: Meta<typeof Toggle> = {
  title: "Toggle",
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

const ToggleWithHook = (args: ToggleProps) => {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <Toggle
      checked={checked}
      disabled={args.disabled}
      onChange={() => setChecked(!checked)}
      ariaLabel="Enable notifications"
    />
  );
};

export const Default: Story = {
  render: (args) => <ToggleWithHook {...args} />,
  args: {
    checked: false,
    disabled: false,
  },
};
