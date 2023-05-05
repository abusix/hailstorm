import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Page } from "./page";

const meta: Meta<typeof Page> = {
  title: "Page",
  component: Page,
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  render: () => (
    <Page>
      <Page.Title>Page Title</Page.Title>
      <Page.Description>Description</Page.Description>
    </Page>
  ),
};
