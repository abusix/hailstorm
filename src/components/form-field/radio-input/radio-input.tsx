import { RadioGroup as HeadlessRadioGroup } from "@headlessui/react";
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
        <HeadlessRadioGroup id={id} value={value} onChange={onChange}>
            {children}
        </HeadlessRadioGroup>
    );
};

RadioInput.Option = RadioInputOption;

export { RadioInput };
