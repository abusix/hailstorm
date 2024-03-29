import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { FeaturedTag } from "./featured-tag";
import { Panel } from "../panel";
import { FormField } from "../form-field";

const meta: Meta<typeof FeaturedTag> = {
    title: "Input/FeaturedTag",
    component: FeaturedTag,
};

export default meta;

type Story = StoryObj<typeof FeaturedTag>;

const RadioBoxWithRecommendationTag = () => {
    const [value, setValue] = useState("value_1");

    return (
        <div className="w-96">
            <FormField>
                <FormField.RadioBox
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    id="value"
                >
                    <FormField.RadioBox.Option value="option_1">
                        Option 1<FeaturedTag>Recommended!</FeaturedTag>
                    </FormField.RadioBox.Option>

                    <FormField.RadioBox.Option value="option_2">Option 2</FormField.RadioBox.Option>

                    <FormField.RadioBox.Option value="option_3">Option 3</FormField.RadioBox.Option>
                </FormField.RadioBox>
            </FormField>
        </div>
    );
};

export const Default: Story = {
    render: () => {
        return <RadioBoxWithRecommendationTag />;
    },
};

export const PanelExample: Story = {
    render: () => (
        <div className="w-96">
            <Panel className="relative">
                <p>This example uses a Panel component</p>
                <FeaturedTag>Recommended!</FeaturedTag>
            </Panel>
        </div>
    ),
};
