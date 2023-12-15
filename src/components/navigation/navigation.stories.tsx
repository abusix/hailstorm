import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { CogIcon, HelpIcon, InfoSignIcon } from "../../icons";
import { Navigation } from "./navigation";

const meta: Meta<typeof Navigation> = {
    title: "Navigation",
    component: Navigation,
    parameters: {
        options: {
            showPanel: false,
        },
    },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
    render: () => (
        <div className="relative flex min-h-screen w-96 flex-col">
            <Navigation>
                <Navigation.Logo>
                    <div className="text-neutral-0">Abusix</div>
                </Navigation.Logo>
                <nav className="flex flex-1 flex-col">
                    <Navigation.Group>
                        <Navigation.Group.Item>Home</Navigation.Group.Item>
                        <Navigation.Group.Item isActive>Dashboard</Navigation.Group.Item>
                    </Navigation.Group>
                    <Navigation.Group>
                        <Navigation.Group.Item>Lookup & Delist</Navigation.Group.Item>
                        <Navigation.Group.Item>Mail Intelligence</Navigation.Group.Item>
                        <Navigation.Disclosure>
                            <Navigation.Disclosure.Button>AbuseHQ</Navigation.Disclosure.Button>
                            <Navigation.Disclosure.Panel>
                                <Navigation.Disclosure.Panel.Item>
                                    Cases
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item isActive>
                                    Event Inbox
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item>
                                    Mailbox
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item>
                                    Dashboard
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item>
                                    Statistics
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item>
                                    Settings
                                </Navigation.Disclosure.Panel.Item>
                            </Navigation.Disclosure.Panel>
                        </Navigation.Disclosure>
                    </Navigation.Group>
                    <Navigation.Group>
                        <Navigation.Group.Item>Networks</Navigation.Group.Item>
                        <Navigation.Group.Item>Data Channels</Navigation.Group.Item>
                    </Navigation.Group>
                    <div className="mt-auto">
                        <Navigation.Popover>
                            <Navigation.Popover.Button LeftIcon={HelpIcon}>
                                Support
                            </Navigation.Popover.Button>
                            <Navigation.Popover.Overlay />
                            <Navigation.Popover.Panel>
                                <Navigation.Popover.Panel.Item>
                                    Documentation
                                </Navigation.Popover.Panel.Item>
                                <Navigation.Popover.Panel.Item>
                                    Support request
                                </Navigation.Popover.Panel.Item>
                                <Navigation.Popover.Panel.Item>
                                    System status
                                </Navigation.Popover.Panel.Item>
                                <Navigation.Popover.Panel.Item>
                                    Blog posts
                                </Navigation.Popover.Panel.Item>
                            </Navigation.Popover.Panel>
                        </Navigation.Popover>
                        <Navigation.Disclosure>
                            <Navigation.Disclosure.Button LeftIcon={InfoSignIcon}>
                                Plans & Billing
                            </Navigation.Disclosure.Button>
                            <Navigation.Disclosure.Panel>
                                <Navigation.Disclosure.Panel.Item isIndented>
                                    Subscriptions
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item isIndented>
                                    Billing
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item isIndented>
                                    Invoices
                                </Navigation.Disclosure.Panel.Item>
                            </Navigation.Disclosure.Panel>
                        </Navigation.Disclosure>
                        <Navigation.Disclosure>
                            <Navigation.Disclosure.Button LeftIcon={CogIcon}>
                                Settings
                            </Navigation.Disclosure.Button>
                            <Navigation.Disclosure.Panel>
                                <Navigation.Disclosure.Panel.Item isIndented>
                                    Profile
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item isIndented>
                                    Team
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item isIndented>
                                    Sign out
                                </Navigation.Disclosure.Panel.Item>
                            </Navigation.Disclosure.Panel>
                        </Navigation.Disclosure>
                    </div>
                </nav>
            </Navigation>
        </div>
    ),
};
