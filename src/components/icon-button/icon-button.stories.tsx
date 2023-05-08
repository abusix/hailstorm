import type { Meta, StoryObj } from "@storybook/react";

import { IconButton, IconButtonProps } from "./icon-button";
import { WalkIcon } from "../../icons";

const IconTypes: IconButtonProps["type"][] = [
  "primary",
  "secondary",
  "minimal",
  "danger",
  "danger-secondary",
];

const meta: Meta<typeof IconButton> = {
  title: "IconButton",
  component: IconButton,
  args: {
    type: "primary",
    disabled: false,
    Icon: WalkIcon,
  },
  argTypes: {
    type: { options: IconTypes },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};
