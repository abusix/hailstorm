/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { FormField } from "../form-field";

const meta: Meta<typeof FormField.SearchInput> = {
    title: "Input/SearchInput",
    component: FormField.SearchInput,
};

export default meta;

type Story = StoryObj<typeof FormField.SearchInput>;

const SearchInputWithHooks = ({
    error = false,
    disabled = false,
    readOnly = false,
    value,
}: {
    error?: boolean;
    disabled?: boolean;
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
            <FormField.SearchInput
                id="value"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                ariaDescribedBy="value-description"
                error={error}
                disabled={disabled}
                readOnly={readOnly}
                onClear={() => {
                    setInputValue("");
                }}
            />
            {error ? <FormField.ErrorMessage>Error message.</FormField.ErrorMessage> : null}
        </FormField>
    );
};

export const Default: Story = {
    render: () => (
        <div className="w-72">
            <SearchInputWithHooks />
        </div>
    ),
};

export const WithError: Story = {
    render: () => (
        <div className="w-72">
            <SearchInputWithHooks error />
        </div>
    ),
};

export const ReadOnly: Story = {
    render: () => (
        <div className="w-72">
            <SearchInputWithHooks readOnly value="Readonly text" />
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <div className="w-72">
            <SearchInputWithHooks disabled />
        </div>
    ),
};
