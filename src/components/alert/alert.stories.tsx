import type { Meta, StoryObj } from "@storybook/react";

import React, { useState, useEffect } from "react";
import { Alert, AlertProps } from "./alert";
import { getStoryDescription, hiddenArgControl } from "../../util/storybook-utils";

const intents: AlertProps["intent"][] = ["info", "success", "warning", "danger"];

const meta: Meta<typeof Alert> = {
    title: "Alert",
    component: Alert,
    parameters: {
        layout: "fullscreen",
        ...getStoryDescription("Wide and big alert bar to inform user about important things"),
    },
    args: {
        title: "Alert Title",
        children: "Alert content",
        intent: "info",
    },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Basic: Story = {};

export const Intents: Story = {
    argTypes: { intent: hiddenArgControl },
    render: ({ children, ...args }) => (
        <div className="flex flex-col gap-4">
            {intents.map((intent) => (
                <Alert key={intent} {...args} intent={intent}>
                    {children}
                </Alert>
            ))}
        </div>
    ),
};

export const OnlyTitles: Story = {
    ...Intents,
    args: { children: undefined },
    argTypes: { ...Intents.argTypes, children: hiddenArgControl },
};

export const DarkMode: Story = {
    argTypes: {
        intent: hiddenArgControl,
        children: hiddenArgControl,
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
                    <Alert intent="info" title="Information">
                        This is an informational alert that adapts to light and dark themes.
                    </Alert>
                    <Alert intent="success" title="Success">
                        Operation completed successfully! The changes have been saved.
                    </Alert>
                    <Alert intent="warning" title="Warning">
                        Please review your settings before proceeding with this action.
                    </Alert>
                    <Alert intent="danger" title="Danger">
                        An error occurred while processing your request. Please try again.
                    </Alert>
                </div>

                <div className="bg-background-secondary border-border mt-6 rounded border p-4">
                    <p className="text-foreground-muted text-sm">
                        Note: Alert colors remain consistent across themes to maintain semantic
                        meaning. The background container demonstrates theme-aware background and
                        text colors.
                    </p>
                </div>
            </div>
        );
    },
};
