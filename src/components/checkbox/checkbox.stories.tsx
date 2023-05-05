/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Checkbox } from "./checkbox";
import React from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const CheckboxWithHooks = ({ disabled }: { disabled?: boolean }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      id="exampleid"
      label="Label"
      checked={checked}
      onChange={() => setChecked(!checked)}
      disabled={disabled}
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
  render: (args) => <CheckboxWithHooks {...args} />,
};
