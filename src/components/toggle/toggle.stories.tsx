/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import { Toggle } from "./toggle";

const meta: Meta<typeof Toggle> = {
    title: "Toggle",
    component: Toggle,
};

export default meta;

type ToggleWithHookProps = {
    checked: boolean;
    disabled: boolean;
};

type Story = StoryObj<ToggleWithHookProps>;

export const Default: Story = {
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [{ checked }, updateArgs] = useArgs();
        const handleOnChange = () => updateArgs({ checked: !checked });
        return (
            <Toggle>
                <Toggle.Switch
                    checked={args.checked}
                    disabled={args.disabled}
                    onChange={handleOnChange}
                    ariaLabel="Enable notifications"
                />
                <Toggle.Label>notifications</Toggle.Label>
            </Toggle>
        );
    },
    args: {
        checked: false,
        disabled: false,
    },
};

export const WithoutLabel: Story = {
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [{ checked }, updateArgs] = useArgs();
        const handleOnChange = () => updateArgs({ checked: !checked });
        return (
            <Toggle.Switch
                checked={args.checked}
                disabled={args.disabled}
                onChange={handleOnChange}
                ariaLabel="Enable notifications"
            />
        );
    },
    args: {
        ...Default.args,
    },
};
