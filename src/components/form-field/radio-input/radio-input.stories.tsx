import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { FormField } from '../form-field';

const meta: Meta<typeof FormField.RadioInput> = {
    title: 'Input/RadioInput',
    component: FormField.RadioInput,
};

export default meta;

type Story = StoryObj<typeof FormField.RadioInput>;

const RadioInputWithHooks = () => {
    const [value, setValue] = useState('value_1');

    return (
        <FormField>
            <FormField.LabelGroup>
                <FormField.Label htmlFor="value">Label</FormField.Label>
                <FormField.Description id="value-description">Description</FormField.Description>
            </FormField.LabelGroup>
            <FormField.RadioInput id="value" value={value} onChange={setValue}>
                <FormField.RadioInput.Option value="value_1">Value 1</FormField.RadioInput.Option>
                <FormField.RadioInput.Option value="value_2">Value 2</FormField.RadioInput.Option>
                <FormField.RadioInput.Option value="value_3" disabled>
                    Value 3
                </FormField.RadioInput.Option>
            </FormField.RadioInput>
        </FormField>
    );
};

export const Default: Story = {
    render: () => (
        <div className="w-72">
            <RadioInputWithHooks />
        </div>
    ),
};
