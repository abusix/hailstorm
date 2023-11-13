import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { FormField } from "../form-field";
import { RadioBox } from "./radio-box";

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
                <FormField.RadioBox.Option value="value_1" highlightText="Recommended">
                    <div className="flex flex-col gap-2">
                        <h2 className="headline-500">Option 1</h2>
                        <p>
                            To be, or not to be, that is the question: Whether ’tis nobler in the
                            mind to suffer The slings and arrows of outrageous fortune, …
                        </p>
                    </div>
                </FormField.RadioBox.Option>

                <FormField.RadioBox.Option value="value_2">
                    <div className="flex flex-col gap-2">
                        <h2 className="headline-500">Option 2</h2>
                        <p>
                            To be, or not to be, that is the question: Whether ’tis nobler in the
                            mind to suffer The slings and arrows of outrageous fortune, …
                        </p>
                    </div>
                </FormField.RadioBox.Option>

                <FormField.RadioBox.Option value="value_3" disabled>
                    <div className="flex flex-col gap-2">
                        <h2 className="headline-500">Option 3</h2>
                        <p>
                            To be, or not to be, that is the question: Whether ’tis nobler in the
                            mind to suffer The slings and arrows of outrageous fortune, …
                        </p>
                    </div>
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
