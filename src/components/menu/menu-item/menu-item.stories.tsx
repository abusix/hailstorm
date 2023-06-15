import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ChatIcon } from "../../../icons";

import { MenuItem } from "./menu-item";
import { Menu } from "../menu";

const meta: Meta<typeof MenuItem> = {
    title: "Menu/MenuItem",
    component: MenuItem,
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
    argTypes: {
        isSelected: {
            type: "boolean",
            defaultValue: false,
        },
        disabled: {
            type: "boolean",
            defaultValue: false,
        },
    },
    render: (args) => (
        <div className="w-52">
            <Menu>
                <MenuItem LeftIcon={ChatIcon} {...args}>
                    Label
                </MenuItem>
            </Menu>
        </div>
    ),
};
