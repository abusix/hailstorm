import type { Meta, StoryObj } from "@storybook/react";

import { InlineAlert } from "./inline-alert";
import React from "react";

const meta: Meta<typeof InlineAlert> = {
  title: "InlineAlert",
  component: InlineAlert,
};

export default meta;

type Story = StoryObj<typeof InlineAlert>;

export const Default: Story = {
  render: () => (
    <>
      <InlineAlert intent="info" title="Title" className="mb-2" />
      <InlineAlert intent="warning" title="Title" className="mb-2" />
      <InlineAlert intent="danger" title="Title" className="mb-2" />
      <InlineAlert intent="success" title="Title" className="mb-2" />
    </>
  ),
};
