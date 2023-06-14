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

const ToggleWithHook = ({ checked, disabled }: ToggleProps) => {
    const [isChecked, setIsChecked] = React.useState(false);

    React.useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    return (
        <Toggle
            checked={isChecked}
            disabled={disabled}
            onChange={() => setIsChecked(!isChecked)}
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
