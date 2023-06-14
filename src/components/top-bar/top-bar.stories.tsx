import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TopBar } from "./top-bar";
import { Menu } from "../menu/menu";
import { ArrowTopRightIcon } from "../../icons";

const meta: Meta<typeof TopBar> = {
    title: "TopBar",
    component: TopBar,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
    render: () => (
        <TopBar>
            <TopBar.Logo src="https://placekitten.com/80/80" />
            <TopBar.NavLinks>
                <TopBar.NavLink isActive>Dashboard</TopBar.NavLink>
                <TopBar.NavLink>Cases</TopBar.NavLink>
                <TopBar.NavLink>Events</TopBar.NavLink>
                <TopBar.NavLink>Statistics</TopBar.NavLink>
                <TopBar.NavLink>Mailbox</TopBar.NavLink>
            </TopBar.NavLinks>
            <Menu>
                <TopBar.AvatarButton>DS</TopBar.AvatarButton>
                <Menu.Items>
                    <Menu.InfoItem title="Abusix" subtitle="john.doe@abusix.com" />
                    <Menu.Separator />
                    <Menu.Item LeftIcon={ArrowTopRightIcon}>Portal</Menu.Item>
                    <Menu.Separator />
                    <Menu.Item>Account Settings</Menu.Item>
                    <Menu.Item>Plans & billing</Menu.Item>
                    <Menu.Item>Team members</Menu.Item>
                    <Menu.Item>My profile</Menu.Item>
                    <Menu.Separator />
                    <Menu.Item>User Settings</Menu.Item>
                    <Menu.Separator />
                    <Menu.Item>Sign out</Menu.Item>
                </Menu.Items>
            </Menu>
        </TopBar>
    ),
};
