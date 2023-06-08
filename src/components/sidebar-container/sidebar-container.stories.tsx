import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SidebarContainer } from "./sidebar-container";

const meta: Meta<typeof SidebarContainer> = {
  title: "SidebarContainer",
  component: SidebarContainer,
};

export default meta;
type Story = StoryObj<typeof SidebarContainer>;

export const Header: Story = {
  render: () => (
    <SidebarContainer
      sidebarContent={<div>Sidebar Content</div>}
      pageContent={<div>Page Content</div>}
    />
  ),
};
