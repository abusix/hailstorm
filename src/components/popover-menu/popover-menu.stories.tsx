import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { PopoverMenu } from "./popover-menu";
import { AddIcon, ChatIcon, DeleteIcon, EditIcon } from "../../icons";

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
                    <PopoverMenu.Panel.Title>You</PopoverMenu.Panel.Title>

                    <PopoverMenu.Panel.Item Icon={EditIcon}>Edit profile</PopoverMenu.Panel.Item>
                    <PopoverMenu.Panel.Item Icon={ChatIcon}>Support</PopoverMenu.Panel.Item>
                    <PopoverMenu.Panel.Item Icon={AddIcon}>Invite member</PopoverMenu.Panel.Item>

                    <PopoverMenu.Panel.Divider />

                    <PopoverMenu.Panel.Group>
                        <PopoverMenu.Panel.Title>Danger Zone</PopoverMenu.Panel.Title>

                        <PopoverMenu.Panel.Item Icon={DeleteIcon} variant="danger">
                            Item 1
                        </PopoverMenu.Panel.Item>
                    </PopoverMenu.Panel.Group>
                </PopoverMenu.Panel>
            </PopoverMenu>
        </div>
    ),
};
