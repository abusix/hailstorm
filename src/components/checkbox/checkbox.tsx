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
                className="checked:bg-bg-brand checked:hover:bg-bg-brand-hover checked:active:bg-bg-brand-pressed h-4 w-4 rounded-sm border-border-secondary outline-hidden checked:border-none hover:border-border-secondary-hover focus:ring-0 focus:ring-transparent active:border-border-secondary-pressed active:bg-bg-primary-pressed disabled:border-none disabled:bg-bg-disabled disabled:checked:fill-icon-disabled disabled:hover:bg-bg-disabled"
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <label className={classNames("text-sm text-text-primary", disabled && "text-text-disabled")} htmlFor={id}>
                {label}
            </label>
        </div>
    );
};
