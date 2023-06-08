import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Checkbox } from "./checkbox";
import React from "react";
import { hiddenArgControl } from "../../util/storybook-utils";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
  args: {
    id: "checkbox-id",
    label: "Checkbox label",
    disabled: false,
  },
  argTypes: {
    checked: hiddenArgControl,
    onChange: hiddenArgControl,
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);
    const toggleCheck = () => setChecked((val) => !val);

    return <Checkbox {...args} checked={checked} onChange={toggleCheck} />;
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
