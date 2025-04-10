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
                className="h-4 w-4 rounded border-neutral-400 outline-none checked:border-none checked:bg-primary-400 hover:border-neutral-600 checked:hover:bg-primary-500 focus:ring-0 focus:ring-transparent active:border-neutral-500 active:bg-neutral-100 checked:active:bg-primary-600 disabled:border-none disabled:bg-neutral-100 disabled:checked:fill-neutral-500 disabled:hover:bg-neutral-100"
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <label className={classNames("text-sm", disabled && "text-neutral-600")} htmlFor={id}>
                {label}
            </label>
        </div>
    );
};
