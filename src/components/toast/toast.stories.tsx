import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./toast";

const meta: Meta<typeof Toast> = {
  title: "Toast",
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => (
    <div className="mx-auto flex w-120 flex-col gap-4">
      <Toast
        intent="info"
        title="Title"
        onClose={() => alert("You clicked me!")}
      >
        Content
      </Toast>
      <Toast
        intent="warning"
        title="Title"
        onClose={() => alert("You clicked me!")}
      >
        Content
      </Toast>
      <Toast
        intent="danger"
        title="Title"
        onClose={() => alert("You clicked me!")}
      >
        Content
      </Toast>
      <Toast
        intent="success"
        title="Title"
        onClose={() => alert("You clicked me!")}
      >
        Content
      </Toast>
    </div>
  ),
};
