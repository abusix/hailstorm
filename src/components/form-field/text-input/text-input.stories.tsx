/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { FormField } from "../form-field";
import { SearchIcon } from "../../../icons";

const meta: Meta<typeof FormField.TextInput> = {
    title: "Input/TextInput",
    component: FormField.TextInput,
};

export default meta;

type Story = StoryObj<typeof FormField.TextInput>;

const TextInputWithHooks = ({
    error = false,
    disabled = false,
    hasLeftIcon = false,
    readOnly = false,
    value,
}: {
    error?: boolean;
    disabled?: boolean;
    hasLeftIcon?: boolean;
    readOnly?: boolean;
    value?: string;
}) => {
    const [inputValue, setInputValue] = useState(value);

    return (
        <FormField>
            <FormField.LabelGroup>
                <FormField.Label htmlFor="value">Label</FormField.Label>
                <FormField.Description id="value-description">Description</FormField.Description>
            </FormField.LabelGroup>
            <FormField.TextInput
                id="value"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                ariaDescribedBy="value-description"
                error={error}
                disabled={disabled}
                LeftIcon={hasLeftIcon ? SearchIcon : undefined}
                readOnly={readOnly}
            />
            {error ? <FormField.ErrorMessage>Error message.</FormField.ErrorMessage> : null}
        </FormField>
    );
};

export const Default: Story = {
    render: () => (
        <div className="w-72">
            <TextInputWithHooks />
        </div>
    ),
};

export const WithError: Story = {
    render: () => (
        <div className="w-72">
            <TextInputWithHooks error />
        </div>
    ),
};

export const WithLeftIcon: Story = {
    render: () => (
        <div className="w-72">
            <TextInputWithHooks hasLeftIcon error />
        </div>
    ),
};

export const ReadOnly: Story = {
    render: () => (
        <div className="w-72">
            <TextInputWithHooks readOnly value="Readonly text" />
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <div className="w-72">
            <TextInputWithHooks disabled />
        </div>
    ),
};
