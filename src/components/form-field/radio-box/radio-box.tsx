import React from "react";
import { RadioGroup } from "@headlessui/react";
import { RadioBoxOption } from "./radio-box-option";

export interface RadioBoxProps {
    id: string;
    children: React.ReactNode;
    value: string;
    onChange: (value: string) => void;
}

export const RadioBox = ({ id, value, children, onChange }: RadioBoxProps) => {
    return (
        <RadioGroup id={id} value={value} onChange={onChange} className="flex flex-col gap-2">
            {children}
        </RadioGroup>
    );
};

RadioBox.Option = RadioBoxOption;
