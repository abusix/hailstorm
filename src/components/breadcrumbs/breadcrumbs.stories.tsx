import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Breadcrumbs } from "./breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
    title: "Breadcrumb",
    component: Breadcrumbs,
    args: {},
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Base: Story = {
    render: () => (
        <div className="p-4">
            <Breadcrumbs>
                <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>

                <Breadcrumbs.Arrow />

                <Breadcrumbs.Item href="/">Library</Breadcrumbs.Item>

                <Breadcrumbs.Arrow />

                <Breadcrumbs.Item href="/" active>
                    Book
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </div>
    ),
};
