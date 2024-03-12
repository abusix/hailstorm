import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Breadcrumb } from "./breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
    title: "Breadcrumb",
    component: Breadcrumb,
    args: {},
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Base: Story = {
    render: () => (
        <div className="p-4">
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

                <Breadcrumb.Arrow />

                <Breadcrumb.Item href="/">Library</Breadcrumb.Item>

                <Breadcrumb.Arrow />

                <Breadcrumb.Item href="/" active>
                    Book
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    ),
};
