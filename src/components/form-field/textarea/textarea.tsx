import React from "react";
import { classNames } from "../../../util/class-names";

export interface TextareaProps {
    id: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    ariaDescribedBy?: string;
    error?: boolean;
    disabled?: boolean;
    rows?: number;
    cols?: number;
    className?: string;
}

export const Textarea = ({
    id,
    value,
    onChange,
    placeholder,
    ariaDescribedBy,
    error,
    disabled,
    rows,
    cols,
    className,
}: TextareaProps) => {
    return (
        <textarea
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            aria-describedby={ariaDescribedBy}
            className={classNames(
                "paragraph-100 block min-h-[2rem] w-full rounded border border-neutral-400 py-2 pl-3 pr-2 text-neutral-800 placeholder:text-neutral-600 focus:outline-none",
                disabled && "cursor-not-allowed bg-neutral-100 text-neutral-600",
                !error &&
                    !disabled &&
                    "hover:border-neutral-600 focus:border-primary-400 focus:ring-2 focus:ring-primary-200",
                error && !disabled && "border-danger-500",
                className
            )}
            disabled={disabled}
            rows={rows}
            cols={cols}
        />
    );
};
