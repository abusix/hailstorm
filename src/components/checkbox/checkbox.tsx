import React from "react";
import { classNames } from "../../util/class-names";

interface CheckboxProps {
    id: string;
    label: string;
    checked: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

export const Checkbox = ({ id, label, checked, onChange, disabled = false }: CheckboxProps) => {
    return (
        <div className="flex items-center gap-3">
            <input
                id={id}
                className="checked:bg-bg-brand checked:hover:bg-bg-brand-hover checked:active:bg-bg-brand-pressed border-border-secondary hover:border-border-secondary-hover active:border-border-secondary-pressed active:bg-bg-primary-pressed disabled:bg-bg-disabled disabled:checked:fill-icon-disabled disabled:hover:bg-bg-disabled h-4 w-4 rounded-sm outline-hidden checked:border-none focus:ring-0 focus:ring-transparent disabled:border-none"
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <label
                className={classNames(
                    "text-text-primary text-sm",
                    disabled && "text-text-disabled"
                )}
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    );
};
