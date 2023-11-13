import { RadioGroup } from "@headlessui/react";
import React from "react";
import { classNames } from "../../../util/class-names";

export interface RadioBoxOptionProps {
    children: React.ReactNode;
    value: string;
    disabled?: boolean;
    highlightText?: string;
}

export const RadioBoxOption = ({
    children,
    value,
    disabled,
    highlightText,
}: RadioBoxOptionProps) => {
    return (
        <RadioGroup.Option
            value={value}
            className="w-full cursor-pointer focus:outline-none"
            disabled={disabled}
        >
            {({ checked, disabled: optionDisabled }) => (
                <div
                    className={classNames(
                        "group relative flex items-center gap-3 rounded-lg border p-4",
                        checked
                            ? "border-primary-500 bg-primary-500"
                            : "border-neutral-300 hover:border-primary-500 hover:bg-primary-50",
                        optionDisabled &&
                            "cursor-not-allowed bg-neutral-100 hover:border-neutral-300 hover:bg-neutral-100"
                    )}
                >
                    {highlightText && (
                        <span className="absolute right-6 top-0 z-10 -translate-y-1/2 rounded border border-primary-500 bg-primary-100 px-1 text-xs uppercase tracking-wide text-primary-500">
                            {highlightText}
                        </span>
                    )}

                    <span
                        className={classNames(
                            "relative inline-block h-4 w-4 shrink-0 rounded-full bg-neutral-0",
                            !checked &&
                                "border border-neutral-400 group-hover:border-primary-500 group-hover:bg-neutral-0",
                            optionDisabled &&
                                "border border-neutral-400 bg-neutral-100 group-hover:border-neutral-400 group-hover:bg-neutral-100"
                        )}
                    >
                        {checked && (
                            <span
                                className={classNames(
                                    "absolute inset-0 m-auto block h-2 w-2 rounded-full bg-primary-500",
                                    optionDisabled && "bg-neutral-500"
                                )}
                            />
                        )}
                    </span>

                    <p
                        className={classNames(
                            "paragraph-200",
                            checked && "text-neutral-0",
                            optionDisabled && "text-neutral-600"
                        )}
                    >
                        {children}
                    </p>
                </div>
            )}
        </RadioGroup.Option>
    );
};
