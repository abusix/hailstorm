import React from "react";
import { RadioGroup } from "@headlessui/react";
import { RadioBoxOption } from "./radio-box-option";

export interface RadioBoxProps {
    id: string;
    children: React.ReactNode;
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export const RadioBox = ({ id, value, children, onChange, className }: RadioBoxProps) => {
    return (
        <RadioGroup id={id} value={value} onChange={onChange} className={className}>
            {children}
        </RadioGroup>
    );
};

RadioBox.Option = RadioBoxOption;
