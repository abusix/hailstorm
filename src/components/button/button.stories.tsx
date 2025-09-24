import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useEffect } from "react";
import { Button, ButtonProps } from "./button";
import { ChatIcon, DiagramTreeIcon, LockIcon } from "../../icons";
import { hiddenArgControl } from "../../util/storybook-utils";

const variants: ButtonProps["variant"][] = [
    "primary",
    "secondary",
    "minimal",
    "danger",
    "danger-secondary",
];
const icons = { undefined, ChatIcon, DiagramTreeIcon, LockIcon };
const iconArg = {
    description: "Icon component",
    options: Object.keys(icons),
    mapping: icons,
};

const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
    args: {
        children: "Badge Label",
        LeftIcon: undefined,
        RightIcon: undefined,
        loading: false,
    },
    argTypes: {
        onClick: hiddenArgControl,
        LeftIcon: iconArg,
        RightIcon: iconArg,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {};
export const WithIcons: Story = {
    args: {
        LeftIcon: icons.ChatIcon,
        RightIcon: icons.LockIcon,
    },
};
export const Loading: Story = {
    args: { loading: true },
};
export const Disabled: Story = {
    args: { disabled: true },
};

export const Types: Story = {
    argTypes: { type: hiddenArgControl },
    render: ({ children, ...args }) => (
        <div className="flex flex-col gap-4">
            {variants.map((variant) => (
                <Button key={variant} {...args} type="button" variant={variant}>
                    {children}
                </Button>
            ))}
        </div>
    ),
};

export const DarkMode: Story = {
    argTypes: {
        variant: hiddenArgControl,
        LeftIcon: hiddenArgControl,
        RightIcon: hiddenArgControl,
        loading: hiddenArgControl,
    },
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [theme, setTheme] = useState<"light" | "dark">("light");

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(theme);
        }, [theme]);

        return (
            <div className="bg-background min-h-[400px] p-8">
                <div className="mb-6">
                    <button
                        type="button"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="bg-background-tertiary text-foreground border-border rounded border px-4 py-2 shadow-sm"
                    >
                        Toggle {theme === "light" ? "Dark" : "Light"} Mode
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <h3 className="text-foreground mb-2 font-semibold">Primary Buttons</h3>
                        <div className="flex gap-2">
                            <Button variant="primary">Primary</Button>
                            <Button variant="primary" LeftIcon={ChatIcon}>
                                With Icon
                            </Button>
                            <Button variant="primary" loading>
                                Loading
                            </Button>
                            <Button variant="primary" disabled>
                                Disabled
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-foreground mb-2 font-semibold">Secondary Buttons</h3>
                        <div className="flex gap-2">
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="secondary" LeftIcon={DiagramTreeIcon}>
                                With Icon
                            </Button>
                            <Button variant="secondary" loading>
                                Loading
                            </Button>
                            <Button variant="secondary" disabled>
                                Disabled
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-foreground mb-2 font-semibold">Minimal Buttons</h3>
                        <div className="flex gap-2">
                            <Button variant="minimal">Minimal</Button>
                            <Button variant="minimal" LeftIcon={LockIcon}>
                                With Icon
                            </Button>
                            <Button variant="minimal" loading>
                                Loading
                            </Button>
                            <Button variant="minimal" disabled>
                                Disabled
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-foreground mb-2 font-semibold">Danger Buttons</h3>
                        <div className="flex gap-2">
                            <Button variant="danger">Danger</Button>
                            <Button variant="danger" LeftIcon={ChatIcon}>
                                Delete
                            </Button>
                            <Button variant="danger-secondary">Cancel</Button>
                            <Button variant="danger-secondary" disabled>
                                Disabled
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
};
