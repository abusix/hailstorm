import type { Meta, StoryObj } from "@storybook/react";

import { DividerLine } from "./divider-line";
import React from "react";

const meta: Meta<typeof DividerLine> = {
  title: "DividerLine",
  component: DividerLine,
};

export default meta;
type Story = StoryObj<typeof DividerLine>;

export const Default: Story = {
  render: () => <DividerLine />,
};
