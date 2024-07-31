import { RadioGroup as HeadlessUiRadioGroup } from "@headlessui/react";
import React from "react";
import { RadioInputOption } from "./radio-input-option";

export interface RadioInputProps {
    id: string;
    children: React.ReactNode;
    value: string;
    onChange: (value: string) => void;
}

const RadioInput = ({ id, children, value, onChange }: RadioInputProps) => {
    return (
        <HeadlessUiRadioGroup id={id} value={value} onChange={onChange}>
            {children}
        </HeadlessUiRadioGroup>
    );
};

RadioInput.Option = RadioInputOption;

export { RadioInput };
