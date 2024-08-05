import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { PopoverMenu } from "./popover-menu";

const meta: Meta<typeof PopoverMenu> = {
    title: "Popover Menu",
    component: PopoverMenu,
    parameters: {
        options: {
            showPanel: false,
        },
    },
};

export default meta;

type Story = StoryObj<typeof PopoverMenu>;

export const Default: Story = {
    render: () => (
        <div className="relative flex min-h-screen min-w-736 flex-col">
            <PopoverMenu>
                <PopoverMenu.Button variant="secondary">Open Popover Menu</PopoverMenu.Button>

                <PopoverMenu.Overlay />

                <PopoverMenu.Panel>
                    <PopoverMenu.Panel.Item>Item 1</PopoverMenu.Panel.Item>
                    <PopoverMenu.Panel.Item>Item 1</PopoverMenu.Panel.Item>
                    <PopoverMenu.Panel.Item>Item 1</PopoverMenu.Panel.Item>
                </PopoverMenu.Panel>
            </PopoverMenu>
        </div>
    ),
};
