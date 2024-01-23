import React from "react";
import { Switch as HeadlessSwitch } from "@headlessui/react";
import { classNames } from "../../util/class-names";

interface LabelProps {
    children: React.ReactNode;
    passive?: boolean;
}

const Label = ({ children, passive = false }: LabelProps) => {
    return (
        <HeadlessSwitch.Label
            className={classNames(
                "paragraph-200 cursor-pointer text-neutral-800 ui-disabled:text-danger-600"
            )}
            passive={passive}
        >
            {children}
        </HeadlessSwitch.Label>
    );
};

export interface SwitchProps {
    checked: boolean;
    onChange: () => void;
    disabled?: boolean;
    ariaLabel: string;
}

const Switch = ({ checked = false, onChange, disabled = false, ariaLabel }: SwitchProps) => {
    return (
        <HeadlessSwitch
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            className={classNames(
                "relative inline-flex h-4 w-7 items-center rounded-full ui-checked:bg-primary-500 ui-checked:hover:bg-primary-600 ui-checked:disabled:bg-neutral-100 ui-not-checked:bg-neutral-400 ui-not-checked:hover:bg-neutral-500 ui-not-checked:disabled:bg-neutral-100"
            )}
        >
            <span className="sr-only">{ariaLabel}</span>
            <span
                className={classNames(
                    "inline-block h-3 w-3 transform rounded-full transition",
                    checked ? "translate-x-3.5" : "translate-x-0.5",
                    checked && disabled && "bg-neutral-400 ",
                    checked && !disabled && "bg-neutral-0",
                    !checked && disabled && "bg-neutral-400",
                    !checked && !disabled && "bg-neutral-0"
                )}
            />
        </HeadlessSwitch>
    );
};

export interface ToggleProps {
    children?: React.ReactNode;
}

const Toggle = ({ children }: ToggleProps) => {
    return (
        <HeadlessSwitch.Group>
            <div className="flex items-center gap-3">{children}</div>
        </HeadlessSwitch.Group>
    );
};

Toggle.Switch = Switch;
Toggle.Label = Label;

export { Toggle };
