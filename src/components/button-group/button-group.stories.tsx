import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ButtonGroup } from "./button-group";

const meta: Meta<typeof ButtonGroup> = {
    title: "ButtonGroup",
    component: ButtonGroup,
    parameters: {
        options: {
            showPanel: false,
        },
    },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
    render: () => (
        <ButtonGroup>
            <ButtonGroup.Button type="button">Normal</ButtonGroup.Button>
            <ButtonGroup.Button type="button" disabled>
                Disabled
            </ButtonGroup.Button>
            <ButtonGroup.Button type="button" isActive>
                Active
            </ButtonGroup.Button>
            <ButtonGroup.Button type="button" isActive disabled>
                Active & Disabled
            </ButtonGroup.Button>
            <ButtonGroup.Button type="button">Button 1</ButtonGroup.Button>
        </ButtonGroup>
    ),
};
