/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FormField } from "../form-field";
import React from "react";

const meta: Meta<typeof FormField.Textarea> = {
  title: "Input/Textarea",
  component: FormField.Textarea,
};

export default meta;

type Story = StoryObj<typeof FormField.Textarea>;

const TextareaWithHooks = ({
  error = false,
  disabled = false,
}: {
  error?: boolean;
  disabled?: boolean;
}) => {
  const [value, setValue] = useState("");

  return (
    <FormField>
      <FormField.LabelGroup>
        <FormField.Label htmlFor="value">Label</FormField.Label>
        <FormField.Description id="value-description">
          Description
        </FormField.Description>
      </FormField.LabelGroup>
      <FormField.Textarea
        id="value"
        value={value}
        placeholder="Placeholder"
        onChange={(e) => setValue(e.target.value)}
        ariaDescribedBy="value-description"
        error={error}
        disabled={disabled}
      />
      {error ? (
        <FormField.ErrorMessage>Error message.</FormField.ErrorMessage>
      ) : null}
    </FormField>
  );
};

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <TextareaWithHooks />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-72">
      <TextareaWithHooks error />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-72">
      <TextareaWithHooks disabled />
    </div>
  ),
};
