import { RadioGroup } from "@headlessui/react";
import React, { Fragment } from "react";
import { classNames } from "../../../util/class-names";

export interface RadioBoxOptionProps {
    children: React.ReactNode;
    value: string;
    disabled?: boolean;
    className?: string;
}

const radioBoxContainerStyles = {
    base: "group relative flex items-center gap-3 rounded-lg bg-neutral-0 border p-4 border-neutral-300 hover:border-primary-600 hover:bg-primary-50 cursor-pointer focus:outline-none",
    checked: "border-primary-600 bg-primary-600 hover:bg-primary-600 hover:text-neutral-0",
    disabled:
        "bg-neutral-100 group-hover:border-neutral-300 group-hover:bg-neutral-100 hover:border-neutral-300 hover:bg-neutral-100 cursor-not-allowed",
    active: "ring-2 ring-primary-200",
};

const radioBoxCircleStyles = {
    base: "relative inline-block h-4 w-4 shrink-0 rounded-full bg-neutral-0 border border-neutral-300",
    unchecked: "group-hover:border-primary-600 group-hover:bg-neutral-0",
    checked: "border-transparent",
    disabled:
        "bg-neutral-300 border-neutral-300 group-hover:border-neutral-300 group-hover:bg-neutral-300",
};

const Title = ({ children }: { children: React.ReactNode }) => (
    <h2 className="headline-500 text-neutral-900 group-[.is-checked]:text-neutral-0 group-[.is-disabled]:text-neutral-500">
        {children}
    </h2>
);

const Description = ({ children }: { children: React.ReactNode }) => (
    <p className="paragraph-200 text-neutral-800 group-[.is-checked]:text-neutral-0 group-[.is-disabled]:text-neutral-500">
        {children}
    </p>
);

export const RadioBoxOption = ({ children, value, disabled, className }: RadioBoxOptionProps) => {
    return (
        <RadioGroup.Option value={value} disabled={disabled} as={Fragment}>
            {({ checked, disabled: optionDisabled, active }) => (
                <div
                    className={classNames(
                        radioBoxContainerStyles.base,
                        checked && classNames("is-checked", radioBoxContainerStyles.checked),
                        optionDisabled &&
                            classNames("is-disabled", radioBoxContainerStyles.disabled),
                        active && radioBoxContainerStyles.active
                    )}
                >
                    <div
                        className={classNames(
                            radioBoxCircleStyles.base,
                            !checked && radioBoxCircleStyles.unchecked,
                            checked && radioBoxCircleStyles.checked,
                            optionDisabled && radioBoxCircleStyles.disabled
                        )}
                    >
                        {checked && (
                            <div
                                className={classNames(
                                    "absolute inset-0 m-auto block h-2 w-2 rounded-full bg-primary-600",
                                    optionDisabled && "bg-neutral-500"
                                )}
                            />
                        )}
                    </div>

                    <div className={classNames("flex flex-col gap-2", className)}>{children}</div>
                </div>
            )}
        </RadioGroup.Option>
    );
};

RadioBoxOption.Title = Title;
RadioBoxOption.Description = Description;
