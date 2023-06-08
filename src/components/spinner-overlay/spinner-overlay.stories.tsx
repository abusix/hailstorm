import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SpinnerOverlay } from "./spinner-overlay";

const meta: Meta<typeof SpinnerOverlay> = {
  title: "SpinnerOverlay",
  component: SpinnerOverlay,
};

export default meta;

type Story = StoryObj<typeof SpinnerOverlay>;

export const Default: Story = {
  render: () => (
    <div className="relative h-48 w-48">
      <SpinnerOverlay />
    </div>
  ),
};
