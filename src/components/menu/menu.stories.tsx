import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Menu } from "./menu";

const meta: Meta<typeof Menu> = {
    title: "Menu",
    component: Menu,
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
    render: () => (
        <div className="w-52">
            <Menu>
                <Menu.Button>Open Menu</Menu.Button>
                <Menu.Items>
                    <Menu.Title>TITLE</Menu.Title>
                    <Menu.Item disabled={false}>Label</Menu.Item>
                    <Menu.Item>Label</Menu.Item>
                    <Menu.Item>Label</Menu.Item>
                </Menu.Items>
            </Menu>
        </div>
    ),
};
