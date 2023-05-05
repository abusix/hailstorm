import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./icon-button";

const meta: Meta<typeof IconButton> = {
  title: "IconButton",
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  argTypes: {
    type: {
      options: [
        "primary",
        "secondary",
        "minimal",
        "danger",
        "danger-secondary",
      ],
      control: "select",
      defaultValue: "primary",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    // icon: {
    //   options: ["chat"],
    //   control: "text",
    //   defaultValue: "chat",
    // },
  },
};
