import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { PopoverMenu } from "./popover-menu";
import { ChatIcon, DeleteIcon, EditIcon } from "../../icons";

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
    render: () => {
        const [isActive, setIsActive] = React.useState(false);

        return (
            <div className="relative flex min-h-screen min-w-736 flex-col">
                <PopoverMenu>
                    <PopoverMenu.Button variant="secondary">Open Popover Menu</PopoverMenu.Button>

                    <PopoverMenu.Overlay />

                    <PopoverMenu.Panel>
                        <PopoverMenu.Panel.Title>You</PopoverMenu.Panel.Title>

                        <PopoverMenu.Panel.Item
                            Icon={EditIcon}
                            selected={isActive}
                            onClick={() => setIsActive(!isActive)}
                        >
                            Activate Mfa
                        </PopoverMenu.Panel.Item>

                        <PopoverMenu.Panel.Item Icon={ChatIcon} disabled>
                            Support
                        </PopoverMenu.Panel.Item>

                        <PopoverMenu.Panel.Divider />

                        <PopoverMenu.Panel.Group>
                            <PopoverMenu.Panel.Title>Danger Zone</PopoverMenu.Panel.Title>

                            <PopoverMenu.Panel.Button Icon={DeleteIcon} variant="danger">
                                Close this Dialog
                            </PopoverMenu.Panel.Button>
                        </PopoverMenu.Panel.Group>
                    </PopoverMenu.Panel>
                </PopoverMenu>
            </div>
        );
    },
};
