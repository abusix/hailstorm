import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { FormField } from "../form-field";
import { RadioBox } from "./radio-box";
import { FeaturedTag } from "../../featured-tag/featured-tag";

const meta: Meta<typeof RadioBox> = {
    title: "Input/RadioBox",
    component: RadioBox,
};

export default meta;

type Story = StoryObj<typeof RadioBox>;

const RadioBoxWithHooks = () => {
    const [value, setValue] = useState("value_1");

    return (
        <FormField>
            <FormField.RadioBox id="value" value={value} onChange={setValue}>
                <FormField.RadioBox.Option value="value_1">
                    <FeaturedTag>Recommended</FeaturedTag>

                    <FormField.RadioBox.Option.Title>Option 1</FormField.RadioBox.Option.Title>

                    <FormField.RadioBox.Option.Description>
                        To be, or not to be, that is the question: Whether ’tis nobler in the mind
                        to suffer The slings and arrows of outrageous fortune, …
                    </FormField.RadioBox.Option.Description>
                </FormField.RadioBox.Option>

                <FormField.RadioBox.Option value="value_2">
                    <FormField.RadioBox.Option.Title>Option 2</FormField.RadioBox.Option.Title>

                    <FormField.RadioBox.Option.Description>
                        To be, or not to be, that is the question: Whether ’tis nobler in the mind
                        to suffer The slings and arrows of outrageous fortune, …
                    </FormField.RadioBox.Option.Description>
                </FormField.RadioBox.Option>

                <FormField.RadioBox.Option value="value_3" disabled>
                    <FormField.RadioBox.Option.Title>Option 3</FormField.RadioBox.Option.Title>

                    <FormField.RadioBox.Option.Description>
                        To be, or not to be, that is the question: Whether ’tis nobler in the mind
                        to suffer The slings and arrows of outrageous fortune, …
                    </FormField.RadioBox.Option.Description>
                </FormField.RadioBox.Option>
            </FormField.RadioBox>
        </FormField>
    );
};

export const Default: Story = {
    render: () => (
        <div className="w-96">
            <RadioBoxWithHooks />
        </div>
    ),
};
