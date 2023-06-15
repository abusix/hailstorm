/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { MenuSeparator } from "./menu-separator";

const meta: Meta<typeof MenuSeparator> = {
    title: "Menu/MenuSeparator",
    component: MenuSeparator,
};

export default meta;
type Story = StoryObj<typeof MenuSeparator>;

export const Default: Story = {
    render: () => (
        <div className="w-52">
            <MenuSeparator />
        </div>
    ),
};
