import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { BreadcrumbNavigation } from "./breadcrumb-navigation";

const meta: Meta<typeof BreadcrumbNavigation> = {
    title: "Breadcrumb",
    component: BreadcrumbNavigation,
    args: {},
};

export default meta;

type Story = StoryObj<typeof BreadcrumbNavigation>;

export const Base: Story = {
    render: () => (
        <div className="p-4">
            <BreadcrumbNavigation>
                <BreadcrumbNavigation.Item href="/">Home</BreadcrumbNavigation.Item>

                <BreadcrumbNavigation.Arrow />

                <BreadcrumbNavigation.Item href="/">Library</BreadcrumbNavigation.Item>

                <BreadcrumbNavigation.Arrow />

                <BreadcrumbNavigation.Item asChild isActive>
                    <a href="/">dsjkdskjdssdkj</a>
                </BreadcrumbNavigation.Item>
            </BreadcrumbNavigation>
        </div>
    ),
};
