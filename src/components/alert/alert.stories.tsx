import type { Meta, StoryObj } from "@storybook/react";

import { Alert, AlertProps } from "./alert";
import React from "react";
import { getStoryDescription } from "../../util/storybook-utils";

const intents: AlertProps["intent"][] = [
  "info",
  "success",
  "warning",
  "danger",
];

const meta: Meta<typeof Alert> = {
  component: Alert,
  parameters: {
    layout: "fullscreen",
    ...getStoryDescription(
      "Wide and big alert bar to inform user about important things"
    ),
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
  argTypes: {
    intent: { table: { disable: true } },
  },
  render: ({ children, ...args }) => (
    <div className="flex flex-col gap-4">
      {intents.map((intent) => (
        <Alert {...args} intent={intent}>
          {children}
        </Alert>
      ))}
    </div>
  ),
};

export const OnlyTitles: Story = {
  ...Intents,
  args: { children: undefined },
  argTypes: {
    ...Intents.argTypes,
    children: { table: { disable: true } },
  },
};
