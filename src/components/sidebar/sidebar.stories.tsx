import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Sidebar",
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Header: Story = {
  render: () => <Sidebar.Header> Example </Sidebar.Header>,
};
export const Menu: Story = {
  render: () => <Sidebar.Menu> Example </Sidebar.Menu>,
};
export const MenuHeader: Story = {
  render: () => <Sidebar.MenuHeader> Example </Sidebar.MenuHeader>,
};
