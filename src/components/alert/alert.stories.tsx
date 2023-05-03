import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./alert";
import React from "react";

const meta: Meta<typeof Alert> = {
  title: "Alert",
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert intent="info" title="Title">
        Alert Text
      </Alert>
      <Alert intent="warning" title="Title">
        Alert Text
      </Alert>
      <Alert intent="danger" title="Title">
        Alert Text
      </Alert>
      <Alert intent="success" title="Title">
        Alert Text
      </Alert>
    </div>
  ),
};
