import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { DividerLine } from "./divider-line";

const meta: Meta<typeof DividerLine> = {
    title: "DividerLine",
    component: DividerLine,
    parameters: { layout: "fullscreen" },
    render: () => (
        <div className="p-2">
            <span>🌞</span>
            <DividerLine />
            <span>🌙</span>
        </div>
    ),
};

export default meta;
type Story = StoryObj<typeof DividerLine>;

export const Default: Story = {};
