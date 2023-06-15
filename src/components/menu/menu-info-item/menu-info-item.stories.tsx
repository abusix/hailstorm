/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { MenuInfoItem } from "./menu-info-item";

const meta: Meta<typeof MenuInfoItem> = {
    title: "Menu/MenuInfoItem",
    component: MenuInfoItem,
};

export default meta;
type Story = StoryObj<typeof MenuInfoItem>;

export const Default: Story = {
    render: () => (
        <div className="w-52">
            <MenuInfoItem title="Title" subtitle="Subtitle" />
        </div>
    ),
};
